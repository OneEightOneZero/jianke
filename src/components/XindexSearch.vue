<template>
  <div
    class="search-bar"
    ref="box"
    :class="navBarFixed == true ? 'navBarWrap' :''"
    data-v-c3a98c3a
    data-v-573ca07f
  >
    <div class="background" style="opacity:0;" data-v-c3a98c3a></div>
    <div class="info" data-v-c3a98c3a>
      <div class="info-logo" data-v-c3a98c3a>
        <i class="icon iconfont icon-jianke-logo" data-v-c3a98c3a></i>
      </div>
      <div class="info-bar" data-v-c3a98c3a>
        <i class="icon iconfont icon-search" data-v-c3a98c3a></i>
        <input type="text" placeholder="莎尔福230元起" data-v-c3a98c3a>
      </div>
      <div class="info-login" data-v-c3a98c3a>
        <span data-v-c3a98c3a @click="tologin" v-text="islogin?'':'登录'">登录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navBarFixed: "",
      islogin: false
    };
  },
  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 49) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
    tologin() {
      location.href = "/#/login";
    },
    autologin() {
      this.$axios({
        method: "post",
        data: this.$qs.stringify({ token: localStorage.getItem("token") }),
        url: "http://localhost:3000/users/autologin"
      }).then(res => {
        if (res.data.status) {
          //   sessionStorage.setItem('user',res.data.tel.payload.data.tel);
          //   location.href="/#/app/mine";
          this.islogin = true;
        } else {
          this.islogin = false;
        //   console.log("token fail");
        }
      });
    }
  },
  mounted() {
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {
    this.autologin();
  },
  watch: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var offsetTop = document.querySelector("#searchBar").offsetTop;
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
    }
  }
};
</script>
<style scoped>
.navBarWrap {
  position: fixed;
  background: #0056b3;
  opacity: 0.75;
}
</style>
