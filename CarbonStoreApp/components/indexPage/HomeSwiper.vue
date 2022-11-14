<template>
	<view class="swiperView">
		<u-swiper :list="swiperList" :circular="homeSwiperSetting.homeSwiperCircular"
			:indicator="homeSwiperSetting.homeSwiperIndicator" :interval="homeSwiperSetting.homeSwiperInterval"
			:autoplay="homeSwiperSetting.homeSwipreAutoplay" :showTitle="homeSwiperSetting.homwSwiperShowTitle"
			indicatorMode="dot" v-if="homeSwiperSetting.homeSwiperShow" @click="goPage">
		</u-swiper>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex";
	export default {
		name: "HomeSwiper",
		data() {
			return {};
		},
		computed: {
			...mapState("homePage", ["homeSwiperSetting", "swiperList"])
		},
		mounted() {
			this.$store.dispatch("homePage/getHomeSwiperSet");
			this.$store.dispatch("homePage/getHomeSwiperList");
		},
		methods: {
			goPage(e) {
				console.log(this.homeSwiperSetting.homeSwiperNavigator, e, this.swiperList[e].pageUrl);
				if (this.homeSwiperSetting.homeSwiperNavigator) {
					uni.navigateTo({
						url: this.swiperList[e].pageUrl
					})
				}
			}
		}
	}
</script>

<style scoped lang="less">
	@bgc: #0dc99b;

	.pageContent {
		width: 100%;

		.swiperView {}
	}
</style>
