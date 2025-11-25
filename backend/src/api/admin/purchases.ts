import { Router } from "express";
import prisma from "../../utils/prisma.js";
import {
  approvePurchase,
  rejectPurchase,
} from "../../services/purchaseService.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const purchases = await prisma.purchase.findMany({
      orderBy: { id: "desc" },
    });
    res.json(purchases);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/approve", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await approvePurchase(id);
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:id/reject", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await rejectPurchase(id, req.body.reason);
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
