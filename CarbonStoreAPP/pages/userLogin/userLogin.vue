<template>
	<view class="contents">
		<view class="status_bar"></view>
		<!-- <view class="logoView">
			Logo占位符
		</view> -->
		<view class="logoView">
			<van-cell-group>
				<van-field :value="value" placeholder="请输入用户名" />
			</van-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ""
			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	@color: red;

	.contents {
		width: 90%;
		margin: 0 auto;

		.logoView {
			width: 100%;
			height: 300rpx;
			background-color: @color;
			text-align: center;
			line-height: 300rpx;
			color: white;
		}
	}
</style>
