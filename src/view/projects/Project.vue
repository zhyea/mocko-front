<template>
	<el-container class="project-container">
		<el-aside class="tree-container">
			<tree-side :data="treeData"/>
		</el-aside>

		<el-main>
			<router-view></router-view>
		</el-main>
	</el-container>
</template>

<script setup>
import {ref} from "vue";

import TreeSide from '@/component/layout/TreeSide.vue'
import {getClassTree} from "@/api/project.js";
import {useRoute} from 'vue-router';

const route = useRoute();

let treeData = ref(null)

getClassTree(route.query.appId).then(response => {
	treeData.value = response.data
})

</script>


<style lang="less" scoped>

.project-container {
	height: 100%;
}

.tree-container {
	background-color: #F5F5F5;

	.el-tree {
		background: transparent;
	}

	.is-current {
		background-color: #000;
	}
}
</style>