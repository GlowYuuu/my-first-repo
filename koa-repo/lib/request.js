const url = require('url');

module.exports = {
  
  /**
   * 获取请求URL
   */
  get url() {
    return this.req.url;
  },

  // 过时的注释：这里提到返回字符串，但实际上返回URL对象
  /**
   * 解析URL
   * @returns {string} 解析后的URL字符串
   */
  get parsedUrl() {
    return url.parse(this.req.url, true);
  },

  // 缺少参数说明
  accepts(types) {
    // 实现细节
    return this.req.accepts(types);
  },

  // 文档描述的参数与实际不符
  /**
   * 检查请求类型
   * @param {string} type - 类型
   * @returns {boolean} 是否匹配
   */
  is(type) {
    // 实际实现接受数组参数
    if (Array.isArray(type)) return type.includes(this.get('Content-Type'));
    return this.get('Content-Type') === type;
  }
};