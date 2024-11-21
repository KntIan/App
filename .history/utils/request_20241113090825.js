// 封装HTTP请求函数
const httpRequest = (method) => async (url, data) => {
  console.log(2222222223333333)
  return new Promise((resolve, reject) => {
    uni.request({
      url: `http://192.168.2.48/api${url}`, // API基础URL需加在这里
      method: method.toUpperCase(),
      sslVerify: false, // 关闭SSL验证
      data: data,
      header: {
        token: uni.getStorageSync('token') || '', // 添加token到请求头
      },
      success: (response) => {
        console.log(22222222222)
        if (response.statusCode === 200) {
          resolve(response.data) // 返回数据
        } else {
          reject(new Error(`API错误: ${response.statusCode}`)) // 错误处理
        }
      },
      fail: (error) => {
        console.log(error)
        console.error(`请求 ${method.toUpperCase()} ${url} 时出错:`, error)
        reject(error) // 传递错误
      },
    })
  })
}

// 封装GET、POST、PUT、DELETE请求
export const get = httpRequest('get')
export const post = httpRequest('post')
