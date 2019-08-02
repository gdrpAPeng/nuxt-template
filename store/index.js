import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export const state = () => ({
    locales: ['en-US', 'zh-CN'],
    locale: 'zh-CN'
})

export const mutations = {
    SET_LANG(state, locale) {
        if(state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    },
}

export const actions = {
    setLang({ commit }, value) {
        commit('SET_LANG', value)
    }
}

export default () => {
    return new Vuex.Store({
        state,
        mutations,
        actions,
        plugins: [createPersistedState({
            storage: window.sessionStorage
        })]
    })
}