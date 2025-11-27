import { Router } from "express";
import prisma from "../../utils/prisma";

const router = Router();

router.get("/", async (_req, res, next) => {
  try {
    const users = await prisma.user.findMany({ orderBy: { id: "desc" } });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

export default router;
