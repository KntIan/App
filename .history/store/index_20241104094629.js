import { defineStore } from 'pinia'
import * as api from '@/utils/api' // 引入封装的请求文件

export const useStore = defineStore('main', {
  state: () => ({
    // 保留需要的状态
    token: null,
    privacyPolicy: '',
    userAgreement: '',
  }),
  actions: {
    // 登录
    async login(adminlist) {
      try {
        const response = await api.loginUser(adminlist) // 调用 API 方法进行登录
        console.log('登录请求成功:', response)
        if (response.code === 1) {
          const { token } = response.data.userinfo // 解构获取 token
          this.token = token // 存储登录成功后的 token
          localStorage.setItem('token', token) // 将 token 存储在 localStorage
          return response.data.userinfo // 返回数据
        }
        throw new Error(response.message || '登录失败') // 如果登录失败，抛出错误
      } catch (error) {
        console.error('登录请求错误:', error)
        throw error // 抛出错误供调用方处理
      }
    },

    // 获取隐私政策
    async fetchPrivacyPolicy() {
      return this.fetchPolicy(api.fetchPrivacyPolicy, '隐私政策')
    },

    // 获取用户协议
    async fetchUserAgreement() {
      return this.fetchPolicy(api.fetchUserAgreement, '用户协议')
    },

    // 通用获取政策的方法
    async fetchPolicy(fetchFunction, policyType) {
      try {
        const response = await fetchFunction()
        if (response.status === 200) {
          this[policyType === '隐私政策' ? 'privacyPolicy' : 'userAgreement'] =
            response.data // 设置相应的政策
        } else {
          console.error(`获取${policyType}失败: ${response.status}`)
        }
      } catch (error) {
        console.error(`获取${policyType}出现错误: ${error.message}`)
      }
    },
  },
})
