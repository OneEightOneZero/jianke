<template>
	<div>
		<XindexSearch></XindexSearch>
		<Xbanner></Xbanner>
		<Xlist></Xlist>
		<Xnav></Xnav>
		<Xrecommend></Xrecommend>		
	</div>
</template>

<script>
	import XindexSearch from '../components/XindexSearch.vue'
	import Xbanner from '../components/Xbanner.vue'
	import Xlist from '../components/Xlist.vue'
	import Xnav from '../components/Xnav.vue'
	import Xrecommend from '../components/Xrecommend.vue'
	export default {
		components: {
			XindexSearch,
			Xbanner,
			Xlist,
			Xnav,
			Xrecommend
				
		},
	}
</script>

<style>

</style>
