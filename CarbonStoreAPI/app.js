import express from "express";
import * as path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import jwt from "jsonwebtoken";
import expressJWT from "express-jwt";
import cors from "cors";
import App from "./routes/app/index.js";
import appApi from "./routes/appApi/index.js";
import bodyParser from "body-parser";
const secretKey = "CarbonStoreApp";
import fileUpload from "./upload/fileUpload.js";

var app = express();
app.use(cors());
const __dirname = path.resolve();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "2048000kb" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "2048000kb" }));
app.use(cookieParser());
app.use("/static", express.static("public"));
app.use(express.static("upload/uploadFiles"));
// todo 上线或测试登录功能是务必改回/app/api
app.use("/app/abcdef", function (req, res, next) {
  const token = req.headers.authorization;
  jwt.verify(token, secretKey, (err, decode) => {
    if (err) {
      res.send({ code: 401, message: "身份验证过期，请重新登陆！" });
    } else {
      next();
    }
  });
});
app.use("/app/api", [appApi, fileUpload]);
app.use("/app", App);

export default app;
