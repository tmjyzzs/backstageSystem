import Vue from 'vue'
import Vuex from 'vuex'
// 模块式开发
import home from './modules/home'
import search  from './modules/search'
import detail from './modules/detail'
// 需要使用插件一次
Vue.use(Vuex)
//创建vuex
export default new Vuex.Store({
    modules: {
        home,
        search,
        detail
    }
})