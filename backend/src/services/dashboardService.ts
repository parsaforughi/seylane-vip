import prisma from "../utils/prisma.js";
import { getUserStampCount } from "./stampService.js";

export async function getDashboardSummary(userId: number) {
  const [user, activeMissionsCount, pendingMissionLogsCount, stampBalance] =
    await Promise.all([
      prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          points: true,
          stamps: true,
          vipSince: true,
          firstName: true,
          lastName: true,
          username: true,
        },
      }),
      prisma.mission.count({ where: { isActive: true } }),
      prisma.missionLog.count({ where: { userId, status: "PENDING" } }),
      getUserStampCount(userId),
    ]);

  return {
    user: user ? { ...user, stamps: stampBalance } : null,
    activeMissionsCount,
    pendingMissionLogsCount,
    stampBalance,
  };
}
