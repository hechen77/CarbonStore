import db from "../../database/sql.js"
import {nanoid} from "nanoid";

var user ={
    /**
     * @author 李贺辰
     * @description 用户登录方法
     * @param {string} phoneNumber 用户手机号
     * @param {string} password 用户密码
     * @param {object} res API返回数据方法
     * @version 1.0.0
     * */
    UserLogin:function (phoneNumber,password,res){
        var str = `SELECT * FROM app_user_list WHERE userAccount = ${phoneNumber} AND password = "${password}" AND status = 1`;
        db.query(str,(err,result)=>{
            console.log(result)
            if(err){
                res.send(err);
                console.log(err)
            }else if(result.length){
                res.send({"code":200, "message":"登陆成功！"});
            }else{
                res.send({"code":202, "message":"该手机号未注册账户！"});
            }
        })
    },
    /**
     * @author 李贺辰
     * @description APP用户注册
     * @param {number} phone 用户手机号
     * @param {string} password 用户登录密码
     * @param {string} verifyCode 验证码
     * @param {Object} res API返回数据方法
     * */
    UserSignUp:function (phone,password,verifyCode,res){
        console.log(nanoid())
    }
}
export default user
