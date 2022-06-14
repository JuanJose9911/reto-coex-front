import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import empleados from './empleados'
import contratos from './contratos'

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    empleados,
    contratos
  }
})
