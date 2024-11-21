// import axios from 'axios'

// // 创建一个axios实例
// const instance = axios.create({
//   baseURL: 'http://zexiart.com/api', // 设置基础URL
//   timeout: 10000, // 请求超时设置
// })

// // 添加请求拦截器
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token') // 从 localStorage 获取 Token
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}` // 将 Token 加入请求头
//     }
//     return config
//   },
//   (error) => Promise.reject(error) // 简化错误处理
// )

// // 添加响应拦截器
// instance.interceptors.response.use(
//   (response) => response.data, // 直接返回data部分
//   (error) => {
//     // 处理响应错误，提供统一的错误处理逻辑
//     const errorMessage = error.response
//       ? error.response.data
//       : { message: '网络错误' }
//     return Promise.reject(errorMessage)
//   }
// )

// // 封装请求方法
// const request = (method) => (url, data) => {
//   return instance[method](url, data)
// }

// // 封装GET和POST请求
// export const getRequest = request('get')
// export const postRequest = request('post')
// // export const putRequest = request("put");
// // export const deleteRequest = request("delete");

// utils/request.js
import uniRequest from '@dcloudio/uni-app'

// 创建一个请求实例
const request = uniRequest.create({
  baseURL: 'http://zexiart.com/api', // 替换为你的API域名
  timeout: 60000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json', // 默认的Content-Type
  },
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = uni.getStorageSync('token') // 从本地存储获取token
    if (token) {
      config.header['Authorization'] = `Bearer ${token}` // 添加token到请求头
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// 封装GET请求
export const getRequest = (url, params = {}) => {
  return request.get(url, { params })
}

// 封装POST请求
export const postRequest = (url, data = {}) => {
  return request.post(url, data)
}
