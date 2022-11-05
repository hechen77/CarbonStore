<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<button @click="goLogin()">登录页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: "/pages/userLogin/userLogin"
				})
			}

		}
	}
</script>

<style>
</style>
