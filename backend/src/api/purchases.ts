import { Router } from "express";
import {
  submitPurchase,
  listUserPurchases,
} from "../services/purchaseService";

const router = Router();

router.get("/", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const purchases = await listUserPurchases(userId);
    res.json(purchases);
  } catch (err) {
    next(err);
  }
});

router.post("/:missionId", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const missionId = Number(req.params.missionId);
    const { imageUrl, brand } = req.body;
    const purchase = await submitPurchase(userId, missionId, imageUrl, brand);
    res.json(purchase);
  } catch (err) {
    next(err);
  }
});

export default router;
