<template>
    <div class="p-3 mx-auto rounded bg-gradient" style="max-width: 400px; text-align:center" id="loginContainer">
      <div class="justify-content-center">
        <lottie-player class="mx-auto" src="https://assets2.lottiefiles.com/packages/lf20_h8lk5ow8.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>
      </div>
      <form id="login-form" v-on:submit.prevent="postLogin" action="#" method="post">
        <br />
        <div class="mb-3 form-floating">
          <p for="playerName" class="font-weight-bold text-success display-4">Your Name?</p>
          <input
            type="text"
            class="form-control form-control-lg  bg-light form-lg rounded"
            placeholder=""
            id="playerName"
            name="playerName"
            v-model="playerName"
          />
        </div>
        <div class="mb-3 p-3">
          <input
            type="submit"
            id="submitLogin"
            class="btn btn-primary btn-round btn-lg "
            value="ENTER!"
          />
        </div>
      </form>
    </div>
</template>
<script>
export default {
  name: 'NameForm',
  data () {
    return {
      playerName: ''
    }
  },
  methods: {
    postLogin () {
      this.$socket.emit('newPlayer', { playerName: this.playerName, score: 0 })
      this.$store.commit('setName', this.playerName)
      this.$router.push('/rooms')
    }
  }
}
</script>
