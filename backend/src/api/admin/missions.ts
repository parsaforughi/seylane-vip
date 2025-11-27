import { Router } from "express";
import prisma from "../../utils/prisma";
import {
  approveMissionLog,
  rejectMissionLog,
} from "../../services/missionLogService";
import { createMission, updateMission } from "../../services/missionsService";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const missions = await prisma.mission.findMany({ orderBy: { id: "desc" } });
    res.json(missions);
  } catch (err) {
    next(err);
  }
});

router.post("/create", async (req, res) => {
  try {
    const data = await createMission({
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      rewardPoints: req.body.rewardPoints,
      rewardStamps: req.body.rewardStamps,
      startDate: req.body.startDate ? new Date(req.body.startDate) : null,
      endDate: req.body.endDate ? new Date(req.body.endDate) : null,
    });
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:missionId/update", async (req, res) => {
  try {
    const missionId = Number(req.params.missionId);
    const data = await updateMission(missionId, {
      title: req.body.title,
      description: req.body.description,
      type: req.body.type,
      rewardPoints: req.body.rewardPoints,
      rewardStamps: req.body.rewardStamps,
      startDate: req.body.startDate ? new Date(req.body.startDate) : null,
      endDate: req.body.endDate ? new Date(req.body.endDate) : null,
    });
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:missionId/activate", async (req, res) => {
  try {
    const missionId = Number(req.params.missionId);
    const data = await updateMission(missionId, { isActive: true });
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:missionId/deactivate", async (req, res) => {
  try {
    const missionId = Number(req.params.missionId);
    const data = await updateMission(missionId, { isActive: false });
    res.json({ success: true, data });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
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
