<template>
	<div class="login_container">
		<div class="login_box">
			<!-- LOGO -->
			<div class="avatar_box">
				<img src="/favicon.svg" alt="Logo"/>
			</div>

			<!--表单信息-->
			<el-form :model="form" label-with="0" class="login_form">
				<el-form-item label="">
					<el-input v-model="form.username"
					          placeholder="用户名"
					          :prefix-icon="User"
					/>
				</el-form-item>
				<el-form-item label="">
					<el-input v-model="form.password"
					          type="password"
					          placeholder="密码"
					          :prefix-icon="Lock"
					          show-password/>
				</el-form-item>
				<el-form-item class="login_btn">
					<el-button type="primary" @click="_checkLogin()">登录</el-button>
					<el-button type="info">重置</el-button>

					<el-icon>
						<Plus/>
					</el-icon>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>


<script setup>
import {ref} from 'vue'
import {checkLogin} from '@/utils/api/login'
import {useRouter} from 'vue-router';
import {Lock, User} from "@element-plus/icons-vue";

const router = useRouter()


let form = ref({
	username: '',
	password: ''
});


function _checkLogin() {

	checkLogin(form.value)
		.then(response => {
			if (response.data) {
				sessionStorage.setItem("isAuthenticated", "true")
				router.push("/home")
			}
		}).catch(error => {
		console.log(error)
	});
}


</script>

<style lang="less" scoped>

.login_box {
	// 宽450像素
	width: 450px;
	// 高300像素
	height: 300px;
	// 背景颜色
	background-color: #fff;
	// 圆角边框3像素
	border-radius: 3px;
	// 绝对定位
	position: absolute;
	// 距离左则50%
	left: 50%;
	// 上面距离50%
	top: 50%;
	// 进行位移，并且在横轴上位移-50%，纵轴也位移-50%
	transform: translate(-50%, -50%);

	.avatar_box {
		// 盒子高度130像素
		height: 90px;
		// 宽度130像素
		width: 90px;
		// 边框线1像素 实线
		border: 1px solid #eee;
		// 圆角
		border-radius: 50%;
		// 内padding
		padding: 10px;
		// 添加阴影 向外扩散10像素 颜色ddd
		box-shadow: 0 0 10px #ddd;
		// 绝对定位
		position: absolute;
		// 距离左则
		left: 50%;
		// 位移
		transform: translate(-50%, -50%);
		// 背景
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

.login_btn {
	// 设置弹性布局
	display: flex;
	// 横轴上尾部对齐
	justify-content: flex-end;
}
</style>


