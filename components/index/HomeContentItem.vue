<template>
	<view class="home-content-item" @tap="goStartSchool(item.className)" :style="{ backgroundImage:'url('+item.classImgLink+')' }">
		<view class="item">
			<view class="item-main">
				<image class="left" src="../../static/imgs/right-arrow.png" mode=""></image>
				<view class="text">{{item.className}}</view>
				<image src="../../static/imgs/right-arrow.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	props:{
		item:{
			type:Object,
			default:{}
		}
	},
	data(){
		return{
		}
	},
	methods:{
		goStartSchool(e){
			uni.navigateTo({
				url:`/pages/start-school/start-school?name=${e}`
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.home-content-item{
		//#ifdef MP-WEIXIN
		width: 320rpx;
		height: 404rpx;
		//#endif
		//#ifdef APP-PLUS || H5
		width: 48%;
		height:404rpx ;
		//#endif;
		background-size: cover;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30rpx;
		margin: 20rpx 0;
	}
	.item{
		width: 90%;
		height: 294rpx;
		display: flex;
		justify-content: center;
		align-items: flex-end;
		//#ifdef APP-PLUS || H5
		// background: url('../../static/imgs/user.png') no-repeat;
		//#endif
		//#ifdef MP-WEIXIN
		background-size: cover;
		border-radius: 30rpx;
		width: 294rpx;
		height: 371rpx;
		//#endif
		background-size: cover;
		border-radius: 30rpx;
		margin: 20rpx 0;
		.item-main{
			display: flex;
			align-items: center;
			image{
				width: 38rpx;
				height: 30rpx;
			}
			.left{
				transform: rotateY(180deg);
			}
			.text{
				padding: 0 20rpx;
				color: white;
			}
		}
	}
</style>