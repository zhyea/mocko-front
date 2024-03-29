import axios from 'axios';
import {ElMessage} from "element-plus";

//1. 创建axios对象
const axiosInst = axios.create({
	baseURL: `${import.meta.env.VITE_BASE_URL}`,
	timeout: `${import.meta.env.VITE_REQUEST_TIMEOUT}`,
	// 请求头
	headers: {
		"Content-Type": "application/json;charset=UTF-8",
	},
});


//2. 请求拦截器
axiosInst.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		Promise.reject(error);
	}
);


//3. 响应拦截器
axiosInst.interceptors.response.use(
	response => {
		//判断code码
		return response.data;
	},
	error => {
		let resp = error.response

		// TODO 处理无权限跳出

		let msg = (resp.data.message ? resp.data.message : resp.statusText)

		ElMessage.warning({
			msg,
			duration: 1500,
		})

		return Promise.reject(error);
	}
);



export default axiosInst;