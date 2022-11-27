import Express from "express";
import multer from "multer";
const router = Express.Router();

let upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./upload/uploadFiles/");
    },
    filename: function (req, file, cb) {
      var changedName = new Date().getTime() + "-" + file.originalname;
      cb(null, changedName);
    },
  }),
});
router.post("/file", upload.single("file"), function (req, res) {
  res.send({ code: 200, message: "success", url: req.file });
});
export default router;
