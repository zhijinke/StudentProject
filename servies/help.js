// 帮助页的接口数据
import $http from './request.js'

// 公告接口
export const getHelpList = ({pageNum,pageSize}) =>{
	return $http.request({
		url:'/wechat/help/list',
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