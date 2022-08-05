<template>
	<view class="content back-guage">
		<view class="home-container">
			<view class="header-content">
				<view class="text-top">小鹿线前端学院</view>
				<view class="text-middle">入学入口信息</view>
				<view class="text-footer" @tap="goShowContract">
					<view class="footer-left font">查看班级权益</view>
					<image src="../../static/imgs/shape.png" mode=""></image>
				</view>
			</view>
			<scroll-view scroll-y="true" :style= " 'height :'+clientHeight+'px; ' " >
				<view class="scroll-content" :style= " 'height :'+clientHeight+'px; ' ">
					<HomeContentList :homeData="classData"></HomeContentList>
				</view>
			</scroll-view>
		</view>
		<my_tabbar pagePath='index' ></my_tabbar>
	</view>
</template>

<script>
import { getClassList } from '@/servies/class.js'
import my_tabbar from '@/components/common/my-tabbar.vue'
import HomeContentList from '@/components/index/HomeContentList.vue'
export default {
	components:{
		my_tabbar,
		HomeContentList
	},
	data() {
		return {
			// 获取的高度
			clientHeight:0,
			// 首页班级图片的数据
			classData:[]
		}
	},
	onLoad() {
		this.__init()
	},
	onReady() {
		uni.getSystemInfo({
			success: (res) => {
				// console.log(res)
				// 获取头部高度    select里面的参数就比如css选择器一样选择元素
				const query = uni.createSelectorQuery().in(this).select('.header-content');
				query.boundingClientRect(data => {
					// data.height  头部的高度  68是tabbar的高度
					this.clientHeight = res.windowHeight - data.height -data.top
				}).exec();
			}
		})
	},
	methods: {
		// 获取首页图片数据
		async __init(){
			const data = {
				pageSize:10,
				pageNum:1
			}
			let res = await getClassList(data)
			this.classData = res
			// console.log(this.classData)
		},
		// 跳转到show-contract页面
		goShowContract(){
			uni.navigateTo({
				url:'/pages/show-contract/show-contract'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	//#ifdef H5 || MP-WEIXIN
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	//#endif
	
	.content{
		padding: 131rpx 37rpx 0 37rpx;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/bg.png');
		.home-container{
			.header-content{
				// 头部标题
				.text-top{
					width: 420rpx;
					height: 59rpx;
					font-size: 60rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #000CFF;
					line-height: 80rpx;
				}
				// 入学信息
				.text-middle{
					width: 236rpx;
					height: 40rpx;
					font-size: 38rpx;
					font-family: Microsoft YaHei;
					font-weight: 400;
					color: #344356;
					line-height: 56rpx;
					opacity: .8;
					padding: 30rpx 0;
				}
				// 查看权益
				.text-footer{
					width: 290rpx;
					height: 59rpx;
					display: flex;
					flex-direction: row;
					align-items: center;
					background-color: #5468ff;
					border-radius: 10rpx;
					padding: 0 20rpx;
					box-sizing: border-box;
					.footer-left{
						color: #fff;
						font-size: 30rpx;
					}
					.footer-left::after{
						content: '';
						width: 2rpx;
						height: 100%;
						margin: 0 20rpx;
						border-right: 4rpx solid #fff;
					}
					image{
						width: 30rpx;
						height: 30rpx;
					}
				}
			}
		}
	}
</style>
