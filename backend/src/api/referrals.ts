import { Router } from "express";
import {
  submitReferral,
  listUserReferrals,
} from "../services/referralService.js";

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
    const item = await submitReferral(userId, missionId, fullName, phone);
    res.json(item);
  } catch (err) {
    next(err);
  }
});

export default router;
