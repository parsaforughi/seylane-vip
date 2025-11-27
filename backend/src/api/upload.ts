import { Router } from "express";
import multer from "multer";
import fs from "fs";
import path from "path";

const uploadsDir = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadsDir),
  filename: (_req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname) || ".dat";
    cb(null, `${unique}${ext}`);
  },
});

const upload = multer({ storage });

const router = Router();

router.post("/", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const filename = req.file.filename;
  const url = `${req.protocol}://${req.get("host")}/uploads/${filename}`;
  res.json({ url });
});

export default router;
