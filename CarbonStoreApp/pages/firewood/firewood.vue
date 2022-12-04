<template>
	<view class="CarbonView">
		<view class="CumulativeCarbonView">
			<view class="CumulativeCarbonTitle" @click="AtClick">
				累计回收量（kg）
			</view>
			<view class="CumulativeCarbonNumber" @click="AtClick">
				{{roles.AllCarbonIntegral}}
			</view>
		</view>
		<view class="otherCarbonSettings">
			<u-cell-group>
				<u-cell v-for="item in cellFroup" :key="item.id" @click="goPage(item.id)" :icon="item.icon"
					:title="item.title" :value="cellValue"></u-cell>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {
				cellValue: ">",
				cellFroup: [{
					title: "我的余额",
					icon: "rmb-circle-fill",
					id: "balance"
				}, {
					title: "余额提现",
					icon: "red-packet-fill",
					id: "withdrawal"
				}, {
					title: "提现记录",
					icon: "list-dot",
					id: "record"
				}, {
					title: "交易详情",
					icon: "grid-fill",
					id: "details"
				}, {
					title: "个人设置",
					icon: "setting-fill",
					id: "userSettings"
				}, ]
			};
		},
		methods: {
			goPage(pageId) {
				let url;
				switch (pageId) {
					case "balance":
						url = "/pages/firewood/childPage/MyBalance/MyBalance";
						break;
					case "withdrawal":
						url = "/pages/firewood/childPage/BalanceWithdrawal/BalanceWithdrawal";
						break;
					case "record":
						url = "/pages/firewood/childPage/BalanceWithdrawalRecord/BalanceWithdrawalRecord";
						break;
					case "details":
						url = "/pages/firewood/childPage/BalanceDetails/BalanceDetails";
						break;
					case "userSettings":
						url = "/pages/peopleCenter/peopleCenter";
						break;
				}
				console.log(url, pageId, pageId == "userSettings");
				if (pageId == "userSettings") {
					uni.switchTab({
						url: url
					})
				} else {
					uni.navigateTo({
						url: url
					});
				}
			},
			AtClick() {
				uni.showToast({
					title: "累计回收量被点击",
					icon: "none"
				})
			}
		},
		mounted() {

		},
		computed: {
			...mapState("user", ["roles"])
		}
	}
</script>

<style lang="less">
	@height: 50vw;

	.CarbonView {
		width: 100%;
		background-color: white;

		.CumulativeCarbonView {
			height: @height;
			width: @height;
			margin: 50px auto;
			border-radius: 100%;
			background-color: #1bbe6d;
			text-align: center;
			color: white;

			.CumulativeCarbonTitle {
				height: @height/2;
				line-height: @height/1.5;
				border-bottom: 1px solid white;
			}

			.CumulativeCarbonNumber {
				line-height: @height/3;
				font-size: 20px;
			}
		}
	}
</style>
