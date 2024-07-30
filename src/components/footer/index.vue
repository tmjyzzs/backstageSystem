<template>
  <div>
    <div>
      foot组件
      {{ count }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "foolter",
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style></style>