<template>
	<nav class="case_title">
			<span class="new-mode" :style="{left:Left+'rem'}"></span>
			<ul>
				<li :class="{action:item.start}" v-for="(item,key) in title_list" @click="$emit('chilCall', key,item.tid)" >
					<i class="icon-Url" :style="{backgroundImage:item.start?'url(' + item.imgUrl_two + ')':'url(' + item.imgUrl_one + ')' }"></i>
					<span class="cases-text" :class="{ action:item.start}">{{item.name}}</span>
				</li>
			</ul>
	</nav>
</template>

<script>
	export default{
		name:'case_title',
		props:['Left','title_list'],
		
	}
</script>

<style>
</style>