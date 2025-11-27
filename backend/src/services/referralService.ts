import prisma from "../utils/prisma";
import { createMissionLog } from "./missionLogService";
import { findActiveMissionByType } from "./missionsService";
import { sendNotification } from "./notificationService";
import { awardStamps } from "./stampService";

export async function submitReferral(
  userId: number,
  data: {
    storeName: string;
    managerName: string;
    phone: string;
    city?: string;
    notes?: string;
  }
) {
  const mission =
    (await findActiveMissionByType("REFERRAL")) ||
    (await prisma.mission.create({
      data: {
        title: "معرفی مشتری VIP",
        type: "REFERRAL",
        description: "معرفی مشتری جدید",
        rewardPoints: 10,
        rewardStamps: 1,
      },
    }));

  const referral = await prisma.referral.create({
    data: {
      userId,
      missionId: mission.id,
      storeName: data.storeName,
      managerName: data.managerName,
      phone: data.phone,
      city: data.city,
      notes: data.notes,
      status: "PENDING",
    },
  });

  await createMissionLog(userId, mission.id, {
    type: "REFERRAL",
    referralId: referral.id,
    storeName: data.storeName,
    managerName: data.managerName,
    phone: data.phone,
  });

  return referral;
}

export async function listUserReferrals(userId: number) {
  return prisma.referral.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
}

export async function approveReferral(referralId: number) {
  const referral = await prisma.referral.findUnique({
    where: { id: referralId },
    include: { mission: true, user: true },
  });
  if (!referral) throw new Error("Referral not found");

  return prisma.$transaction(async (tx) => {
    const updated = await tx.referral.update({
      where: { id: referralId },
      data: { status: "APPROVED" },
    });
    const rewardStamps =
      referral.mission.rewardStamps ?? referral.mission.reward ?? 0;
    if (rewardStamps > 0) {
      await awardStamps(referral.userId, rewardStamps, tx);
    }
    if (referral.mission.rewardPoints && referral.mission.rewardPoints > 0) {
      await tx.user.update({
        where: { id: referral.userId },
        data: { points: { increment: referral.mission.rewardPoints } },
      });
    }
    await sendNotification(
      referral.userId,
      "referral-approved",
      "ارجاع شما تایید شد و امتیاز/تمبر اضافه شد."
    );
    return updated;
  });
}

export async function rejectReferral(referralId: number, reason?: string) {
  const updated = await prisma.referral.update({
    where: { id: referralId },
    data: { status: "REJECTED", adminNote: reason },
  });
  await sendNotification(
    updated.userId,
    "referral-rejected",
    `ارجاع شما رد شد${reason ? `: ${reason}` : ""}`
  );
  return updated;
}

export async function markReferralConverted(referralId: number) {
  return approveReferral(referralId);
}
