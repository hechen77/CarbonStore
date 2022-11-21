<template>
	<veiw>
		<u-swiper :list="AppProductsInfo.imgUrl" :indicator="true" :circular="true" imgMode="widthFix" height="50vh"
			catorMode="dot">
		</u-swiper>
	</veiw>
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
