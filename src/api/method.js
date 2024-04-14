import request from '@/utils/request.js'


/**
 * 获取方法信息
 * @param methodId 方法ID
 * @returns 方法信息
 */
export function getMethod(methodId) {
	return request.post('/admin/method/get', {
		'methodId': methodId
	})
}


/**
 * 类结构树
 * @param  appId 应用ID
 * @returns  类结构树
 */
export function changMethodResponse(methodData) {
	return request.post('/admin/method/change-response', methodData);
}
