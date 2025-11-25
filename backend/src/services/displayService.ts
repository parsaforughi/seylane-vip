import prisma from "../utils/prisma.js";
import { createMissionLog } from "./missionLogService.js";

export async function submitDisplay(
  userId: number,
  missionId: number,
  imageUrl: string
) {
  const display = await prisma.display.create({
    data: {
      userId,
      missionId,
      imageUrl,
      status: "PENDING",
    },
  });

  await createMissionLog(userId, missionId, {
    type: "DISPLAY",
    displayId: display.id,
    imageUrl,
  });

  return display;
}

export async function listUserDisplays(userId: number) {
  return prisma.display.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
}

export async function approveDisplay(displayId: number) {
  return prisma.display.update({
    where: { id: displayId },
    data: { status: "APPROVED" },
  });
}

export async function rejectDisplay(displayId: number, reason?: string) {
  return prisma.display.update({
    where: { id: displayId },
    data: { status: "REJECTED", adminNote: reason },
  });
}
