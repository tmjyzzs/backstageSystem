<template>
  <!--使用loyout布局，屏幕的只适用  -->
  <el-row>
    <el-col :span="8" style="padding-right:10px">
      <div class="grid-content bg-purple">
        <el-card class="box-card">
          <div class="user">
            <img src="../assets/OIP-C.jpg" alt="" />
            <div class="userInfo">
              <p class="name">admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登入时间：<span>2022-7-19</span></p>
            <p>上次登入地点：<span>武汉</span></p>
          </div>
        </el-card>
        <el-card style="margin-top: 20px; heright: 460px;">
          <el-table :data="tableData" style="width: 100%">
            <!-- <el-table-column prop="name" label="课程" >
            </el-table-column>
            <el-table-column prop="todayBuy" label="今日购买" >
            </el-table-column>
            <el-table-column prop="monthBuy" label="本月购买" > 
            </el-table-column>
            <el-table-column prop="totalBuyBuy" label="总购买"  > 
            </el-table-column> -->
            <el-table-column v-for="(val,key) in tableLabel" :prop="key" :label="val" />
          </el-table> 
        </el-card>
      </div>
    </el-col>
    <el-col :span="16" style="padding-left:10px">
      <div class="num">
        <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex', }">
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
          <div class="detail">
            <p class="price">￥{{item.value}}</p>
            <p class="desc">{{item.name}}</p>
          </div>
        </el-card>

      </div>
    </el-col>
  </el-row>
</template>

<script>
import {getData} from '../api'
export default {
    data(){
      return{
       tableData :[],
        tableLabel:{
          name :'课程',
          todayBuy:'今日购买',
          monthBuy:'本月购买',
          todayBuy:'总购买'
        },
        //购买数量  
        countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      }
    },
    mounted(){
      //getData()返回一个promise对象，.then里面有返回回来的数据
      getData().then(({data})=>{
        const {tableData} =data.data
        this.tableData =tableData 
        console.log(tableData)
      })
      
    }
  
};
</script>

<style lang='less' socped>
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  img {
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .userInfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #666666;
      margin-left: 60px;
    }
  }
}
.num{
  display: flex ;
  flex-wrap:wrap;
  justify-content: space-between;
   
  .icon{
    width: 80px;
    height:80px ;
    font-size:30px;
    text-align:center;
    line-height: 80px;
    color:#fff;

  }
  .detail{
    margin-left:15px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    .price{
      font-size: 30px;
      margin-bottom:10px; 
      line-height:30px;
      height:30px;
    }   
    .desc{
      font-size:14px;
      color:#999;
      text-align:center;
    }
  } 
  .el-card{
    width: 32%;
    margin-bottom: 20px ;
  }
}
</style>