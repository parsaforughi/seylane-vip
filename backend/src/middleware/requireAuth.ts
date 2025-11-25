import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.js";

export default function requireAuth(
  req: Request & { userId?: number },
  res: Response,
  next: NextFunction
) {
  const header = req.headers.authorization;
  if (!header) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const [type, token] = header.split(" ");
  if (type !== "Bearer" || !token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const payload = verifyToken(token);
    req.userId = payload.userId;
    return next();
  } catch {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
