import prisma from "../utils/prisma";
import { sendNotification } from "./notificationService";
import { awardStamps } from "./stampService";

export async function createMissionLog(
  userId: number,
  missionId: number,
  payload: any
) {
  const serializedPayload =
    payload === undefined ? null : JSON.stringify(payload);
  return prisma.missionLog.create({
    data: {
      userId,
      missionId,
      payload: serializedPayload,
      status: "PENDING",
    },
  });
}

export async function approveMissionLog(missionLogId: number) {
  const missionLog = await prisma.missionLog.findUnique({
    where: { id: missionLogId },
    include: {
      mission: true,
      user: true,
    },
  });

  if (!missionLog) throw new Error("Mission log not found");
  if (missionLog.status !== "PENDING")
    throw new Error("Mission log is not pending");

  const rewardStamps =
    missionLog.mission.rewardStamps ?? missionLog.mission.reward ?? 0;
  const rewardPoints = missionLog.mission.rewardPoints ?? 0;

  return prisma.$transaction(async (tx) => {
    const updated = await tx.missionLog.update({
      where: { id: missionLogId },
      data: { status: "APPROVED" },
    });
    if (rewardStamps > 0) {
      await awardStamps(missionLog.userId, rewardStamps, tx);
    }
    if (rewardPoints > 0) {
      await tx.user.update({
        where: { id: missionLog.userId },
        data: { points: { increment: rewardPoints } },
      });
    }
    await sendNotification(
      missionLog.userId,
      "mission-approved",
      `ماموریت ${missionLog.mission.title} تایید شد.`
    );
    return updated;
  });
}

export async function rejectMissionLog(missionLogId: number, reason?: string) {
  const missionLog = await prisma.missionLog.findUnique({
    where: { id: missionLogId },
  });
  if (!missionLog) throw new Error("Mission log not found");
  if (missionLog.status !== "PENDING")
    throw new Error("Mission log is not pending");

  const updated = await prisma.missionLog.update({
    where: { id: missionLogId },
    data: { status: "REJECTED", adminNote: reason },
  });
  await sendNotification(
    missionLog.userId,
    "mission-rejected",
    `ماموریت شما رد شد${reason ? `: ${reason}` : ""}`
  );
  return updated;
}
