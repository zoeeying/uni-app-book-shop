const router = require('koa-router')()
const DB = require('../module/db')

router.get('/carousels', async ctx => {
	const data = {
		status: 200,
		message: '',
		data: [{
				id: 1,
				url: 'http://zoeeying.github.io',
				imgUrl: 'https://wx2.sinaimg.cn/mw690/600a9336gy1gd0w3h9zj8j20u00bon0b.jpg',
			},
			{
				id: 2,
				url: 'http://zoeeying.github.io',
				imgUrl: 'https://wx2.sinaimg.cn/mw690/600a9336gy1gd0w3ha7ssj20u00bodj7.jpg',
			},
			{
				id: 3,
				url: 'http://zoeeying.github.io',
				imgUrl: 'https://wx4.sinaimg.cn/mw690/600a9336gy1gd0w3hbcv4j20u00bowgc.jpg',
			},
			{
				id: 4,
				url: 'http://zoeeying.github.io',
				imgUrl: 'https://wx3.sinaimg.cn/mw690/600a9336gy1gd0w3h8d7rj20u00bojsu.jpg',
			},
			{
				id: 5,
				url: 'http://zoeeying.github.io',
				imgUrl: 'https://wx1.sinaimg.cn/mw690/600a9336gy1gd0w3h867xj20u00bo3zz.jpg',
			},
		]
	}
	ctx.body = data
})
module.exports = router.routes()
