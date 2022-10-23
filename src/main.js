
//程序的入口文件
//去寻找app.vue总组件
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router' //如果存在index.js 会默认读取
import store from './store' //将vuex挂载在vue实例上 
import './api/mock'
import Cookie from 'js-cookie'
Vue.config.productionTip = false
//全局引入饿了吗UI
Vue.use(ElementUI)



new Vue({
  //挂载vuex到vue实例上
  store,
  //挂载路由组件
  router,
  render: h => h(App),
}).$mount('#app')

//添加全局前置导航守卫
router.beforeEach((to,from,next)=>{
  //判断token是否存在
  const token =Cookie.get('token')
  // token不存在，用户未登入，跳转至登入页面
  if(!token && to.name !== 'login'){
    next({name:'/login'})
   
  } else if (token && to.name ==='login') { 
    next({name:'home'})
  }
  else{
    next()
  }
})