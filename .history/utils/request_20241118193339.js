// 封装HTTP请求函数
const httpRequest = (method) => async (url, data, token) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `http://admin.zexishuhua.com/api${url}`, // API基础URL需加在这里
      //   url: `http://www.zexiart.com/api${url}`, // API基础URL需加在这里
      // url: `http://zexiart.com/api${url}`, // API基础URL需加在这里
      method: method.toUpperCase(),
      sslVerify: false, // 关闭SSL验证
      data: data,
      header: {
        token: token || uni.getStorageSync('token') || '', // 添加token到请求头
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

// 封装GET、POST请求
export const get = (url, params, token) =>
  httpRequest('get')(url, params, token)
export const post = (url, data, token) => httpRequest('post')(url, data, token)
