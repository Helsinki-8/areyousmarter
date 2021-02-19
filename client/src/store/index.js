import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms:[],
    questions:[],
    currentQuestion:{},
    score:0,
    isStarted:false,
    users:[],
    playerName : '',
    room : '',
    players : [],
  },
  mutations: {
    SOCKET_getAllRooms (state, rooms) {
      state.rooms = rooms
    },
    SOCKET_listPlayer(state,players) {
      state.players = players
    },
    SOCKET_initQuiz (state, questions) {
      state.questions = questions
    },
    SOCKET_updateScores (state, scores) {
      state.score = scores.filter(score => score.user === playerName)
    },
    SOCKET_playerLose (state) {
      // ga tau diisi kemana
    },
    setName(state,name) {
      state.playerName = name;
    },
    setRoom (state,roomName) {
      state.room = roomName;
    },
    joinRoom(state,room){
      state.room = room;
    },
  },
  actions: {
  },
  modules: {
  }
})
