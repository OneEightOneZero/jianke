<template>
	<div>
		<Xfrontpage></Xfrontpage>
		<Xnews></Xnews>
	</div>
</template>

<script>
	import Xfrontpage from '../components/Xfrontpage.vue'
	import Xnews from '../components/Xnews.vue'
	export default {
		components: {
		//引用主件，注册主件，然后再template使用
			Xfrontpage,
			Xnews
		}
		
	}
	
</script>

<style>

</style>
