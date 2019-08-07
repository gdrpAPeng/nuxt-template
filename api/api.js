import request from '../util/axios'

export const example = params => {
    return request({
        method: 'get',
        url: '/api/admin/order/cancel/file',
        params
    })
}