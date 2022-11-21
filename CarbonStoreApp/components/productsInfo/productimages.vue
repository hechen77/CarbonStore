<template>
	<veiw>
		<u--image :showLoading="true" :src="src" width="100%"  mode="widthFix" ></u--image>
	</veiw>
	
</template>
<script>
	export default {
			data() {
				return {
					src:'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				}
			}
		}
</script>

<style>
</style>