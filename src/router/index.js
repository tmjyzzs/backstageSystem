import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main.vue'
import Mall from "../views/Mall.vue"
import PageOne from "../views/PageOne.vue"
import PageTwo from "../views/PageTwo.vue"
import Login from "../views/Login.vue"

Vue.use(VueRouter)
//1.创建路由组件
//2.引入路由组件
//3.讲路由与组件进行映射
const routes = [
    {
        //主路由
        path:'/',
        component:Main,
        //redirect:'/home',//重定向
        name:'Main',
        children:[
            //子路由
            {path:'home',component:Home},//首页
            {path:'User',component:User},//用户管理
            {path:'mall',component:Mall},//商品管理
            {path:'page1',component:PageOne},//商品管理
            {path:'page2',component:PageTwo},//商品管理
        ]
    },
    {
        path:'/login',  
        name:'login',
        component:Login
    }
    
]
const router = new VueRouter({
    routes //简写=routes:routes
})
export default router

