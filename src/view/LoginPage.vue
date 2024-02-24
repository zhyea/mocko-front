<template>
    <div class="login_container">
        <div class="login_box">
            <!-- LOGO -->
            <div class="logo_box">
                <img src="../assets/vue.svg" alt="Logo" />
            </div>

            <!--表单信息-->
            <el-form :model="form" label-with="120px" class="login_form">
                <el-form-item label="用户名">
                    <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password />
                </el-form-item>
                <el-form-item class="login_btns">
                    <el-button type="primary" @click="checkLogin()">登录</el-button>
                    <el-button type="info">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import axios from 'axios';

import { mockoRouter } from 'vue-router';
const router = mockoRouter()

let form = ref({
    username: '',
    password: ''
});

function checkLogin() {
    let url = '';
    axios.post(url, {
        username: form.value.username,
        password: form.value.password
    }).then(response => {
        console.log(response.data);

        if (response.code == 200) {
            sessionStorage.setItem("isAuthenticated", true)
            router.push("/home")
        }
    }).catch(error => {
        console.log(error)
    });
}


</script>

<style scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100vh;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}

.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}


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


