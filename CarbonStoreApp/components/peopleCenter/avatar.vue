<template>
	<view class="PeopleCenterAvatarModulesView" @click="goUserDataSettings">
		<view class="AvatarContentView">
			<u-row justify="space-between" gutter="30">
				<u-col span="2">
					<u-avatar :src="UserInfo.userAvatar" shape="circle" size="60"></u-avatar>
				</u-col>
				<u-col span="10">
					<u--text :text="UserInfo.userName"></u--text>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				src: 'id',
			}
		},
		methods: {

			goUserDataSettings() {
				uni.navigateTo({
					url: "/pages/UserDataSettings/PeopleCenterAvatarModules"
				})
			}
		},
		computed: {
			...mapState("peopleCenter", ["UserInfo"])
		}
	}
</script>

<style scoped lang="less">
	.PeopleCenterAvatarModulesView {
		height: 85px;
		background-color: #ffffff;
		width: 100%;
		background-color: white;

		.AvatarContentView {
			box-sizing: border-box;
			padding: 10px;
			height: 80px;
		}
	}
</style>
