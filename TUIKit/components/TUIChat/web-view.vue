<template>
	<web-view :src="url" />
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import { onLoad } from '@dcloudio/uni-app';

	const url = ref('');
	onLoad((option : any) => {
		url.value = option && option.url;
	});
</script>