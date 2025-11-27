import prisma from "../utils/prisma";

export async function sendNotification(
  userId: number,
  title: string,
  body: string
) {
  return prisma.notification.create({
    data: {
      userId,
      title,
      body,
      read: false,
    },
  });
}

export async function listUserNotifications(userId: number) {
  return prisma.notification.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
}
