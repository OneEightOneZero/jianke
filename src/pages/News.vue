<template>
	<div>
		<Xfrontpage></Xfrontpage>
		<Xnews></Xnews>
		<Xloading></Xloading>
	</div>
</template>

<script>
	import Xfrontpage from '../components/Xfrontpage.vue'
	import Xnews from '../components/Xnews.vue'
	import Xloading from '../components/Xloading.vue' 
	
	export default {
		components: {
		//引用主件，注册主件，然后再template使用
			Xfrontpage,
			Xnews,
			Xloading
		}
		
	}
	
</script>

<style>

</style>
