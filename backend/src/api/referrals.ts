import { Router } from "express";
import {
  submitReferral,
  listUserReferrals,
} from "../services/referralService";

const router = Router();

router.get("/", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const items = await listUserReferrals(userId);
    res.json(items);
  } catch (err) {
    next(err);
  }
});

router.post("/:missionId", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const missionId = Number(req.params.missionId);
    const { fullName, phone } = req.body;
    const item = await submitReferral(userId, {
      storeName: fullName,
      managerName: fullName,
      phone,
    });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.post("/submit", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const { storeName, managerName, phone, city, notes } = req.body;
    if (!storeName || !managerName || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const item = await submitReferral(userId, {
      storeName,
      managerName,
      phone,
      city,
      notes,
    });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

export default router;
