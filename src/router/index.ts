import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ServicesView from '@/views/ServicesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre',
      name: 'about',
      component: AboutView
    },
    {
      path: '/servicos',
      name: 'services',
      component: ServicesView
    },
  
  ]
})

export default router
