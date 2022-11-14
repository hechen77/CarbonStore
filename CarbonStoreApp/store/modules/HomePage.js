import {
	baseUrl
} from "@/config/config.js"
export default {
	namespaced: "homePage",
	state: {
		homeSwiperSetting: {},
		swiperList: [],
		HomePageModulesInletList: [],
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
		}
	},
	getters: {}
}
