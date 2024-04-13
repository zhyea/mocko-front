<template>
	<el-tree
		style="max-width: 300px"
		:data="props.treeData"
		:props="treeConfig"
		:highlight-current="true"
		:default-expand-all="true"
		@node-click="handleNodeClick"
	>
		<template #default="{ node, data }">
              <span>
                <el-icon>
	                <Folder v-if="data.children.length"/>
	                <DocumentAdd v-if="!data.children.length"/>
                </el-icon>  {{ node.label }}
              </span>
		</template>
	</el-tree>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter();

const props = defineProps({
	treeData: Object,
})

const treeConfig = {
	children: 'children',
	label: 'value',
}

const handleNodeClick = (data) => {
	console.log(data)
}
</script>


<style lang="less" scoped>
</style>