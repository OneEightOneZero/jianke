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
		<!-- <article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201712/201712418319200!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624="">
				<span class="name" data-v-234d5624="">健力多R氨糖软骨素钙片</span><span class="info"
				data-v-234d5624="">焕发骨骼健康活力！</span>
				<span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>319.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201810/2018108171118881!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">桃花姬阿胶糕</span><span class="info"
				data-v-234d5624="">开袋即食，随时随地，吃出桃花颜！</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>98.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201711/20171115164857295!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">奥利司他胶囊(舒尔佳)</span><span class="info"
				data-v-234d5624="">49粒只需268元</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>268.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201810/201810893145108!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">肾宝片(汇仁)</span><span class="info"
				data-v-234d5624="">领券再减</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>322.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201810/20181017133734497!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">复方阿胶浆(东阿阿胶)(无蔗糖)</span><span class="info"
				data-v-234d5624="">口服液无糖气血双补治贫血改善失眠</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>288.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201709/201791194638926!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">福莱达 电子血压计P1LS813-F</span><span class="info"
				data-v-234d5624=""> 实时传输 异地互联</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>109.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201710/20171024165138276!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">感冒灵颗粒(999)</span><span class="info"
				data-v-234d5624="">四季常备，999呵护全家人健康！</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>12.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201811/20181113115625627!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">vigrx plus威乐男性增强植物营养片（加强版）</span><span
				class="info" data-v-234d5624="">提高男性性能力，延时增长！</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>229.90
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201810/201810917255281!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">杜蕾斯持久装避孕套(含苯佐卡因) 12只</span><span class="info"
				data-v-234d5624="">含苯佐卡因 拒做3秒男</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>89.90
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201810/20181017133710616!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">米诺地尔酊(蔓迪)</span><span class="info"
				data-v-234d5624="">6盒一疗程</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>129.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201702/201722715340324!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">强生稳豪型血糖试纸50片 +施莱采血针50支+消毒棉片50粒</span><span
				class="info" data-v-234d5624=""></span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>189.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201801/201811710611660!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">汤臣倍健蛋白粉(汤臣倍健)</span><span class="info"
				data-v-234d5624="">大牌品质 全球营养 优中选优</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>278.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201810/20181017133641590!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">丙酸氟替卡松鼻喷雾剂(辅舒良)</span><span class="info"
				data-v-234d5624=""></span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>68.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201810/20181016202353472!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">龟鹿补肾片(星辰)</span><span class="info"
				data-v-234d5624="">低至298元（搭金戈尝鲜仅398元）</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>498.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201811/20181114105429600!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">金水宝胶囊(金水宝)</span><span class="info"
				data-v-234d5624="">全新升级大规格 疗程220元</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>68.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201803/201832155147583!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">罗氏卓越血糖试纸50+50采血针+50消毒棉片</span><span
				class="info" data-v-234d5624="">医院推荐款</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>179.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201711/20171115164933484!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">补肺丸(养无极)</span><span class="info"
				data-v-234d5624="">补肺益气，止咳平喘</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>288.00
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201811/20181113122350171!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">vigrx威乐男性增强植物营养片 </span><span class="info"
				data-v-234d5624="">增强男性性功能，达到男性延时效果</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>229.90
				</span></div>
		</article>
		<article class="rl-item" data-v-234d5624=""><img src="https://img.jianke.com/suo//upload/prodimage/201707/201773111543513!200x200.jpg"
			alt="" class="rl-pic" data-v-234d5624="">
			<div class="rl-text" data-v-234d5624=""><span class="name" data-v-234d5624="">优锐 一次性使用注射笔用针头</span><span class="info"
				data-v-234d5624="">原装进口，爱尔兰制造</span><span class="price" data-v-234d5624=""><em data-v-234d5624="">￥</em>158.00
				</span></div>
		</article> -->
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
