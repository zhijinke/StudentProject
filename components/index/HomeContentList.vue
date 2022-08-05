<template>
	<view class="home-content-list">
		<block v-for="(item,index) in homeData" :key="index">
			<HomeContentItem :item='item'></HomeContentItem>
		</block>
	</view>
</template>

<script>
	import HomeContentItem from '@/components/index/HomeContentItem.vue'
export default{
	components:{
		HomeContentItem
	},
	props:{
		homeData:Array
	},
	data(){
		return{
			
		}
	}
}
</script>

<style lang="scss" scoped>
	//#ifdef APP-PLUS || H5
	.home-content-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-bottom: 67px;
	}
	//#endif
	
	//#ifdef MP-WEIXIN
	.home-content-list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-bottom: 67px;
	}
	//#endif
	
	
</style>