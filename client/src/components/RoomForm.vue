<template>
    <div class="p-3 mx-auto rounded bg-gradient" style="max-width: 400px; text-align:center" id="roomFormContainer">
        <form id="room-form" v-on:submit.prevent="postLogin" action="#" method="post">
          <br />
          <div class="mb-3 form-floating">
            <!-- <label for="roomName" class="col-form-label font-weight-bold text-primary">Your Name?</label> -->
            <input
              type="text"
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
    name: 'RoomForm'
}
</script>