<template>
    <div class="header-container">
        <div class="l-content">
        <!-- 菜单按钮 -->
            <el-button @click ='handleMenu' icon="el-icon-menu" size="mini"></el-button>
        <!-- 面包屑 -->
            <span class="text">首页</span>
        </div>
        <div class='r-content'>
            <el-dropdown @command="logout">
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/OIP-C.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command='cancel'>退出</el-dropdown-item>
               
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
    data(){
        return{}
    },
    methods:{
        handleMenu(){
            //使用挂载了vuex的vue实例中的store属性，去mutations中调用collapseMenu方法 中
           this.$store.commit('collapseMenu') 
        },
        logout(command){
            if(command==="cancel"){
            //清除cookie的token信息
            Cookie.remove('token')
            this.$router.push("login")
            }
           
        }
    }

}
</script>

<style lang ='less' scoped>
.header-container{
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text{
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .r-content{
        .user{
            width:40px;
            height: 40px;
            border-radius:50% ;
            
        }
    }
}
</style>