import { getRequest, postRequest } from '@/utils/axios' // 导入必要的请求方法

// 封装一个通用请求方法
export const fetchData = async (url, method = 'GET', data = null, token) => {
  if (!url) {
    throw new Error('URL不能为空') // 添加基本的参数检查
  }

  try {
    const config = {
      headers: { Authorization: `Bearer ${token || ''}` }, // 如果没有token，则使用空字符串
    }

    // 根据请求方法决定使用 get 或 post
    if (method.toUpperCase() === 'POST') {
      return await postRequest(url, data, config)
    } else {
      // 对于 GET 请求，合并参数对象
      const params = data || {} // 如果没有 data，则使用空对象
      return await getRequest(url, params, config) //传递参数对象
    }
  } catch (error) {
    console.error(`请求失败: ${url}`, error)
    throw new Error(`请求失败: ${error.message || error.msg}`) // 抛出详细错误信息
  }
}
