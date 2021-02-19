<template>
    <div>
        <RoomForm></RoomForm>
        <div class="row">
            <RoomCard 
                v-for='(room, index) in rooms'
                :key="index"
                :room="room"
                @click.stop.native="enterRoom(room)"
            ></RoomCard>
        </div>
    </div>

</template>
<script>
import RoomForm from '../components/RoomForm'
import RoomCard from '../components/RoomCard'
export default {
    name: 'RoomsPage',
    components: {
        RoomForm, RoomCard
    }
}
</script>