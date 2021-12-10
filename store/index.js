import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fictitiousData: {}
  },
  mutations: {
    SET_DATA(state, obj) {
      state.fictitiousData = obj
    }
  }
})
