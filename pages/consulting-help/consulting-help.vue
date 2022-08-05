<template>
	<view class="consulting-help">
		<!-- 头部 -->
		<MyHeader name="咨询帮助" class="MyHeader"></MyHeader>
		<!-- 联系方式 -->
		<view class="contact-main" v-if="helpList.length>0">
			<view class="mian-item" v-for="item in helpList" :key="item.id">
				<view class="left">
					<image src="../../static/imgs/address.png" mode=""></image>
					<view class="text">
						<view class="up">{{item.name}}</view>
						<view class="down">{{item.phone}}</view>
					</view>
				</view>
				<image class="right" src="../../static/imgs/phone.png" mode=""></image>
			</view>
		</view>
		<view v-else>暂无数据...</view>
		<view class="sure" @tap="goBack">确认</view>
	</view>
</template>

<script>
	import { getHelpList } from '@/servies/help.js'
	import MyHeader from '@/components/common/my-header.vue'
	export default {
		components:{
			MyHeader
		},
		data() {
			return {
				// 导师数据
				helpList:[]
			}
		},
		onLoad() {
			this.__init()
		},
		methods: {
			// 发送请求获取数据
			async __init(){
				const data = {
					pageNum:1,
					pageSize:10
				}
				let res = await getHelpList(data)
				this.helpList = res
				console.log(res)
			},
			// 点击返回上一页
			goBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.consulting-help{
		width: 100vw;
		height: 100vh;
		background-color: #f3f4f6;
		.MyHeader{
			background-color: #f3f4f6;
		}
		.contact-main{
			background-color: #fff;
			.mian-item{
				display: flex;
				justify-content: space-between;
				padding: 30rpx 40rpx;
				align-items: center;
				border-bottom: 2rpx solid #f3f4f6;
				.left{
					display: flex;
					align-items: center;
					image{
						width: 40rpx;
						height: 50rpx;
						margin-right: 10rpx;
					}
					.text{
						.up{
							font-weight: 500;
							font-size: 32rpx;
						}
						.down{
							padding-top: 5rpx;
							font-size: 20rpx;
							color: #bdbdbd;
						}
					}
				}
				.right{
					width: 50rpx;
					height: 50rpx;
				}
			}
		}
		.sure{
			width: 400rpx;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			position: fixed;
			bottom: 200rpx;
			left: calc(50% - 200rpx);
			background-color: #0065ff;
			border-radius: 40rpx;
		}
	}
</style>
