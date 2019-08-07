const SET_TOKEN = 'SET_TOKEN'

export const state = () => ({
    token: 'APeng'
})

export const mutations = {
    [SET_TOKEN](state, value) {
        state.token = value
    },
}

export const actions = {
    setToken({ commit }, value) {
        commit(SET_TOKEN, value)
    }
}