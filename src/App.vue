<template>
  <div id="app">
    <router-view></router-view>
    <Xfooter/>
  </div>
</template>

<script>
import Xfooter from './components/Xfooter.vue'
export default {
  name: 'app',
  components: {
   Xfooter
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,body {
  font-size:14px;
}
#app{
  padding-bottom: 60px;
}
.icon {
  
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
