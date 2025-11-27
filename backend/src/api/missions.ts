import { Router } from "express";
import { listActiveMissions, startMission } from "../services/missionsService";

const router = Router();

router.get("/", async (req: any, res, next) => {
  try {
    const missions = await listActiveMissions(req.userId);
    res.json(missions);
  } catch (err) {
    next(err);
  }
});

router.post("/:missionId/start", async (req: any, res, next) => {
  try {
    const userId = req.userId;
    const missionId = Number(req.params.missionId);
    const log = await startMission(userId, missionId);
    res.json(log);
  } catch (err) {
    next(err);
  }
});

export default router;
