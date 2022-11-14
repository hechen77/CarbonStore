export const baseUrl = "http://localhost:3000/app";

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
		console.log(getCurrentPages());
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
