const router = require('koa-router')()
const DB = require('../module/db')
const carousels = require('../data/carousels.js')
const books = require('../data/books.js')
const cates = require('../data/cates.js')
const bestsellers = require('../data/bestsellers.js')
const bookInfo = require('../data/bookInfo.js')

router.get('/carousels', async ctx => {
	const data = carousels
	ctx.body = data
})

router.get('/books', async ctx => {
	const data = books
	ctx.body = data
})

router.get('/cates', async ctx => {
	const data = cates
	ctx.body = data
})

router.get('/bestsellers', async ctx => {
	const {
		tag
	} = ctx.request.query
	let data = bestsellers
	data = data.filter(item => item.tags.includes(tag))
	ctx.body = data
})

router.get('/bookInfo', async ctx => {
	const data = bookInfo
	ctx.body = data
})






module.exports = router.routes()
