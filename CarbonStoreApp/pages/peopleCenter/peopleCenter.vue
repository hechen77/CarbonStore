<template>
	<view class="PeopleCenterView">
		<avatar />
		<br />
		<MyOrders />
		<br />
		<SecurityCenter />
		<br />
		<peopolSettings />
		<br />
	</view>
</template>

<script>
	import avatar from "@/components/peopleCenter/avatar.vue";
	import MyOrders from "@/components/peopleCenter/MyOrders.vue";
	import SecurityCenter from "@/components/peopleCenter/SecurityCenter.vue";
	import peopolSettings from "@/components/peopleCenter/peopolSettings.vue";
	export default {
		data() {
			return {
				scrollTop: 0
			}
		},
		methods: {

		},
		components: {
			avatar,
			MyOrders,
			SecurityCenter,
			peopolSettings
		},
		mounted() {
			this.$store.dispatch("peopleCenter/GetUserInfo");
		}
	}
</script>

<style scoped lang="less">
	.PeopleCenterView {
		width: 100%;
		height: 100%;
		background-color: #f4f4f4a0;
	}
</style>
