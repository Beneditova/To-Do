import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/ToDo.vue'

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
