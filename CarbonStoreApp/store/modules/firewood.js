import {
	baseUrl,
	loginStatus
} from "@/config/config.js"
import moment from "moment"
export default {
	namespaced: "FireWood",
	state: {
		UserCarbonTardeList: []
	},
	mutations: {
		SET_UserCarbonTardeList(state, data) {
			state.UserCarbonTardeList = data;
		}
	},
	actions: {
		GetUserCarbonTardeList(context, uid) {
			uni.request({
				url: `${baseUrl}/api/user/carbon/tarde/list`,
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
						for (var i = 0; i < res.data.length; i++) {
							res.data[i].editorTime = moment(res.data[i].editorTime).format(
								"YYYY-MM-DD hh:mm:ss")
						}
						context.commit("SET_UserCarbonTardeList", res.data);
					}
				}
			})
		}
	}
}
