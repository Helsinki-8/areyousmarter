<template>
    <div class="row m-2">
        <img class="col-2 p-0 m-0" src="https://ui-avatars.com/api/?background=random&name={{member.name}}&rounded=true" width="32px" height="32px">
        &nbsp;&nbsp;{{member.user}}
    </div>
</template>
<script>
export default {
    name: 'MemberRoom',
    props: ['member']
}
</script>
