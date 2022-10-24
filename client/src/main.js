import { createApp } from 'vue'
import App from './App.vue'
//import Vue from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import LogIn from '@/views/LogIn.vue'

// 1. Define route components.
// These can be imported from other files
const Home = { template: '<div>Home</div>' }

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LogIn},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(process.env.BASE_URL),
  routes, // short for `routes: routes`
})


// import axios
import axios from 'axios'

// set a prototype for http
//Vue.prototype.$http = axios;

//Vue.config.productionTip = false

const app = createApp(App);
app.config.globalProperties.$axios = axios;

// // 5. Create and mount the root instance.
// const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
