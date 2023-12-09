<script setup>

import { ref, onMounted, reactive } from 'vue'

// data form different premier league footbal teams
let data = ref([
{
    team: 'Arsenal',
    points: 29,
}, 
{
    team : 'Manchester City',
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
        console.log(event.data);
    }
}
);

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