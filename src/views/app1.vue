<template>
	<div class="demo-image__placeholder">
		<div class="block" v-for="(item,i) in items" :key="i">
			<!-- <span class="demonstration">默认</span> -->
			<el-image :src="item"></el-image>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					require('../assets/logo.png'),
					require('../assets/logo.png'),
					require('../assets/logo.png'),
					require('../assets/logo.png'),
				]
			}
		}
	}
</script>

<style>
</style>
