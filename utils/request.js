const BASE_URL = 'http://localhost:3000'
export const xuRequest = options => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: res => {
				if(res.data.status !== 200){
					return uni.showToast({
						title: '数据获取失败！'
					})
				}
				resolve(res.data.data)
			},
			fail: err => {
				uni.showToast({
					title: '接口请求失败！'
				})
				reject(err)
			}
		})
	})
}