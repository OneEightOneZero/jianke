<template>
  <nav class="classify-nav-box" data-v-beff1056 data-v-6403cba8>
    <ul class="nav-list" data-v-beff1056>
      <li v-for="(item,idx) in items" v-text="item" 
      :key="idx" data-v-beff1056 :class="{ current:idx==current}"
       @click="getlist(item,idx)"></li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      items: [
        "男科用药",
        "心血管科",
        "糖尿病科",
        "内分泌科",
        "风湿骨科",
        "肝胆科药",
        "肿瘤科药",
        "皮肤科药",
        "艾滋病类",
        "消化系统",
        "神经系统",
        "呼吸系统",
        "泌尿科药",
        "女性用药",
        "儿科用药",
        "日常用药",
        "成人用品",
        "全球购",
        "滋补保健",
        "医疗器械",
        "健康服务",
        "美妆个护"
      ],
      current:0,
    }
  },
  methods: {
    getlist(item,idx) {
      // console.log(item);
      this.current = idx;
      this.$store.dispatch("setcurrentClass", item);
    }
  }
};
</script>
<style scoped>
</style>