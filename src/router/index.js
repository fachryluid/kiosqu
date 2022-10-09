import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Auth',
    component: () => import('../views/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
