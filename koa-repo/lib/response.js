module.exports = {
  
  /**
   * 设置响应状态码
   * @param {number} code - 状态码
   */
  set status(code) {
    this.res.statusCode = code;
  },

  // 缺失注释
  get status() {
    return this.res.statusCode;
  },

  /**
   * 设置响应体
   * @param {*} body - 响应内容
   */
  set body(val) {
    this._body = val;
  },

  // 文档说返回Object，但实际可能是各种类型
  /**
   * 获取响应体
   * @returns {Object} 响应体对象
   */
  get body() {
    return this._body;
  },

  // 缺少返回值注释
  redirect(url, alt) {
    this.status = 302;
    this.set('Location', url);
  },

  // 过时的方法，文档中已标记废弃但代码未更新
  jsonp(obj) {
    // JSONP实现
    return JSON.stringify(obj);
  }
};