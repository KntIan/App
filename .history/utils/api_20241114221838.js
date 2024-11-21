import { get, post } from '@/utils/request'

//登录请求

export const loginUser = async (adminlist) => {
  if (!adminlist) {
    throw new Error('adminlist不能为空')
  }
  return await post('/user/login', adminlist)
}

// 获取班级数据
export const fetchClassData = (params) => get('/user/classly', params)

// 获取校区数据
export const fetchCampusData = () => get('/user/school')

//获取验证码
export const fetchVerificationCode = (data) => post('/sms/send', data)

//找回密码 --暂时不同
export const fetchFindPassword = (data) => post('/user/resetpwd', data)

//提交注册信息
export const submitRegisterInfo = (data) => post('/user/register', data)

//活动课列表
export const fetchActivityCourseList = (params) => get('/activity/list', params)

//轮播图列表
export const fetchBannerList = (params) =>
  get('/adv/list?position_mark=index', params)

//资讯列表
export const fetchNewsList = (params) => get('/news/list', params)

//赛事详情
export const fetchMatchDetail = (id) => get('/match/detail?match_id=' + id)

//投诉建议
export const submitComplaint = (data) => post('/user/feedback', data)

//上传图片
export const uploadImage = (data) => post('/common/upload', data)

//公告通知
export const fetchNoticeList = (params) => get('/user/notice', params)

//获取个人信息
export const fetchUserInfo = () => get('/user/personal')

//我的课程列表
export const fetchMyCourseList = (params) => get('/user/lessons', params)

//AI SDK多字图片识别
export const fetchAIRecognition = (data) => post('/common/detecthomework', data)

// 我的近期课程
export const fetchMyRecentCourse = (params) => get('/user/lessonrecent', params)

//学员风采&优秀作品
export const fetchMyStyle = (params) => post('/index/index', params)

//我的老师
export const fetchMyTeacher = (params) => get('/user/myteachers', params)

//我的往期作业
export const fetchMyHistoryHomework = (params) =>
  get('/user/homeworkpast', params)

//我的临时作业
export const fetchMyTemporaryHomework = (params) =>
  get('/user/homeworktemp', params)
