import Vue from 'vue'
import Vuex from 'vuex'
import addRoutes from './addRoutes'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    addRoutes
  }
})

export default store
