<template>
	<div style="background:#F4F4F4;">
		
		<div class="img-box aabox" data-v-84a71b38="" data-v-431e0e45="">
			<img src="../assets/yjx.png" data-v-84a71b38="">
		</div>
		<article class="item-list">
			<div v-for="(n,index) in productbigone" :key='index'  class="box1">
				<img :src="n.url" alt="">
			</div>
		</article>
		<article class="item-list2">
			<div v-for="(n,index) in productbigtwo" :key='index'  class="box1">
				<img :src="n.url" alt="">
			</div>
			<!-- <div class="box2">
				<img src="https://img5.jianke.com/mall/vmall/index/201901/7bac94205e5043c5ad4a9bd4c04021ce.png" alt="">
			</div> -->
		</article>
		<article class="item-list3">
			<div class="box1" v-for="(n,index) in productlistone" :key='index'>
				<img :src="n.url" alt="">
			</div>
			<!-- <div class="box2">
				<img src="https://img5.jianke.com/mall/vmall/index/201901/c3a4a41865f14ceba1847aa16b66368c.jpg" alt="">
			</div>
			<div class="box3">
				<img src="https://img5.jianke.com/mall/vmall/index/201901/f1617f5e495240689f60ee9e8d9311ea.png" alt="">
			</div>
			<div class="box4">
				<img src="https://img5.jianke.com/mall/vmall/index/201901/b6b578b48dd4438f9b80edf43e5fafbd.png" alt="">
			</div> -->
		</article>
			<div class="img-box" style="margin:0px;" data-v-84a71b38="" data-v-431e0e45="">
				<img src="../assets/yg.jpg" data-v-84a71b38="">
			</div>
		<div class="img-box" data-v-84a71b38="" data-v-431e0e45="">
			<img src="../assets/pdfl.png" data-v-84a71b38="">
		</div>
		<article class="item-list">
			<div v-for="(n,index) in productbigthree" :key='index' class="box1">
				<img :src="n.url" alt="">
			</div>
			<!-- <div class="box2">
				<img src="https://img5.jianke.com/mall/vmall/index/201812/ea496dbd5d974bb4befb8a11a99b54ae.jpg?imageslim" alt="">
			</div> -->
		</article>
		<article class="item-list2" >
			<div class="box1" v-for="(n,index) in productbigfour" :key='index'>
				<img :src="n.url" alt="">
			</div>
			<!-- <div class="box2">
				<img src="https://img.jianke.com/mall/vmall/index/201807/30ec8ef6f92c4371942271fc9d901109.jpg" alt="">
			</div> -->
		</article>
		<article class="item-list3">
			<div class="box1" v-for="(n,index) in productlisttwo" :key='index'>
				<img :src="n.url" alt="">
			</div>
			<!-- <div class="box2">
				<img src="https://img5.jianke.com/mall/vmall/index/201901/c3a4a41865f14ceba1847aa16b66368c.jpg" alt="">
			</div>
			<div class="box3">
				<img src="https://img5.jianke.com/mall/vmall/index/201901/f1617f5e495240689f60ee9e8d9311ea.png" alt="">
			</div>
			<div class="box4">
				<img src="https://img5.jianke.com/mall/vmall/index/201901/b6b578b48dd4438f9b80edf43e5fafbd.png" alt="">
			</div> -->
		</article>
		<article class="item-list3">
			<div class="box1" v-for="(n,index) in productlistthree" :key='index'>
				<img :src="n.url" alt="">
			</div>
			<!-- <div class="box2">
				<img src="https://img.jianke.com/mall/vmall/index/201807/27761e5a0d9549a2881b4aa322316a06.jpg" alt="">
			</div>
			<div class="box3">
				<img src="https://img.jianke.com/mall/vmall/index/201811/78b799fd762c4bdebc3fb3001030eb0e.jpg" alt="">
			</div>
			<div class="box4">
				<img src="https://img.jianke.com/mall/vmall/index/201807/c0631e90b96344ec9b416c302e32b679.jpg" alt="">
			</div> -->
		</article>
		<article class="item-list3">
			<div class="box1" v-for="(n,index) in productlistfour" :key='index'>
				<img :src="n.url" alt="">
			</div>
			<!-- <div class="box2">
				<img src="https://img5.jianke.com/mall/vmall/index/201812/4ad66e6ffc9148a786381685ac90a07d.jpg?imageslim" alt="">
			</div>
			<div class="box3">
				<img src="https://img.jianke.com/mall/vmall/index/201807/39220a6ae9c240eca180a448ce7cda52.jpg" alt="">
			</div>
			<div class="box4">
				<img src="https://img.jianke.com/mall/vmall/index/201807/da16b46aa213494a829ccfbd6b95ac83.jpg" alt="">
			</div> -->
		</article>
		<div class="img-box" data-v-84a71b38="" data-v-431e0e45="">
			<img src="../assets/lg.jpg" data-v-84a71b38="">
		</div>
		<div class="img-box" data-v-84a71b38="" data-v-431e0e45="">
			<img src="../assets/recommend.png" data-v-84a71b38="">
		</div>
	</div>

</template>

<script>
	export default {
        data() {
          return {
            home:[],
			productbigone:[],
			productbigtwo:[],
			productbigthree:[],
			productbigfour:[],
			productlistone:[],
			productlisttwo:[],
			productlistthree:[],
			productlistfour:[]
          };
        },
		methods: {
		async bigimg() {
				let res = await this.$axios.post("http://localhost:4000/users/productbig");
				let aa= res.data.splice(0,2)
				let bb = res.data.splice(0,2)
				let cc = res.data.splice(0,2)
				let dd = res.data.splice(0,2)
				// console.log(aa,bb,cc,dd)
				this.productbigone = this.productbigone.concat(aa)
				this.productbigtwo = this.productbigtwo.concat(bb)
				this.productbigthree = this.productbigthree.concat(cc)
				this.productbigfour = this.productbigfour.concat(dd)
		},
		async imglist() {
				let str = await this.$axios.post("http://localhost:4000/users/productlist");
				let aa= str.data.splice(0,4)
				let bb = str.data.splice(0,4)
				let cc = str.data.splice(0,4)
				let dd = str.data.splice(0,4)
				this.productlistone = this.productlistone.concat(aa)
				this.productlisttwo = this.productlisttwo.concat(bb)
				this.productlistthree = this.productlistthree.concat(cc)
				this.productlistfour = this.productlistfour.concat(dd)
				
		},
		},
		created(){
			// console.log(this)
			this.bigimg();
			this.imglist();
		}
	}
</script>
<style>
article{
	margin-top: 5px;
	/* display:flex;	 */
}	
.item-list,.item-list2{
	height: 104px;
	display:flex;
	justify-content:center;
	background:#F4F4F4;
	margin-right: 5px;
}
.item-list div,.item-list2 div{
	width:48%;
}
.item-list img,.item-list2 img{
	height: 94px;
	width: 100%;
	margin-top:5px;
}
.item-list .box1,.item-list2 .box1{
  margin:0 8px;
  width:48%;
}
/* .item-list .box2,.item-list2 .box2{
  margin-right: 10px;
} */
.item-list3 {
	display: flex;
	justify-content:center;
	height: 110px;
	background:#F4F4F4;
	margin-bottom: 5px;
	
}
.item-list3 div{
	margin-left:5px;
	width: 22%;
	background:#F4F4F4;
}
.item-list3  img{
	height: 110px;
}
</style>
