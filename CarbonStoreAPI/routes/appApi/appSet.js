import db from "../../database/sql.js";
var appSetting = {
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 查询APP权限点设置
   * @param {string} type 设置所属类型
   * @param {Object} res API数据返回方法
   * */
  GetAppSetting: function (type, res) {
    type = '"' + type + '"';
    var sqlStr = `SELECT JSON_OBJECTAGG(name, value) AS json FROM app_power_set WHERE type = (SELECT id FROM app_set_types WHERE name = ${type});`;
    db.query(sqlStr, (err, result) => {
      console.log(result[0].json);
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      }
      res.send({
        code: 200,
        message: "success",
        data: JSON.parse(result[0].json),
      });
    });
  },
  AdminGetAppSetting: function (type, res) {
    var sqlStr = `SELECT name,value,notes AS title FROM app_power_set WHERE type = (SELECT id FROM app_set_types WHERE name = "${type}")`;
    db.query(sqlStr, (err, result) => {
      console.log(result[0].json);
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      }
      res.send({
        code: 200,
        message: "success",
        data: result,
      });
    });
  },
  SetAppSetting(name, value, res) {
    let sql = `UPDATE app_power_set SET value = "${value}" WHERE name = "${name}"`;
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":"[0]) });
        return;
      }
      if (result.affectedRows == 1) {
        res.send({ code: 200, message: "设置成功！" });
      } else {
        res.send({ code: 202, message: "设置失败！" });
      }
    });
  },
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 获取首页轮播图列表
   * @param {Object} res 接口数据返回方法
   */
  GetHomeSwiperList: function (res) {
    let sqlSet = `SELECT value FROM app_power_set WHERE name = "homeSwiperNum";`;
    db.query(sqlSet, (err1, results) => {
      if (err1) {
        sqlSet = `SELECT id,title,pageUrl,imgUrl AS url FROM app_home_swiper_list WHERE status = 1 ORDER BY id DESC LIMIT 0,5;`;
      } else {
        sqlSet = `SELECT id,title,pageUrl,imgUrl AS url FROM app_home_swiper_list WHERE status = 1 ORDER BY id DESC LIMIT 0,${results[0].value};`;
        db.query(sqlSet, (err, result) => {
          console.log(err);
          if (err) {
            res.send({ code: err.code, message: err.message.split(":")[0] });
            return;
          }
          res.send({ code: 200, message: "success", data: result });
        });
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
      console.log(result[0].json);
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      }
      res.send({
        code: 200,
        message: "success",
        data: JSON.parse(result[0].json),
      });
    });
  },
  GetHomeModulesInletList(res) {
    var sql = `SELECT name,	title, pageUrl,	iconsUrl FROM app_home_modules_inlet WHERE status = 1`;
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      }
      res.send({ code: 200, message: "success", data: result });
    });
  },
};

export default appSetting;
