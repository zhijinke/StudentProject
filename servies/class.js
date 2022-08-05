// 班级信息接口的管理
import $http from '@/servies/request.js'

// 查询班级列表的接口
export const getClassList = ({pageSize,pageNum})=>{
	return $http.request({
		url:'/wechat/class/list',
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
