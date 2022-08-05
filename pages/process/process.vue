<template>
	<view class="process">
		<MyHeader :isBack="false" name="面试求职流程"></MyHeader>
		<view class="process-main">
			<view class="process-content">
				<!-- 面试流程组件 -->
				<ProcessItem :processList="processList"></ProcessItem>
			</view>
		</view>
		<my_tabbar pagePath='process'></my_tabbar>
	</view>
</template>

<script>
	import { processList } from '@/servies/process.js'
	import MyHeader from '@/components/common/my-header.vue'
	import ProcessItem from '@/components/process/process-item.vue'
	import my_tabbar from '@/components/common/my-tabbar.vue'
	export default {
		components:{
			my_tabbar,
			MyHeader,
			ProcessItem
		},
		data() {
			return {
				// 获取的数据
				processList:[]
			}
		},
		onLoad() {
			this.__init()
		},
		computed:{
			changeList(){
				this.processList.map(item=>{
					item.interviewProcessAttrs.map(tem=>{
						// 判断是否有视频
						if(tem.objType === 2){
							item.isVideo = true
						}else{
							item.isVideo = false
						}
					})
				})
			}
		},
		methods: {
			async __init(){
				const data = {
					pageSize:10,
					pageNum:1
				}
				let res = await processList(data)
				this.processList = res
				console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.process{
		.process-main{
			width: 750rpx;
			padding-top: 20rpx;
			padding-bottom: 120rpx;
			background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/process-bg.png');
			background-size: cover;
			background-position: center center;
			box-sizing: border-box;
			position: relative;
			.process-content{
				width: 750rpx;
				height: 100%;
				position: absolute;
				top: 0;
				left: 10rpx;
				padding-bottom: 40rpx;
				position: relative;
			}
		}
	}
</style>
