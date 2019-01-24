<template>
	<div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators" style="top:150px;">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class=""></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
			<li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="3" class="active"></li>
    </ol>
    <div class="carousel-inner">
				<div class="carousel-item " > 
						<!-- <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide" alt="First slide [800x400]" 
						:src="n.url" data-holder-rendered="true"> -->
						<img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide" alt="First slide [800x400]" 
						src="https://img5.jianke.com/mall/vmall/index/201901/7158d43b044c4571a7ef921dd4f7dbae.jpg" data-holder-rendered="true">
						
						<div class="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
				</div>
			<div class="carousel-item active carousel-item-left">
					<img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" alt="Second slide [800x400]" 
					src="https://img5.jianke.com/mall/vmall/index/201901/1fa3044206304c41b00ae4775944d89f.jpg" data-holder-rendered="true">
					<div class="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
     <div class="carousel-item carousel-item-next carousel-item-left">
        <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide" alt="Third slide [800x400]" 
				src="https://img5.jianke.com/mall/vmall/index/201901/c6afbe8008e040388fe9c632f654806a.jpg" data-holder-rendered="true">
       <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
			<div class="carousel-item carousel-item-next carousel-item-left">
				<img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide" alt="Third slide [800x400]" 
				src="https://img5.jianke.com/mall/vmall/index/201812/26f4451862ca4b059543eea8c76c774a.jpg" data-holder-rendered="true">
			</div>
    </div>
			<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
  </div>
</div>
</template>

<script>
	export default {
		data() {
			return {
				bannerpic: [],
			}
		},
		methods: {
			async banner() {
					let data = await this.$axios.post("http://localhost:4000/users/findBanner");
					this.bannerpic = this.bannerpic.concat(data.data)
			},
		},
			created(){
				// console.log(this)
				this.banner();
				
			}
	}
</script>

<style>

</style>
