//引入cookie作为缓存
import Cookie  from "js-cookie"

//管理菜单

export default {
    state:{
        isCollapse: false ,//使用vuex控制菜单的展开还是收起
        menu:[]
    },
    mutations:{
        //修改菜单展开还是收起的方法
        collapseMenu(state){
            state.isCollapse=!state.isCollapse
        },
        setMenu(state,val){
            state.menu =val
            Cookie.set('menu',JSON.stringify(val))//cooie的数据必须是字符串
        }
    },
    //动态注册路由
    addMenu(state,router){
        //判断缓存中是否有数据
        
    }
}