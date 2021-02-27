<template>
    <div>
        <WavyBg></WavyBg>
        <h3 class="text-light display-4">Welcome {{playerName}}</h3>
        <RoomForm></RoomForm>
        <div class="container">
            <!-- <img src="happy.svg" v-if="rooms.length === 0" alt="My Happy SVG" /> -->
            <div class="row">
                <RoomCard v-for='(room, index) in rooms'
                    :key="index"
                    :room="room"
                    @click.stop.native="enterRoom(room)"
                ></RoomCard>
            </div>
        </div>

    </div>

</template>
<script>
import WavyBg from '../components/WavyBg'
import RoomForm from '../components/RoomForm'
import RoomCard from '../components/RoomCard'
export default {
  name: 'RoomsPage',
  components: {
    RoomForm, RoomCard, WavyBg
  },
  computed: {
    rooms () {
      return this.$store.state.rooms
    },
    playerName () {
      return this.$store.state.playerName
    }
  },
  methods: {
    enterRoom (room) {
      this.$socket.emit('joinRoom', this.playerName, room.id)
      this.$store.commit('joinRoom', room.id)
      this.$router.push('/lobby')
    }
  }
}
</script>
