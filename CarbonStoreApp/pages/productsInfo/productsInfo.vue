<template>
	<view class="ProductsInfomationView">
		<navigationbar />
		<br />
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
	import navigationbar from"@/components/productsInfo/navigationbar.vue"
	import carouselmap from"@/components/productsInfo/carouselmap.vue"
	import productdescription from"@/components/productsInfo/productdescription.vue"
	import productimages from"@/components/productsInfo/productimages.vue"
	import buttongroup from"@/components/productsInfo/buttongroup.vue"
	export default {
		data() {
			return {

			};
		},
		components:{
			navigationbar,			
			carouselmap,
			productdescription,
			productimages,
			buttongroup,
		}
	}
	import {
		mapState
	} from "vuex"
	export default { 
		data(){
			return {
				
			}
		},
		methods: {
		
	},
	computed:{
		...mapState("peopleCenter", ["swiperSettings"])
	},
	mounted() {
		this.$store
	}
}
	
</script>

<style lang="less">
	.ProductsInfomationView {
		width: 100%;
		height: 100vh;
		
		 }
</style>
