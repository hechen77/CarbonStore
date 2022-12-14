import {
	baseUrl,
	loginStatus
} from "@/config/config.js";
import moment from "moment";
export default {
	namespaced: "homePage",
	state: {
		homeSwiperSetting: {},
		swiperList: [],
		HomePageModulesInletList: [],
		AppProductsList: [],
		HomePageNewsList: [],
	},
	mutations: {
		HomeSwiperSetGet(state, res) {
			for (var i in res) {
				res[i] = res[i] === "true" ? true : res[i] === "false" ? false : res[i];
			}
			state.homeSwiperSetting = res;
		},
		HomeSwiperListGet(state, res) {
			state.swiperList = res;
		},
		SET_HomePageModulesInletList(state, data) {
			state.HomePageModulesInletList = data;
		},
		SET_AppProductsList(state, data) {
			state.AppProductsList = data;
		},
		SET_swiperList(state, data) {
			state.swiperList = data;
		},
		SET_HomePageNewsList(state, data) {
			state.HomePageNewsList = data;
		}
	},
	actions: {
		async getHomeSwiperSet(context) {
			uni.request({
				url: `${baseUrl}/api/get/home/swiper/setting`,
				method: "GET",
				header: {
					"authorization": uni.getStorageSync("token")
				},
				success: res => {
					loginStatus.goLogin(res.data.code, res.data.message);
					if (res.data.code == 200) {
						context.commit("HomeSwiperSetGet", res.data.data);
					}
				}
			})
		},
		async getHomeSwiperList(context) {
			uni.request({
				url: `${baseUrl}/api/get/home/swiper/list`,
				method: "GET",
				header: {
					"authorization": uni.getStorageSync("token")
				},
				success: res => {
					loginStatus.goLogin(res.data.code, res.data.message);
					if (res.data.code == 200) {
						context.commit("HomeSwiperListGet", res.data.data);
					}
				}
			})
		},
		async getHomePageModulesInletList(context) {
			uni.request({
				url: `${baseUrl}/api/home/modules/inlet/list`,
				method: "GET",
				header: {
					"authorization": uni.getStorageSync("token")
				},
				success: res => {
					loginStatus.goLogin(res.data.code, res.data.message);
					res = res.data;
					if (res.code == 200) {
						context.commit("SET_HomePageModulesInletList", res.data);

					}
				}
			})
		},
		async getAppProductsLiat(context) {
			uni.request({
				url: `${baseUrl}/api/app/products/list?limit=999999&nowPage=1`,
				header: {
					"authorization": uni.getStorageSync("token")
				},
				success: res => {
					loginStatus.goLogin(res.data.code, res.data.message);
					res = res.data;
					let data = res.data;
					if (res.code == 200) {
						for (const i in data) {
							let imgUrl = data[i].imgUrl;

							// ???????????????????????????
							data[i].imgUrl = imgUrl.toString().split(",");
							// ?????????????????????
							data[i].sendTime = moment(data[i].sendTime).format("YYYY-MM-DD hh:mm");
							// ?????????????????????
							data[i].editorTime = moment(data[i].editorTime).format("YYYY-MM-DD hh:mm");
							// ?????????????????????
							data[i].authorName = data[i].authorAdminName ? data[i].authorAdminName :
								data[i].authorAPPName;
							delete data[i].authorAdminName
							delete data[i].authorAPPName
						}
						context.commit("SET_AppProductsList", data);
					}
				}
			})
		},
		async GetHomePageNewsList(context) {
			uni.request({
				url: `${baseUrl}/api/app/home/news/list`,
				header: {
					"authorization": uni.getStorageSync("token")
				},
				success: (res) => {
					res = res.data;
					loginStatus.goLogin(res.code, res.message);
					if (res.code == 200) {
						context.commit("SET_HomePageNewsList", res.data);
					}
				}
			})
		}
	},
	getters: {}
}
