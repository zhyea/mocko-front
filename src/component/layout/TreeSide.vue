<template>
    <el-tree 
    style="max-width: 600px" 
    :data="data" 
    :props="defaultProps" 
    @node-click="handleNodeClick" 
    />
</template>

<script setup>
</script>


<style lang="less" scoped></style>