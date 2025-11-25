import prisma from "../utils/prisma.js";

export async function listActiveMissions() {
  return prisma.mission.findMany({
    where: { isActive: true },
    orderBy: { id: "asc" },
  });
}

export async function startMission(userId: number, missionId: number) {
  const mission = await prisma.mission.findUnique({ where: { id: missionId } });
  if (!mission || !mission.isActive) {
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
