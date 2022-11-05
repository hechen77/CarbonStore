<template>
	<view class="content">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="Logo">
			<!-- 这里是LOGO占位符 -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: "",
				password: ""
			}
		},
		methods: {

		}
	}
</script>

<style lang="less">
	.content {
		width: 90%;
		margin: 0 auto;

		.Logo {
			height: 300px;
			background-color: green;
		}

		.dataForm {
			margin-top: 20px;
			border: 1px solid red;
		}

	}
</style>
