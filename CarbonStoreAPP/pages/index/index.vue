<template>
	<view class="content">
		<view class="status_bar"></view>
		<van-button type="info" @click="goLogin">登录页</van-button>
		<view>
			<van-tabbar v-model="active" active-color="#ff0000" @change="tabClick($event)">
				<van-tabbar-item icon="home-o">标签</van-tabbar-item>
				<van-tabbar-item icon="search">标签</van-tabbar-item>
				<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
				<van-tabbar-item icon="setting-o">标签</van-tabbar-item>
			</van-tabbar>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				active: 0
			}
		},
		onLoad() {

		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: "/pages/userLogin/userLogin"
				})
			},
			tabClick(e) {
				this.active = e.detail
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
