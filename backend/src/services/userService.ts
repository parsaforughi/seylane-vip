import prisma from "../utils/prisma.js";

export async function getUserById(userId: number) {
  return prisma.user.findUnique({ where: { id: userId } });
}
