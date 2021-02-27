<template>
    <div class="container" v-if="!isFinish">
        <div class="row">
          <div class="col-4 col-md-4 border rounded border-primary d-none d-sm-block">
            <div class="p-3">
              <p>Standings</p>
              <Player
                v-for="(pemain, index) in members"
                :key="index"
                :pemain="pemain"
              ></Player>
            </div>
          </div>
          <!--question component-->
          <div class="col-md-8 col-8">
            <p>{{timer}}</p>
            <div class="text-center">
              <h1 @change="resetAnswer">
                {{question.question}}
              </h1>
              <div v-if="!answered" class="mt-10 mx-auto" style="max-width: 300px;">
                <button @click.prevent="setPlayerAnswer(0)" class="btn py-3 btn-primary btn-round btn-lg text-dark text-lg btn-block"
                  >
                {{question.content[0]}}
                </button>
                <button @click.prevent="setPlayerAnswer(1)" class="btn py-3 btn-success btn-round btn-lg text-dark text-lg btn-block"
                  >
                {{question.content[1]}}
                </button>
                <button @click.prevent="setPlayerAnswer(2)" class="btn py-3 btn-info btn-round btn-lg text-dark text-lg btn-block"
                  >
                {{question.content[2]}}
                </button>
                <button @click.prevent="setPlayerAnswer(3)" class="btn py-3 btn-warning btn-round btn-lg text-dark text-lg btn-block"
                  >
                {{question.content[3]}}
                </button>
              </div>

              <!--if already answering but timer is not up-->
              <div v-if="answered" class="mt-10 mx-auto" style="max-width: 300px;">
                <button disabled class="btn py-3 btn-primary btn-round btn-lg text-dark text-lg btn-block"
                  >
                {{question.content[0]}}
                </button>
                <button disabled class="btn py-3 btn-success btn-round btn-lg text-dark text-lg btn-block"
                  >
                {{question.content[1]}}
                </button>
                <button disabled class="btn py-3 btn-info btn-round btn-lg text-dark text-lg btn-block"
                  >
                {{question.content[2]}}
                </button>
                <button disabled class="btn py-3 btn-warning btn-round btn-lg text-dark text-lg btn-block"
                  >
                {{question.content[3]}}
                </button>
              </div>
            </div>
          </div>
          <!--end of question component-->
        </div>
    </div>
    <div class="container" v-else>
      <div
        v-if="winner === playerName"
        class="text-center mx-auto" style="max-width: 300px;">
        <h1>You Win!</h1>
        <lottie-player class="mx-auto" src="https://assets6.lottiefiles.com/packages/lf20_mscnbzxs.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
        <button @click.prevent="backToHome" class="btn py-3 btn-success btn-round btn-lg text-dark text-lg btn-block"
        >
        back to Home
        </button>
      </div>
    <!--end winner-->
    <!--loss notif-->
      <div
        v-if="winner !== playerName"
        class="text-center mx-auto" style="max-width: 300px;">
        <h1>You Lose!</h1>
        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_wfiktcpm.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
        <button @click.prevent="backToHome" class="btn py-3 btn-success btn-round btn-lg text-dark text-lg btn-block"
        >
        back to Home
        </button>
      </div>
    </div>
</template>
<script>
import Player from '../components/Player'
export default {
  name: 'GamePage',
  components: {
    Player
  },
  data () {
    return {
      playerAnswer: -1,
      timer: 10
    }
  },
  methods: {
    // RunTimer () {
    //   let countdown = 10
    //   setInterval(() => {
    //     this.timer = countdown
    //     countdown -= 1
    //   }, 1000)
    // },
    setPlayerAnswer (val) {
      this.$store.commit('setAnswer')
      if (val === this.question.answer) {
        this.$socket.emit('correctAnswer', this.playerName, this.room)
      }
    },
    backToHome () {
      this.$socket.emit('backToHome')
      this.$router.push('/rooms')
    },
    resetAnswer () {
      this.playerAnswer = -1
    }
  },
  computed: {
    question () {
      return this.$store.state.currentQuestion
    },
    winner () {
      return this.$store.state.winner
    },
    playerName () {
      return this.$store.state.playerName
    },
    members () {
      return this.$store.state.players
    },
    room () {
      return this.$store.state.room
    },
    isFinish () {
      return this.$store.state.isFinish
    },
    answered () {
      return this.$store.state.answered
    }
  }
}
</script>
