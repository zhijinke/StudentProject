<template>
	<view class="celebrity-list">
		<Celebrity :itemData="excellentList"></Celebrity>
	</view>
</template>

<script>
import Celebrity from '@/components/start-school/Celebrity.vue'
export default{
	components:{
		Celebrity
	},
	props:{
		excellentList:Array
	}
}
</script>

<style lang="scss" scoped>
</style>