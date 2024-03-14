<template>
	<el-aside :width="collapsed ? '65px' : '250px'">
		<div class="sidebar-box">
			<div class="logo-box">
			</div>
		</div>
	</el-aside>
</template>

<script setup>
const props = defineProps({
	collapsed: Boolean
})
</script>


<style scoped lang="less">
.sidebar-box {
	display: flex;
	flex-direction: column;
	height: 100%;
	background: #263238;
	border-right: 1px solid #e6e6e6;
}

.logo {
	height: 60px;
	display: flex;
	line-height: 60px;
	color: #42b983;
	width: 100%;

	.normal {
		padding-left: 20px;
	}

	.mini {
		width: 100%;
		text-align: center;
	}
}
</style>