<template>
  <el-form class="login-container" :model="form" :rules="rules">
    <h3 class="login_titile">系统登入</h3>
      <el-form-item abel="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item abel="密码" prop="password">
          <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('numberValidateForm')">登入</el-button>
        <el-button>取消</el-button>
      </el-form-item>
  </el-form>
</template>

<script>
import Mock from 'mockjs'
import Cookie from 'js-cookie'
import {getMenu} from '../api'
export default {
  data(){
    return{
      form:{
        username:'',
        password:''
      },
      rules:{
        username:[
          {required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password:[
          {required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    submit(){
      // //token信息
      // const token = Mock.Random.guid()
      // console.log(token);
      // Cookie.set('token',token)
      // //跳转到首页
      getMenu(this.form).then(({data})=>{
        // console.log("1111111111111111")
        // console.log("0000",data)
        if(data.code === 20000){
          
          Cookie.set('token',data.data.token)
          
          //获取菜单的数据存入store
          //data.data.menu
          this.$store.commit('setMenu',data.data.menu) 
          this.$store.commit('addMenu', this.$router)
          this.$router.push('home')
        }else{
          this.$message.error(data.data.message);
        }
      })
      //this.$router.push('/home')
    }
  }

}
</script>

<style lang='less' scoped>
.login-container{
  width:350px;
  border: 1px solid #eaeaea;
  margin:180px auto;
  padding:35px 35px 15px 35px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cac6c6 ;
  .login_titile{
    text-align: center;
    margin-bottom: 40px;
    color:505458
  }
  }

</style>