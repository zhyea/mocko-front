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
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="用户名">
                            <el-input clearable />
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input clearable />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">提交</el-button>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" >重置</el-button>
                        </el-form-item>
                    </el-form>
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


