import { getRequest, postRequest } from '@/utils/axios' // 导入必要的请求方法

// 封装一个通用请求方法
const fetchData = async (url, method = 'GET', data = null, token) => {
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
      return await getRequest(url, config)
    }
  } catch (error) {
    console.error(`请求失败: ${url}`, error)
    throw new Error(`请求失败: ${error.message}`) // 抛出详细错误信息
  }
}

// 登录请求方法
export const loginUser = async (adminlist) => {
  if (!adminlist) {
    throw new Error('adminlist不能为空') // 添加参数检查
  }
  return await fetchData('/user/login', 'POST', adminlist)
}

// 获取班级数据方法
export const fetchClassData = (token) =>
  fetchData('/calligraphy_class/list', 'GET', null, token)

// 获取校园数据方法
export const fetchCampusData = (token) =>
  fetchData('/calligraphy_campus/list', 'GET', null, token)

// 首页轮播图 ----
export const fetchImages = (token) =>
  fetchData('/group_data?config_name=userapp_home_banner', 'GET', null, token)

// 首页优秀作品
export const fetchExcellentWorks = (token) =>
  fetchData('/calligraphyCampus/bestList', 'GET', null, token)

// 学院风采
export const fetchStudentShowcase = (token) =>
  fetchData('/userBestList', 'GET', null, token)

// 活动课
export const fetchActivityClasses = (token) =>
  fetchData('/calligraphyActive/list?page=1&limit=2', 'GET', null, token)

// 咨询下文章列表 ---
export const fetchInfoList = (token) =>
  fetchData('/article/list/8', 'GET', null, token)

// 用户协议
export const fetchUserAgreement = () => fetchData('/get_agreement/4', 'GET')

// 隐私政策
export const fetchPrivacyPolicy = () => fetchData('/get_agreement/3', 'GET')

// 找回密码
export const fetchFindPassword = (data) =>
  fetchData('/register/reset', 'POST', data)

// 当前用户课程
export const fetchUserCourses = (token) =>
  fetchData('/CalligraphyCourseUser/list', 'GET', null, token)

//基础配置 ------
export const fetchBaseConfig = (token) =>
  fetchData('/basic_config', 'GET', null, token)

//文章详情 -----
export const fetchArticleDetail = (token) =>
  fetchData(`/article/details/4`, 'GET', null, token)

//意见反馈 -------
export const fetchFeedback = (data) => fetchData('/feedback/save', 'POST', data)
