import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DietCreator from '@/views/DietCreator.vue'
import FoodCreator from '@/views/FoodCreator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/food-creator',
    name: 'Diet Creator',
    component: DietCreator
  },
  {
    path: '/food-creator',
    name: 'Food Creator',
    component: FoodCreator
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
