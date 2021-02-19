import Vue from 'vue'
import VueRouter from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import RoomsPage from '../views/RoomsPage.vue'
import LobbyPage from '../views/LobbyPage.vue'
import GamePage from '../views/GamePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: WelcomePage
  },
  {
    path: '/rooms',
    name: 'RoomsPage',
    component: RoomsPage
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: LobbyPage
  },
  {
    path: '/game',
    name: 'Game',
    component: GamePage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
