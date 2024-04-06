<template>
	<div class="app-container">
		<app-item v-for="item in appItems" :item="item" :key="item.appId"/>
	</div>
</template>

<script setup>
import AppItem from "@/view/projects/AppItem.vue";
import {getAppList} from "@/api/project.js";
import {ref} from "vue";

defineProps({
	appItems: Array,
})


let appItems = ref([])

getAppList().then(response => {
	appItems.value = response.data
})

</script>

<style scoped lang="less">
.app-container {
	display: flex;
}
</style>