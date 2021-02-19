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
              <h1>
                {{question.question}}
              </h1>
              <div v-if="playerAnswer.length === 0" class="mt-10 mx-auto" style="max-width: 300px;">
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
              <div v-if="playerAnswer.length > 0" class="mt-10 mx-auto" style="max-width: 300px;">
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
      <h1>finish</h1>
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
      playerAnswer: '',
      timer: 10
    }
  },
  methods: {
    RunTimer () {

    },
    setPlayerAnswer (val) {
      if (val === this.question.answer) {
        this.$socket.emit('correctAnswer', this.playerName, this.room)
      }
    }
  },
  computed: {
    question () {
      return this.$store.state.currentQuestion
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
    }
  }
}
</script>
