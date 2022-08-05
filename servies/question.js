// 请求面试题页面的接口

import $http from '@/servies/request.js'

// 查询面试题信息的接口
export const getQuestionTypeList = ({pageSize,pageNum})=>{
	return $http.request({
		url:'/wechat/questions/typeList',
		method:'POST',
		header:{
			"Content-Type":"application/json"
		},
		data:{
			pageNum,
			pageSize
		}
	})
}

// 查询面试题
export const getQuestionList = ({pageSize,pageNum,typeId})=>{
	return $http.request({
		url:'/wechat/questions/list',
		method:'POST',
		header:{
			"Content-Type":"application/json"
		},
		data:{
			pageNum,
			pageSize,
			typeId
		}
	})
}

// 面试题总条数
export const getQuestionNum = ({typeId})=>{
	return $http.request({
		url:`/wechat/questions/selQuestionNum/${typeId}`
	})
}