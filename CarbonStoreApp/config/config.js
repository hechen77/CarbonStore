const serverUrl = "http://carbon.hc8.ren/app";
const localUrl = "http://localhost:3000/app"
export const baseUrl = localUrl;

export const token = {
	getToken(key) {
		return uni.getStorageSync(key)
	},
	setToken(key, value) {
		return uni.setStorageSync(key, value);
	},
	removeToken(key) {
		return uni.removeStorageSync(key);
	}
}
export const loginStatus = {
	isLogin() {
		if (!token.getToken("token")) {
			uni.reLaunch({
				url: "/pages/userLogin/userLogin"
			})
			token.removeToken('roles');
			return false;
		}
		return true;
	}
}
