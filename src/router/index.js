import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( '../views/HomeView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import( '../views/AboutView.vue')
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
