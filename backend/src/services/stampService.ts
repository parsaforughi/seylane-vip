import prisma from "../utils/prisma.js";

export async function awardStamps(
  userId: number,
  amount: number,
  tx: typeof prisma = prisma
) {
  await tx.stamp.create({
    data: {
      userId,
      amount,
    },
  });

  await tx.user.update({
    where: { id: userId },
    data: {
      stamps: { increment: amount },
      points: { increment: amount },
    },
  });
}

export async function getUserStampCount(userId: number) {
  const total = await prisma.stamp.aggregate({
    where: { userId },
    _sum: { amount: true },
  });

  return total._sum.amount ?? 0;
}
