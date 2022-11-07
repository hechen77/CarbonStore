<template>
	<div class="pageContent">
		<h1>我是首页</h1>
		<van-button type="info" @click="goLogin()">我是一个按钮</van-button>
	</div>
</template>

<script>
import router from "@/router";

export default {
	name: "Home",
	data(){
		return {
		
		}
	},
	methods:{
		goLogin(){
			router.push("/login");
		}
	}
}
</script>

<style scoped>

</style>