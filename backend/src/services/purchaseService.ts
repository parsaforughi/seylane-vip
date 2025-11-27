import prisma from "../utils/prisma";
import { createMissionLog } from "./missionLogService";
import { findActiveMissionByType } from "./missionsService";
import { sendNotification } from "./notificationService";
import { awardStamps } from "./stampService";

export async function submitPurchase(
  userId: number,
  payload: {
    imageUrl: string;
    amount: number;
    purchaseDate?: string;
    brands?: string;
    notes?: string;
  }
) {
  const mission =
    (await findActiveMissionByType("PURCHASE")) ||
    (await prisma.mission.create({
      data: {
        title: "ثبت خرید",
        type: "PURCHASE",
        description: "ثبت خرید جدید",
        rewardPoints: 10,
        rewardStamps: 1,
      },
    }));

  const purchase = await prisma.purchase.create({
    data: {
      userId,
      missionId: mission.id,
      imageUrl: payload.imageUrl,
      amount: payload.amount ?? 0,
      purchaseDate: payload.purchaseDate ? new Date(payload.purchaseDate) : null,
      brands: payload.brands,
      notes: payload.notes,
      status: "PENDING",
    },
  });

  await createMissionLog(userId, mission.id, {
    type: "PURCHASE",
    purchaseId: purchase.id,
    amount: purchase.amount,
    purchaseDate: purchase.purchaseDate,
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
  const purchase = await prisma.purchase.findUnique({
    where: { id: purchaseId },
    include: { mission: true, user: true },
  });
  if (!purchase) throw new Error("Purchase not found");

  return prisma.$transaction(async (tx) => {
    const updated = await tx.purchase.update({
      where: { id: purchaseId },
      data: { status: "APPROVED" },
    });
    const rewardStamps =
      purchase.mission.rewardStamps ?? purchase.mission.reward ?? 0;
    if (rewardStamps > 0) {
      await awardStamps(purchase.userId, rewardStamps, tx);
    }
    if (purchase.mission.rewardPoints && purchase.mission.rewardPoints > 0) {
      await tx.user.update({
        where: { id: purchase.userId },
        data: { points: { increment: purchase.mission.rewardPoints } },
      });
    }
    await sendNotification(
      purchase.userId,
      "purchase-approved",
      "خرید شما تایید شد و امتیاز/تمبر اضافه شد."
    );
    return updated;
  });
}

export async function rejectPurchase(purchaseId: number, reason?: string) {
  const updated = await prisma.purchase.update({
    where: { id: purchaseId },
    data: { status: "REJECTED", adminNote: reason },
  });
  await sendNotification(
    updated.userId,
    "purchase-rejected",
    `خرید شما رد شد${reason ? `: ${reason}` : ""}`
  );
  return updated;
}
