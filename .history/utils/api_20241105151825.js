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
