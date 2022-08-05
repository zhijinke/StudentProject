<template>
	<view class="question-commidty">
		<view v-for="(item,index) in questionData" :key="index">
			<QuestionItem :item="item"></QuestionItem>
		</view>
	</view>
</template>

<script>
import QuestionItem from './question-item.vue'
export default{
	components:{
		QuestionItem
	},
	props:{
		questionData:{
			type:Array,
			default:[]
		}
	}
}
</script>

<style lang="scss" scoped>
	.question-commidty{
		padding-top: 40rpx;
		box-sizing: border-box;
	}
</style>