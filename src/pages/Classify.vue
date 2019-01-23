<template>
  <div>
      <Xheader/>
      <Xsearch/>
      <Xclasslist/>
      <xclassnav/>
  </div>
</template>
<script>
import Xheader from '../components/Xheader.vue'
import Xsearch from '../components/Xsearch.vue'
import Xclasslist from '../components/Xclasslist.vue'
import Xclassnav from '../components/Xclassnav.vue'

export default {
  components: {
    Xheader,
    Xsearch,
    Xclasslist,
    Xclassnav
  }
}
</script>