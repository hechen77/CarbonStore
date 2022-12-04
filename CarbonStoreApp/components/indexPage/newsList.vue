<template>
	<view class="newsListContinar">
		<text class="newsListTitle">热点新闻</text>
		<u-cell-group>
			<u-cell :border="true" :isLink="true" v-for="item in HomePageNewsList" :key="item.id">
				<view class="u-slot-title" slot="title">
					<u-image height="80px" width="120px" :src="item.image"></u-image>
				</view>
				<view class="u-slot-value" slot="value" style="margin-left: 20px;text-align: left;">
					<span class="newsTitle">
						{{item.title}}
					</span>
				</view>
			</u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		name: "newsList",
		data() {
			return {

			}
		},
		computed: {
			...mapState("homePage", ["HomePageNewsList"])
		},
		mounted() {
			this.$store.dispatch("homePage/GetHomePageNewsList");
			console.log(this.HomePageNewsList);
		}
	}
</script>

<style scoped lang="less">
	.newsListContinar {
		background-color: #fff;

		.newsListTitle {
			line-height: 40px;
			margin-left: 15px;
			font-size: 18px;
			font-weight: bold;
		}

		.newsTitle {
			display: block;
			width: 100%;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
</style>
