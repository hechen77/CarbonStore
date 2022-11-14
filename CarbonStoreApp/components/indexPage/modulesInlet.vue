<template>
	<view class="modulesInletView">
		<u-grid :border="true" col="4">
			<u-grid-item v-for="item in HomePageModulesInletList">
				<svg class="icon" aria-hidden="true" style="">
					<use :xlink:href="item.iconsUrl"></use>
				</svg>
				<text class="grid-text" style="font-size: .12em;margin-top: 10px;color:#666;">{{item.title}}</text>
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
			return {}
		},
		methods: {},
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
	}
</style>
