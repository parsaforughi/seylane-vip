import { Router } from "express";
import prisma from "../../utils/prisma.js";
import {
  approveDisplay,
  rejectDisplay,
} from "../../services/displayService.js";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const items = await prisma.display.findMany({ orderBy: { id: "desc" } });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

router.post("/:id/approve", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await approveDisplay(id);
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:id/reject", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await rejectDisplay(id, req.body.reason);
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
