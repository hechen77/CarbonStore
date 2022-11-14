<script>
	import {
		loginStatus,
		token
	} from "@/config/config.js"
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		beforeCreate() {
			if (loginStatus.isLogin()) this.$store.commit("user/SET_ROLES", JSON.parse(token.getToken('roles')));
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "@/uni_modules/uview-ui/index.scss";

	.icon {
		width: 2em;
		height: 2em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
</style>
