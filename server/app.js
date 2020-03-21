const Koa = require('koa')
const router = require('koa-router')()
const cors = require('koa2-cors')
const app = new Koa()

app.use(cors())

const api = require('./routes/api') // 接口
router.use('/api', api)

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is started at port 3000')
})
