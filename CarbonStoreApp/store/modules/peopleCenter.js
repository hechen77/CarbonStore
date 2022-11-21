//从@/config/config.js软件内获取 baseUrl和loginStatus两个功能
import {
	baseUrl,
	loginStatus
} from "@/config/config.js"
//开放我的厂房
export default {
	// 给我的厂房取个名字
	namespaced: "peopleCenter",
	// 厂房中的仓库
	state: {
		// 相当于货架号
		swiperSettings: "",
	},
	// 里面存放的每一个方法都相当于一个送货司机
	mutations: {
		SET_swiperSettings(state, data) {
			// 送货司机将货物送到指定的货架上
			state.swiperSettings = data;
		}
	},
	// 里面每一个方法都相当于一个搬运工
	actions: {
		// context：相当于给搬运工一个用来联系送货司机的手机
		GetSwiperSettings(context) {
			// 搬运工去指定的仓库搬货
			uni.request({
				// 仓库的地址+货架号等等
				url: `${baseUrl}/api/get/home/swiper/setting`,
				// 搬货方式，是徒手还是需要使用工具？
				method: "GET",
				// 提供自己的身份证明，以证明自己是某某仓库的搬运工
				header: {
					"authorization": uni.getStorageSync("token")
				},
				// 给人家留一个邮箱，等着人家给你发邮件
				success: res => {
					// 将人家给你发的邮件赋值给res
					res = res.data;
					// 借用loginStatus.goLogin这个工具来判断自己是否能去搬货
					loginStatus.goLogin(res.code, res.message);
					//装车中......
					// 是否装车完毕
					if (res.code == 200) {
						// 装车完毕后用专有电话给司机打电话让他送货并把货物清单给他
						context.commit("SET_swiperSettings", res.data);
					}
				}
			})
		}
	}
}
