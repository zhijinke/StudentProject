<template>
	<view class="show-contract">
		<!-- 班级权益说明 -->
		<view class="content-header">
			<image class="title-img" src="https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/title.png" mode=""></image>
		</view>
		<!-- 中间滚动区域 -->
		<scroll-view scroll-y="true" class="middle">
			<view class="content-list" :style="'height: '+clientHeight+'px;'">
				<view class="content-item" v-for="item in classInfo" :key="item.id">
					<view class="item-title">
						<view class="text">{{item.className}}</view>
					</view>
					<view class="item-info">
						<view class="item-main">
							<rich-text :nodes="item.classDesc"></rich-text>
						</view>
						<view class="item-footer">
							<!-- <view>15836546677</view> -->
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 我知道了 -->
		<view class="know">
			<view class="text" @click="goBack">我知道了</view>
		</view>
	</view>
</template>

<script>
	import {getClassList} from '@/servies/class.js'
	export default {
		data() {
			return {
				clientHeight:null,
				// 班级内容
				classInfo:[]
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					// 获取头部的高度  select里面的参数就比如css选择器一样选择元素
					let info = uni.createSelectorQuery().in(this).select(".content-header")
					info.boundingClientRect((data)=>{
						console.log(data)
						// data包含元素的高度信息
						// data.height  头部的高度  68是tabbar的高度
						this.clientHeight = res.windowHeight - data.height
					}).exec(function(res){
						// 这个方法必须执行,即使什么也不做,否则不会获取到信息
					})
					// 获取 我知道 的高度  
					let know = uni.createSelectorQuery().in(this).select(".item-footer")
					know.boundingClientRect((data)=>{
						console.log(data)
						// data包含元素的高度信息
						// data.height  头部的高度  68是tabbar的高度
						this.clientHeight = this.clientHeight - data.height
					}).exec(function(res){
						// 这个方法必须执行,即使什么也不做,否则不会获取到信息
					})
				}
			})
		},
		onLoad() {
			this.__init()
		},
		methods: {
			// 发送请求
			async __init(){
				let data = {
					pageNum:this.pageNum,
					pageSize:this.pageSize
				}
				let res = await getClassList(data)
				// console.log(res)
				this.classInfo = res
			},
			goBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 隐藏滚动条
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	.show-contract{
		width: 100vw;
		height: 100vh;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg.png');
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		.content-header{
			width: 100vw;
			height: 300rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.title-img{
				width: 622rpx;
				height: 93rpx;
			}
		}
		// 滑块
		.middle{
			// flex-grow: 2;
			overflow: hidden;
		}
		.content-list{
			width: 702rpx;
			padding: 0 24rpx;
			padding-bottom: 60rpx;
			.content-item{
				width: 702rpx;
				padding-bottom: 60rpx;
				.item-title{
					width: 702rpx;
					height: 100rpx;
					background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg-title.png')no-repeat;
					background-size: 100% 100%;
					position: relative;
					.text{
						text-align: center;
						height: 80rpx;
						line-height: 80rpx;
						font-size: 48rpx;
						font-weight: normal;
						color: #5d6fe5;
					}
				}
				.item-info{
					background-color: #fff;
					border-bottom-left-radius: 20rpx;
					border-bottom-right-radius: 20rpx;
				}
			}
		}
		.know{
			width: 100vw;
			height: 200rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.text{
				width: 520rpx;
				height: 80rpx;
				background-color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 30rpx;
				color: #5D6FE5;
			}
		}
	}
</style>
