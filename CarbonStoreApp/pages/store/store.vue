<template>
	<view>
		<u-sticky offset-Top="0rpx">
			<SearchBox></SearchBox>
		</u-sticky>
		<productsList></productsList>
	</view>
</template>

<script>
	import SearchBox from "@/components/store/SearchBox.vue";
	import productsList from "@/components/indexPage/productsList.vue"
	export default {
		components: {
			SearchBox,
			productsList,
		},
		methods: {}
	}
</script>

<style>
</style>
