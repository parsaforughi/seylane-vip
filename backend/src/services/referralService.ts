import prisma from "../utils/prisma";
import { createMissionLog } from "./missionLogService";

export async function submitReferral(
  userId: number,
  missionId: number,
  fullName: string,
  phone: string
) {
  const referral = await prisma.referral.create({
    data: {
      userId,
      missionId,
      fullName,
      phone,
      status: "PENDING",
    },
  });

  await createMissionLog(userId, missionId, {
    type: "REFERRAL",
    referralId: referral.id,
    referredName: fullName,
    referredPhone: phone,
  });

  return referral;
}

export async function listUserReferrals(userId: number) {
  return prisma.referral.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
}

export async function approveReferral(referralId: number) {
  return prisma.referral.update({
    where: { id: referralId },
    data: { status: "APPROVED" },
  });
}

export async function rejectReferral(referralId: number, reason?: string) {
  return prisma.referral.update({
    where: { id: referralId },
    data: { status: "REJECTED", adminNote: reason },
  });
}
