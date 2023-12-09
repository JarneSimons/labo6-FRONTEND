<script setup>
   import { ref, onMounted, reactive } from 'vue'

// data form different premier league footbal teams
let teams = reactive([
{
    team: 'Arsenal',
}, 
{
    team : 'Manchester City',
},
{
    team: 'Manchester United',
}
]);

let socket = null
let teamsDropdown = ref();
let points = ref();

onMounted(()=> {
    // connect to websocket
    socket = new WebSocket("ws://localhost:3000/primus");
}
);

// update stats teams 
const updatePoints = () => {
    if (socket.readyState === WebSocket.OPEN) {
        let update = {
            team: teamsDropdown.value,
            points: points.value,
            action: "update"
        };
        socket.send(JSON.stringify(update)); 
    } else {
        console.error("WebSocket connection not open.");
    }
}





</script>

<template>
  <div>
    <label for="chooseTeam">Select a Team:</label>
    <select v-model="teamsDropdown" id="chooseTeam">
        <option v-for="team in teams" :key="team.team" :value="team.team">
            {{ team.team }}
        </option>
    </select>

    <div>
        <label for="points">Points to update:</label>
        <input type="number" id="points" name="points" v-model="points">
    
        <button @click="updatePoints">Send</button>

    </div>
  </div>
</template>

<style scoped>
</style>