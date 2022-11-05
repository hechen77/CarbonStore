import App from './App'
import uView from "./uni_modules/uview-ui"
// #ifndef VUE3
// #ifdef VUE3
import Vue, {createSSRApp} from 'vue'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(uView)
const app = new Vue({
	...App
})
app.$mount()
// #endif
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
