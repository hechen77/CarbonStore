const db = require("../../database/sql")
function UserGet(phoneNumber,res){
    var str = `SELECT app_user_list WHERE userAccountId = '${phoneNumber}' AND status = 1`;
    db.query(str,(err,result)=>{
        if(err){
            res.send({"code":err.code, "message":err.message});
            return;
        }
        res.send({"code":result.status, "message":"登陆成功！"});
    })
}

module.exports = {
    UserGet
}
