<template>
	<div class="app-container">
		<app-item v-for="item in appItems" :item="item" :key="item.appId"/>
	</div>
</template>

<script setup>
import {ref} from "vue";

import AppItem from "@/component/layout/AppItem.vue";
import {getAppList} from "@/api/project.js";

defineProps({
	appItems: Array,
})


let appItems = ref([])

getAppList().then(response => {
	let arr = response.data
	if (!arr) {
		return;
	}
	arr.forEach(e => {
		e.icon = e.appName.charAt(0).toUpperCase();
	});
	appItems.value = arr
})

</script>

<style scoped lang="less">
.app-container {
	display: flex;
}
</style>