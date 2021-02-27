<template>
    <div>
      <WavyBg></WavyBg>
      <div class="container justify-content-center">
        <lottie-player class="mx-auto" src="https://assets4.lottiefiles.com/packages/lf20_E9IGj4.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
        <p class="display-3"> Lobby </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-12 card card-border-primary  p-3 my-2 bg-gradient text-dark bg-warning">
        <!--member room-->
          <h3 class="display-4 text-dark">{{room}}</h3>
          <p class="fw-bold fs-3 p-2 text-dark text-left">
            Players:
          </p>
          <MemberRoom v-for='(member, index) in players'
              :key="index"
              :member="member"
          ></MemberRoom>
        </div>
          <!--dashboard room master-->
        <div class="col-lg-2 col-md-12 card card-border-primary p-3 my-2 bg-gradient text-dark bg-warning justify-content-center align-items-center">
            <div>
              <button @click.prevent="startGame" class="btn py-5 btn-primary btn-round text-dark text-lg btn-block">
                <i class="far fa-paper-plane mb-2"></i>
                <div class="">
                  START!
                </div>
              </button>
            </div>
            <!-- </div> -->
        </div>
      </div>
    </div>
</template>
<script>
import MemberRoom from '../components/MemberRoom'
import WavyBg from '../components/WavyBg'
export default {
  name: 'LobbyPage',
  components: {
    MemberRoom, WavyBg
  },
  props: ['isRoomMaster'],
  computed: {
    room () {
      return this.$store.state.room
    },
    players () {
      return this.$store.state.players
    }
  },
  methods: {
    startGame () {
      this.$socket.emit('playerStartGame', this.room)
    }
  },
  watch: {
    // whenever question changes, this function will run
    players: function () {
      console.log(this.players)
    }
  }
}
</script>
