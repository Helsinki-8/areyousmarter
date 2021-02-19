import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms:[],
    questions:[],
    currentQuestion:[],
    score:0,
    isStarted:false,
    users:[]
  },
  mutations: {
  },
  actions: {
    joinRoom(){
    }
  },
  modules: {
  }
})
