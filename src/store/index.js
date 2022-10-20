import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)

//创建vuex
 export default new Vuex.Store({
    modules:{
        tab
    }
 })