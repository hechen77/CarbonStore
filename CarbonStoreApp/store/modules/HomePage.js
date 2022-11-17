import {
	baseUrl
} from "@/config/config.js";
import moment from "moment";
export default {
	namespaced: "homePage",
	state: {
		homeSwiperSetting: {},
		swiperList: [],
		HomePageModulesInletList: [],
		AppProductsList: [],
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
				success: res => {
					res = res.data;
					if (res.code == 200) {
						context.commit("SET_HomePageModulesInletList", res.data);

					}
				}
			})
		},
		async getAppProductsLiat(context) {
			uni.request({
				url: `${baseUrl}/api/app/products/list?limit=2&nowPage=1`,
				success: res => {
					res = res.data;
					let data = res.data;
					if (res.code == 200) {
						for (const i in data) {
							let imgUrl = data[i].imgUrl;

							// 拆分图片链接为数组
							data[i].imgUrl = imgUrl.toString().split(",");
							// 格式化发布时间
							data[i].sendTime = moment(data[i].sendTime).format("YYYY-MM-DD hh:mm");
							// 格式化修改时间
							data[i].editorTime = moment(data[i].editorTime).format("YYYY-MM-DD hh:mm");
							// 格式化作者昵称
							data[i].authorName = data[i].authorAdminName ? data[i].authorAdminName :
								data[i].authorAPPName;
							delete data[i].authorAdminName
							delete data[i].authorAPPName
						}
						context.commit("SET_AppProductsList", data);
					}
				}
			})
		}
	},
	getters: {}
}
