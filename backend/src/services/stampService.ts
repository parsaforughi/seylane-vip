import { Prisma, PrismaClient } from "@prisma/client";
import prisma from "../utils/prisma";

export async function awardStamps(
  userId: number,
  count: number,
  tx?: Prisma.TransactionClient | PrismaClient
) {
  const client = tx ?? prisma;

  await client.stamp.create({
    data: {
      userId,
      count,
    },
  });

  await client.user.update({
    where: { id: userId },
    data: {
      stamps: { increment: count },
      points: { increment: count },
    },
  });
}

export async function getUserStampCount(userId: number) {
  const total = await prisma.stamp.aggregate({
    where: { userId },
    _sum: { count: true },
  });

  return total._sum.count ?? 0;
}
