<template>
	<view class="pageContent">
			<u-sticky  offset-Top="0rpx">
			<SearchBox></SearchBox>
				</u-sticky>
			<SearchPage></SearchPage>
	</view>
</template>

<script>
	import SearchBox from"@/components/store/SearchBox.vue";
	import SearchPage from"@/components/SearchPage/SearchPage.vue"
		export default {
				components: {
					SearchBox,
					SearchPage
					
				},
			}
</script>

<style lang="less">

</style>
