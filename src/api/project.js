import request from '@/utils/request.js'


export function getAppList() {
	return request.get('/admin/app/list');
}