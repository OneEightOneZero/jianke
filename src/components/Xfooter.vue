<template>
  <div class="weui-tabbar">
    <router-Link to="/app/xindex" href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
      <span style="display: inline-block;position: relative;">
        <img :src="index" alt class="weui-tabbar__icon">
        <!-- <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span> -->
      </span>
      <p class="weui-tabbar__label">首頁</p>
    </router-Link>
    <router-Link to="/app/classify" href="javascript:;" class="weui-tabbar__item">
      <img :src="other" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">分類</p>
    </router-Link>
    <router-Link to="/app/news" href="javascript:;" class="weui-tabbar__item">
      <span style="display: inline-block;position: relative;">
        <img :src="tt" alt class="weui-tabbar__icon">
        <!-- <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span> -->
      </span>
      <p class="weui-tabbar__label">頭條</p>
    </router-Link>
    <router-Link to="/app/car"  href="javascript:;" class="weui-tabbar__item">
      <img :src="shopcat" alt class="weui-tabbar__icon">
      <p class="weui-tabbar__label">購物車</p>
    </router-link>
		<router-Link to='/app/me' href="javascript:;" class="weui-tabbar__item">
			<img :src="me" alt class="weui-tabbar__icon">
			<p class="weui-tabbar__label">我的</p>
		</router-Link>
  </div>
</template>
<script>
	import index from "../assets/index.png";
	import other from "../assets/other.png";
	import me from "../assets/me.png";
	import shopcat from "../assets/shopcat.png";
	import tt from "../assets/tt.png";
	export default {
		data() {
			return {
				index,
				other,
				me,
				shopcat,
				tt
			}
		}
	};
</script>
<style scoped>
/* 	.weui-tabbar__label {
		margin: 0;
	} */
.weui-tabbar{
	position:fixed;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 900;
}
	p{
		margin: 0;
	}
</style>
