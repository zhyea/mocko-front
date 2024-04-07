import request from '@/utils/request.js'


export function getAppList() {
	return request.get('/admin/app/list');
}


export function getClassesTree(appId) {
	return request.post('/admin/classes/tree', {
		'appId': appId
	});
}