import request from '../utils/request'

export const testReqtest = () => {
    // 测试发送请求
    return request({ url: '/api/test', method: 'get' })
}

// 获取三级菜单
export const getBaseCategoryList = () =>{
    return request({ url: '/product/getBaseCategoryList', method: 'get' })
} 