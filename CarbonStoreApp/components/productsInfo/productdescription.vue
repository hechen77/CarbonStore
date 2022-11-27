<template>
	<view class="ProductsInfoView">
		<view class="productsBriefly">
			<u-row gutter="30">
				<u-col span="6">
					<view class="productsPrice">
						<span class="money" v-if="AppProductsInfo.purchaseTypeName != '碳值兑换'">￥&nbsp;</span>
						<span class="price">
							{{AppProductsInfo.price}}
						</span>
						<span class="carbonCredits" v-if="AppProductsInfo.purchaseTypeName == '碳值兑换'">碳值</span>
					</view>
				</u-col>
				<u-col span="6">
					<view class="MerchandiseSales">
						<u--text text="已售出666件" align="right"></u--text>
					</view>
				</u-col>
			</u-row>
		</view>
		<view class="productPurchaseQuantity">

		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		name: "ProductsInfoView",
		data() {
			return {};
		},
		computed: {
			...mapState("productsInfo", ["AppProductsInfo"])
		}

	}
</script>

<style scoped lang="less">
	.ProductsInfoView {
		
		.productsBriefly {
			box-sizing: border-box;
			padding: 0 10px;

			.productsPrice {
				.money {
					font-size: 16px;
				}

				.price {
					font-size: 20px;
					color: #f4261b;
					font-weight: bold;
				}

				.carbonCredits {
					font-size: 14px;
					color: #9a9a9a;
					margin-left: 5px;
				}
			}

		}
	}
</style>
