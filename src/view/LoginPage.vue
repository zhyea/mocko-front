<template>
    {{ msg }}
    <el-button>我是 ElButton</el-button>
</template>


<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})
</script>

