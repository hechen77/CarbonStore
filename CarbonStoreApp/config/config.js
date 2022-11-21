const serverUrl = "http://carbon.hc8.ren/app";
const localUrl = "http://localhost:3000/app";
export const baseUrl = localUrl;

/**
 * @author 李贺辰
 * @version 1.0.0
 * @description 操作缓存
 */
export const token = {
	/**
	 * @author 李贺辰
	 * @version 1.0.0
	 * @description 读取token
	 * @param {string} key 需要读取的缓存的键值
	 * @return {JSON} value 获取到的
	 */
	getToken(key) {
		return uni.getStorageSync(key);
	},
	setToken(key, value) {
		return uni.setStorageSync(key, value);
	},
	removeToken(key) {
		return uni.removeStorageSync(key);
	},
};

export const loginStatus = {
	isLogin() {
		if (!token.getToken("token")) {
			uni.reLaunch({
				url: "/pages/userLogin/userLogin",
			});
			token.removeToken("roles");
			return false;
		}
		return true;
	},
	/**
	 * @author 李贺辰
	 * @version 1.0.0
	 * @description 判断登录是否过期
	 * @param {number} code 接口返回的状态码
	 * @param {string} message 接口返回的信息
	 */
	goLogin(code, message) {
		if (code == 808) {
			uni.showToast({
				title: message,
				icon: "error",
				success: () => {
					setTimeout(() => {
						uni.reLaunch({
							url: "/pages/userLogin/userLogin",
						});
					}, 1000);
				},
			});
		}
	},
};
