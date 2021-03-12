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
import World from '../components/Map.vue'
//import Funland from "../views/Funland.vue"

const Funland = () => import('../views/Funland.vue')


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
    path: '/funland',
    name: 'Funland',
    component:Funland
  },
  {
    path: '/appointment',
    name: 'Appointment',
    component: Appointment,
    beforeEnter:(to ,from, next)=>{
      if (!store.state.isAuth) {
        next({ name: 'Auth' })
      }
      else {
        next()
      }
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chatroom,
    beforeEnter:(to ,from, next)=>{
      if (!store.state.isAuth) {
        next({ name: 'Auth' })
      }
      else {
        next()
      }
    }
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
  {
    path: '/map',
    name: 'Map',
    component: World
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
