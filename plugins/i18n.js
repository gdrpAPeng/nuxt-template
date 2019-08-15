import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import zhLang from '../assets/lang/zh-hk'
import enLang from '../assets/lang/en-us'

const config = {
  'en-US': [enLang],
  'zh-HK': [zhLang]
}

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.lang, //  nuxt 裏挂載到 store 裏
    messages: Object.keys(config).reduce((result, item) => {
      result[item] = (langArr => {
        let obj = {}
        langArr.forEach(item => obj = Object.assign(obj, item))
        return obj
      })(config[item])
      return result
    }, {})
  })
}