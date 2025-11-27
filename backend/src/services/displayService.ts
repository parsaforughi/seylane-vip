import prisma from "../utils/prisma";
import { createMissionLog } from "./missionLogService";
import { findActiveMissionByType } from "./missionsService";
import { sendNotification } from "./notificationService";
import { awardStamps } from "./stampService";

export async function submitDisplay(
  userId: number,
  payload: { imageUrl: string; brand?: string; location?: string; notes?: string }
) {
  const mission =
    (await findActiveMissionByType("DISPLAY")) ||
    (await prisma.mission.create({
      data: {
        title: "ثبت چیدمان",
        type: "DISPLAY",
        description: "ثبت چیدمان فروشگاه",
        rewardPoints: 10,
        rewardStamps: 1,
      },
    }));

  const display = await prisma.display.create({
    data: {
      userId,
      missionId: mission.id,
      imageUrl: payload.imageUrl,
      brand: payload.brand,
      location: payload.location,
      notes: payload.notes,
      status: "PENDING",
    },
  });

  await createMissionLog(userId, mission.id, {
    type: "DISPLAY",
    displayId: display.id,
    imageUrl: payload.imageUrl,
    brand: payload.brand,
  });

  return display;
}

export async function listUserDisplays(userId: number) {
  return prisma.display.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
}

export async function approveDisplay(displayId: number) {
  const display = await prisma.display.findUnique({
    where: { id: displayId },
    include: { mission: true, user: true },
  });
  if (!display) throw new Error("Display not found");

  return prisma.$transaction(async (tx) => {
    const updated = await tx.display.update({
      where: { id: displayId },
      data: { status: "APPROVED" },
    });
    const rewardStamps =
      display.mission.rewardStamps ?? display.mission.reward ?? 0;
    if (rewardStamps > 0) {
      await awardStamps(display.userId, rewardStamps, tx);
    }
    if (display.mission.rewardPoints && display.mission.rewardPoints > 0) {
      await tx.user.update({
        where: { id: display.userId },
        data: { points: { increment: display.mission.rewardPoints } },
      });
    }
    await sendNotification(
      display.userId,
      "display-approved",
      "چیدمان شما تایید شد و امتیاز/تمبر اضافه شد."
    );
    return updated;
  });
}

export async function rejectDisplay(displayId: number, reason?: string) {
  const updated = await prisma.display.update({
    where: { id: displayId },
    data: { status: "REJECTED", adminNote: reason },
  });
  await sendNotification(
    updated.userId,
    "display-rejected",
    `چیدمان شما رد شد${reason ? `: ${reason}` : ""}`
  );
  return updated;
}
