import request from '@/utils/request.js'

/**
 * 类结构树
 * @param  appId 应用ID
 * @returns  类结构树
 */
export function getClassTree(appId) {
	return request.post('/admin/classes/tree', {
		'appId': appId
	});
}


/**
 * 获取类下的方法
 * @param classId 类ID
 */
export function getMethods(classId) {
	return request.post('/admin/classes/methods', {
		'classId': classId
	})
}