import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/vue3Demo'
  },
  {
    path: '/vue3Demo',
    name: 'vue3Demo',
    component: () => import('@/pages/vue3Demo')
  },
  {
    path: '/webpackLoader',
    name: 'webpackLoader',
    component: () => import('@/pages/webpackLoader')
  },
  {
    path: '/yanhua',
    name: 'yanhua',
    component: () => import('@/pages/yanhua')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
