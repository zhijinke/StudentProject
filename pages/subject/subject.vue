<template>
	<view class="subject">
		<!-- 头部 -->
		<MyHeader name='刷题'></MyHeader>
		<view class="subject-content">
			<view class="subject-common">
				<!-- 定义计数 -->
				<view class="dots">
					<text>{{currentIndex+1}}/{{totalNum}}</text>
				</view>
				<!-- 中间滑动内容 -->
				<swiper :current="currentIndex" @change="changeNum" :style="'height:'+clientHeight+'px;'">
					<swiper-item v-for="item in dataList" :key="item.id">
						<scroll-view scroll-y="true" :style="'height:'+clientHeight+'px;'">
							<SubjectItem :item="item" :currentIndex="currentIndex"></SubjectItem>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 上一题，下一题 -->
		<view class="subject-check">
			<view class="prev" @click="prev">上一题</view>
			<view class="next" @click="next">下一题</view>
		</view>
	</view>
</template>

<script>
	import { getQuestionList,getQuestionNum } from '@/servies/question.js'
	import MyHeader from '@/components/common/my-header.vue'
	import SubjectItem from '@/components/subject/subject-item.vue'
	export default {
		components:{
			MyHeader,
			SubjectItem
		},
		data() {
			return {
				// 传递过来的id
				typeId:'',
				// 题库数据
				dataList:[],
				// 获取的高度
				clientHeight:0,
				// 面试题总条数
				totalNum:'',
				// 当前题数
				currentIndex:0,
				pageSize:10,
				pageNum:1,
			}
		},
		onLoad(e) {
			this.typeId = e.typeId
			this.__init()
			this.getTotal()
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clientHeight = res.windowHeight - this.getClientHeight()
					// 获取计数高度    select里面的参数就比如css选择器一样选择元素
					const dots = uni.createSelectorQuery().in(this).select('.dots');
					dots.boundingClientRect(data => {
						// data.height  头部的高度  68是tabbar的高度
						this.clientHeight = this.clientHeight - data.height
					}).exec();
					// 获取底部高度
					const info = uni.createSelectorQuery().in(this).select('.subject-check');
					info.boundingClientRect(data => {
						// console.log(data)
						this.clientHeight = this.clientHeight - data.height
					}).exec();
				}
			})
		},
		methods: {
			// 获取面试题的请求
			async __init(){
				const data = {
					pageSize:this.pageSize,
					pageNum:this.pageNum,
					typeId:this.typeId
				}
				let res = await getQuestionList(data)
				this.dataList = res
				console.log(res)
			},
			// 获取面试题总条数
			async getTotal(){
				const data = {
					typeId:this.typeId
				}
				let res = await getQuestionNum(data)
				this.totalNum = res.questionNum
				// console.log(res)
			},
			// swiper滑动改变事件
			changeNum(e){
			this.currentIndex = e.detail.current
				if(this.currentIndex+1 == this.pageSize){
					this.pageSize += this.pageSize
					this.__init() 
				}
			},
			// 上一题
			prev(){
				// 判断，如果小于1，不执行
				if(this.currentIndex+1<=1){
					return;
				}
				this.currentIndex--
			},
			// 下一题
			next(){
				if(this.currentIndex>=this.totalNum-1){
					return;
				}
				this.currentIndex++
			},
			// 获取可视区域的高度
			getClientHeight(){
				const res = uni.getSystemInfoSync()
				return res.statusBarHeight;
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 清除滚动条
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	.subject{
		position: relative;
		width: 100vw;
		height: 100vh;
		background-color: #f0f3f7;
		box-sizing: border-box;
		.subject-content{
			padding: 0 37rpx;
			width: 100%;
			box-sizing: border-box;
			.subject-common{
				padding-bottom: 50rpx;
				.dots{
					// height: 30rpx;
					padding: 10rpx 0;
					text-align: center;
					font-size: 32rpx;
					font-weight: 500;
					color: #344356;
					opacity: 0.6;
				}
			}
		}
		.subject-check{
			position: fixed;
			left: 0;
			bottom: 0;
			display: flex;
			justify-content: space-around;
			align-items: center;
			view{
				width: 311rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				border-radius: 40rpx;
				color: #fff;
				margin-left: 55rpx;
				background-color: rgb(90, 103, 247);
			}
			.next{
				background-color: rgb(90, 139, 245);
			}
		}
	}

</style>
