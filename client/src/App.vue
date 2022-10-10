<template>
  <div id="app">
    <ClientTasks />
  </div>
</template>

<script>
import ClientTasks from './components/ClientTasks.vue'

export default {
  name: 'App',
  components: {
    ClientTasks
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
