<template>
  <div>
    <header class="header">
      <!-- 头部 -->
      <div class="top">
        <!-- 头部中间部分 -->
        <div class="container">
          <!-- 登入& 欢迎 -->
          <div class="loginList">
            <!-- 欢迎字段 -->
            <p>急急急欢迎你</p>
            <!-- 注册登入 -->
            <p>
              <span>请</span>
              <a href="">登入</a>
              <a href="" class="register">免费注册</a>
            </p>
          </div>
          <!-- 菜单 -->
          <div class="typelist">
            <a href="">我的订单</a>
            <a href="">我的购物成为</a>
            <a href="">我的商品</a>
            <a href="">合作招商</a>
          </div>
        </div>

      </div>
      <!-- 搜索区域 -->
      <div class="search clearfix">
        <!-- logo -->
        <div class="logoArea">
          <img src="./images/logo.png" alt="">
        </div>
        <div class="searchArea">
          <input type="text" v-model="keyWord">
          <button @click="goSearch">搜索</button>
        </div>
      </div>
      <!-- 内容显示区域 -->
      <div class="content"></div>
    </header>
  </div>
</template>

<script>
export default {

  name: "Header",
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    goSearch() {
      console.log("vue", this);
      // 1.路径凭借传递
      // this.$router.push("/search/"+this.keyWord+'?k='+this.keyWord)
      // 2.对象传参  -- 常用
      this.$router.push({
        name: 'search', params: {
          keyWord: this.keyWord
        }, query: {
          k: this.keyWord
        }
      })
    }
  }

}
</script>

<style scoped lang="less">
@import "../../styles/index.less";

.header {
  &>.top {
    background: #e4e4e4;
    height: 30px;

    .container {

      width: 750px;
      margin: 0 auto;
      line-height: 30px;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }

        }
      }

      .typelist {
        // background: red;
        float: right;

        a {
          &+a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  &>.search {
    width: 750px;
    margin: 0 auto;


    .logoArea {
      float: left;

      img {
        width: 175px;
        margin: 25px 45px;
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      input {
        box-sizing: border-box;
        float: left;
        border: 1px solid #ea4a36;
        width: 400px;
        height: 30px;
      }

      button {
        float: left;
        width: 70px;
        height: 30px;
        background-color: #ea4a36;
        border-style: none;
      }
    }
  }

  &>.content {
    width: 750px;
    height: 10px;
    margin: 0 auto;
    background-color: #ea4a36;
  }
}
</style>