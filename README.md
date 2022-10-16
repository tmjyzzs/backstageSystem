## 手写Vue后台管理系统

### 开发日期...

10月13日
使用vue脚手架、创建路由

### 开发笔记

#### router的使用

步骤（查看官网使用）
1.创建一个路由文件夹里面存放index.js文件
2.index.js里面创建router并且暴露出去

```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
Vue.use(VueRouter)
//1.创建路由组件
//2.引入路由组件
//3.讲路由与组件进行映射
const routes = [
    {path:'/home',component:Home},
    {path:'/User',component:User}
]
const router = new VueRouter({
    routes //简写=routes:routes
})
export default router
```

3.在程序路口(main.js)应用router

```js
import router from './router' //如果存在index.js 会默认读取
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  //挂载路由组件
  router,
  render: h => h(App),
}).$mount('#app')
```

4.在App.vue设置路由出口，将路由组件展示在页面的指定位置

```html
 <!-- 路由出口 -->
    <router-view></router-view>
```

