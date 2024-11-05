import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: 'ua',
  },
  getters: {
    locale: state => state.locale,
  },
  mutations: {
    GET_LOCALE: state => {
      state.locale = localStorage.language || 'en'
    },
    SET_LOCALE: (state, lng) => {
      localStorage.language = lng
      state.locale = lng
    },
  },
  actions: {
    LOAD_LANGUAGE: ({ commit, dispatch }) => {
      commit('GET_LOCALE')
    },
    CHANGE_LANGUAGE: ({ commit, dispatch }, lng) => {
      localStorage.setItem('language', lng)
      commit('SET_LOCALE', lng)
    },
  },
  modules: {
  }
})
