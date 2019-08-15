// import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'
// import VantLocale from '@/plugins/vant-locale'
const SET_LANG = 'SET_LANG'
import Cookie from 'js-cookie'

export const state = () => ({
  locales: ['en-US', 'zh-HK'],
  locale: Cookie.get('lang') || 'zh-HK'
})

export const mutations = {
  [SET_LANG](state, locale) {
    if(state.locales.includes(locale)) {
      state.locale = locale
      Cookie.set('lang', locale)
      // this.$vantLocale(locale) // 更新 vant-ui 的語言
    }
  },
}

export const actions = {
  setLang({ commit }, value) {
    commit(SET_LANG, value)
  }
}

// const cookieStorage = {
//     getItem: function(key) {
//         return Cookies.getJSON(key)
//     },
//     setItem: function(key, value) {
//         return Cookies.set(key, value, { expires: 3, secure: false })
//     },
//     removeItem: function(key) {
//         return Cookies.remove(key)
//     }
// }

// export default () => {
//     return new Vuex.Store({
//         state,
//         mutations,
//         actions,
//         // plugins: [createPersistedState({
//         //     storage: cookieStorage,
//         //     getState: cookieStorage.getItem,
//         //     setState: cookieStorage.setItem
//         // })]
//     })
// }