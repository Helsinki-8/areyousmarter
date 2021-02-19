<template>
    <div>
        <WavyBg></WavyBg>
        <NameForm></NameForm>
    </div>
    <!-- <div class="row d-flex justify-content-center self-items-center h-100">
        <div class="col-6 h-50">
            <div class="card">
                <div class="card-header">
                    <div class="card-body">
                        <form action="" @submit.prevent="joinRoom">
                            <div class="form-group">
                                <label for="">Your name</label>
                                <input type="text" class="form-control" v-model="username">
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary btn-block">Join</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
import WavyBg from '../components/WavyBg'
import NameForm from '../components/NameForm'

export default {
  name: 'WelcomePage',
  data () {
    return {
      username: ''
    }
  },
  components: {
    WavyBg,
    NameForm
  },
  methods: {
  }
}
</script>

<style>

</style>
