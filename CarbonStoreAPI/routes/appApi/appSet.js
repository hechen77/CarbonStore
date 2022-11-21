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
  AdminGetAppSetting: function (type, res) {
    var sqlStr = `SELECT name,value,notes AS title FROM app_power_set WHERE type = (SELECT id FROM app_set_types WHERE name = "${type}")`;
    db.query(sqlStr, (err, result) => {
      console.log(result[0].json);
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        res.send({
          code: 200,
          message: "success",
          data: result,
        });
      }
    });
  },
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description APP配置修改
   * @param {string} name 修改项字段名
   * @param {string} value 修改值
   * @param {Object} res 接口数据赶回方法
   */
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
          } else if (result.length != 0) {
            res.send({ code: 200, message: "success", data: result });
          }
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
      } else if (result.length != 0) {
        res.send({
          code: 200,
          message: "success",
          data: JSON.parse(result[0].json),
        });
      }
    });
  },
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 获取APP首页模块入口列表
   * @param {Object} res 接口数据返回方法
   */
  GetHomeModulesInletList(res) {
    var sql = `SELECT name,	title, pageUrl,	iconsUrl FROM app_home_modules_inlet WHERE status = 1`;
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        res.send({ code: 200, message: "success", data: result });
      }
    });
  },
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 商品信息获取
   * @param {String} uid 商品ID
   * @param {object} res 接口数据返回方法
   */
  GetOneProductsInfo(uid, res) {
    let sql = `SELECT
	uid,
	name,
	imgUrl,
  price,
	describes,
	author,(
	SELECT
		userName 
	FROM
		admin_user_list AS USER 
	WHERE
		USER.uid = list.author 
		AND STATUS = 1 
	) AS authorAdminName, (
	SELECT
		userName 
	FROM
		app_user_list AS USER 
	WHERE
		USER.uid = list.author 
		AND STATUS = 1 
	) AS authorAPPName,
	sendTime,
	editorTime,
	purchaseQuantity,
	totalLimitNumber,
	personLimitNumber,(
	SELECT NAME 
	FROM
		app_products_buy_type AS buy 
	WHERE
		buy.id = list.purchaseType 
		AND STATUS = 1 
		) AS purchaseType,(
	SELECT
		title 
	FROM
		app_products_buy_type AS buy 
	WHERE
		buy.id = list.purchaseType 
		AND STATUS = 1 
		) AS purchaseTypeName,(
	SELECT NAME 
	FROM
		products_type AS proType 
	WHERE
		proType.id = list.type 
		AND STATUS = 1 
		) AS type,(
	SELECT
		title 
	FROM
		products_type AS proType 
	WHERE
		proType.id = list.type 
		AND STATUS = 1 
	) AS typeName ,(
	SELECT
		name 
	FROM
		carbon_user_type AS authorType 
	WHERE
		authorType.id = list.authorType 
		AND STATUS = 1 
	) AS authorType ,(
	SELECT
		title 
	FROM
		carbon_user_type AS authorType 
	WHERE
		authorType.id = list.authorType 
		AND STATUS = 1 
	) AS authorTypeName
FROM
	app_products_list AS list 
WHERE
	STATUS = 1 AND uid = ${uid}`;
    db.query(sql, (err, result) => {
      if (err || !result.length) {
        err ? err : (err = { code: 401, message: "数据读取失败！" });
        res.send({
          code: err.code,
          message: err.message.split(":")[0],
        });
        return;
      } else if (result.length != 0) {
        let data = result[0];
        !data.authorAdminName
          ? (data.authorName = data.authorAPPName)
          : (data.authorName = data.authorAdminName);
        delete data.authorAdminName;
        delete data.authorAPPName;
        data.personLimitNumber = !data.personLimitNumber
          ? false
          : data.personLimitNumber;
        data.totalLimitNumber = !data.totalLimitNumber
          ? false
          : data.totalLimitNumber;
        data.imgUrl = data.imgUrl.split(",");
        res.send({ code: 200, message: "success", data: result[0] });
      }
    });
  },
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 管理系统获取单个商品信息
   * @param {Object} res 接口数据返回方法
   * @param {String} uid 商品uid标识
   */
  AdminGetOneProductsInfo(res, uid) {
    let sql = `SELECT * FROM app_products_list WHERE status = 1 AND uid = ${uid};`;
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        res.send({ code: 200, message: "success", data: result[0] });
      }
    });
  },
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 获取APP单个用户信息
   * @param {String} uid 用户uid
   * @param {Object} res 接口数据返回方法
   */
  GetOneAppUserData(uid, res) {
    let sql = `SELECT uid,id,userAccount AS phone,userName,level,userAvatar,userEmail,idCard FROM app_user_list WHERE status = 1 AND uid = ${uid};`;
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        let data = result[0];
        data.idCard = !data.idCard ? false : true;
        data.userEmail = !data.userEmail ? false : data.userEmail;
        res.send({ code: 200, message: "success", data: data });
      }
    });
  },
};

export default appSetting;
