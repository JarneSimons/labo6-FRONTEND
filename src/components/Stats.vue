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
    socket = new WebSocket("ws://localhost:5173");
}
);

// update stats teams after checking for new data





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