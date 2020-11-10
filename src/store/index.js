import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const moduleA = {
  state: {
    count: 50
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--;
    }
  }
}

export default new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    a: moduleA
  }
})
