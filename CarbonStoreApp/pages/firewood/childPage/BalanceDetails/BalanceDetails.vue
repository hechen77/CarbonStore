<template>
	<view class="BalanceDetailsView">
		<u-row gutter="16" >
					<u-col span="2">
						<view class="avatar">
							<u-avatar:src="afterUserAvatar"></u-avatar>
						</view>
					</u-col>
					<u-col span="3" offset="1">
						<view class="TransactionInformation"></view>
						<u--text :text="UseInfo.afterUserName"></u--text>
						<u--text :text="UseInfo.editorTime"></u--text>
					</u-col>
					<u-col span="5" text-align="right">
						<view class="TransactionAmount"></view>
						<u--text :text="UseInfo.afterData" align="right"></u--text>
						<u--text :text="UseInfo.beforeData" align="right"></u--text>
					</u-col>
				</u-row>
		<u-line color="#080808"></u-line>
		
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
					url: "/api/user/carbon/tarde/list"
				})
			}
		},
		computed: {
			...mapState("BalanceDetails", ["UserInfo"])
		}
	}
</script>

<style lang="less">
	.avatar{
		margin: 40rpx 
	}
	
</style>
