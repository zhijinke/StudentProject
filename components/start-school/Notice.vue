<template>
	<view class="notice">
		<view class="notice-item" v-for="item in noticeList" :key="item.noticeId">
			<view class="notice-main">
				<block>
					<image class="img" src="../../static/imgs/upgrade.png" mode=""></image>
				</block>
				<view class="notice-warning">
					<text>{{item.noticeTitle}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	props:{
		noticeList:Array
	}
}
</script>

<style lang="scss" scoped>
	.notice{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.notice-item{
		width: 674rpx;
		height: 60rpx;
		border-radius: 10rpx;
		padding-bottom: 20rpx;
		// border: 1px solid black;
		.notice-main{
			width: 674rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 20rpx;
			display: flex;
			align-items: center;
			padding: 0 20rpx;
			box-sizing: border-box;
			border: 2rpx solid #f88c35;
			.img{
				width: 29rpx;
				height: 29rpx;
				margin-right: 20rpx;
			}
			// 默认
			.notice-text{
				background: rgba(53, 140, 248, .12);
				border: 2rpx solid #358cf8;
				color: #358cf8;
			}
			// 警告
			.notice-warning{
				// background: rgba(53, 140, 248, .12);
				
				color: #f88c35;
			}
		}
	}
	
</style>