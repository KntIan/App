import { fetchData } from '@/utils/request' // 导入通用请求方法

// 登录请求方法
export const loginUser = async (adminlist) => {
  if (!adminlist) {
    throw new Error('adminlist不能为空') // 添加参数检查
  }
  return await fetchData('/user/login', 'POST', adminlist)
}

// 获取班级数据方法
export const fetchClassData = (data) =>
  fetchData('/user/classly', 'GET', null, data)

// 获取校区数据方法
export const fetchCampusData = (token) =>
  fetchData('/user/school', 'GET', null, token)

// 首页轮播图 ----
// export const fetchImages = (token) =>
//   fetchData('/group_data?config_name=userapp_home_banner', 'GET', null, token)

// 首页优秀作品
// export const fetchExcellentWorks = (token) =>
//   fetchData('/calligraphyCampus/bestList', 'GET', null, token)

// 学院风采
// export const fetchStudentShowcase = (token) =>
//   fetchData('/userBestList', 'GET', null, token)

// 活动课
// export const fetchActivityClasses = (token) =>
//   fetchData('/calligraphyActive/list?page=1&limit=2', 'GET', null, token)

// 咨询下文章列表 ---
// export const fetchInfoList = (token) =>
//   fetchData('/article/list/8', 'GET', null, token)

// 用户协议
// export const fetchUserAgreement = () => fetchData('/get_agreement/4', 'GET')

// 隐私政策
// export const fetchPrivacyPolicy = () => fetchData('/get_agreement/3', 'GET')

// 找回密码
export const fetchFindPassword = (data) =>
  fetchData('/user/resetpwd', 'POST', data)

// 获取验证码
export const fetchVerificationCode = (data) =>
  fetchData('/sms/send', 'POST', data)

// 当前用户课程
// export const fetchUserCourses = (token) =>
//   fetchData('/CalligraphyCourseUser/list', 'GET', null, token)

// 基础配置 ------
// export const fetchBaseConfig = (token) =>
//   fetchData('/basic_config', 'GET', null, token)

// 文章详情 -----
// export const fetchArticleDetail = (token) =>
//   fetchData(`/article/details/4`, 'GET', null, token)

// 意见反馈 -------
// export const fetchFeedback = (data) => fetchData('/feedback/save', 'POST', data)
