<template>
	<view class="my-contract">
		<my-header class="home-header" :isBack="false" name="我的协议"></my-header>


		<scroll-view scroll-y="true" :style="'height:'+clientHeight+'px;'">
			<view class="contract-content" :style="'height:'+clientHeight+'px;'">
				<view class="contract" :style="'height:'+clientHeight+'px;'">
					<image class="contract-img" src="signInfo.classProtocolPath" mode="" lazy-load="true"></image>
					<view class="username">signInfo.studentName</view>
					<view class="idCard">signInfo.idCard</view>
					<view class="contract-time">signInfo.signTime</view>
					<view class="company-time">signInfo.signTime</view>

					<image src="signInfo.signProtocolPath" class="contract-sign" mode=""></image>
					<view class="idCard1">signInfo.idCard</view>
					<view class="contract-time1">signInfo.signTime</view>
					<view class="company-time1">signInfo.signTime</view>
					<image src="signInfo.signProtocolPath" class="contract-sign1" mode=""></image>
				</view>
			</view>
		</scroll-view>

		<!-- tabbar -->
		<MyTabbar :selected="selected"></MyTabbar>

	</view>

</template>

<script>
	import MyTabbar from '@/components/common/my-tabbar.vue'
	import MyHeader from '@/components/common/my-header.vue'
	import {mapState,mapActions} from 'vuex'
	import {stuCurrent} from '@/servies/sign.js'
	export default {
		data() {
			return {
				selected: 3,
				isSign: true,
				contractTime: null,
				signContract: null,
				clientHeight: null,
			}
		},
		components: {
			MyHeader,
			MyTabbar
		},
		onLoad() {
			this.contractTime = uni.getStorageSync('signtime')
			this.__init()
		},
		computed: {
			...mapState({
				userList: state => state.user.userList,
				signInfo: state => state.sign.signInfo,
				barHeight: state => state.bar.barHeight
			})
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clinetHeight = res.windowHeight - 68 - res.statusBarHeight
				}
			})
		},
		methods: {
			...mapActions(['addSignInfoActions']),
			__init() {
				stuCurrent().then(res => {
					this.userlList.status = 1
					res.classProtocolPath = res.classProtocolPath
					res.signProtocolPath = 'https://fawn.xuexiluxian.cn/api' + res.signProtocolPath
					this.addSignInfoActions(res)
				}).catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>


<style scoped>
	/* 去除滚动条 */
	scroll-view ::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}


	.my-contract {
		width: 100vw;
		height: 100vh;
		background-color: #f0f3f7;
	}

	.contract-content {
		padding: 0 35rpx;
		box-sizing: border-box;
	}

	scroll-view {
		box-sizing: border-box;
	}

	.contract {
		width: 682rpx;
		border: 2rpx dashed #000;
		position: relative;
		margin-bottom: 140rpx;
	}

	.canvasImg {
		width: 682rpx;
		border: 2rpx dashed #000;
	}

	.username {
		position: absolute;
		left: 150rpx;
		top: 220rpx;
	}

	.idCard {
		font-size: 20rpx;
		position: absolute;
		right: 20rpx;
		bottom: 2320rpx;
	}

	.idCard1 {
		font-size: 20rpx;
		position: absolute;
		right: 20rpx;
		bottom: 180rpx;
	}

	.contract-time {
		font-size: 20rpx;
		position: absolute;
		right: 60rpx;
		bottom: 2280rpx;
	}

	.company-time {
		font-size: 20rpx;
		position: absolute;
		left: 150rpx;
		bottom: 2280rpx;
	}

	.contract-time1 {
		font-size: 20rpx;
		position: absolute;
		right: 50rpx;
		bottom: 140rpx;
	}

	.company-time1 {
		font-size: 20rpx;
		position: absolute;
		left: 150rpx;
		bottom: 140rpx;
	}

	.contract-img {
		width: 682rpx;
		/* height: 100%; */
		height: 6000rpx;
	}

	/* 签名的图片显示的位置 */
	.contract-sign {
		width: 200rpx;
		height: 150rpx;
		position: absolute;
		right: 100rpx;
		bottom: 2300rpx;
		transform: rotate(-90deg);
	}

	.contract-sign1 {
		width: 200rpx;
		height: 150rpx;
		position: absolute;
		right: 100rpx;
		bottom: 170rpx;
		transform: rotate(-90deg);
	}
</style>
