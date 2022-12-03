<template>
	<view class="pageContent">
		<u-sticky offset-Top="10rpx">
			<view class="SearchBoxView">
				<u-search actionText="搜索" :showAction="true" shape="round" margin="10px" @search="goSearch"
					@custom="goSearch">
				</u-search>
			</view>
		</u-sticky>
		<view class="SearchPageView">
			<u-text text="搜索历史"></u-text>
			<view>
				<text class="searchListValue" @click="goSearch(item)" v-for="(item,index) in searchList"
					:key="index">{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		token
	} from "@/config/config.js"
	export default {
		data() {
			return {
				searchList: []
			}
		},
		methods: {
			goSearch(value) {
				this.searchList.indexOf(value) == -1 ? this.searchList.unshift(value) : null;
				token.setToken("searchList", this.searchList.join(","))
			}
		},
		mounted() {
			this.searchList = token.getToken("searchList").split(",");
		}
	}
</script>

<style lang="less">
	.SearchPageView {
		font-weight: bold;
		margin-bottom: 10px;
		margin-right: 5px;
		margin-left: 10px;
	}

	.searchListValue {
		font-size: 14px;
		margin: 5px;
		font-weight: normal;
		color: darkgray;
	}
</style>
