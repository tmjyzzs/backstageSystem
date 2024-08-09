import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Register from '@/views/Register'
import Detail from '@/views/detail'
export default [
    {
        path: '/home',
        component: Home,
        name: 'home',
        meta: { show: true }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/detail/:skuId',
        component: Detail
    },
    {
        path: '/search/:keyword?',
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