import request from '@/utils/request.js'


/**
 * 获取应用信息
 * 
 * @returns 应用集合
 */
export function getAppList() {
	return request.get('/admin/app/list');
}


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