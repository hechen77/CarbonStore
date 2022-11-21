<template>
	<view class="ProductsInfomationView">
		<navigationbar />
		<carouselmap />
		<br />
		<productdescription />
		<br />
		<productimages />
		<br />
		<buttongroup />
		<br />
	</view>
</template>
<script>
	import {
		mapState
	} from "vuex"
	import navigationbar from "@/components/productsInfo/navigationbar.vue"
	import carouselmap from "@/components/productsInfo/carouselmap.vue"
	import productdescription from "@/components/productsInfo/productdescription.vue"
	import productimages from "@/components/productsInfo/productimages.vue"
	import buttongroup from "@/components/productsInfo/buttongroup.vue"
	export default {
		data() {
			return {
				uid: "",
			};
		},
		onLoad(option) {
			this.uid = option.uid
			this.$store.dispatch("productsInfo/GetAppProductsInfo", option.uid)
		},
		components: {
			navigationbar,
			carouselmap,
			productdescription,
			productimages,
			buttongroup,
		},
		mounted() {},
		computed: {
			...mapState("productsInfo", ["AppProductsInfo"])
		}
	}
</script>

<style scoped lang="less">
	.ProductsInfomationView {
		width: 100%;
		height: 100vh;
	}
</style>
