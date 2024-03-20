<template>
	<el-container class="home_container">
		<sidebar :collapsed="isCollapsed"/>

		<el-container direction="vertical">
			<main-header :collapsed="isCollapsed" @menu="changeMenuStatus"/>
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

import Sidebar from '@/component/layout/Sidebar.vue'
import MainHeader from '@/component/layout/MainHeader.vue'


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
	height: 100%;
}
</style>