<template>
	<view class="manga-list">
		<view class="item" @tap="goArchives">
			<image src="../../static/imgs/archives.png" mode=""></image>
			<view class="TextInfo">档案管理</view>
		</view>
		<view class="item">
			<image :src="signList.imgUrl" mode=""></image>
			<view class="TextInfo">{{signList.name}}</view>
		</view>
		<view class="item" @tap="goContract">
			<image :src="mangaList.imgUrl" mode=""></image>
			<view class="TextInfo">{{mangaList.name}}</view>
		</view>
		<view class="item" @tap="gohelp">
			<image src="../../static/imgs/service.png" mode=""></image>
			<view class="TextInfo">资讯帮助</view>
		</view>
	</view>
</template>

<script>
export default{
	props:{
		classId:{
			type:Number,
			default:0
		},
		title:{
			type:String,
			default:''
		}
	},
	data(){
		return{
			mangaList:{
				imgUrl:'../../static/imgs/sign-out.png',
				name:'签署协议'
			},
			signList:{
				imgUrl:'../../static/imgs/sign-in.png',
				name:'我的协议'
			}
		}
	},
	methods:{
		// 跳转到咨询帮助页面
		gohelp(){
			uni.navigateTo({
				url:'/pages/consulting-help/consulting-help'
			})
		},
		goArchives(){
			uni.navigateTo({
				url:`../../pages/show-manage/show-manage?classId=${this.classId}`
			})
		},
		goContract(){
			uni.navigateTo({
				url: '../../pages/sign-contract/sign-contract'
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	.manga-list{
		display: flex;
		justify-content: space-around;
		align-items: center;
		box-sizing: border-box;
		.item{
			image{
				width: 108rpx;
				height: 108rpx;
			}
			.TextInfo{
				width: 108rpx;
				height: 25rpx;
				line-height: 25rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #222;
				padding-top: 10rpx;
			}
		}
	}
</style>