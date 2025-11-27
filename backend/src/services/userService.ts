import prisma from "../utils/prisma";
import QRCode from "qrcode";

export async function getUserById(userId: number) {
  return prisma.user.findUnique({ where: { id: userId } });
}

export async function completeUserProfile(
  userId: number,
  data: {
    storeName: string;
    managerName: string;
    city: string;
    phone: string;
  }
) {
  return prisma.user.update({
    where: { id: userId },
    data: {
      storeName: data.storeName,
      managerName: data.managerName,
      city: data.city,
      phone: data.phone,
      vipSince: new Date(),
    },
  });
}

export async function generateUserQr(userId: number) {
  const deepLink = `https://t.me/SEYLANE_VIP_BOT/app?start=${userId}`;
  const dataUrl = await QRCode.toDataURL(deepLink);
  return dataUrl;
}
