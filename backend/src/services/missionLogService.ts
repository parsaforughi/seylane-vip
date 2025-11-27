import prisma from "../utils/prisma";
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

  const reward = missionLog.mission.reward ?? 0;

  return prisma.$transaction(async (tx) => {
    const updated = await tx.missionLog.update({
      where: { id: missionLogId },
      data: { status: "APPROVED" },
    });
    await awardStamps(missionLog.userId, reward, tx);
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

  return prisma.missionLog.update({
    where: { id: missionLogId },
    data: { status: "REJECTED", adminNote: reason },
  });
}
