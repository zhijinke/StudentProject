// 学生信息，名人堂接口
import $http from './request.js'
//名人堂接口
export const excellentList = ({pageNum,pageSize}) =>{
	return $http.request({
		url:'/wechat/excellent/list',
		header:{
			"Content-Type":"application/json"
		},
		data:{
			pageNum,
			pageSize
		},
		method:'POST'
	})
	
}

// 公告接口
export const noticeList = ({pageNum,pageSize}) =>{
	return $http.request({
		url:'/wechat/notice/list',
		header:{
			"Content-Type":"application/json"
		},
		data:{
			pageNum,
			pageSize
		},
		method:'POST'
	})
	
}