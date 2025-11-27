import { Router } from "express";
import QRCode from "qrcode";

const router = Router();

router.get("/:userId", async (req, res) => {
  try {
    const userId = Number(req.params.userId);
    if (!userId) {
      return res.status(400).json({ error: "Invalid user id" });
    }
    const link = `https://seylane-vip-1.onrender.com/login?userId=${userId}`;
    const pngBuffer = await QRCode.toBuffer(link);
    res.setHeader("Content-Type", "image/png");
    res.send(pngBuffer);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
