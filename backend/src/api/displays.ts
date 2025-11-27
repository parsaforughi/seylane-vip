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
    const item = await submitDisplay(userId, { imageUrl });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

router.post("/submit", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const { imageUrl, brand, location, notes } = req.body;
    if (!imageUrl) {
      return res.status(400).json({ error: "imageUrl required" });
    }
    const item = await submitDisplay(userId, {
      imageUrl,
      brand,
      location,
      notes,
    });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

export default router;
