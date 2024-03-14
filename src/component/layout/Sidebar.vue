<template>
	<el-aside :width="collapsed ? '65px' : '250px'">
		<div class="sidebar-box">
			<div class="logo-box">
				<div class="normal" v-if="!collapsed">Mocko Server</div>
				<div class="mini" v-else>Mocko</div>
			</div>

			<div class="nav-box">
				<el-scrollbar height="100%">
					<el-menu
						class="el-menu-vertical"
						:collapse="collapsed"
						:router="true"
						background-color="#263238"
						text-color="#afb5bd"
						:collapse-transition="false"
						active-text-color="#ffffff"
					>
					</el-menu>
				</el-scrollbar>
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

.logo-box {
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

.nav-box {
	flex: auto;
	overflow-y: auto;
}

.el-menu-vertical {
	height: 100%;
	border-right: 0;
}
</style>