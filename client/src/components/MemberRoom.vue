<template>
    <div class="row m-2 align-items-center">
      <div class="col-auto">
        <img class="p-0 m-0" :src="'https://ui-avatars.com/api/?background=random&name=+'+member.user+'&rounded=true'" width="32px" height="32px">
      </div>
      <div class="col-auto px-0">
        <span class="display-5">
          {{member.user}}
        </span>
      </div>
    </div>
</template>
<script>
export default {
  name: 'MemberRoom',
  props: ['member']
}
</script>
