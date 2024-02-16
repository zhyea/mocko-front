<template>
    <div class="common-layout">
        <el-container>
            <el-container>
                <el-main>
                    {{ msg }}
                    <el-button>我是 ElButton</el-button>
                    左侧内容，以动态图为主
                </el-main>
                <el-aside>
                    登录信息输入框
                </el-aside>
            </el-container>
            <el-footer>
                Copyright等信息
            </el-footer>
        </el-container>
    </div>
</template>


<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})
</script>

<style scoped>
.common-layout {
    height: 100vh;
}

.el-main {
    background-color: aqua;
}

.el-aside {
    background-color: floralwhite;
}


.el-footer {
    background-color: darkgray;
}
</style>


