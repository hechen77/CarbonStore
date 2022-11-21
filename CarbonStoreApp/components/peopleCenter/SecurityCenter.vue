<template>
	<view class="SecurityCenterView">
		<text class="TextFontSize">安全中心</text>
		<u-grid :border="false" col="4">
			<u-grid-item v-for="(listItem,listIndex) in SecurityCenter" :key="listIndex">
				<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
				<text class="grid-text">{{listItem.title}}</text>
			</u-grid-item>
		</u-grid>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				SecurityCenter: [{
						 name: 'photo',
						title: '实名认证'
					},
					{
						 name: 'photo',
						title: '我的手机号'
					},
					{
						 name: 'photo',
						title: '我的邮箱'
					},
					{
						 name: 'photo',
						title: '我的银行卡'
					},
				]
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	.SecurityCenterView {
		width: 100%;
		height: 100px;
		background-color: #ffffff;
	}
	.TextFontSize {
		font-size: 19px;
		padding: 8px;
	}
</style>
