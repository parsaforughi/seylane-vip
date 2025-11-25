import { Router } from "express";
import { getDashboardSummary } from "../services/dashboardService.js";

const router = Router();

router.get("/", async (req: any, res, next) => {
  try {
    const summary = await getDashboardSummary(req.userId);
    res.json(summary);
  } catch (err) {
    next(err);
  }
});

export default router;
