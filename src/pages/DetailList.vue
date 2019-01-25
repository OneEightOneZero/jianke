<template>
	<div>
		<Xheader></Xheader>
		<Xdetail></Xdetail>
		<Xdetailfooter></Xdetailfooter>
		<Xinputcar></Xinputcar>
	</div>
	
</template>

<script>
import Xheader from "../components/Xheader.vue";
import Xdetail from "../components/Xdetail.vue";
import Xdetailfooter from "../components/Xdetailfooter.vue";
import Xinputcar from "../components/Xinputcar.vue";
	export default {
		components: {
			Xheader,
			Xdetail,
			Xdetailfooter,
			Xinputcar
			
		},
	}
</script>

<style>

</style>
