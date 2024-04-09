<template>
    <el-container>
        <el-aside>
            <tree-side :data="treeData" />
        </el-aside>

        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script setup>
import { ref } from "vue";

import TreeSide from '@/component/layout/TreeSide.vue'
import { getClassTree } from "@/api/project.js";


let treeData = ref(null)

console.log(window.location)

getClassTree().then(response => {
    treeData = response.data
})


</script>


<style lang="less" scoped></style>