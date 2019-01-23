<template>
	<div>
		<div data-v-3d70ccad="" data-v-aed32f50="" style="margin-top:40px;">
			<div data-v-3d70ccad="" class="item recommends-first-image">
				<div data-v-3d70ccad="" class="item-body" style="flex-direction: column;">
					<div data-v-3d70ccad="" class="box-two-lines">
						<h2 data-v-3d70ccad="">警惕这么多药导致糖尿病患者血糖升高！</h2>
					</div>
					<div data-v-3d70ccad="" class="item-image">
						<div data-v-3d70ccad="" class="img-cover img-tag" style="background-image: url(&quot;/dist/default.e8757109.png&quot;);">
							<div data-v-3d70ccad="" class="img-cover img-tag" style="background-image: url(&quot;https://img.jianke.com/mall/jktt/201811/a7488cb88696470dbc590aae951e4159.jpg&quot;);"></div>
						</div> <i data-v-3d70ccad=""></i>
					</div>
					<div data-v-3d70ccad="" class="item-foot"><img data-v-3d70ccad="" src="https://img.jianke.com/mall/common/201804/0eae9b54a46842b5aba974d97576c492"
						alt="" class="img-healthid"> <span data-v-3d70ccad="" class="health-name">糖尿病管家</span> <span data-v-3d70ccad=""
						class="skim">1714 次浏览</span></div>
				</div>
			</div>
			<div>
				<div data-v-3d70ccad="" data-v-aed32f50="" v-for="(n,index) in newlist" :key="index">
					<div data-v-3d70ccad="" class="item single-image">
						<div data-v-3d70ccad="" class="item-body" style="flex-direction: column;">
							<div data-v-3d70ccad="" class="box-two-lines">
								<h2 data-v-3d70ccad="" v-text="n.title"></h2>
							</div>
							<div data-v-3d70ccad="" class="item-image">
								<div data-v-3d70ccad="" class="img-cover img-tag" style="background-image: url(&quot;/dist/default.e8757109.png&quot;);">
									<div data-v-3d70ccad="" class="img-cover img-tag" :style="{'backgroundImage': `url(${n.cover[0]})`}">
									</div>
								</div>
							</div>
							<div data-v-3d70ccad="" class="item-foot" >
								<img data-v-3d70ccad="" :src="n.healthimage" alt="" class="img-healthid">
								<span data-v-3d70ccad="" class="health-name" v-text="n.healthName">
								</span>
								<span data-v-3d70ccad="" class="skim">{{n.pv}} 次浏览</span>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>

	
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newlist: [],
				bb:2
			}
		},
		methods: {
			async GetNews() {
				let data = await this.$axios.get("https://jktt-api.jianke.com/m/recommends/articles?page=1&size=10");
				this.newlist = this.newlist.concat(data.data.data.datalist)
			}
		},
		created() {
			this.GetNews()
			let $=this.$
			var self =this
			$(window).scroll(function(){
				let scrollTop = $(this).scrollTop()
				let scrollHeight = $(document).height()
				let windowHeight = $(this).height()
				if(scrollTop + windowHeight === scrollHeight){
					
					var cc= self.bb++
					if(cc<9){
						$.ajax({
							type: "GET",
							url: `https://jktt-api.jianke.com/m/recommends/articles?page=${cc}&size=10`,
							success(data) {
								// console.log(data.data.datalist)
								self.newlist = self.newlist.concat(data.data.datalist)
							}
						})
					}
				}
			})
		}
	}
</script>

<style scoped src="../../style/news.css">

</style>
