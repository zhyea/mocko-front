import request from '@/utils/request.js'


/**
 * 发送登录请求
 */
export function doLogin(data) {

	return request.post(
		'/login',
		{
			...data,
		})

}


/**
 * 发送退出请求
 */
export function doLogout() {
	return request.post('/logout')
}


/**
 * 设置token
 */
export function setToken(token) {
	request.defaults.headers.common.Authorization = `Bearer ${token}`
}


/**
 * 设置token
 */
export function removeToken() {
	request.defaults.headers.common.Authorization = ``
}
