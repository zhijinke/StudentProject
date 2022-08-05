<template>
	<view class="syVideo">
		<video :src="objUrl" :controls="true" :enable-play-gesture="true" ></video>
	</view>
</template>

<script>
export default{
	props:{
		objUrl:{
			type:String
		}
	},
	data(){
		return{
			
		}
	}
}
</script>

<style scoped>
	video{
		width: 650rpx;
	}
</style>