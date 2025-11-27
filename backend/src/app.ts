import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import apiRouter from "./api/index";
import prisma from "./utils/prisma";

dotenv.config();

export const app: Express = express();

prisma.$connect().catch((error) => {
  console.error("Prisma connection failed", error);
});

app.use(cors());
app.use(express.json());
app.use(apiRouter);

app.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRawUnsafe("PRAGMA user_version");
    return res.json({ status: "ok", db: "ok" });
  } catch (err) {
    return res.status(503).json({ status: "ok", db: "down", error: String(err) });
  }
});

export async function shutdown(): Promise<void> {
  await prisma.$disconnect();
}
