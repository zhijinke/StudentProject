// 面试流程信息接口

import $http from '@/servies/request.js'

// 查询面试流程信息的接口
export const processList = ({pageSize,pageNum})=>{
	return $http.request({
		url:'/wechat/process/list',
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