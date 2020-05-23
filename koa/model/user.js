const mongoose = require('../db/mongo')

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // 唯一值
  },
  password: {
    type: String,
    required: true, // 必需填写
    select: false, // 不返回
    set(val) {
      return require('bcryptjs').hashSync(val, 10)
    },
  },
  realname: String,
})
// new Schema('user',Schema)
module.exports = mongoose.model('user', schema)
