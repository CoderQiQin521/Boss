const userModel = require('../model/user')
const informationModel = require('../model/information')
const jsonwebtoken = require('jsonwebtoken')
const { SuccessMessage, ErrorMessage } = require('../utils/message')

module.exports = {
  index: async (ctx) => {
    ctx.body = new SuccessMessage({
      data: await userModel.find(),
      msg: '获取成功',
    })
  },
  register: async (ctx) => {
    let user = ctx.request.body
    let { username, _id } = await userModel.create(user)
    await informationModel.create({
      userId: _id,
    })

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
    const token = jsonwebtoken.sign(
      {
        userid: user._id,
      },
      'iloveu901105',
      {
        expiresIn: '1h',
      }
    )
    ctx.body = new SuccessMessage({ data: token, msg: '登陆成功' })
  },
  userinfo: async (ctx) => {
    let { _id } = await ctx.user
    let user = await informationModel.findOne({ userId: _id })
    ctx.body = new SuccessMessage({ data: '123', msg: '获取成功' })
  },
  save: async (ctx) => {
    let body = ctx.request.body
    let { _id } = ctx.user
    // 根据关联的userid 更新数据

    // await informationModel.findByIdAndUpdate(_id, body)
    ctx.body = new SuccessMessage({ data: null, msg: '更新成功' })
  },
}
