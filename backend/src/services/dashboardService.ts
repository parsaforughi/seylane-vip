import prisma from "../utils/prisma";
import { getUserStampCount } from "./stampService";

export async function getDashboardSummary(userId: number) {
  const [user, activeMissionsCount, pendingMissionLogsCount, stampBalance, pendingSubmissions, completedMissionsCount] =
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
          storeName: true,
          managerName: true,
          phone: true,
          city: true,
        },
      }),
      prisma.mission.count({ where: { isActive: true } }),
      prisma.missionLog.count({ where: { userId, status: "PENDING" } }),
      getUserStampCount(userId),
      Promise.all([
        prisma.display.count({ where: { userId, status: "PENDING" } }),
        prisma.purchase.count({ where: { userId, status: "PENDING" } }),
        prisma.referral.count({ where: { userId, status: "PENDING" } }),
      ]),
      prisma.missionLog.count({
        where: { userId, status: { in: ["COMPLETED", "APPROVED"] } },
      }),
    ]);

  const pendingApprovalsCount = pendingMissionLogsCount + pendingSubmissions.reduce((a, b) => a + b, 0);

  return {
    user: user ? { ...user, stamps: stampBalance, points: user.points } : null,
    points: user?.points ?? 0,
    stamps: stampBalance,
    activeMissionsCount,
    pendingApprovalsCount,
    completedMissionsCount,
  };
}
