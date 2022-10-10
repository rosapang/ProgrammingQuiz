import { createApp } from 'vue'
import App from './App.vue'
//import Vue from 'vue'

// import axios
import axios from 'axios'

// set a prototype for http
//Vue.prototype.$http = axios;

//Vue.config.productionTip = false

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.mount('#app')
