// 由於
// nuxt 和 babel-plugin-import 两者不适配
// vant 这边无法提供出解决方案
// 避免引入多餘的xx，可能需要手動導入

// 默認設置為 繁體字
import { Locale } from 'vant'
import zhHK from 'vant/lib/locale/lang/zh-HK'
Locale.use('zh-HK', zhHK)

import Vue from 'vue'
import 'vant/lib/index.css'
import {
  Button,
  Field,
  Pagination,
} from 'vant'

Vue.use(Button)
Vue.use(Field)
Vue.use(Pagination)



// 導入所有組件
// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)