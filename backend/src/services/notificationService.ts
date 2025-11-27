import prisma from "../utils/prisma";

export async function sendNotification(
  userId: number,
  type: string,
  message: string
) {
  return prisma.notification.create({
    data: {
      userId,
      type,
      message,
      isSent: true,
    },
  });
}

export async function listUserNotifications(userId: number) {
  return prisma.notification.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
}
