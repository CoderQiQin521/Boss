const Koa = require('koa')
const cors = require('koa-cors')
const app = new Koa()
const koaBody = require('koa-body')

const router = require('./routes')

app.use(cors()).use(koaBody())
// app.use((ctx) => {
//   ctx.body = 'hello world'
// })

app.use(router.routes())
app.use(router.allowedMethods())

var server = app.listen(3000, 'localhost', function () {
  var host = server.address().address
  var port = server.address().port
  console.log('koa服务已启动, http://%s:%s', host, port)
})
