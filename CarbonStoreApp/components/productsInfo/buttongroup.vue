<template>

	<veiw>
		<u-tabbar :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item text="客服" icon="account"></u-tabbar-item>
			<u-button type="primary" shape="circle" text="加入购物车"></u-button>
			<u-button type="warning" shape="circle" text="购买"></u-button>
		</u-tabbar>
	</veiw>
</template>

<script>
export default{
	data(){
		return{
			textColor:{
				color:"#000"
			}
		}
	}
}

</script>


<style scoped lang="less">
	
</style>
