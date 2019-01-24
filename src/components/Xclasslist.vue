<template>
  <section class="classify-box" data-v-bb0a6ed8 data-v-6403cba8>
    <div class="classify-list" data-v-bb0a6ed8>
      <div class="classify-ad" data-v-bb0a6ed8>
        <a data-v-bb0a6ed8>
          <img :src="ad" data-v-bb0a6ed8>
        </a>
      </div>
      <ul data-v-bb0a6ed8>
        <li data-v-bb0a6ed8 v-for="(n,idx) in list" :key="idx">
          <img :src="require(`../assets/images/${n.imgurl}`)" data-v-bb0a6ed8>
          <span data-v-bb0a6ed8 v-text="n.title">阳痿早泄</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      ad: "",
      list: []
    };
  },
  methods: {
    async getlist() {
      let arr = [];
      let data = await this.$axios.get("http://localhost:3000/class", {
        params: { class: this.$store.getters.getcurrentClass }
      });
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].title == "ad") {
          this.ad = require("../assets/images/" + data.data[i].imgurl);
        } else {
          arr.push(data.data[i]);
        }
      }
      this.list = arr;
    }
  },
  created() {
    this.getlist();
  },
  computed: {
    isClick() {
      return this.$store.state.currentClassnav;
    }
  },
  watch: {
    isClick() {
      this.getlist();
    }
  }
};
</script>
<style scoped>
  .classify-box {
    min-height: 8.7rem;
    background-color: #fff;
  }
  
</style>