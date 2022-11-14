import express from "express";
const router = express.Router();
import db from "../database/sql.js";
import multer from "multer";
import moment from "moment";
//配置 multer 文件存放位置
const storage = multer.diskStorage({
  // 存放位置
  destination: (req, file, cb) => {
    cb(null, "./upload/uploadFiles/");
  },
  // 确定文件名
  filename(req, file, cd) {
    cd(null, file.originalname);
  },
});
// 创建 multer 对象，并传入 storage 对象
const upload = multer({ storage });
router.post("/files/upload", upload.single("file"), (req, res) => {
  const url = "http://localhost:3000/" + req.file.filename;
  res.json({ url });
});

export default router;
