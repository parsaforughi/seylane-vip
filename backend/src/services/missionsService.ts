import prisma from "../utils/prisma";

export async function listActiveMissions(userId?: number) {
  const missions = await prisma.mission.findMany({
    where: { isActive: true },
    orderBy: { id: "asc" },
  });

  if (!userId) return missions;

  const logs = await prisma.missionLog.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
  const logByMission = new Map<number, typeof logs[number]>();
  logs.forEach((log) => logByMission.set(log.missionId, log));

  return missions.map((mission) => ({
    ...mission,
    userStatus: logByMission.get(mission.id)?.status ?? "ACTIVE",
  }));
}

export async function startMission(userId: number, missionId: number) {
  const mission = await prisma.mission.findUnique({ where: { id: missionId } });
  if (!mission) {
    throw new Error("Invalid mission");
  }

  return prisma.missionLog.create({
    data: {
      missionId,
      userId,
      status: "PENDING",
    },
  });
}

export async function findActiveMissionByType(
  type: "PURCHASE" | "DISPLAY" | "REFERRAL" | "TRAINING" | "ATTENDANCE" | "CUSTOM"
) {
  return prisma.mission.findFirst({
    where: { isActive: true, type },
    orderBy: { id: "asc" },
  });
}

export async function createMission(data: {
  title: string;
  description?: string;
  type: any;
  rewardPoints?: number;
  rewardStamps?: number;
  startDate?: Date | null;
  endDate?: Date | null;
}) {
  return prisma.mission.create({
    data: {
      title: data.title,
      description: data.description,
      type: data.type,
      rewardPoints: data.rewardPoints ?? 0,
      rewardStamps: data.rewardStamps ?? 0,
      startDate: data.startDate ?? undefined,
      endDate: data.endDate ?? undefined,
    },
  });
}

export async function updateMission(
  missionId: number,
  data: Partial<{
    title: string;
    description: string;
    type: any;
    rewardPoints: number;
    rewardStamps: number;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean;
  }>
) {
  return prisma.mission.update({
    where: { id: missionId },
    data,
  });
}
