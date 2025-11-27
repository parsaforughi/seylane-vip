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

router.post("/", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const { imageUrl, amount, date, brands, notes } = req.body;
    if (!imageUrl || !amount) {
      return res.status(400).json({ error: "imageUrl and amount are required" });
    }
    const purchase = await submitPurchase(userId, {
      imageUrl,
      amount: Number(amount),
      purchaseDate: date,
      brands,
      notes,
    });
    res.json(purchase);
  } catch (err) {
    next(err);
  }
});

router.post("/:missionId", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const missionId = Number(req.params.missionId);
    const { imageUrl, brand } = req.body;
    const purchase = await submitPurchase(userId, {
      imageUrl,
      amount: 0,
      brands: brand,
    });
    res.json(purchase);
  } catch (err) {
    next(err);
  }
});

router.post("/submit", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const { imageUrl, amount, purchaseDate, brands, notes } = req.body;
    if (!imageUrl || !amount) {
      return res.status(400).json({ error: "imageUrl and amount required" });
    }
    const purchase = await submitPurchase(userId, {
      imageUrl,
      amount: Number(amount),
      purchaseDate,
      brands,
      notes,
    });
    res.json(purchase);
  } catch (err) {
    next(err);
  }
});

export default router;
