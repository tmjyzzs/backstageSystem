import http from '../utils/request'

//请求首页数据
export const getData =()=>{
    //后端的地址,返回一个promise对象
    return http.get('/home/getData',)
}

export const getMenu =(data)=>{
    return http.post('/permission/getMenu',data)
}