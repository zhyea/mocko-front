<template>
	<div class="common-layout">
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside>
					登录信息输入框
				</el-aside>
				<el-main>
					<el-button>我是 ElButton</el-button>
					左侧内容，以动态图为主
				</el-main>
			</el-container>
			<el-footer>
				Copyright等信息
			</el-footer>
		</el-container>
	</div>
</template>


<script setup>
</script>


<style scoped>
.el-header {
	background-color: #ffffff;
}

.el-aside {
	background-color: #646cff;
}

.el-main {
	background-color: aqua;
}

.el-footer {
	background-color: #1a1a1a;
}
</style>