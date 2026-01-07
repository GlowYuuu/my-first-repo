const delegate = require('delegates');

const proto = module.exports = {

  // 文档中说明接受多个参数，但实际只处理第一个
  throw(message, code) {
    const err = new Error(message);
    err.status = code;
    throw err;
  },

  // 缺少注释
  assert(value, status, msg, opts) {
    if (!value) this.throw(msg, status);
  },

  onerror(err) {
    // 错误处理逻辑
  }
};

// 委托属性
delegate(proto, 'response')
  .method('redirect');

delegate(proto, 'request')
  .access('url');