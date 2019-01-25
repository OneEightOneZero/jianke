<template>
  <div>
    <Xheader/>
    <Xsearch/>
    <Xsearchitem/>
  </div>
</template>
<script>
import Xheader from "../components/Xheader.vue";
import Xsearch from "../components/Xsearch.vue";
import Xsearchitem from "../components/Xsearchitem";
export default {
  components: {
    Xheader,
    Xsearch,
    Xsearchitem
  }
};
</script>