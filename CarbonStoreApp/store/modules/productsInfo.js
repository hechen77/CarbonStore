import {
	baseUrl,
	loginStatus,
	token
} from "@/config/config.js"
export default {
	namespaced: "productsInfo",
	state: {
		AppProductsInfo: {},

	},
	mutations: {
		SET_AppProductsInfo(state, data) {
			state.AppProductsInfo = data;
		}

	},
	actions: {
		GetAppProductsInfo(context, uid) {
			console.log(uid, "uid");
			uni.request({
				url: `${baseUrl}/api/get/one/products/information`,
				method: "POST",
				data: {
					uid: uid
				},
				header: {
					"authorization": uni.getStorageSync("token")
				},
				success: res => {
					res = res.data;
					console.log(res);
					loginStatus.goLogin(res.code, res.message);
					if (res.code == 200) {
						context.commit("SET_AppProductsInfo", res.data)
					}
				}
			})
		}
	}
}
