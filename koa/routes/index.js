const Router = require('koa-router')
const User = require('./user')
const auth = require('../middlewares/auth')
const router = new Router({
  prefix: '/api',
})

router.get('/', async (ctx) => {
  ctx.body = 23342
})

// todo: 模块化
router.get('/user', User.index)
router.post('/register', User.register)
router.post('/login', User.login)
router.get('/userinfo', auth, User.userinfo)
router.post('/save', auth, User.save)

module.exports = router
