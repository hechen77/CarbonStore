<template>
	<view>
		<u-popup :show="show" :round="10" mode="bottom" @close="close" @open="open">
			<view class="PurchasePage">
				<u-row justify="space-between" gutter="30">
					<u-col span="3">
						<view class="CommodityImages">
							<u--image :src="AppProductsInfo.imgUrl[0]" :showLoading="true" width="95px" height="95px"
								radius="10"></u--image>
						</view>
					</u-col>
					<u-col span="9">
						<view class="CommodityPrice">
							<span class="money" v-if="AppProductsInfo.purchaseTypeName != '碳值兑换'">￥&nbsp;</span>
							<span class="price">
								{{AppProductsInfo.price}}
							</span>
							<span class="carbonCredits" v-if="AppProductsInfo.purchaseTypeName == '碳值兑换'">碳值</span>
						</view>
					</u-col>
				</u-row>
			</view>
			<view class="NumberOfProducts">
				<u-row justify="space-between" gutter="30">
					<u-col span="8">
						<span class="SelectTheQuantity">数量</span>
					</u-col>
					<u-col span="4">
						<u-number-box v-model="value" @change="valChange"></u-number-box>
					</u-col>
				</u-row>

			</view>
			<view class="ProductConfirmation">
				<u-button type="success" shape="circle" text="确认"></u-button>
			</view>
		</u-popup>
		<u-tabbar :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item text="客服" icon="account"></u-tabbar-item>
			<u-button type="primary" shape="circle" text="加入购物车"></u-button>
			<u-button type="warning" shape="circle" text="购买" @click="show = true"></u-button>
		</u-tabbar>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		name: "ProductsInfoView",
		data() {
			return {
				show: false,
				value: 0,
				textColor: {
					color: "#000"
				}
			}
		},
		computed: {
			...mapState("productsInfo", ["AppProductsInfo"])
		},
		methods: {
			open() {

			},
			close() {
				this.show = false
			},
			valChange(e) {
				console.log('当前值为: ' + e.value)
			}
		},
	}
</script>


<style scoped lang="less">
	.CommodityImages {
		padding: 5px;
	}

	.ProductConfirmation {
		width: 600rpx;
		padding: 40px;
	}

	.carbonCredits {
		font-size: 14px;
		color: #9a9a9a;
		margin-left: 5px;
	}

	.price {
		color: #ff0000;
		font-weight: bolder;
	}

	.NumberOfProducts {
		height: auto;
	}

	.PurchasePage {
		height: 125px;
	}

	.SelectTheQuantity {
		font-size: 14px;
		color: #444444;
		margin-left: 5px;
	}

	.CommodityPrice {
		padding: 7px;
	}

	.carbonCredits {
		font-size: 12px;
	}
</style>
