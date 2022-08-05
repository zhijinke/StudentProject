<template>
	<view class="start-school">
		<!-- 头部组件 -->
		<MyHeader :name="name"></MyHeader>
		<!-- 中间滑块 -->
		<scroll-view scroll-y="true" >
			<view class="banner-content">
				<!-- 填写入学信息 -->
				<view class="banner-bg" @tap="enterSchool">
					<view class="sign-btn">立即填写 > </view>
				</view>
				<!-- 按钮 -->
				<MangeList :classId="classId" :title="name"></MangeList>
				<!-- 名人堂 -->
				<view class="main-title">名人堂</view>
				<scroll-view scroll-x="true" class="scroll-content">
					<view class="scroll-item">
						<CelebrityList :excellentList="excellentList"></CelebrityList>
					</view>
				</scroll-view>
				<!-- 公告 -->
				<view class="main-title">公告</view>
				<Notice :noticeList="noticeList"></Notice>
			</view>
		</scroll-view>
		<!-- 弹窗  蒙层 -->
		<view class="pop" v-if="isShow">
			<view class="pop-mask"></view>
			<view class="pop-box">
				<view class="pop-content">
					<image class="pop-close" src="../../static/imgs/close.png" mode="" @click="closePop"></image>
					<image class="pop-btn" src="../../static/imgs/pop-btn.png" mode=""></image>
					<view class="pop-text" @tap="enterSchool">快速入学</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { excellentList,noticeList } from '@/servies/start-school.js'
import MyHeader from '@/components/common/my-header.vue'
import MangeList from '@/components/start-school/MangaList.vue'
import CelebrityList from '@/components/start-school/CelebrityList.vue'
import Notice from '@/components/start-school/Notice.vue'
export default {
	components:{
		MyHeader,
		MangeList,
		CelebrityList,
		Notice
	},
	data() {
		return {
			classId:'',
			// 头部组件需要的名称
			name:'',
			// 是否显示蒙层
			isShow:true,
			// 名人堂数据
			excellentList:[],
			// 公告数据
			noticeList:[]
		}
	},
	onLoad(e) {
		// 当前班级的名称
		this.name = e.name
		// 当前班级的id
		this.classId = e.id
		this.__init()
	},
	methods: {
		// 发送请求，获取名人堂数据
		async __init(){
			const data = {
				pageNum:1,
				pageSize:10
			}
			let res = await excellentList(data)
			this.excellentList = res
			let noticeData = await noticeList(data)
			this.noticeList = noticeData
			console.log(this.noticeList)
		},
		// 关闭蒙层
		closePop(){
			this.isShow = false
		},
		// 跳转到填写入学信息页面
		enterSchool(){
			uni.navigateTo({
				url:'/pages/enter-school/enter-school'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	// 清除屏幕滚动条
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	.start-school{
		width: 100vw;
		// height: 100vh;
		background-color: #f3f4f6;
		box-sizing: border-box;
		.banner-content{
			.banner-bg{
				width: 750rpx;
				height: 295rpx;
				background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/banner.png')no-repeat;
				background-size: cover;
				position: relative;
				margin-bottom: 40rpx;
				.sign-btn{
					position: absolute;
					top: 195rpx;
					left: 60rpx;
					width: 173rpx;
					height: 44rpx;
					font-size: 28rpx;
					color: #fff;
					padding: 5rpx 10rpx;
					text-align: center;
					line-height: 44rpx;
					border: 2rpx solid #fff;
					border-radius: 40rpx;
				}
			}
			.main-title{
				width: 102rpx;
				height: 33rpx;
				font-size: 34rpx;
				font-weight: bold;
				color: #252525;
				margin-top: 54rpx;
				margin-bottom: 36rpx;
				padding-left: 40rpx;
			}
			.scroll-content{
				width: 100%;
				height: 100%;
				.scroll-item{
					display: inline-block;
				}
			}
		}
		/* 蒙层 */
		.pop{
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 9999;
			.pop-mask{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, .3);
			}
			.pop-box{
				width: 500rpx;
				height: 700rpx;
				position: absolute;
				left: calc(50% - 250rpx);
				top: calc(50% - 350rpx);
				.pop-content{
					width: 500rpx;
					height: 693rpx;
					background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/pop-bg.png')no-repeat;
					background-size: contain;
					position: relative;
					.pop-close{
						width: 63rpx;
						height: 63rpx;
						position: absolute;
						top: -20rpx;
						right: -20rpx;
					}
					.pop-btn{
						width: 420rpx;
						height: 80rpx;
						position: absolute;
						left: 45rpx;
						bottom: 126rpx;
					}
					.pop-text{
						width: 136rpx;
						height: 33rpx;
						font-size: 34rpx;
						font-weight: bold;
						color: #fff;
						position: absolute;
						left: 185rpx;
						bottom: 160rpx;
					}
				}
			}
		}
	}
</style>
