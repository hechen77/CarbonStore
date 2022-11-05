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
router.get('/user/login', function(req, res){
    // 获取请求数据时携带的参数：手机号 账户密码
    var phone = req.query.phone,
    password = req.query.password;
    if(!phone || !password){
        var message = !phone ? "请输入手机号！" : "请输入密码！"
        res.status(400).send({"code":202,message});
    }else{
        // 调用用户登录方法
        user.UserLogin(phone,password,res);
    }
})

export default router