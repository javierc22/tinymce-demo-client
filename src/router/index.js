import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/nuevo',
    name: 'New',
    component: () => import(/* webpackChunkName: "New" */ '../views/New.vue')
  },
  {
    path: '/:id',
    name: 'Show',
    component: () => import(/* webpackChunkName: "New" */ '../views/Show.vue')
  },
  {
    path: '/:id/editar',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "New" */ '../views/Edit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
