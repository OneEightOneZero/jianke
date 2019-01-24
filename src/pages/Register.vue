<template>
  <div :style="{'height':height+'px'}" class="main">
    <Xheader/>
    <Xregistermain/>
  </div>
</template>
<script>
import Xheader from "../components/Xheader.vue";
import Xregistermain from "../components/Xregistermain.vue";
export default {
  components: {
    Xheader,
    Xregistermain
  },
  data(){
      return {
          height: 0
      }
  },
  methods: {
    getHeight() {
      this.height = window.innerHeight
    }
  },
  created(){
      this.getHeight()
  }
};
</script>
<style scoped>
.main {
  background-color: #fff;
  padding-top:.88rem;
}
</style>