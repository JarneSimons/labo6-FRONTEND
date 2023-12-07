import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import stats
import Stats from './components/Stats.vue'
// import updateStats
import UpdateStats from './components/UpdateStats.vue'

//import vue router
import * as VueRouter from 'vue-router'

const routes = [
    { path: '/', component: Stats },
    { path: '/updateStats', component: UpdateStats },
]

const router = VueRouter.createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
history: VueRouter.createWebHashHistory(),
routes, // short for `routes: routes`
})

const app = createApp(App) //vue. hier wegdoen omda we die al hebben geimporteerd
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

