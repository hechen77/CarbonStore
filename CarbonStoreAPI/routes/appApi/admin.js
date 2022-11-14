import db from "../../database/sql.js";
var adminSet = {
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 获取后台侧边导航列表
   * @param {Object} res 接口数据返回方法
   */
  GetAdminAsideList(res) {
    var sql = `SELECT id,name,title,path,icon FROM admin_aside_list WHERE status = 1 AND parentId = 0;`;
    db.query(sql, async (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      }
      sql = ``;
      for (let i in result) {
        sql += `SELECT id,name,title,path,icon FROM admin_aside_list WHERE status = 1 AND parentId = "${result[i].id}"; `;
      }
      addChild(sql).then((newRes) => {
        for (let i in newRes) {
          result[i].child = newRes[i].length == 0 ? false : newRes[i];
        }
        res.send({ code: 200, message: "success", data: result });
      });
    });
  },
  GetAdminUserData(res, userAccount) {
    var sql = `SELECT userAccount,avatarUrl AS userAvatar,userName FROM admin_user_list WHERE userAccount = '${userAccount}'AND status  = 1;`;
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      }
      res.send({ code: 200, message: "success", data: result[0] });
    });
  },
  AdminFileUpload(res) {},
};

function addChild(sql) {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      resolve(result);
    });
  });
}

export default adminSet;
