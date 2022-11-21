import {
	baseUrl,
	loginStatus,
	token
} from "@/config/config.js"
export default{
	namespaced:"productsInfo",	
	state:{
		swiperSettings:[],
		
	},
	mutations:{
		SET_swiperSetting(state, data) {
			state.swiperSettings = data;
		}
		
	},
	ations:{
		GetSwiperSettings(context){
			let uid = JSON.parse(token.getToken("roles")).uid
			uni.request({
				url:`${baseUrl}/api/get/one/products/information`,
				method:"POST",
				data:{
					uid:uid
				}
				    header: {
				     "authorization": uni.getStorageSync("token")
				    },
					success: res =>{
						res = res.data;
						loginStatus.goLogin(res.data.code, res.data.message);
						if(res.code == 200){
							context.conmmit("SET_swiperSettings", res.data);
						}
					}
			})
		}
	}
}