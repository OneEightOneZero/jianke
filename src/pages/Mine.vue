<template>
	<div>
		<Xheader></Xheader>
		<Xuser></Xuser>
	</div>
</template>
<script>
	import Xuser from '../components/Xuser.vue'
	import Xheader from '../components/Xheader.vue'
	export default {
		components: {
			Xheader,
			Xuser
		}
	}
</script>
