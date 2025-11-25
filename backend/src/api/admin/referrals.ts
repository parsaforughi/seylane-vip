import { Router } from "express";
import prisma from "../../utils/prisma.js";
import {
  approveReferral,
  rejectReferral,
} from "../../services/referralService.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const referrals = await prisma.referral.findMany({
      orderBy: { id: "desc" },
    });
    res.json(referrals);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/approve", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await approveReferral(id);
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:id/reject", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await rejectReferral(id, req.body.reason);
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
