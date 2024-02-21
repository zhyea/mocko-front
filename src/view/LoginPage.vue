<template>
    <div class="common-layout">
        <el-container>
            <el-container>
                <el-form :model="form" label-with="120px">
                    <el-form-item label="用户名">
                        <el-input v-model="form.username" />
                    </el-form-item>
                </el-form>
                <el-form :model="form" label-with="120px">
                    <el-form-item label="密码">
                        <el-input v-model="form.username" type="password" placeholder="请输入密码" show-password />
                    </el-form-item>
                </el-form>
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


