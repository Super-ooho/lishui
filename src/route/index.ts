import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../../src/pages/MainPage.vue'
import DianJia from '../../src/pages/DianJia.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        component: MainPage
      },
      {
        path: '/DianJia',
        component: DianJia
      }
    ]
  })

  export default router