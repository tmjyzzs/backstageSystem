import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Register from '@/views/Register'


Vue.use(VueRouter)
//1.创建路由组件
//2.引入路由组件
//3.讲路由与组件进行映射
const routes = [
    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/search/:keyWord',
        component: Search,
        meta: { show: true },
        name: "search"
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: "*",
        redirect: "/home"
    }

]
const router = new VueRouter({
    routes //简写=routes:routes
})
export default router

