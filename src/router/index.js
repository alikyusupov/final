import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index'

import Home from '../views/Home.vue'
import Main from '../components/Main.vue'
import Auth from '../views/Auth.vue'
import Signup from '../views/Signup.vue'
import Appointment from '../views/Appointment.vue'
import Chatroom from '../views/Chatroom.vue'
import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'

/*import Purpose from "../components/visa-components/Purpose.vue"
import Documents from "../components/visa-components/Documents.vue"
import Fees from "../components/visa-components/Fees.vue"
import Summary from "../components/visa-components/Summary.vue"*/

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/visa',
    name: 'Visa',
    component: Main,
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment,
    beforeEnter:(to ,from, next)=>{
      if (!store.state.isAuth) {
        console.log(store.state.isAuth)
        next({ name: 'Auth' })
      }
      else {
        console.log(store.state.isAuth)
        next()
      }
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chatroom
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter:(to ,from, next)=>{
      if (!store.state.isAdmin) {
        next({ name: 'Auth' })
      }
      else {
        next()
      }
    }
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
