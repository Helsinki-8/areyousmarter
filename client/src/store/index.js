import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    questions: [],
    currentQuestion: {},
    score: 0,
    isStarted: false,
    users: [],
    playerName: '',
    room: '',
    players: [],
    isFinish: false,
    winner: '',
    lose: false,
    answered: false
  },
  mutations: {
    SOCKET_getAllRooms (state, rooms) {
      state.rooms = rooms
    },
    SOCKET_listPlayer (state, players) {
      state.players = players
    },
    SOCKET_initQuiz (state, questions) {
      state.questions = questions
    },
    SOCKET_updateScores (state, scores) {
      state.score = scores.filter(score => score.user === state.playerName)
      state.players = scores
    },
    SOCKET_getQuestion (state, question) {
      console.log('ini dari getquestion')
      state.currentQuestion = question
      state.answered = false
    },
    SOCKET_gameFinish (state, score) {
      state.isFinish = true
      state.winner = score.user
    },
    SOCKET_startGame () {
      router.push('/game')
    },
    SOCKET_playerLose (state) {
      state.lose = true
    },
    setName (state, name) {
      state.playerName = name
    },
    setRoom (state, roomName) {
      state.room = roomName
    },
    joinRoom (state, room) {
      state.room = room
    },
    setAnswer (state) {
      state.answered = true
    }
  },
  actions: {
  },
  modules: {
  }
})
