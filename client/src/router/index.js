import {createRouter, createWebHistory} from 'vue-router'

// 1. Define route components.
// These can be imported from other files
import LogIn from '@/views/LogIn.vue'
import SignUp from '@/views/SignUp.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/login', component: LogIn},
  { path: '/signup', component: SignUp}
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(process.env.BASE_URL),
    routes, // short for `routes: routes`
  })

export default router