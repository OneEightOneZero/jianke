<template>
	<section class="recommend-list" data-v-234d5624="" data-v-431e0e45="">
		<article class="rl-item" data-v-234d5624="" v-for="(n,index) in druglist" :key="index">
			<img :src="n.url" alt="" class="rl-pic"
			data-v-234d5624="">
			<div class="rl-text" data-v-234d5624="">
				<span class="name" data-v-234d5624="" v-text="n.name"> </span>
				<span class="info" data-v-234d5624="" v-text="n.info">全进口乙肝新药！吉利德研发，加拿大生产</span>
				<span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em><span v-text="n.price"></span>
				</span></div>
		</article>
		
	</section>
</template>

<script>
	
	export default {
		data(){
			return {
				druglist:[],
			}
		},
		methods:{
			async drug(){
				let data = await this.$axios.post("http://localhost:4000/users/findDrugname");
				this.druglist = this.druglist.concat(data.data)
			}
		},
		created(){
			// console.log(this)
			this.drug();
		}
	}
</script>

<style scoped>
.recommend-list{
	background:#F4F4F4;
}
.recommend-list .rl-item{
	width: 167px;
	height: 246px;
}
.recommend-list .rl-item img{
	width: 180px;
	height: 180px;
}
.recommend-list .rl-item .rl-text{
	width: 172px;
	height: 72px;
}
/* .recommend-list .rl-item .rl-text .name{
	height: 24px;
	line-height: 24px;
	font-size: 12px;
}
.recommend-list .rl-item .rl-text .info{
	height: 24px;
	line-height: 24px;
	font-size: 10px;
	color:#999;
}
.recommend-list .rl-item .rl-text .price{
	color:#ff5f57;
} */

</style>
