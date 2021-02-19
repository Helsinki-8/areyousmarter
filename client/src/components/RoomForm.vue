<template>
    <div class="p-3 mx-auto rounded bg-gradient" style="max-width: 400px; text-align:center" id="roomFormContainer">
        <form id="room-form" v-on:submit.prevent="createRoom" action="#" method="post">
          <br />
          <div class="mb-3 form-floating">
            <input
              type="text"
              v-model="roomNameInput"
              class="form-control form-control-lg  bg-secondary form-lg rounded"
              placeholder=""
              id="roomName"
              name="roomName"
            />
          </div>
  
          <div class="mb-3 p-3">
            <input
              type="submit"
              id="submitNewRoom"
              class="btn btn-primary btn-round btn-lg "
              value="Create New Room!"
            />
          </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'RoomForm',
    data () {
      return {
        roomNameInput : ''
      }
    },
    methods: {
      createRoom(){
        this.$socket.emit('createRoom',{ roomName : this.roomNameInput });
        this.$store.commit('setRoom', this.roomNameInput)
        this.$router.push('/lobby');
      }
    }
}
</script>