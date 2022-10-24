import { createApp } from 'vue'
import App from './App.vue'
//import Vue from 'vue'
import router from './router';

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
