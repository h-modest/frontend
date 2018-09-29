<template lang="html">
	<div class="Row">
		<ul>
			<li class="row_list" v-for="(index,key) in list">	
				<img :src="index.thumb"  />
				{{index.tid}}
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:['list']
	}
</script>

