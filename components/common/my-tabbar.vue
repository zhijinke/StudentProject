<template>
	<view class="tabbar">
		<view class="tabbar-ul">
			<view class="tabbar-ul-li"
			v-for="(item,index) in tabbar_list"
			:key="index"
			@tap=" changeTabbar(item.pagePath) "
			>
				<image v-if=" pagePath == item.pagePath " :src="item.selectIconPath" mode=""></image>
				<image v-else  :src="item.iconPath" mode=""></image>
				<text :class=" pagePath == item.pagePath ? 'active':'' ">{{item.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	props:{
		pagePath:{
			type:String,
			default:'index'
		}
	},
	data(){
		return{
			tabbar_list:[
				{
					pagePath:'index',
					name:'首页',
					iconPath:'../../static/tabbar/home.png',
					selectIconPath:'../../static/tabbar/home-selected.png'
				},
				{
					pagePath:'question',
					name:'刷题面试',
					iconPath:'../../static/tabbar/question.png',
					selectIconPath:'../../static/tabbar/question-selected.png'
				},
				{
					pagePath:'process',
					name:'面试流程',
					iconPath:'../../static/tabbar/process.png',
					selectIconPath:'../../static/tabbar/process-selected.png'
				},
				{
					pagePath:'contract',
					name:'我的协议',
					iconPath:'../../static/tabbar/contract.png',
					selectIconPath:'../../static/tabbar/contract-selected.png'
				},
				{
					pagePath:'card',
					name:'我的名片',
					iconPath:'../../static/tabbar/card.png',
					selectIconPath:'../../static/tabbar/my-selected.png'
				},
			]
		}
	},
	methods:{
		// 底部tabbar点击切换事件
		changeTabbar(e){
			uni.redirectTo({
				url:`../../pages/${e}/${e}`,
				// animationType: 'none',
				// animationDuration: 0
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.tabbar{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0px -12px 37px 0px rgba(230,235,243,0.9);
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		z-index: 9999;
		box-sizing: border-box;
		.tabbar-ul{
			display: flex;
			width: 100%;
			height: 100%;
			color: #344356;
			background-color: #fff;
			justify-content: space-around;
			.tabbar-ul-li{
				align-items: center;
				display: flex;
				flex-direction: column;
				padding: 15rpx 0;
				margin: auto 0;
				image{
					width: 56rpx;
					height: 56rpx;
				}
				text{
					padding-top: 10rpx;
					font-size: 30rpx;
				}
			}
		}
	}
	.active{
		color:#596dff ;
	}
</style>