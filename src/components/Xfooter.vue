<template>
  <div class="weui-tabbar">
    <router-Link
      v-for="(n,idx) in links"
      :key="idx"
      :to="`/app/${n.link}`"
      href="javascript:;"
      class="weui-tabbar__item"
			@click.native="changePage(n.title)"
    >
      <svg class="icon iconfont" aria-hidden="true"
			:style="n.title==currentPage?'color:deeppink':''">
        <use :xlink:href="`#icon-${n.icon}`"></use>
      </svg>
      <p class="weui-tabbar__label" v-text="n.title"
			:style="n.title==currentPage?'color:deeppink':''"></p>
    </router-Link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: "",
      links: [
        { link: "xindex", icon: "shouye", title: "首页" },
        { link: "classify", icon: "fenlei", title: "分类" },
        { link: "news", icon: "ai-article", title: "头条" },
        { link: "car", icon: "gouwuchekong", title: "购物车" },
        { link: "mine", icon: "wo", title: "我的" }
      ]
    };
  },
  methods: {
    getCurrentPage() {
      this.currentPage = this.$store.getters.getcurrentPage;
		},
		changePage(n){
			this.$store.dispatch("setcurrentPage", n);
		},
		routePage(){
			let arr = this.$route.path.split("/");
			for(let i=0;i<this.links.length;i++){
				if(this.links[i].link==arr[arr.length-1]){
					this.$store.dispatch("setcurrentPage", this.links[i].title);
				}
			}
		}
	},
  created() {
		this.routePage();
		this.getCurrentPage();
	},
	computed: {
    isClick() {
      return this.$store.state.currentPage;
    }
  },
  watch: {
		$route(){
			this.routePage();
			this.getCurrentPage();
		},
    isClick() {
      this.getCurrentPage();
    }
  }
};
</script>
<style scoped>
.weui-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 900;
}
p {
  margin: 0;
}
</style>
