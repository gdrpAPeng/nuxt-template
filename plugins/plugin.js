import Vue from 'vue'
import { Locale } from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'
import zhHK from 'vant/lib/locale/lang/zh-HK'

import { sessionStorage } from '@/util/storage'

function vantLocale(lang) {
  if(lang === 'zh-HK') {
    Locale.use('zh-HK', zhHK)
  } else {
    Locale.use('en-US', enUS)
  }
}

Vue.prototype.$vantLocale = vantLocale

Vue.prototype.$sessionStorage = sessionStorage

// export default({ app }, inject) => {
// inject('vantLocale', (lang) => {
//     if(lang === 'zh-HK') {
//         Locale.use('zh-HK', zhHK)
//     } else {
//         Locale.use('en-US', enUS)
//     }
// })
// }