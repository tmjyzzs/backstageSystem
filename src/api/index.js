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

// 获取floor数据
export const reqFloorList = () => mockRequest.get('/floor')

export const reqGetSearchInfo = (params) => request({ url: '/list', method: 'post', data: params })


//详情模块商品的数据
export const reqDetail = (skuId)=>request({url:`/item/${skuId}`,method:'get'});