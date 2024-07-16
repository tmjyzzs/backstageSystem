import axios from 'axios'
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'

console.log(nprogress)

const requests = axios.create({
  //通用请求的地址前缀
  baseURL: '/api',
  timeout: 10000,//超时时间

})

// 添加请求拦截器
requests.interceptors.request.use(function (config) {
  nprogress.start();
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
requests.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  nprogress.done();
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default requests