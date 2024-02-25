
import request from '@/utils/request'


export function checkLogin(reqBody) {

    return request({
        url: '/login',
        method: 'post',
        data: reqBody,
    })

}