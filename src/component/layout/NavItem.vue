<template>
	<!-- parent -->
	<el-sub-menu
		:index="props.item.uri"
		v-if="props.item.children"
	>

	</el-sub-menu>

	<!-- children -->
	<el-sub-menu>
	</el-sub-menu>
</template>

<script setup>
import {computed} from 'vue'

const props = defineProps({
	item: {
		type: Object,
		required: true
	}
})

const icon = computed(() => (name) => {
	return name
})
</script>

<style scoped lang="less">

</style>