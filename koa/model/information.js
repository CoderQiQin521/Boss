const mongoose = require('../db/mongo')

const schema = mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
  },
  realname: {
    type: String,
    default: '游客',
  },
  avatar: {
    type: String,
    default: 'https://img.yzcdn.cn/vant/cat.jpeg',
  },
  gender: {
    type: String,
  },
})

module.exports = mongoose.model('information', schema)
