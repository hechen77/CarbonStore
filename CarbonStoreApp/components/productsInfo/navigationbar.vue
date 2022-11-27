<template>
	<view>
		<u-navbar title="商品详情" @leftClick="goBack" :placeholder="true">
		</u-navbar>
	</view>
</template>

<script>
	export default {
		name: "navigationbar",
		data() {
			return {}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style>
</style>
