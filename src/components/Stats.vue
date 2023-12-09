<script setup>

import { ref, onMounted, reactive } from 'vue'

// data form different premier league footbal teams
let data = ref([
{
    team: 'Aston Villa',
    points: 29,
}, 
{
    team : 'Chelsea',
    points: 32,
},
{
    team: 'Liverpool',
    points: 24,
}
]);

let socket = null

onMounted(()=> {
    // connect to websocket
    socket = new WebSocket("ws://localhost:3000/primus");

    // after connection update points
    socket.onmessage = (event) => {
        let message = JSON.parse(event.data);
        if(message.action === "update") {
            data.value.push({
                team: message.team,
                points: message.points
            });
            
    }
}
});

// get data from websocket






</script>


<template>
    <!-- create ul with teams  -->
    <div>
        <ul>
            <li v-for="team in data" :key="team.team">
                {{ team.team }} : {{ team.points }}
            </li>
        </ul>
    </div>
  
</template>


<style scoped>
</style>