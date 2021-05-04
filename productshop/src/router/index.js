import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import About from '../views/About.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ProductList',
    name: 'ProductList',
    component: ProductList,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
