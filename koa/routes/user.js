const userModel = require('../model/user')
const jsonwebtoken = require('jsonwebtoken')
const { SuccessMessage, ErrorMessage } = require('../utils/message')

module.exports = {
  index: async (ctx) => {
    ctx.body = await userModel.find()
  },
  register: async (ctx) => {
    let user = ctx.request.body
    let { username } = await userModel.create(user)

    ctx.body = new SuccessMessage({ data: { username }, msg: '注册成功' })
  },
  login: async (ctx) => {
    let { username, password } = ctx.request.body
    let user = await userModel
      .findOne({
        username,
      })
      .select('+password')
    if (!user) {
      ctx.body = new ErrorMessage({ msg: '用户不存在' })
      return
    }
    const isValid = require('bcryptjs').compareSync(password, user.password)
    if (!isValid) {
      ctx.body = new ErrorMessage({ msg: '密码错误' })
      return
    }
    const token = jsonwebtoken.sign(ctx.request.body, 'iloveu901105', {
      expiresIn: '1h',
    })
    ctx.body = new SuccessMessage({ data: token, msg: '登陆成功' })
  },
}
