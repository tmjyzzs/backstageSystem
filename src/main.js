
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
import carousel from './components/carousel'
Vue.component(carousel.name, carousel)
import Pagination from './components/pagination'
Vue.component(Pagination.name, Pagination)
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
  // 创建全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
