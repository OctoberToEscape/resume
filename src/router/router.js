import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    // 重定向
    path: "/",
    alias: "/index.html",
    redirect: () => {
      return "/";
    }
  }
]

let router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
