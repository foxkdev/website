import { createRouter, createWebHistory } from 'vue-router'
// import VueRouteMiddleware from 'vue-route-middleware'
import VueRouteMiddleware from 'vue-route-middleware'

import AuthMiddleware from './middleware/auth'

import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            middleware: [AuthMiddleware]
        }
      },

    ]
  })
router.beforeEach(VueRouteMiddleware())
export default router