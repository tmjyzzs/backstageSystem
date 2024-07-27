<template>
  <div>我是主页
    <typeNav></typeNav>
    <listContainer />
    <floor v-for="(floor, index) in floorList" :key="floor.id" :floor="floor" />
  </div>


</template>

<script>
import listContainer from './listContainer'
import floor from "./floor"
import { mapState } from "vuex";
export default {

  components: {
    listContainer,
    floor
  },
  mounted() {
    this.$store.dispatch("getReqFloorList")
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
      // floorList: (state) => {console.log("1111111",state.home.floorList.data);}
    })
  }

}
</script>

<style></style>