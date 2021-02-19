<template>
    <div class="col-12 col-lg-6 col-xl-3">
        <div class="card card-border-primary p-3 my-2 shadow bg-gradient text-light bg-success">
            <div class="card-body">
                <p class="fw-bold fs-3 p-2">
                    {{room.id}}
                </p>
                <hr class="my-4">
                <MemberRoom 
                    v-for='(member, index) in members'
                    :key="index"
                    :member="member"
                ></MemberRoom>
            </div>
        </div>
    </div>
</template>
<script>
import MemberRoom from '../components/MemberRoom'
export default {
    name: 'RoomCard',
    props: ['room'],
    components: {
        MemberRoom
    },
    computed : {
        members(){
            return this.room.scores;
        }
    }
}
</script>