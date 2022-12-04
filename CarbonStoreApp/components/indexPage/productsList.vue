<template>
	<view class="ProductsListView">
		<view class="ProductsList">
			<u-row justify="space-between" gutter="20">
				<u-col span="6" class="productsColView" v-for="item in AppProductsList" :key="item.uid"
					@click="goProductPage(item.uid)">
					<view class="productsView">
						<view class="productsImage">
							<u--image :showLoading="true" :src="item.imgUrl[0]" width="100%" height="122px"
								:lazyLoad="false" :fade="false">
							</u--image>
						</view>
						<view class="productsTitle">{{item.name}}</view>
						<view class="productsPriceView">
							<u-tag v-if="item.typeName != '回收'" text="售卖" plain size="mini" type="warning"
								style="width: 23%;text-align:center !important;float: left;"></u-tag>
							<u-tag v-else text="回收" plain size="mini" type="success"
								style="width: 23%;text-align:center !important;float: left;">
							</u-tag>
							<span class="money" v-if="item.purchaseTypeName != '碳值兑换'">￥</span>
							<span class="productPrice">
								{{item.price}}
							</span>
							<span class="carbonCredits" v-if="item.purchaseTypeName == '碳值兑换'">碳值</span>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
		<u-empty v-show="!AppProductsList.length" mode="list" text="暂无商品"
			icon="http://cdn.uviewui.com/uview/empty/list.png">
		</u-empty>
	</view>
</template>

<script>
	import {
		mapState
	} from "vuex"
	export default {
		name: "productsList",
		data() {
			return {}
		},
		methods: {
			goProductPage(uid) {
				uni.navigateTo({
					url: `/pages/productsInfo/productsInfo?uid=${uid}`,

				})
			}
		},
		mounted() {
			this.$store.dispatch("homePage/getAppProductsLiat")
		},
		computed: {
			...mapState("homePage", ["AppProductsList"])
		}
	}
</script>

<style scoped lang="less">
	@textColor: #9c9c9c;

	.ProductsListView {
		width: 100%;
		box-sizing: border-box;

		.ProductsList {
			width: 100%;
			padding: 5px 10px;
			box-sizing: border-box;

			.productsColView {
				box-shadow: 0 0 0.05rem 0 rgb(0 0 0 / 5%);
				padding-left: 5px !important;
				padding-right: 5px !important;

				.productsView {
					background-color: white;
					border-radius: 5px;
					overflow: hidden;
					cursor: pointer;
					margin-bottom: 10px;

					.productsImage {
						min-height: 122px;
						width: 100%;
						margin: auto 0;
						overflow: hidden;
						height: auto;
						margin: 0;
						padding: 0;
					}

					.productsTitle {
						box-sizing: border-box;
						padding-left: 5px;
						margin: 5px 0px;
						font-size: 14px;
						display: block;
						width: 100%;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						word-break: break-all;
						font-family: pingfangsc-regular, stheiti stxihei, microsoft yahei, microsoft jhenghei, miui;
						margin-bottom: 15px;
					}

					.productsPriceView {
						box-sizing: border-box;
						text-align: right;
						padding: 0 8px;
						margin-bottom: 10px;

						.productPrice {
							color: #e02e24;
							font-weight: 700;
							line-height: 1;
							font-size: 18px;
						}

						.money {
							color: #e02e24;
							font-weight: bold;
						}

						.carbonCredits {
							color: @textColor;
							margin-left: 5px;
						}
					}
				}
			}
		}
	}
</style>
