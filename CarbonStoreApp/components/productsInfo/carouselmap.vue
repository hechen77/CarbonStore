<template>
	<view>
		<u-swiper :list="AppProductsInfo.imgUrl" :indicator="true" :circular="true" imgMode="widthFix" height="35vh"
			catorMode="dot">
		</u-swiper>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {}
		},
		computed: {
			...mapState("productsInfo", ["AppProductsInfo"])
		}
	}
</script>

<style>
</style>
