import { Router } from "express";
import prisma from "../../utils/prisma";
import {
  approveMissionLog,
  rejectMissionLog,
} from "../../services/missionLogService";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const missions = await prisma.mission.findMany({ orderBy: { id: "desc" } });
    res.json(missions);
  } catch (err) {
    next(err);
  }
});

router.post("/:missionLogId/approve", async (req, res) => {
  try {
    const missionLogId = Number(req.params.missionLogId);
    const data = await approveMissionLog(missionLogId);
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:missionLogId/reject", async (req, res) => {
  try {
    const missionLogId = Number(req.params.missionLogId);
    const data = await rejectMissionLog(
      missionLogId,
      req.body.reason as string | undefined
    );
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
