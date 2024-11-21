import { getRequest, postRequest } from '@/utils/axios' // 导入必要的请求方法

// 封装一个通用请求方法
export const fetchData = async (url, method = 'GET', data = null, token) => {
  if (!url) {
    throw new Error('URL不能为空') // 添加基本的参数检查
  }

  try {
    const config = {
      headers: { Authorization: token ? `Bearer ${token}` : undefined }, // 使用undefined而不是空字符串
    }

    // 根据请求方法决定使用 get 或 post
    if (method.toUpperCase() === 'POST') {
      return await postRequest(url, data, config)
    } else if (method.toUpperCase() === 'GET') {
      // 对于 GET 请求，合并参数对象
      const params = data || {} // 如果没有 data，则使用空对象
      // 确保 params 是一个对象，而不会有数组、null 或未定义的情况
      if (typeof params !== 'object') {
        throw new Error('GET 请求的参数必须是对象')
      }
      return await getRequest(url, params, config) // 传递参数对象
    } else {
      throw new Error(`不支持的请求方法: ${method}`) // 针对不支持的方法抛出错误
    }
  } catch (error) {
    console.error(`请求失败: ${url}`, error)
    // 详细错误处理，检查error对象的各种可能属性
    throw new Error(`请求失败: ${error.message || error.msg || '未知错误'}`) // 抛出详细错误信息
  }
}
