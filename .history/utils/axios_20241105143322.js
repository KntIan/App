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

// 封装HTTP请求函数
const httpRequest = (method) => async (url, data) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `http://zexiart.com/api${url}`, // API基础URL需加在这里
      method: method.toUpperCase(),
      data: data,
      header: {
        token: uni.getStorageSync('token') || '', // 添加token到请求头
      },
      success: (response) => {
        if (response.statusCode === 200) {
          resolve(response.data) // 返回数据
        } else {
          reject(new Error(`API错误: ${response.statusCode}`)) // 错误处理
        }
      },
      fail: (error) => {
        console.error(`请求 ${method.toUpperCase()} ${url} 时出错:`, error)
        reject(error) // 传递错误
      },
    })
  })
}

// 封装GET、POST、PUT、DELETE请求
export const get = httpRequest('get')
export const post = httpRequest('post')
