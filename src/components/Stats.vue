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
    socket = new WebSocket("wss://labo6-backend-c9ph.onrender.com/primus");

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
    <div class="listTeams">
        <ul>
            <li v-for="team in data" :key="team.team">
                {{ team.team }} : {{ team.points }}
            </li>
        </ul>
    </div>
  
</template>


<style scoped>
    /* body {
        background-image: url(../assets/score.svg);
    } */

    .listTeams {
        background-image: url(../assets/score.svg);
        background-repeat: no-repeat;
        background-size: 100%;
        height: 100vh;
        background-position: center;

        
    }

    .listTeams ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        
        font-size: 0.8em;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding-top: 10rem;
        
    }

    .listTeams li {
        padding: 0.5em;
        margin-bottom: 1rem;
        background-color: #fff;
        border-radius: 5%;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
    }
</style>