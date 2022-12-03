<template>
	<view class="BalanceDetailsView">
		<u-cell-group v-if="UserCarbonTardeList.length">
			<u-cell v-for="item in UserCarbonTardeList" :key="item.id">
				<view slot="value" class="u-slot-value" style="text-align: right;">
					<span v-if="item.operateType == 'income'" class="income">+{{item.operateData}}</span>
					<span v-else class="outlay">-{{item.operateData}}</span>
					<br>
					<span class="balance">
						余额：{{item.afterData}}
					</span>
				</view>
				<view class="u-slot-title" slot="title">
					<view style="float: left; margin-right: 20px;">
						<u-avatar :src="item.afterUserAvatar"></u-avatar>
					</view>
					<view>
						<span>
							{{item.operateName}} - {{item.afterUserName}}
						</span>
						<br>
						<span class="balance">
							{{item.editorTime}}
						</span>
					</view>
				</view>
			</u-cell>
		</u-cell-group>
		<u-empty v-else mode="car" icon="http://cdn.uviewui.com/uview/empty/car.png">
		</u-empty>
	</view>
</template>

<script>
	import moment from "moment"
	import {
		token
	} from "@/config/config.js"
	import {
		mapState
	} from "vuex"
	export default {
		data() {
			return {}
		},
		methods: {
			loga() {
				console.log(this.UserCarbonTardeList);
			}
		},
		computed: {
			...mapState("FireWood", ["UserCarbonTardeList"])
		},
		mounted() {
			this.$store.dispatch("FireWood/GetUserCarbonTardeList", JSON.parse(token.getToken("roles")).uid)
			this.loga();
		}
	}
</script>

<style lang="less">
	.income {
		color: #1bbe6d;
		font-size: 20px;
		font-weight: bold;
	}

	.outlay {
		color: #cb2d01;
		font-size: 20px;
		font-weight: bold;
	}

	.balance {
		color: darkgray;
		font-size: 14px;
	}
</style>
