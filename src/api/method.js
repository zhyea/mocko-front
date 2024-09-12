import request from '@/router/request.js'


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
 * 修改方法信息
 *
 * @param  methodData 修改方法信息
 */
export function modifyMethodInfo(methodData) {
	return request.post('/admin/method/change-response', methodData);
}



export function maintainMethodResponseRule(ruleData){

}