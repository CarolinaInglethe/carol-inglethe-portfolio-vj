import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sobre',
    name: 'sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import( '../views/PortfolioView.vue')
  },
  {
    path: '/tecnologias',
    name: 'tecnologias',
    component: () => import( '../views/TechnologiesView.vue')
  },
  {
    path: '/experiencias',
    name: 'experiencias',
    component: () => import( '../views/ExperiencesView.vue')
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import( '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
