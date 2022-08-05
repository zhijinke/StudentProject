<template>
	<view class="celebrity">
		<view class="celebrity-item" v-for="item in itemData" :key="item.id">
			<!-- 姓名和奖杯 -->
			<view class="item-header">
				<view>
					<view class="titleName">{{item.studentName}}</view>
					<image class="star" src="../../static/imgs/stars.png" mode=""></image>
				</view>
				
				<image class="trophy" src="../../static/imgs/trophy.png" mode=""></image>
			</view>
			<!-- 城市、薪资、班级 -->
			<view class="item-middle">
				<view class="item">
					就业城市 : <view class="text">{{item.wrokCity}}</view>
				</view>
				<view class="item">
					就业薪资 : <view class="text price">{{item.salary}}</view>
				</view>
				<view class="item">
					来自班级 : <view class="text">{{item.className}}</view>
				</view>
			</view>
			<!-- 学历，入职方式，年龄 -->
			<view class="item-footer">
				<view class="item">
					<image src="../../static/imgs/education.png" mode=""></image>
					<view class="text">{{item.education}}</view>
				</view>
				<view class="item">
					<image src="../../static/imgs/shezhao.png" mode=""></image>
					<view class="text">{{item.workWay}}</view>
				</view>
				<view class="item">
					<image src="../../static/imgs/age.png" mode=""></image>
					<view class="text">{{item.studentAge}}</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
export default{
	props:{
		itemData:Array
	}
}
</script>

<style lang="scss" scoped>
	.celebrity{
		display: flex;
		flex-wrap: nowrap;
		margin-top: 36rpx;
		justify-content: space-around;
		.celebrity-item{
			width: 289rpx;
			height: 319rpx;
			background-color: #fff;
			border-radius: 20rpx;
			// margin-right: 40rpx;
			background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/fame-bg.png')no-repeat;
			background-size: cover;
			padding: 24rpx;
			.item-header{
				padding-top: 10rpx;
				display: flex;
				justify-content: space-around; 
				align-items: center;
				.star{
					width: 19rpx;
					height: 19rpx;
				}
				.trophy{
					width: 97rpx;
					height: 91rpx;
				}
			}
			.item-middle{
				padding-top:20rpx ;
				padding-left: 20rpx;
				.item{
					height: 25rpx;
					font-size: 25rpx;
					font-weight: 400;
					color: #333;
					line-height: 27rpx;
					padding-bottom: 20rpx;
					display: flex;
					.text{
						padding-left:20rpx ;
					}
					.price{
						color: #f00;
						font-size: 30rpx;
						font-weight: bold;
					}
				}
			}
			.item-footer{
				width: 100%;
				height: 50rpx;
				background-color: #006cff;
				display: flex;
				justify-content: space-around;
				border-radius: 0 0 20rpx 20rpx;
				.item{
					display: flex;
					align-items: center;
					.text{
						font-size: 24rpx;
						font-weight: normal;
						color: #fff;
						line-height: 27rpx;
					}
					image{
						width: 22rpx;
						height: 20rpx;
					}
				}
			}
		}
	}
</style>