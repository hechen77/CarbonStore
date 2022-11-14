import express from "express";
import appSetting from "./appSet.js";
import adminSet from "./admin.js";

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
 * @description 文件上传
 */
router.post("/admin/file/upload", function (req, res) {
  console.log(req.files);
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
 * @description 获取APP首页模块入口配置
 */
router.get("/home/modules/inlet/settings", function (req, res) {});

export default router;
