<template>
  <div id="app">
    <p>
    <!-- <ClientTasks /> -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
    </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
  </div>
</template>

<script>
// import ClientTasks from './components/ClientTasks.vue'

export default {
  name: 'App',
  components: {
    // ClientTasks
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
