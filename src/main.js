
//程序的入口文件
//去寻找app.vue总组件
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router' //如果存在index.js 会默认读取
import store from './store' //将vuex挂载在vue实例上 
import './api/mock'
import "./styles/reset.css"
Vue.config.productionTip = false
//全局引入饿了吗UI
Vue.use(ElementUI)

// 全局组件
import typeNav from "./components/typeNav"
Vue.component(typeNav.name, typeNav)

//引入mockServe.js -- mock数据
import '@/mock/mockServe'

// 引入swiper样式
import 'swiper/css/swiper.css'




new Vue({
  //挂载vuex到vue实例上
  store,
  //挂载路由组件
  router,
  render: h => h(App),
}).$mount('#app')
