<template>
  <div>foot组件
    <div>
      <button>点我+1</button>
      <div>计算属性{{count}}</div>
      <button>点我-1</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Foolter",
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style></style>