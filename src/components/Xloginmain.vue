<template>
  <div data-v-6764fe5f class="login-box" :class="menu?'menu':''">
    <section data-v-6764fe5f class="page">
      <div data-v-6764fe5f class="login-tab">
        <div
          data-v-6764fe5f
          class="mobile-login-btn"
          :class="!tab?'active':''"
          @click="click1"
        >手机号快捷登录</div>
        <div
          data-v-6764fe5f
          class="account-login-btn"
          :class="tab?'active':''"
          @click="click2"
        >账号密码登录</div>
      </div>
      <div data-v-6764fe5f class="login-wrap">
        <div data-v-6764fe5f class="mobile-login-box" v-show="!tab">
          <div data-v-6764fe5f class="tel-item">
            <input
              data-v-6764fe5f
              type="tel"
              placeholder="请输入您的手机号"
              maxlength="11"
              class="inputStyle"
              id="tel2"
            >
          </div>
          <div data-v-6764fe5f class="captchas-item" style="display: none;">
            <input data-v-6764fe5f type="text" id="ccc" placeholder="图形验证码" class="inputStyle">
            <p data-v-6764fe5f class="img-btn">
              <img data-v-6764fe5f src>
            </p>
          </div>
          <div data-v-6764fe5f class="code-item">
            <input data-v-6764fe5f type="text" id="input" placeholder="验证码" maxlength="6" class="inputStyle">
            <button data-v-6764fe5f class="code-btn" id="code">获取验证码</button>
            <button data-v-6764fe5f class="code-btn computing" style="display: none;">重新发送(0秒)</button>
          </div>
        </div>
        <div data-v-6764fe5f class="account-login-box" v-show="tab">
          <div data-v-6764fe5f class="account-item">
            <input id="tel1" data-v-6764fe5f type="text" placeholder="请输入手机号/邮箱" class="inputStyle">
          </div>
          <div data-v-6764fe5f class="password-item">
            <input
              data-v-6764fe5f
              :type="!psw?'password':'text'"
              placeholder="请输入您的密码"
              maxlength="16"
              class="inputStyle"
              id="psw"
            >
            <div data-v-6764fe5f class="pwd-switch" @click="psw=!psw">
              <img
                data-v-6764fe5f
                :src="!psw?'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABfElEQVRYR+2V0VECQRBEezIwAyECIYQmATEDiEAyECMAIxAz0ARojEDMwAwkg7GGWqgrvIMFqcKPnd+9ne5607NnuHDZhfVRDBQChUAhUAgUAv+PgKQRgBuSw3P/KSWNAbRIDja9fxGQ1HL3pZn1SS7OZUJSB8AHgC7JZaOBOJA0cPepmXVIfv3VhKSraAvgjWRQ2FZjBiTNYhQASHJ1qomK+GcV/V4Cm8Nk4jaZ2GLLNZOwPwOoFY8+e7cgBXKSBAPdUy6NdPcBQOAfk3ysM15rIDmfuHvbzNaJdfexmcVIpgBe6rIRAQYQxEbubunuKuXpGsBwN9hNBtZB2Q2MpD6AMBQiEc5qQEM8NujdzGYkI0PbSkRiBWPND4ewac4pVN8A7gDEam0qVjaS3j5mc45+CYNCjKPX61XF1yYkvQJYkIwxZdUpBgLtsk4k3g8A9yS7WeqHtqCuyXw+XzU9UJXxZI/hFAKjfYgThRhD1gt6tIFctLnfFQMXJ/AD1gGdISqQy3gAAAAASUVORK5CYII=':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAByklEQVRYR+2U4U3DUAyEzxvABjABMAF1FqBMAExAmQA2oEwAI8ACcZkAmAA2ACY4dJGDShqSpn8QUp5UtVL97LvP9jP88bE/ro9RwEhgJPC/CUTEFYA3d7/b9D3pJRAR+wC23H3RLFKW5cLMFu4uIStHd939uUvcOgJmAM7dfXeIgIg4JTkrikIGfj3rCNgB8ArgQG4iYovknpkpscS9AViQFI0Xd/9QtbIsn5OOYjYXkMmUnGoFgE5HAIT8HoDasuvuEtgvIHst1Gd1tNwKfzrV7we51afZ27w/ITk1s0MAInHl7jfL1SOiIuLuc31/tyAiatQX+jMipgBuSZqZKXhe4+2b+MwlAifZouNsn+g9ATirN+fHDORaybFcSoAcn65buClMQkjeJZEZyWPFFEUxqWObAoT5neSnmamwetl60uVR/vnQ1es0dpmx1TCvCMh+B8ltM5t27W9EyEE0lHnbW7E0T9OkoRaoJdW2LM/AnOTEzCZ9yCNCZGr3VQ2Sj8to27BpUHNdNZytQ6jp7FwbJd5UQN7VsH+sEOib7JZVum7cqbZnSJ4fLRh6MSJUTBujc+PunS/eb/l7n+KhwobGjwJGAiOBkcAXNRLhITZr+/wAAAAASUVORK5CYII='"
                alt
              >
            </div>
          </div>
        </div>
        <div data-v-6764fe5f class="login-bar">
          <button data-v-6764fe5f id="btn" disabled v-show="tab" class="login-btn">登录</button>
          <button data-v-6764fe5f id="btn2" disabled v-show="!tab" class="login-btn">登录</button>
        </div>
        <div data-v-6764fe5f class="notice" v-show="!tab">
          <span data-v-6764fe5f>温馨提示：未注册过健客的手机号，登录时会自动注册健客账号，且代表您已同意</span>
          <a data-v-6764fe5f class>《健客服务条款》</a>
        </div>
        <div data-v-6764fe5f class="link" v-show="tab">
          <a data-v-6764fe5f class="forget-link">忘记密码</a>
          <a data-v-6764fe5f href="/#/register" class="register-link">注册</a>
        </div>
      </div>
      <div data-v-6764fe5f class="captchas_masking" style="display: none;"></div>
    </section>
    <div data-v-46c8ac9e data-v-6764fe5f class="loading-model hide">
      <img
        data-v-46c8ac9e
        src="data:image/gif;base64,R0lGODlhZABkAPf/AEew6DSg2D59nsbGxi+w8zCu8JmZmWJiYoiIiHl5eTSe1tjx/zaZzqqqqk5OTj2Cpi+y9lFRUVTF/7fGzja6/1hYWDeWyEJwiEF1kcXq/mBgYEVneUNuhWPJ/sTExHFxcaKioi6z+IaGhkxPUcHBwTiRvzCs7UhcZjGr6nR0dC22/ktUWktUWDyEqmlpaV5eXjKm4lxcXEZldbCwsEeLrj97mTyGrUpWXHaGjlpaWqPf/0heabnn/29vb3HO/jGo50VpfOz2/I6Ojsfb5oqKimVlZZba/r29vTiSwVup0fT7/4TV/nt7e0dhb0dicYrX/knA/2ZmZuH1/juIsIuntXzR/01OT1V2hkJyikVoe2V6hWCYtT+Irqnh/klbZfn9/1VVVV5oboLG6pTT9LbV51NfZWdvc3vB5UB5mHy/4o/Z/1BUVlNYWu75/z2ZyU1WW01NTi+x9fX19S61+0tTV1dXVy61/Pv7+zKn5DKo5vz8/EtSVUtSVvLy8uTk5Obm5klaYzqNuFZWVpGRkTyEqTuJsjOi2zuHrzCv8bi4uNvb26+vr/Hx8fPz80lZYtnZ2TWc0kpXXnx8fEpYYP7+/qmpqZ6enrKysqampsjIyD2BpNLS0klZYfn5+efn50Nwh9bW1kZmdp2dnff39+Li4vb29nZ2du3t7djY2KSkpD6AojCt7j2DqPj4+K6urjeVxi60+i22/TeWx5CQkOzs7NfX17+/v6enp83Nze7u7qioqPr6+v39/UF0jkB3lD5/oTeUxUpYXy60+TmOujiUxM/Pz7q6upSUlOvr6/Dw8MnJyePj4zSh2zWe1UxSVTmPvMrKykFzjUxQUkZkc39/f+Dg4ERrfzeXyTOl4FJSUq2trdXV1enp6YODg4WFhZzd/y+4//3+/2hsboXN8pDG4565yEd4kaOqr3F0dmdxdU9UVk9odU9bYU51iPP09U9cYuHk5kueyjaf1lRWV4GLj1OCmvb3+FZqdJGWmElndlBWWkV3kS23/////01NTQAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjNDI0NTcxNy03MGM1LWU1NDgtYmNhYi1lN2RlNThmZjYxZmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjhEQjQ5QTgzOTEzMTFFNzhFN0JFNTJENjI4RjE3NTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjhEQjQ5QTczOTEzMTFFNzhFN0JFNTJENjI4RjE3NTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZGE1NDg4MzMtMjM4Yi1jMjQ0LWJjMjUtNDgzNGJmNjYzNTI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM0MjQ1NzE3LTcwYzUtZTU0OC1iY2FiLWU3ZGU1OGZmNjFmYyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiH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"
        alt
        class="hide"
      >
    </div>
  </div>
</template>
<script>
import bus from "../configs/bus.js";
export default {
  data() {
    return {
      menu: false,
      tab: true,
      psw: false
    };
  },
  methods: {
    click1() {
      this.tab = false;
    },
    click2() {
      this.tab = true;
    },
    menu2() {
      bus.$on("menu", res => {
        this.menu = res;
      });
    },
    random() {
      return parseInt(Math.random() * 10);
    },
    login() {
      let $ = this.$;
      let random = this.random;
      let $tel1 = $("#tel1");
      let $tel2 = $("#tel2");
      let $psw = $("#psw");
      let $btn = $("#btn");
      let $btn2 = $("#btn2");
      let $code = $("#code");
      let $input = $("#input");
      $code.on("click", () => {
        if ($tel2.val() == "") {
          alert("请输入手机号");
        } else if (!/^1[34578]\d{9}$/.test($tel2.val())) {
          alert("手机号码有误，请重填");
          return false;
        } else {
          $code.html("" + random() + random() + random() + random());
        }
        $input.val("");
      });
      $btn2.on("click",()=>{
        if (!/^1[34578]\d{9}$/.test($tel2.val())) {
          alert("手机号码有误，请重填");
          return false;
        } else if ($input.val() !== $code.html()) {
          alert("验证码错误");
          $code.html("" + random() + random() + random() + random());
          $input.val("");
          return false;
        } else {
          this.$axios({
            method: "post",
            url: "http://localhost:3000/users/shortcut",
            data: this.$qs.stringify({
              tel: $tel2.val(),
            })
          }).then(res => {
            if (res.data === "success") {
              alert("登录成功");
              location.href = "/#/app/mine";
            } else {
              alert("登录失败");
            }
          });
        }
      })
      $tel2.on("input", () => {
        oninput2();
      });
      $input.on("input", () => {
        oninput2();
      });
      $tel1.on("input", () => {
        oninput();
      });
      $psw.on("input", () => {
        oninput();
      });
      $btn.on("click", () => {
        this.$axios({
          method: "post",
          url: "http://localhost:3000/users/login",
          data: this.$qs.stringify({
            tel: $tel1.val(),
            psw: $psw.val()
          })
        }).then(res => {
          if (res.data.status === "success") {
            alert("登录成功");
            location.href = "/#/app/mine";
          } else {
            alert("账号或密码错误");
          }
        });
      });
      function oninput() {
        if ($tel1.val() == "" || $psw.val() == "") {
          $btn.attr("disabled", true).css({ backgroundColor: "#95d1ff" });
        } else {
          $btn.attr("disabled", false).css({ backgroundColor: "#20a0ff" });
        }
      }
      function oninput2() {
        if ($tel2.val() == "" || $input.val() == "") {
          $btn2.attr("disabled", true).css({ backgroundColor: "#95d1ff" });
        } else {
          $btn2.attr("disabled", false).css({ backgroundColor: "#20a0ff" });
        }
      }
    }
  },
  mounted() {
    this.menu2();
    this.login();
  },
  watch: {
    // tab(val){
    //   if(val===false){
    //     setTimeout(()=>{
    //     alert("此功能未开放,请使用账号密码登录")
    //     },300)
    //   }
    // }
  }
};
</script>
<style scoped>
.menu {
  margin-top: 1.25rem;
}
</style>