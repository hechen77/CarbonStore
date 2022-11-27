import db from "../../database/sql.js";
import { nanoid } from "nanoid";
import sql from "../../database/sql.js";
import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";

const secretKey = "CarbonStoreApp";

var user = {
  /**
   * @author 李贺辰
   * @description 用户登录方法
   * @param {string} phoneNumber 用户手机号
   * @param {string} password 用户密码
   * @param {object} res API返回数据方法
   * @version 1.0.0
   * */
  UserLogin: function (phoneNumber, password, res) {
    var str = `SELECT * FROM app_user_list WHERE userAccount = ${phoneNumber} AND status = 1`;
    db.query(str, (err, result) => {
      console.log(result);
      9;
      result = result[0];
      if (err) {
        res.send(err);
        console.log(err);
      } else if (result) {
        if (result.password == password) {
          const tokenStr = jwt.sign(
            { username: result.userAccount },
            secretKey,
            {
              expiresIn: "8760h",
            }
          );
          result.idCard = !result.idCard ? false : true;
          delete result.password;
          res.send({
            code: 200,
            message: "登陆成功！",
            token: tokenStr,
            data: result,
          });
        } else {
          res.send({ code: 202, message: "密码错误！" });
        }
      } else {
        res.send({ code: 202, message: "该手机号未注册账户！" });
      }
    });
  },
  /**
   * @author 李贺辰
   * @description admin用户登录方法
   * @param {string} phoneNumber 用户手机号
   * @param {string} password 用户密码
   * @param {object} res API返回数据方法
   * @version 1.0.0
   * */
  AdminUserLogin: function (account, password, res) {
    var str = `SELECT uid,userAccount,userName,password,avatarUrl FROM admin_user_list WHERE userAccount = ${account} AND status = 1`;
    db.query(str, (err, result) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else if (result.length) {
        console.log(result[0].password, password);
        if (result[0].password == password) {
          const tokenStr = jwt.sign({ username: account }, secretKey, {
            expiresIn: "48h",
          });
          res.send({
            code: 200,
            message: "登陆成功！",
            token: tokenStr,
            data: {
              userName: result[0].userName,
              userAccount: result[0].userAccount,
              userAvatar: result[0].avatarUrl,
            },
          });
        } else {
          res.send({ code: 202, message: "密码错误！" });
        }
      } else {
        res.send({ code: 202, message: "无此用户！" });
      }
    });
  },
  /**
   * @author 李贺辰
   * @description APP用户注册
   * @version 1.0.0
   * @param {number} phone 用户手机号
   * @param {string} password 用户登录密码
   * @param {string} verifyCode 验证码
   * @param {Object} res API返回数据方法
   * */
  UserSignUp: function (phone, password, verifyCode, res) {
    console.log(nanoid());
  },
  /**
   * @author 李贺辰
   * @description 获取用户登录密码的长度限制
   * @version 1.0.0
   * @param {Object} res 接口返回数据方法
   * */
  UserPasswordLength: function (res) {
    var sqlStr = `SELECT value FROM app_user_set WHERE name = "passwordLength"`;
    db.query(sqlStr, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        res
          .status(200)
          .send({ code: 200, message: "success", data: result[0].value });
      }
    });
  },

  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 查询Admin权限点设置
   * @param {string} type 设置所属类型
   * @param {Object} res API数据返回方法
   * */
  GetAdminSetting: function (type, res) {
    type = '"' + type + '"';
    var sqlStr = `SELECT JSON_OBJECTAGG(name, value) AS json FROM admin_web_set WHERE type = (SELECT id FROM admin_set_types WHERE name = ${type});`;
    db.query(sqlStr, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        res.send({
          code: 200,
          message: "success",
          data: JSON.parse(result[0].json),
        });
      }
    });
  },
};
export default user;
