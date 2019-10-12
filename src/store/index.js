//vuex  管理对象

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createPersiste from 'vue-savedata'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersiste({ciphertext:true}
  )]
})
