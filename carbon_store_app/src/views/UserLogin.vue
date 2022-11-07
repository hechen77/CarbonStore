<template>
	<div class="pageContent">
		<div class="logoView"></div>
		<div class="dataView">
			<van-cell-group>
				<van-cell>
					<van-field v-model="phone" placeholder="请输入手机号" />
				</van-cell>
			</van-cell-group>
		</div>
	</div>
</template>

<script>
export default {
	name: "UserLogin",
	data(){
		return {
			phone:"",
			password:""
		}
	}
}
</script>

<style scoped lang="less">
.pageContent {
	width: 90%;
	margin: 0 auto;
	
	.logoView {
		margin-top: 10px;
		width: 100%;
		height: 100px;
		background-color: darkseagreen;
	}
	
	.dataView {
	
	}
}
</style>