/**
 * Koa应用类
 */
class Application {
  constructor(options) {
    this.middleware = [];
  }

  /**
   * 使用中间件
   */
  use(fn) {
    this.middleware.push(fn);
    return this;
  }

  // 缺少参数和返回值注释
  listen(...args) {
    const server = require('http').createServer(this.callback());
    return server.listen(...args);
  }

  callback() {
    // 实现细节...
    return (req, res) => {};
  }
}

module.exports = Application;