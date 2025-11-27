import { Router } from "express";
import {
  submitDisplay,
  listUserDisplays,
} from "../services/displayService";

const router = Router();

router.get("/", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const items = await listUserDisplays(userId);
    res.json(items);
  } catch (err) {
    next(err);
  }
});

router.post("/:missionId", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const missionId = Number(req.params.missionId);
    const { imageUrl } = req.body;
    const item = await submitDisplay(userId, missionId, imageUrl);
    res.json(item);
  } catch (err) {
    next(err);
  }
});

export default router;
