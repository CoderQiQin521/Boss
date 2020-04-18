const express = require('express')
const app = express()
app.use(express.json())
app.use(require('cors')())

app.get('/', (req, res) => {
  res.send('hello world')
})

var server = app.listen(3000, 'localhost', function () {
  var host = server.address().address
  var port = server.address().port
  console.log('nodejs服务已启动, http://%s:%s', host, port);
})