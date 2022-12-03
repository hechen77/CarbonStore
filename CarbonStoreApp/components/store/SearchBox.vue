<template>
	<view @click="goSearchPage">
		<view class="SearchBoxView">
			<u-search :disabled="true" :showAction="false" shape="round" margin="10px"></u-search>
		</view>
	</view>



</template>

<script>
	export default {
		name: "SearchBox",
		data() {
			return {


			}
		},
		methods: {
			goSearchPage() {
				uni.navigateTo({
					url: "/pages/SearchPage/SearchPage"
				})
			}
		}
	}
</script>

<style>

</style>
