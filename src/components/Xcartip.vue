<template>
  <div data-v-5cb28b68 class="cart-login-tip" v-show="islogin">
    <span data-v-5cb28b68>登录后将保存购物车商品</span>
    <span data-v-5cb28b68 class="login-btn" @click="toMine">登录</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      islogin: true
    };
  },
  methods: {
    toMine() {
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
          this.islogin = false;
        } else {
          this.islogin = true;
          //   console.log("token fail");
        }
      });
    }
  },
  created(){
    this.autologin();
  }
};
</script>
<style scoped>
.cart-login-tip {
  margin-top: 0.88rem;
  background: #fff;
  margin-bottom: 0.3rem;
  text-align: center;
  padding: 0.2rem 0.3rem;
  font-size: 14px;
  color: #666;
}
.login-btn {
  padding: 0.04rem 0.18rem;
  color: #fff;
  margin-left: 0.3rem;
  background: #61b1f4;
  -webkit-border-radius: 0.08rem;
  border-radius: 0.08rem;
}
</style>