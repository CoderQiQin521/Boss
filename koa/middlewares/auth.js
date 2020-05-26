const userModel = require('../model/user')
const jsonwebtoken = require('jsonwebtoken')

// http-assert

module.exports = async (ctx, next) => {
  let { body, headers } = ctx.request
  let token = headers.authorization.split(' ').pop()
  let { userid } = jsonwebtoken.verify(token, 'iloveu901105')
  let user = await userModel.findById(userid)
  ctx.user = user
  await next()
}
