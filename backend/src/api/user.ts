import { Router } from "express";
import { getUserById } from "../services/userService.js";

const router = Router();

router.get("/", async (req: any, res, next) => {
  try {
    const user = await getUserById(req.userId);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

export default router;
