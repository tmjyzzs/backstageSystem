import request from '../utils/request'

export const testReqtest = () => {
    // 测试发送请求
    return request({ url: '/api/test', method: 'get' })
}