<template>
<div>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
            <el-header>Header</el-header>
                <el-main><h1>我是主路由</h1>
                <!-- 子路由的路由出口 -->
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
    
</div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>