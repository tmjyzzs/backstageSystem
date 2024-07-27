<template>
  <div>我是主页
    <typeNav></typeNav>
    <listContainer></listContainer>
    <floor>{{ floorList }}</floor>
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
      floorList: (state) => {
        console.log("floorList", state.home.floorList);
      }
    })
  }

}
</script>

<style></style>