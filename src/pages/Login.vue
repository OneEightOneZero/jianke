<template>
  <div :style="{'height':height+'px'}" class="main">
    <Xheader/>
    <Xloginmain/>
  </div>
</template>
<script>
import Xheader from "../components/Xheader.vue";
import Xloginmain from "../components/Xloginmain.vue";
export default {
  components: {
    Xheader,
    Xloginmain
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