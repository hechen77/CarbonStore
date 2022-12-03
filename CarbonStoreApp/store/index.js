import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import userLogin from "@/store/modules/userLogin";
import homePage from "@/store/modules/HomePage.js";
import user from "@/store/modules/user.js";
import peopleCenter from "@/store/modules/peopleCenter.js"
import productsInfo from "@/store/modules/productsInfo.js";
import FireWood from "@/store/modules/firewood.js"

export default new Vuex.Store({
	modules: {
		userLogin,
		homePage,
		user,
		peopleCenter,
		productsInfo,
		FireWood,
	}

})
