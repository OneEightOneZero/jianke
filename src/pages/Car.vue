<template>
  <div>
      <Xheader/>
      <Xcartip/>
      <Xcarempty/>
  </div>
</template>
<script>
import Xheader from '../components/Xheader.vue'
import Xcartip from '../components/Xcartip.vue'
import Xcarempty from '../components/Xcarempty.vue'
export default {
  components: {
    Xheader,
    Xcartip,
    Xcarempty
  },
  created(){

  }
}
</script>
<style scoped>

</style>
