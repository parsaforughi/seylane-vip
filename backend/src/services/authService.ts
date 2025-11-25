import prisma from "../utils/prisma.js";
import jwt from "../utils/jwt.js";

export async function upsertUserFromTelegram(input: {
  telegramId: number | string;
  firstName?: string;
  lastName?: string;
  username?: string;
  phone?: string;
}) {
  const telegramIdNum = Number(input.telegramId);

  const user = await prisma.user.upsert({
    where: { telegramId: telegramIdNum },
    update: {
      telegramId: telegramIdNum,
      firstName: input.firstName,
      lastName: input.lastName,
      username: input.username,
      phone: input.phone,
    },
    create: {
      telegramId: telegramIdNum,
      firstName: input.firstName,
      lastName: input.lastName,
      username: input.username,
      phone: input.phone,
    },
  });

  const token = jwt.signToken(user.id);
  return { user, token };
}
