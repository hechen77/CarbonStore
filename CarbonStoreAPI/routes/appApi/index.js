import express from "express";
import appSetting from "./appSet.js";
import adminSet from "./admin.js";
import db from "../../database/sql.js";

const router = express.Router();

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取首页Swiper设置接口
 * */
router.get("/get/home/swiper/setting", function (req, res) {
  appSetting.GetAppSetting("homeSwiper", res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取首页Swiper列表
 */
router.get("/get/home/swiper/list", function (req, res) {
  appSetting.GetHomeSwiperList(res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取admin首页侧边导航列表
 */
router.get("/get/admin/aside/nav/list", function (req, res) {
  adminSet.GetAdminAsideList(res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取admin用户信息
 * @param {number} userAccount 用户账号
 */
router.get("/get/admin/user/data/list", function (req, res) {
  adminSet.GetAdminUserData(res, req.query.userAccount);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 修改APP首页轮播图配置
 * @param {string} name 键
 * @param {string} value 值
 */
router.post("/home/swiper/setting", function (req, res) {
  appSetting.SetAppSetting(req.body.name, req.body.value, res);
});
/**
 * @author 李贺辰
 * @version 1.0.0
 * @description admin获取APP首页轮播图配置
 */
router.get("/home/swiper/setting", function (req, res) {
  appSetting.AdminGetAppSetting("homeSwiper", res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取APP首页模块入口列表
 */
router.get("/home/modules/inlet/list", function (req, res) {
  appSetting.GetHomeModulesInletList(res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取APP商品列表
 */
router.get("/app/products/list", function (req, res) {
  let data = req.query;
  let pageLimit = data.limit,
    nowPage = data.nowPage;
  adminSet.GetAllAppProductsList(res, (nowPage - 1) * pageLimit, pageLimit);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取用户类型列表
 */
router.get("/carbon/user/types/list", function (req, res) {
  adminSet.GetCarbonUserType(res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取商品类型列表
 */
router.get("/products/types/list", function (req, res) {
  adminSet.GetProductType(res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取商品购买类型列表
 */
router.get("/products/buy/types/list", function (req, res) {
  adminSet.GetProductBuyType(res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取用户列表
 */
router.post("/carbon/user/list", function (req, res) {
  adminSet.GetCarbonUserList(res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 商品搜索
 */
router.post("/app/products/list/search", function (req, res) {
  let data = req.body;
  let conditions = "";
  data.name ? (conditions += ` AND name LIKE "%${data.name}%"`) : null;
  data.sendTime
    ? (conditions += ` AND sendTime LIKE "%${data.sendTime}%"`)
    : null;
  data.authorTypeName
    ? (conditions += ` AND authorType = "${data.authorTypeName}"`)
    : null;
  data.typeName ? (conditions += ` AND type = "${data.typeName}"`) : null;
  data.purchaseTypeName
    ? (conditions += ` AND purchaseType = "${data.purchaseTypeName}"`)
    : null;
  data.authorName ? (conditions += ` AND author = "${data.authorName}"`) : null;
  adminSet.GetAppProductsSearchList(res, conditions, 1, (2 - 1) * 1);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取单个商品信息
 */
router.post("/get/one/products/information", function (req, res) {
  appSetting.GetOneProductsInfo(`"${req.body.uid}"`, res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取单个APP用户信息
 */
router.post("/get/one/app/user/information", function (req, res) {
  appSetting.GetOneAppUserData(`"${req.body.uid}"`, res);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 管理系统获取单个商品信息
 * @api private /api/admin/get/one/product/info
 */
router.post("/admin/get/one/product/info", function (req, res) {
  appSetting.AdminGetOneProductsInfo(res, `"${req.body.uid}"`);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 设置商品信息
 * @api private /admin/set/product/data
 * @method put
 */
router.put("/admin/set/product/data", function (req, res) {
  console.log(req.body);
  adminSet.SetOneProducts(res, req.body.data, req.body.uid);
});

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 获取用户交易记录
 */
router.post("/user/carbon/tarde/list", function (req, res) {
  adminSet.GetAppUserCarbonTransaction(res, `"${req.body.uid}"`);
});

export default router;
