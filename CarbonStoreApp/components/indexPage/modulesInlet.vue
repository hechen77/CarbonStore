<template>
	<view class="modulesInletView">
		<u-grid :border="true" col="4">
			<u-grid-item v-for="(item,index) in HomePageModulesInletList" :key="index" @click="goPage(item.pageUrl)">
				<view class="modulesInletIcons">
					<span class="t-icon" :class="item.iconsUrl"></span>
				</view>
				<text class="grid-text" style="font-size: 30rpx;margin-top: 10px;color:#666;">{{item.title}}</text>
			</u-grid-item>
		</u-grid>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		name: "modulesInlet",
		data() {
			return {

			}
		},
		methods: {
			goPage(pageUrl) {
				uni.reLaunch({
					url: pageUrl
				})
			}
		},
		mounted() {
			this.$store.dispatch("homePage/getHomePageModulesInletList");
		},
		computed: {
			...mapState("homePage", ['HomePageModulesInletList'])
		}
	}
</script>

<style scoped lang="less">
	.modulesInletView {
		box-sizing: border-box;
		padding: 10px 0;
		width: 100%;
		background-color: #fff;

		.modulesInletIcons {}
	}
</style>
