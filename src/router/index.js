import { createRouter, createWebHistory } from 'vue-router'
import jobListing from '../views/jobListing.vue'
import login from '../components/login.vue'
import home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {

        path: '/',
        name: '/',
        component: login
    },
    {

      path: '/jobs',
      name: 'jobs',
      component: jobListing
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

export default router
