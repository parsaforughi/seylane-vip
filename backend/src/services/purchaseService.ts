import prisma from "../utils/prisma.js";
import { createMissionLog } from "./missionLogService.js";

export async function submitPurchase(
  userId: number,
  missionId: number,
  imageUrl: string,
  brand: string
) {
  const purchase = await prisma.purchase.create({
    data: {
      userId,
      missionId,
      imageUrl,
      brand,
      status: "PENDING",
    },
  });

  await createMissionLog(userId, missionId, {
    type: "PURCHASE",
    purchaseId: purchase.id,
    amount: purchase.amount,
  });

  return purchase;
}

export async function listUserPurchases(userId: number) {
  return prisma.purchase.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
}

export async function approvePurchase(purchaseId: number) {
  return prisma.purchase.update({
    where: { id: purchaseId },
    data: { status: "APPROVED" },
  });
}

export async function rejectPurchase(purchaseId: number, reason?: string) {
  return prisma.purchase.update({
    where: { id: purchaseId },
    data: { status: "REJECTED", adminNote: reason },
  });
}
