import { Router } from "express";
import { completeUserProfile, generateUserQr, getUserById } from "../services/userService";

const router = Router();

router.get("/", async (req: any, res, next) => {
  try {
    const user = await getUserById(req.userId);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get("/me", async (req: any, res, next) => {
  try {
    const user = await getUserById(req.userId);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.patch("/me", async (req: any, res, next) => {
  try {
    const { storeName, managerName, city, phone } = req.body || {};
    if (!storeName || !managerName || !city || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const updated = await completeUserProfile(req.userId, {
      storeName,
      managerName,
      city,
      phone,
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.post("/complete-profile", async (req: any, res, next) => {
  try {
    const { storeName, managerName, city, phone } = req.body || {};
    if (!storeName || !managerName || !city || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const updated = await completeUserProfile(req.userId, {
      storeName,
      managerName,
      city,
      phone,
    });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.get("/qr", async (req: any, res, next) => {
  try {
    const dataUrl = await generateUserQr(req.userId);
    const base64 = dataUrl.split(",")[1];
    const img = Buffer.from(base64, "base64");
    res.setHeader("Content-Type", "image/png");
    res.send(img);
  } catch (err) {
    next(err);
  }
});

export default router;
