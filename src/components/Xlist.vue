<template>
	<div>
		<ul>
			<li v-for="(n,index) in  home" :key="index">
				<img :src="n.url" alt="">
				<span v-text="n.name"></span>
			</li>
			
		</ul>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				home:[],
			}
		},
        methods: {
			async getNews() {
					let data = await this.$axios.post("http://localhost:4000/users/findUser");
				this.home = this.home.concat(data.data)
			},
		},
		created(){
			// console.log(this)
			this.getNews();
		}
	}
</script>

<style scoped>
ul{
	display: flex;
	justify-content: center;
	flex-flow:wrap;
	margin-bottom: 10px;
}
ul li{
	display: flex;
	flex-direction:column;
	justify-content: center;
	align-items: center;
	width: 25%;
	margin-top: 15px;
}
ul li img{
	width: 80%;
	height: 80px;
}
ul li span{
	font-size:12px;
}
</style>
