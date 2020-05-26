const mongoose = require('../db/mongo')

const schema = mongoose.Schema({
  advantage: String,
  expect: [
    {
      position: String, // 职位
      industry: String, // 行业
      pay: String, // 薪水
    },
  ],
  projects: [
    {
      name: String, // 名称
      role: String, // 角色
      startTime: String, // 项目开始时间
      endTime: String, // 项目结束时间
      desc: String, // 描述
      link: String, // 项目链接
    },
  ],
  homepage: String,
})

module.exports = mongoose.model('resume', schema)
