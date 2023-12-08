<script setup>
   import { ref, onMounted, reactive } from 'vue'

// data form different premier league footbal teams
let teams = reactive([
{
    team: 'Arsenal',
    points: 29,
}, 
{
    team : 'Manchester City',
    points: 32,
},
{
    team: 'Manchester United',
    points: 24,
}
]);

let socket = null


onMounted(()=> {
    // connect to websocket
    socket = new WebSocket("ws://localhost:5173");
}
);

// update stats teams 
const updatePoints = () => {
    let update = {
        "team": teamsDropdown.value,
        "points": points.value,
        "action": "update"
    }
    socket.send(JSON.stringify(update));
}




</script>

<template>
  <div>
    <label for="teamsDropdown">Select a Team:</label>
    <select name="teamsDropdown">
        <option v-for="team in teams" :key="team.team" :value="team.team">
            {{ team.team }}
        </option>
    </select>

    <div>
        <label for="points">Points:</label>
        <input type="text" id="points" name="points" :value="teams.points">
    
        <button @click="sendStats">Send</button>

    </div>
  </div>
</template>

<style scoped>
</style>