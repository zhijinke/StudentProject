<template>
	<view class="question">
		<!-- 头部 -->
		<MyHeader :isBack="false" name='面试题'></MyHeader>
		
		<view class="question-content">
			<!-- 搜索框 -->
			<view class="question-search">
				<view class="search">
					<input class="input-search" type="text" placeholder="请输入搜索的关键字">
					<image class="img-search" src="../../static/imgs/search.png" mode=""></image>
				</view>
			</view>
			<!-- 刷题板块 -->
			<scroll-view scroll-y="true" :style= " 'height :'+clientHeight+'px; ' ">
				<view class="question-exercise" :style= " 'height :'+clientHeight+'px; ' ">
					<!-- 面试题 -->
					<QuestionCommidty :questionData="questionData"></QuestionCommidty>
				</view>
			</scroll-view>
		</view>
		
		<my_tabbar pagePath='question'></my_tabbar>
	</view>
</template>

<script>
	import { getQuestionTypeList } from '@/servies/question.js'
	import my_tabbar from '@/components/common/my-tabbar.vue'
	import QuestionCommidty from '@/components/question/question-commidty.vue'
	import MyHeader from '@/components/common/my-header.vue'
	export default {
		components:{
			my_tabbar,
			QuestionCommidty,
			MyHeader
		},
		data() {
			return {
				// 获取高度
				clientHeight:null,
				// 面试题数据
				questionData:[]
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					// console.log(res)
					// 获取头部高度    select里面的参数就比如css选择器一样选择元素
					const query = uni.createSelectorQuery().in(this).select('.question-search');
					query.boundingClientRect(data => {
						// data.height  头部的高度  68是tabbar的高度
						this.clientHeight = res.windowHeight - data.height - data.top - 67
						// console.log(data)
					}).exec();
				}
			})
		},
		onLoad() {
			this.__init()
		},
		methods: {
			// 发请求，获取面试题数据
			async __init(){
				const data = {
					pageNum:1,
					pageSize:10
				}
				let res = await getQuestionTypeList(data)
				this.questionData = res
				// console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	// 取消滚动条
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	.question{
		width: 100vw;
		height: 100vh;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/question-bg.png');
		.question-content{
			padding: 0 35rpx;
			.question-search{
				display: flex;
				justify-content: center;
				.search{
					width: 70%;
					display: flex;
					align-items: center;
					background-color: #fff;
					padding: 10rpx 50rpx;
					border-radius: 50rpx;
					justify-content: space-between;
					.input-search{
						
					}
					.img-search{
						width: 36rpx;
						height: 38rpx;
					}
				}
			}
		}
	}
</style>
