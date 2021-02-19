<template>
    <div class="row m-2">
        <img class="col-2 p-0 m-0" src="https://ui-avatars.com/api/?background=random&name=atma+joko&rounded=true" width="32px" height="32px">
        &nbsp;&nbsp;{{member.name}}
    </div>
</template>
<script>
export default {
    name: 'MemberRoom',
    props: ['member']
}
</script>

///// dicebear avatar ///////
// import Avatars from '@dicebear/avatars';
// import sprites from '@dicebear/avatars-bottts-sprites';

// let options = {};
// let avatars = new Avatars(sprites, options);
// let svg = avatars.create('custom-seed');
//////
npm install --save @dicebear/avatars @dicebear/avatars-bottts-sprites
////
