<template>

		<div class="app-box">
			<div class="app-icon">
				{{ props.item.icon }}
			</div>

			<div class="app-title">
				{{ props.item.appName }}
			</div>
		</div>
</template>

<script setup>
const props = defineProps({
	item: {
		type: Object,
	}
})
</script>

<style scoped lang="less">
.app-box {
	display: grid;
	width: 150px;
	height: 150px;
	justify-content: center;

	.app-icon {
		display: flex;
		margin: 20px 30px 0 30px;
		padding: 0;
		height: 90px;
		width: 90px;
		border: 3px solid #42b983;
		border-radius: 50%;
		background-color: #FFFFFF;
		align-items: center;
		justify-content: center;
		font-size: 36px;
		font-weight: bold;
		color: #42b983;
	}

	.app-title {
		display: block;
		margin: 0 20px 6px 20px;
		padding: 0;
		width: 110px;
		height: 20px;
		overflow: hidden;
		text-align: center;
		font-family: 'Monospaced', 'serif';
	}

}
</style>