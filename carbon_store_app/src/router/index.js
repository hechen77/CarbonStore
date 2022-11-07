import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";
import UserLogin from "@/views/UserLogin";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:Home,
  },
  {
    path:"/login",
    name:"userLogin",
    component: UserLogin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
