import {createRouter, createWebHistory} from 'vue-router'

import routes from './routes'


//-创建路由对象
const router = createRouter({
	history: createWebHistory(`${import.meta.env.BASE_URL}`),
	routes: routes,
})


//全局守卫  访问非Login界面时，验证是否已登录
router.beforeEach((to, from, next) => {
	//判断是否已登录 查sessionStorage中是否有isAuthenticated信息
	let isAuthenticated = sessionStorage.getItem("isAuthenticated")
	//判断路由的别名不是登录且未进行登录认证，就跳转去登录
	// if (to.name != "LoginPage" && !isAuthenticated) {
	//     next({ name: "LoginPage" })
	// } else if (to.name == "LoginPage" && isAuthenticated) {
	//     // 已登录，不允许退回到登录页面
	//     next({ name: "HomePage" })
	// } else {
	next()
	// }
})


//-将路由暴露出去，其他文件才能访问
export default router