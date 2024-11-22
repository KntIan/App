// utils/request.js
// import uniRequest from '@dcloudio/uni-app'

// 创建一个请求实例
const request = uni.request.create({
  baseURL: 'http://zexiart.com/api', // 替换为你的API域名
  timeout: 60000, // 请求超时时间
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
