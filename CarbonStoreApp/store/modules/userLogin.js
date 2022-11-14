import {
	baseUrl
} from "@/config/config.js"
export default {
	namespaced: "userLogin",
	state: {
		passwordMaxLength: 20,
		passwordMinLength: 6,
	},
	mutations: {
		userPasswordLengthGet(state, res) {
			state.passwordMaxLength = res.split("-")[1];
			state.passwordMinLength = res.split("-")[0];
		}
	},
	actions: {
		async getUserPasswordLength(context) {

			uni.request({
				url: `${baseUrl}/user/password/length`,
				header: {
					"authorization": uni.getStorageSync("token")
				},
				success: res => {
					if (res.data.code == 200) context.commit("userPasswordLengthGet", res.data.data);
				},
				error: err => {
					console.error("uni.request Error:", err);
					return err;
				}
			})
		}
	},
	getters: {

	}
}
