<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Foolter></Foolter>
    <typeNav></typeNav>

  </div>
</template>

<script>
import Header from './components/header'
import Foolter from './components/footer'
import typeNav from "./components/typeNav"

export default {
  //组件名称
  name: 'App',
  //注册组件
  components: {
    Header,
    Foolter,
    typeNav
  }
}
</script>

<style lang='less'></style>
