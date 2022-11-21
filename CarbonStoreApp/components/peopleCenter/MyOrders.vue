<template>
	<view class="MyOrdersView">
		<text class="TextFontSize">我的订单</text>
		<u-grid :border="false" col="4">
			<u-grid-item v-for="(listItem,listIndex) in MyOrders" :key="listIndex">
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
				MyOrders: [{
				 	name: 'photo',
						title: '我的订单'
					},
					{
						name: 'photo',
						title: '我的订单'
					},
					{
						name: 'photo',
						title: '我的订单'
					},
					{
						name: 'photo',
						title: '我的订单'
					},
				],
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="less">
	.MyOrdersView {
		height: 85px;
		background-color: #ffffff;
	}

	.TextFontSize {
		font-size: 19px;
		padding: 8px;
	}
</style>
