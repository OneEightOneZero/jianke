<template>
  <div class="weui-tabbar">
    <router-link to="/app/home" href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
      <span style="display: inline-block;position: relative;">
        <img :src="iconTabbar" alt class="weui-tabbar__icon">
        <!-- <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;"></span> -->
      </span>
      <p class="weui-tabbar__label">首页</p>
    </router-link>
    <router-link to="/app/classify" href="javascript:;" class="weui-tabbar__item">
      <img :src="iconTabbar" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">分类</p>
    </router-link>
    <router-link to="/app/tt" href="javascript:;" class="weui-tabbar__item">
      <span style="display: inline-block;position: relative;">
        <img :src="iconTabbar" alt class="weui-tabbar__icon">
        <!-- <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span> -->
      </span>
      <p class="weui-tabbar__label">头条</p>
    </router-link>
    <router-link to="/app/car" href="javascript:;" class="weui-tabbar__item">
      <img :src="iconTabbar" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">购物车</p>
    </router-link>
    <router-link to="/app/mine" href="javascript:;" class="weui-tabbar__item">
      <img :src="iconTabbar" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">我</p>
    </router-link>
  </div>
</template>
<script>
import iconTabbar from '../assets/icon_tabbar.png'
export default {
  data() {
    return{
      iconTabbar
    }
  },
  methods:{
    toContact(){
      this.$router.push({name:"contact"});
    }
  }
};
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>


