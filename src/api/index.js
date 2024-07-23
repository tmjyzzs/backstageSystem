import request from '../utils/request'

import mockRequest from '../utils/mockRequest'

export const testReqtest = () => {
    // 测试发送请求
    return request({ url: '/api/test', method: 'get' })
}

// 获取三级菜单
export const getBaseCategoryList = () => {
    return request({ url: '/product/getBaseCategoryList', method: 'get' })
}

// 获取banner(Home首页数据)
export const reqGetBannerList = () => mockRequest.get('/banner')