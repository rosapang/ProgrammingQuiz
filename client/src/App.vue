<template>
  <NavBar />
  <LogIn />
</template>

<script>
// import ClientTasks from './components/ClientTasks.vue'

// export default {
//   name: 'App',
//   components: {
//     // ClientTasks
//   }
// }
import NavBar from '@/components/NavBar.vue'
import LogIn from '@/views/LogIn.vue'

export default {
  components: {NavBar, LogIn}
}
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
