<template>
  <div id="app">
    <!-- <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row> -->

    <!-- 主路由出口 -->
    <router-view></router-view>
    
  </div>
</template>

<script>
  //引入组件
  // import School from './components/School.vue'
  // import Student from './components/Student.vue'


export default {
  //组件名称
  name: 'App',
  //注册组件
  components: {
 
  }
}
</script>

<style lang='less'>
// 去除标签的默认样式
  html,body,h3,p{
    margin: 0;
    padding:0
  }
</style>
