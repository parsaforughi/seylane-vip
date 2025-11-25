import { Router } from "express";
import { upsertUserFromTelegram } from "../../services/authService.js";
import { verifyTelegramAuth } from "../../utils/telegram.js";

const router = Router();

router.post("/telegram", async (req, res, next) => {
  try {
    const data = req.body;
    const result = await upsertUserFromTelegram(data as {
      telegramId: number | string;
      firstName?: string;
      lastName?: string;
      username?: string;
      phone?: string;
    });
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post("/telegram-login", async (req, res) => {
  try {
    const botToken = process.env.BOT_TOKEN;
    if (!botToken) {
      return res.status(500).json({ error: "Bot token not configured" });
    }
    const { hash, ...rest } = req.body || {};
    if (!verifyTelegramAuth({ hash, ...rest }, botToken)) {
      return res.status(401).json({ error: "Invalid Telegram auth hash" });
    }

    const result = await upsertUserFromTelegram({
      telegramId: rest.id,
      firstName: rest.first_name,
      lastName: rest.last_name,
      username: rest.username,
      phone: undefined,
    });
    return res.json(result);
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
});

export default router;
