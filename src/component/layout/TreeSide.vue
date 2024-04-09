<template>
    <el-tree 
        style="max-width: 300px" 
        :data="props.data" 
        :props="treeConfig" 
        @node-click="handleNodeClick" />
</template>

<script setup>

const props = defineProps({
    data: Object,
})


const treeConfig = {
  children: 'children',
  label: 'value',
}

const handleNodeClick = (data) => {
  console.log(data)
}
</script>


<style lang="less" scoped></style>