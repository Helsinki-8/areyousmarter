<template>
    <div class="row p-2 alert alert-default justify-content-between">
        <img class="" src="https://ui-avatars.com/api/?background=random&name=atma+joko&rounded=true" width="32px" height="32px">
        <span>
        &nbsp;&nbsp;{{player.name}}
        </span>
        <span class="badge badge-default">Score: {{player.score}}</span>
    </div>
</template>
<script>
export default {
    name: 'Player',
    props: ['player']
}
</script>