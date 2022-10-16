<template>
    <div class="demo">
        <h2>学校名称</h2>
        <h2>学校地址</h2>
        <button @click="showName">点我提示学校名称</button>
    </div>
</template>

<script>
    //默认暴露组件
export default {
    name:'School',
    data(){
        return{
            name:'泉州十一中',
            address:'福建泉州'
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    }
}
</script>

<style>
    .demo{
        background-color: aqua;
    }

</style>