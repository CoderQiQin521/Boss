const mongoose = require('mongoose')
mongoose.connect(
  'mongodb://127.0.0.1:27017/bdcrm',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  function (err) {
    if (err) {
      console.log(err)
      return
    }
    console.log('mongo数据库已连接')
  }
)
module.exports = mongoose
