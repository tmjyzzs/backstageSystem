<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 使用三元表达式 -->
    <h3>{{isCollapse ? '后台':'通用后台管理系统'}}</h3>
    <!-- 使用v-for进行数据渲染 :index单项绑定 ;使用了v-for进行循环所以每一个菜单都传入了各自的item-->
    <el-menu-item @click="clickMenu(item)" v-for ="item in noChildren" :key ="item.name" :index="item.name">
      
        <!-- 模板字符串 -->
      <i :class="`el-icon-${item.icon}`"></i>
        <!-- 计算属性 -->
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <!-- 二级菜单 -->
    <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>



<style lang='less' scope>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.le-menu{
    height: 100vh;
    .h3{
        color:#fff;
        text-align: center;
        line-height: 48px;
    }
}
</style>

<script>
import Cookie  from "js-cookie"
export default {
  data() {
    return {
      //isCollapse: false,
     
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //点击菜单，获取到了item中的数据
    clickMenu(item){
      if(this.$route.path !==item.path && !(this.$route.path === '/home' && (item.path === '/'))){
        console.log(item)
        this.$router.push(item.path)
      }
        
    } 
  },
  computed:{
    //没有子菜单
    noChildren(){
        return this.menuData.filter(item=>!item.children)
    },
    //有子菜单
    hasChildren(){
        return this.menuData.filter(item=>item.children)
    },
    isCollapse(){
      //去vuex的store中拿到isCollapse方法
      return this.$store.state.tab.isCollapse
    },
    menuData(){
      //判断当前数据，如果缓存中没有去store中获取
      return JSON.parse(Cookie.get('menu')) || this.$store.state.tab.menu 
    }
  }
};
</script >
<style lang ='less' scoped>
.el-menu {
  // 样式可以进行重写
  border-right: none;
}
</style>
