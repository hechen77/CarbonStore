import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import userLogin from "@/store/modules/userLogin";
import homePage from "@/store/modules/HomePage.js";
import user from "@/store/modules/user.js";
<<<<<<< HEAD
import peopleCenter from "@/store/modules/peopleCenter.js"
=======
<<<<<<< HEAD
import productsInfo from"@/store/modules/productsInfo.js";
=======
import peopleCenter from "@/store/modules/peopleCenter.js";
>>>>>>> 14581bd432860a494173e060168ec4036513ff39
>>>>>>> 86c721c5f24892e669dfe615e74ac3631caf7a0d

export default new Vuex.Store({
	modules: {
		userLogin,
		homePage,
<<<<<<< HEAD
		user,
		peopleCenter
=======
<<<<<<< HEAD
		user,	
		productsInfo
=======
		user,
		peopleCenter
>>>>>>> 14581bd432860a494173e060168ec4036513ff39
>>>>>>> 86c721c5f24892e669dfe615e74ac3631caf7a0d
	}

})
