<template>
  <header data-v-d45bd762 data-v-6403cba8 id="mallHeader" class="class-head">
    <div data-v-d45bd762>
      <a data-v-d45bd762 rel="nofollow" class="back-btn common-header-btn">
        <i data-v-d45bd762 class="icon iconfont icon-back"></i>
      </a>
      <span data-v-d45bd762>全部分类</span>
      <div data-v-d45bd762 class="toggle-btn common-header-btn">
        <a data-v-d45bd762 rel="nofollow" class="common-width" @click="togglenav">
          <i data-v-d45bd762 class="icon iconfont icon-more"></i>
        </a>
      </div>
    </div>
    <nav data-v-d45bd762 v-show="navshow">
      <ul data-v-d45bd762>
        <li data-v-d45bd762 class="arrows-tag"></li>
        <li data-v-d45bd762>
          <a data-v-d45bd762 href="/" rel="nofollow">
            <i data-v-d45bd762 class="icon iconfont icon-home"></i>
            <em data-v-d45bd762>首页</em>
          </a>
        </li>
        <li data-v-d45bd762>
          <a
            data-v-d45bd762
            href="/classify/classifyList"
            class="router-link-exact-active router-link-active"
            rel="nofollow"
          >
            <i data-v-d45bd762 class="icon iconfont icon-types-search"></i>
            <em data-v-d45bd762>分类搜索</em>
          </a>
        </li>
        <li data-v-d45bd762>
          <a data-v-d45bd762 href="/cart" class rel="nofollow">
            <i data-v-d45bd762 class="icon iconfont icon-cart"></i>
            <em data-v-d45bd762>购物车</em>
          </a>
        </li>
        <li data-v-d45bd762>
          <a data-v-d45bd762 href="/user" class rel="nofollow">
            <i data-v-d45bd762 class="icon iconfont icon-person-center"></i>
            <em data-v-d45bd762>个人中心</em>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      title: "全部分类",
      navshow: false
    };
  },
  methods: {
    togglenav(){
      this.navshow = !this.navshow
    }
  }
};
</script>
<style scoped>
/* * {
  margin: 0;
  padding: 0;
}
header {
  height: 45px;
}
.class-head>div {
  position: relative;
  text-align: center;
  line-height: 45px;
  
}
.class-head>div span {
  font-size: 18px;
}
.back-btn {
  display: block;
  width: 24px;
  height: 24px;
  position: absolute;
  left:20px;
  top:50%;
  transform:translateY(-50%);
  background-color: pink;
}
.toggle-btn a {
  display:block;
  width: 24px;
  height: 24px;
  position: absolute;
  right:20px;
  top:50%;
  transform:translateY(-50%);
  background-color: pink;
} */
</style>