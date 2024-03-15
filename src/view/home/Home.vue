<template>
	<el-container class="home_container">
		<sidebar :collapsed="isCollapsed"/>

		<el-container direction="vertical">
			<header :collapsed="isCollapsed" @menu="changeMenuStatus"/>
			<el-main>
				<router-view v-slot="{Component}">
					<el-scrollbar height="100%">
						<component :is="Component"/>
					</el-scrollbar>
				</router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup>
import {ref} from 'vue'

import sidebar from '@/component/layout/Sidebar.vue'
import header from '@/component/layout/Header.vue'


let isCollapsed = ref(false)

function changeMenuStatus(status) {
	isCollapsed.value = status
}

</script>

<style lang="less" scoped>

.home_container {
	height: 100%;
}

.el-main {
	padding: 0;
}
</style>