<template>
<div>
    <el-container>
        <el-aside width="auto">
            <CommonAside/>
        </el-aside>
        <el-container>
            <el-header>
                <common-header/>
            </el-header>
                <el-main>
                <!-- 子路由的路由出口 -->
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
    
</div>
  
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
export default {
    data(){
        return {}
    },
    components:{
        CommonAside,
        CommonHeader
    }
}
</script>

<style scoped>
/* el-header是elementUI的组件，可以使用使用.el-header进行修改组件的样式 */
.el-header {
    padding: 0;
}

</style>