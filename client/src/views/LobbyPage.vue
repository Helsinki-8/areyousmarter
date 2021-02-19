<template>
      <div class="row justify-content-center">
        <div class="col-3 card card-border-primary  p-3 my-2 bg-gradient text-dark bg-warning">
        <!--member room-->
          <h3>{{room.name}}</h3>
          <p class="fw-bold fs-3 p-2 text-dark">
            Players:
          </p>
          <MemberRoom 
              v-for='(member, index) in members'
              :key="index"
              :member="member"
          ></MemberRoom>
          <!--dashboard room master-->
        </div>
        <div class="col-2 card card-border-primary p-3 my-2 bg-gradient text-dark bg-warning justify-content-center align-items-center">
            <!-- <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_E9IGj4.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player> -->
            <div>
              <button class="btn py-5 btn-primary btn-round btn-lg text-dark text-lg btn-block">
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
export default {
    name: 'LobbyPage',
    components: {
        MemberRoom
    },
    props: ['room', 'isRoomMaster']
    
}
</script>