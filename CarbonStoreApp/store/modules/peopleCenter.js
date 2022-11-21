import {
	baseUrl,
	loginStatus,
	token
} from "@/config/config.js"
export default {
	namespaced: "peopleCenter",
	state: {
		UserInfo: [],
	},
	mutations: {
		SET_UserInfo(state, data) {
			state.UserInfo = data;
		}
	},
	actions: {
		GetUserInfo(context) {
			let uid = JSON.parse(token.getToken("roles")).uid
			uni.request({
				url: `${baseUrl}/api/get/one/app/user/information`,
				method: "POST",
				data: {
					uid: uid
				},
				header: {
					"authorization": uni.getStorageSync("token")
				},
				success: res => {
					res = res.data;
					loginStatus.goLogin(res.code, res.message);
					if (res.code == 200) {
						context.commit("SET_UserInfo", res.data);
					}
				}
			})
		}
	}
}
