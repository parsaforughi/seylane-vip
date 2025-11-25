import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET ?? "change-me";

export function signToken(userId: number): string {
  return jwt.sign({ userId }, SECRET, { expiresIn: "30d" });
}

export function verifyToken(token: string): { userId: number } {
  return jwt.verify(token, SECRET) as { userId: number };
}

export default { signToken, verifyToken };
