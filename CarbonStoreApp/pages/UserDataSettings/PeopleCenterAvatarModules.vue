<template>
	<view class="PeopleCenterAvatarModulesView">
		<view class="InformationSettings">
			<u-navbar title="信息设置" placeholder @rightClick="rightClick" :autoBack="true">
			</u-navbar>
		</view>
		<view class="AvatarSettings">
			<view class="peopolSettingsView">
				<u-cell-group>
					<u-cell :icon="UserInfo.userAvatar" isLink url=" "></u-cell>
					<u-cell title="昵称" :value="UserInfo.userName" isLink url=" "></u-cell>
					<u-cell title="联系电话" :value="UserInfo.phone" isLink url=" "></u-cell>
					<u-cell title="邮箱地址" :value="UserInfo.userEmail" isLink url=" "></u-cell>
				</u-cell-group>
			</view>
		</view>
		<view class="OutLogin">
			<u-button type="primary" shape="circle" @click="goLogout" text="退出登录"></u-button>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	import {
		token,
		loginStatus
	} from "@/config/config.js"
	export default {
		data() {
			return {

			}
		},
		mounted() {
			this.$store.dispatch("peopleCenter/GetUserInfo");
		},
		computed: {
			...mapState("peopleCenter", ["UserInfo"])
		},
		methods: {
			goLogout() {
				token.removeToken("token");
				token.removeToken("roles");
				loginStatus.isLogin();
			}
		}
	}
</script>

<style scoped lang="less">
	.OutLogin {
		width: 600rpx;
		padding: 40px;
	}
</style>
