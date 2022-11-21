import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import userLogin from "@/store/modules/userLogin";
import homePage from "@/store/modules/HomePage.js";
import user from "@/store/modules/user.js";
import productsInfo from"@/store/modules/productsInfo.js";

export default new Vuex.Store({
	modules: {
		userLogin,
		homePage,
		user,	
		productsInfo
	}

})
