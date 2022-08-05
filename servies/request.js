export default{
	// 默认的
	common:{
		baseUrl:'https://fawn.xuexiluxian.cn',
		data:{},
		header:{
			"Content-Type":"application/json",
			"Content-Type":"application/x-www-form-urlencoded"
		},
		method:'GET',
		dataType:'json'
	},
	// 发请求
	request( options={} ){
		// 接收用户传递过来的数据
		options.url = this.common.baseUrl + options.url,
		options.data = options.data || this.common.data,
		options.header = options.header || this.common.header,
		options.method = options.method || this.common.method,
		options.dataType = options.dataType ||this.common.dataType
		
		// 返回一个promise对象
		return new Promise((res,rej)=>{
			// 请求拦截器，发送请求前出现提示图标
			uni.showLoading({
				title:'加载中...'
			})
			uni.request({
				...options,
				success:(result)=>{
					// 请求失败
					if(result.data.resultCode != 200){
						setTimeout(()=>{
							uni.hideLoading()
						},300)
					}
					// 请求成功
					setTimeout(()=>{
						uni.hideLoading()
					},300)
					let data = result.data.data
					if(data){
						res(data)
					}else{
						res(result.data)
					}
				}
			})
			
		})
	}
	
}