<<<<<<< HEAD
import { get, post } from '@/utils/request';
=======
import { get, post } from '@/utils/request'
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

//登录请求

export const loginUser = async (adminlist) => {
  if (!adminlist) {
<<<<<<< HEAD
    throw new Error('adminlist不能为空');
  }
  return await post('/user/login', adminlist);
};

// 获取班级数据
export const fetchClassData = (params) => get('/user/classly', params);

// 获取校区数据
export const fetchCampusData = () => get('/user/school');

//获取验证码
export const fetchVerificationCode = (data) => post('/sms/send', data);

//找回密码 --暂时不同
export const fetchFindPassword = (data) => post('/user/resetpwd', data);

//提交注册信息
export const submitRegisterInfo = (data) => post('/user/register', data);

//活动课列表
export const fetchActivityCourseList = (params) =>
  get('/activity/list', params);

//轮播图列表
export const fetchBannerList = (params) =>
  get('/adv/list?position_mark=index', params);

//资讯列表
export const fetchNewsList = (params) => get('/news/list', params);

//赛事详情
export const fetchMatchDetail = (id) => get('/match/detail?match_id=' + id);

//投诉建议
export const submitComplaint = (data) => post('/user/feedback', data);

//上传图片
export const uploadImage = (data) => post('/common/upload', data);

//公告通知
export const fetchNoticeList = (params) => get('/user/notice', params);

//获取个人信息
export const fetchUserInfo = () => get('/user/personal');

//我的课程列表
export const fetchMyCourseList = (params) => get('/user/lessons', params);

//AI SDK多字图片识别
export const fetchAIRecognition = (data) =>
  post('/common/detecthomework', data);

// 我的近期课程
export const fetchMyRecentCourse = (params) =>
  get('/user/lessonrecent', params);

//学员风采&优秀作品
export const fetchMyStyle = (params) => post('/index/index', params);

//我的老师
export const fetchMyTeacher = (params) => get('/user/myteachers', params);

//我的往期作业
export const fetchMyHistoryHomework = (params) =>
  get('/user/homeworkpast', params);

//我的临时作业
export const fetchMyTemporaryHomework = (params) =>
  get('/user/homeworknow', params);

//写作业视频MP3播放
export const fetchHomeworkAudio = (data) => get('/user/dohomework', data);

//提交作业
export const submitHomework = (data) => post('/user/dohomework', data);

//报名活动
export const signUpActivity = (data) => post('/activity/signup', data);

//关于我们
export const fetchAboutUs = () => get('/user/aboutus');

//联系我们
export const fetchContactUs = () => get('/user/contact');

//修改手机号
export const updatePhone = (data) => post('/user/changemobile', data);

//去学习
export const goStudy = (data) => get('/user/gostudy', data);

//我的AI作品
export const fetchMyAIWork = (params) => get('/user/homeworkai', params);

//修改头像
export const updateAvatar = (data) => post('/user/profile', data);

//用户协议
export const fetchUserAgreement = (data) => get('/common/agreement', data);

//判断用户身份是否可以加好友
export const checkUserFriend = (data) => get('/common/judgeident', data);

//生成二维码
export const generateQRCode = (data) => get('/common/qrcode', data);

//今日作业列表
export const fetchTodayHomeworkList = (params) =>
  get('/user/homeworktoday', params);

//临时作业列表
export const fetchTemporaryHomeworkList = (params) =>
  get('/user/homeworknow', params);

//近期作业列表
export const fetchRecentHomeworkList = (params) =>
  get('/user/homeworkshottime', params);

//老师审阅作业
export const fetchTeacherReviewHomework = (params) =>
  get('/user/homeworkpast', params);

//点击近期列表去学习
export const goStudyFromRecentList = (data) =>
  get('/user/lessonrecentgostudy', data);

//作业ai审阅详情
export const fetchHomeworkAIReviewDetail = (data) =>
  get('/user/homeworkaidetail', data);

//首页优秀作品列表
export const fetchIndexStyleList = (params) =>
  get('/index/nicehomework', params);

//首页优秀学员列表
export const fetchIndexTeacherList = (params) =>
  get('/index/nicestudent', params);

//作业审阅详情
export const fetchHomeworkReviewDetail = (data) =>
  get('/user/homeworkdetail', data);

//ai评测获取评分区间
export const fetchAIAssessmentScoreRange = (data) => get('/user/aiscore', data);
=======
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
  get('/user/homeworknow', params)

//写作业视频MP3播放
export const fetchHomeworkAudio = (id) =>
  get('/user/dohomework?homework_id=' + 1)

//提交作业
export const submitHomework = (data) => post('/user/dohomework', data)

//报名活动
export const signUpActivity = (data) => post('/activity/signup', data)

//关于我们
export const fetchAboutUs = () => get('/user/aboutus')

//联系我们
export const fetchContactUs = () => get('/user/contact')

//修改手机号
export const updatePhone = (data) => post('/user/changemobile', data)

//去学习
export const goStudy = (data) => get('/user/gostudy', data)

//我的AI作品
export const fetchMyAIWork = (params) => get('/user/homeworkai', params)
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
