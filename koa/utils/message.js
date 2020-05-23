class Message {
  constructor({ code = 0, data = [], msg = '成功' }) {
    this.code = code
    this.msg = msg
    this.data = data
  }
}
class SuccessMessage extends Message {
  constructor({ code = 0, data = [], msg = '成功' }) {
    super({ code, data, msg })
  }
}
class ErrorMessage extends Message {
  constructor({ code = 1, data = null, msg = '失败' }) {
    super({ code, data, msg })
  }
}
module.exports = {
  SuccessMessage,
  ErrorMessage,
}
