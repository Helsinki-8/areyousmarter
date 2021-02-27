<template>
    <div class="row p-2 alert alert-default justify-content-between">
        <img class="" :src="'https://ui-avatars.com/api/?background=random&name=+'+pemain.user+'&rounded=true'" width="32px" height="32px">
        <span>
        &nbsp;&nbsp;{{pemain.user}}
        </span>
        <span class="badge badge-default">Score : {{pemain.score}}</span>
    </div>
</template>
<script>
export default {
  name: 'Player',
  props: ['pemain'],
  created: function () {
    console.log(this.pemain, 'asdsaddasa')
  }
}
</script>
