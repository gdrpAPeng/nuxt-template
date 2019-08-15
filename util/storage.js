/*
 * @Author: APeng 
 * @Date: 2019-08-12 11:17:45 
 * @Last Modified by: APeng
 * @Last Modified time: 2019-08-12 14:36:40
 */

// nuxt 下 vuex 刷新获取到的一直是初始化的值
// 封装 SessionStorage 准备一把梭了

export const sessionStorage = {
  getItem(key) {
    let result = window.sessionStorage.getItem(key)
    // 判断是字符串还是对象
    // eslint-disable-next-line
        let reg = /^[{\[].*[}\]]$/g.test(result)
    if(reg) {
      return JSON.parse(result)
    }
    return result
  },
  setItem(key, value) {
    if(typeof value != 'string') {
      value = JSON.stringify(value)
    }
    window.sessionStorage.setItem(key, value)
  },
  removeItem(key) {
    window.sessionStorage.removeItem(key)
  }
}
