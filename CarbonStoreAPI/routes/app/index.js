import express from "express";
import user from "./appUser.js";

const router = express.Router();

/**
 * @author 李贺辰
 * @description APP用户登录接口
 * @param {string} phone 用户手机号
 * @param {string} password 用户登录密码
 * @return {number} code 状态码
 * */
router.get("/user/login", function (req, res) {
  // 获取请求数据时携带的参数：手机号 账户密码
  var phone = req.query.phone,
    password = req.query.password;
  if (!phone || !password) {
    //判断手机号和登陆密码是否为空
    var message = !phone ? "请输入手机号！" : "请输入密码！";
    res.status(400).send({ code: 202, message });
  } else {
    // 调用用户登录方法
    user.UserLogin(phone, password, res);
  }
});
/**
 * @author 李贺辰
 * @description APP用户登录接口
 * @param {string} userAccount 用户账号
 * @param {string} password 用户登录密码
 * @return {number} code 状态码
 * */
router.get("/admin/user/login", function (req, res) {
  // 获取请求数据时携带的参数：手机号 账户密码
  var account = req.query.userAccount,
    password = req.query.password;
  if (!account || !password) {
    //判断手机号和登陆密码是否为空
    var message = !account ? "请输入账号！" : "请输入密码！";
    res.status(400).send({ code: 202, message });
  } else {
    // 调用用户登录方法
    user.AdminUserLogin(`"${account}"`, password, res);
  }
});

/**
 * @author 李贺辰
 * @description 获取用户密码长度
 * @version 1.0.0
 * @return {number} code 状态码
 * @return {string} message 返回信息
 * @return {string} data 返回的数据
 * */
router.get("/user/password/length", function (req, res) {
  console.log(req.headers);
  user.UserPasswordLength(res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取Admin登陆页设置接口
 * */
router.get("/get/admin/login/page/settings", function (req, res) {
  user.GetAdminSetting("loginPage", res);
});

export default router;
