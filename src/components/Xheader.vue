<template>
  <header data-v-d45bd762 data-v-6403cba8 id="mallHeader" class="class-head">
    <div data-v-d45bd762>
      <a data-v-d45bd762 rel="nofollow" class="back-btn common-header-btn" @click="back">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-guanbi"></use>
        </svg>
      </a>
      <span data-v-d45bd762 v-text="title"></span>
      <div data-v-d45bd762 class="toggle-btn common-header-btn" v-show="menushow">
        <a data-v-d45bd762 rel="nofollow" class="common-width" @click="togglenav">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-iconfontzhizuobiaozhun0257" v-show="!navshow"></use>
            <use xlink:href="#icon-guanbi1" v-show="navshow"></use>
          </svg>
        </a>
      </div>
    </div>
    <nav data-v-d45bd762 v-show="navshow">
      <ul data-v-d45bd762>
        <li data-v-d45bd762 class="arrows-tag"></li>
        <li data-v-d45bd762>
          <a data-v-d45bd762 href="/#/app/xindex" rel="nofollow">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye"></use>
            </svg>
            <em data-v-d45bd762>首页</em>
          </a>
        </li>
        <li data-v-d45bd762>
          <a
            data-v-d45bd762
            href="/#/app/classify"
            class="router-link-exact-active router-link-active"
            rel="nofollow"
          >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenlei"></use>
            </svg>
            <em data-v-d45bd762>分类搜索</em>
          </a>
        </li>
        <li data-v-d45bd762>
          <a data-v-d45bd762 href="/#/app/car" class rel="nofollow">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gouwuchekong"></use>
            </svg>
            <em data-v-d45bd762>购物车</em>
          </a>
        </li>
        <li data-v-d45bd762>
          <a data-v-d45bd762 href="/#/app/mine" class rel="nofollow">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wo"></use>
            </svg>
            <em data-v-d45bd762>个人中心</em>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import bus from "../configs/bus.js";
export default {
  data() {
    return {
      title: "全部分类",
      navshow: false,
      menushow: true
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    togglenav() {
      this.navshow = !this.navshow;
      bus.$emit("menu", this.navshow);
    },
    setTitle() {
      switch (this.$route.path.slice(1)) {
        case "app/classify":
          this.title = "全部分类";
          break;
        case "app/car":
          this.title = "购物车";
          this.menushow = false;
          break;
        case "login":
          this.title = "用户登录";
          break;
        case "register":
          this.title = "用户注册";
          break;
          case "search":
          this.title = "搜索";
          break;
					case "detailList/":
					this.title = "健客产品详情";
					break;
        default:
          null;
      }
    }
  },
  created() {
    this.setTitle();
  }
};
</script>
<style scoped>
</style>