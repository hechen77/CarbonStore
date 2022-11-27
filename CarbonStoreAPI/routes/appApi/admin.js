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
      } else if (result.length != 0) {
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
      }
    });
  },
  GetAdminUserData(res, userAccount) {
    var sql = `SELECT userAccount,avatarUrl AS userAvatar,userName FROM admin_user_list WHERE userAccount = '${userAccount}'AND status  = 1;`;
    db.query(sql, (err, result) => {
      console.log(result, sql);
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        res.send({ code: 200, message: "success", data: result[0] });
      }
    });
  },
  GetAllAppProductsList(res, nowPage, pageLimit) {
    var sql = `SELECT
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
	STATUS = 1 ORDER BY sendTime DESC limit ${nowPage},${pageLimit};`;
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        db.query(
          "SELECT count(*) AS listNum FROM app_products_list WHERE status = 1",
          (err1, result1) => {
            if (result.length != 0) {
              res.send({
                code: 200,
                message: "success",
                listNum: result1[0].listNum,
                data: result,
              });
            }
          }
        );
      }
    });
  },
  GetCarbonUserType(res) {
    let sql = "SELECT id,title FROM carbon_user_type WHERE status = 1;";
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        res.send({ code: 200, message: "success", data: result });
      }
    });
  },
  GetProductBuyType(res) {
    let sql = "SELECT id,title FROM app_products_buy_type WHERE status = 1;";
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        res.send({ code: 200, message: "success", data: result });
      }
    });
  },
  GetProductType(res) {
    let sql = "SELECT id,title FROM products_type WHERE status = 1;";
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
   * @description 商品列表搜索
   * @param {Object} res 接口数据返回方法
   * @param {String} data 搜索值
   */
  GetAppProductsSearchList(res, data, pageLimit, nowPage) {
    let sql = `SELECT
	uid,
	name,
	imgUrl,
	describes,
  price,
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
	STATUS = 1 ${data} ORDER BY sendTime DESC ;`;
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
      }
      db.query(
        `SELECT count(*) AS listNum FROM app_products_list WHERE status = 1 ${data};`,
        (err1, result1) => {
          res.send({
            code: 200,
            message: "success",
            listNum: result1[0].listNum,
            data: result,
          });
        }
      );
    });
  },
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 获取管理员以及APP用户列表
   */
  GetCarbonUserList(res) {
    let sql =
      "SELECT uid,userName,'管理员' AS userType FROM admin_user_list WHERE status = 1;SELECT uid,userName,'APP用户' AS userType FROM app_user_list WHERE status = 1;";
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length != 0) {
        result = result[0].concat(result[1]);
        res.send({ code: 200, message: "success", data: result });
      }
    });
  },
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 设置商品信息
   * @param {Object} res 接口数据返回方法
   * @param {JSON} data 所需设置的数据
   * @param {string} uid 商品标识
   */
  SetOneProducts(res, data, uid) {},
  /**
   * @author 李贺辰
   * @version 1.0.0
   * @description 获取用户交易记录
   * @param {Object} res 接口数据返回方法
   * @param {string} uid 用户uid
   */
  GetAppUserCarbonTransaction(res, uid) {
    let sql = `SELECT id,beforeUser,(SELECT userName FROM app_user_list WHERE status = 1 AND uid = tarde.beforeUser) AS beforeUserName,(SELECT userAvatar FROM app_user_list WHERE status = 1 AND uid = tarde.beforeUser) AS beforeUserAvatar,afterUser,(SELECT userName FROM app_user_list WHERE status = 1 AND uid = tarde.afterUser) AS afterUserName,(SELECT userAvatar FROM app_user_list WHERE status = 1 AND uid = tarde.afterUser) AS afterUserAvatar,editorTime,beforeData,afterData,operateData,(SELECT name FROM app_carbon_trade_manner WHERE status = 1 AND id = tarde.operateType) AS operateType,(SELECT title FROM app_carbon_trade_manner WHERE status = 1 AND id = tarde.operateType) AS operateTypeName FROM app_carbon_tarde AS tarde WHERE beforeUser = ${uid} OR afterUser = ${uid} ORDER BY tarde.editorTime DESC;`;
    db.query(sql, (err, result) => {
      if (err) {
        res.send({ code: err.code, message: err.message.split(":")[0] });
        return;
      } else if (result.length) {
        res.send({ code: 200, message: "success", data: result });
      }
    });
  },
};

function addChild(sql) {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      resolve(result);
    });
  });
}

export default adminSet;
