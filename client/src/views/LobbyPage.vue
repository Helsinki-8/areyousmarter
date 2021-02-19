<template>
      <div class="row justify-content-center">
        <WavyBg></WavyBg>
        <div class="col-3 card card-border-primary  p-3 my-2 bg-gradient text-dark bg-warning">
        <!--member room-->
          <h3>{{room.id}}</h3>
          <p class="fw-bold fs-3 p-2 text-dark">
            Players:
          </p>
          <MemberRoom 
              v-for='member in players'
              :key="member"
              :member="member"
          ></MemberRoom>
        </div>
          <!--dashboard room master-->
        <div class="col-2 card card-border-primary p-3 my-2 bg-gradient text-dark bg-warning justify-content-center align-items-center">
            <!-- <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_E9IGj4.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player> -->
            <div>
              <button @click.prevent="startGame" class="btn py-5 btn-primary btn-round btn-lg text-dark text-lg btn-block">
                <i class="far fa-paper-plane mb-2"></i>
                <div class="">
                  START!
                </div>
              </button>
            </div>
            <!-- </div> -->
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
  computed : {
    room(){
      return this.$store.state.room;
    },
    players(){
      return this.$store.state.players;
    }
  },
  methods:{
    startGame(){
      console.log(this.members);
    }
  },
  watch: {
    // whenever question changes, this function will run
    players: function () {
      console.log(players)
    }
  }
}
</script>