<template>
	<view class="header">
		<view class="status-bar"></view>
		<view class="top-content">
			<view class="goBack" @tap="goBack" v-if="isBack">
				<slot name="left">
					<image src="../../static/imgs/arrow.png" mode=""></image>
				</slot>
			</view>
			<view class="main">
				<slot name="center">
					<view>{{name}}</view>
				</slot>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	props:{
		name:String,
		isBack:{
			type:Boolean,
			default:true
		}
	},
	methods:{
		goBack(){
			uni.navigateBack({
				delta:1
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.header{
		width: 100vw;
		height: 115rpx;
		background-color: #fff;
		display: flex;
		.status-bar{
			height: 64rpx;
		}
		.top-content{
			width: 100vw;
			height: 115rpx;
			display: flex;
			align-items: center;
			.goBack{
				width: 90rpx;
				height: 42rpx;
				padding-left: 20rpx;
				font-size: 24rpx;
				image{
					width: 40rpx;
					height: 42rpx;
				}
			}
			.main{
				padding-right: 42rpx;
				margin: 0 auto;
				height: 115rpx;
				line-height: 115rpx;
				font-size: 32rpx;
				color: #344356;
			}
		}
		
	}
</style>