<template>
	<view class="HomePageView">
		<HomeSwiper />
		<br />
		<modulesInlet />
		<br />
		<productsList />
		<u-back-top :scroll-top="scrollTop" top="240"></u-back-top>
	</view>
</template>

<script>
	import HomeSwiper from "@/components/indexPage/HomeSwiper.vue";
	import modulesInlet from "@/components/indexPage/modulesInlet.vue";
	import productsList from "@/components/indexPage/productsList.vue"
	import {
		loginStatus,
		token,
	} from "../../config/config"
	export default {
		data() {
			return {
				scrollTop: 0
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods: {
			goLogin() {
				uni.reLaunch({
					url: "/pages/userLogin/userLogin"
				})
			},
		},
		components: {
			HomeSwiper,
			modulesInlet,
			productsList
		},
		beforeCreate() {
			if (loginStatus.isLogin()) this.$store.commit("user/SET_ROLES", JSON.parse(token.getToken('roles')));
		}
	}
</script>

<style scoped lang="less">
	.HomePageView {
		background-color: #f4f4f4;
		width: 100%;
		min-height: 84.4vh;
	}
</style>
