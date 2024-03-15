<template>
	<div class="tags-box">
		<div class="tags-left-btn" @click="tagsScroll(300)">
			<el-button plain :icon="ArrowLeft"/>
		</div>
	</div>
</template>

<script setup>

import {ArrowLeft} from "@element-plus/icons-vue";


function tagsScroll(offset) {
	const tagsListWidth = tagsListRef.value.offsetWidth - 150
	const tagsViewWidth = tagsViewRef.value.offsetWidth

	if (tagsListWidth > tagsViewWidth) {
		return tagsViewLeft.value = 0
	}

	if (offset > 0) {
		return tagsViewLeft.value = Math.min(0, tagsViewLeft.value + offset)
	}

	if (tagsViewLeft.value > -(tagsViewWidth - tagsListWidth)) {
		tagsViewLeft.value = Math.max(tagsViewLeft.value + offset, tagsListWidth - tagsViewWidth)
	}
}
</script>

<style scoped lang="less">
.tags-box {
	position: relative;
	height: 40px;
	background-color: #f0f2f5;
	flex-shrink: 0;
	-webkit-flex-shrink: 0;
	overflow: hidden;
	width: 100%;

	.tags-left-btn {
		position: absolute;
		z-index: 10;
		left: 0;
	}

	.tags-right-btn {
		position: absolute;
		z-index: 10;
		right: 44px;
		border-right: 1px solid #e6e6e6;
	}

	.tags-close {
		position: absolute;
		z-index: 10;
		right: 0;
	}

	.tags-list {
		position: absolute;
		left: 45px;
		width: 100%;

		.tags-view {
			margin-top: 3px;
			position: absolute;
			white-space: nowrap;
			overflow: hidden;
		}
	}
}
</style>