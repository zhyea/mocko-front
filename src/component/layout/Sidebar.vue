<template>
	<el-aside :width="collapsed ? '65px' : '250px'">
	</el-aside>
</template>

<script setup>
const props = defineProps({
	collapsed: Boolean
})
</script>


<style scoped lang="less">

</style>