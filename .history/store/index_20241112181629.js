import { defineStore } from 'pinia'
import * as api from '@/utils/api' // 引入封装的请求文件

export const useStore = defineStore('main', {
  unistorage: true, // 是否持久化
  state: () => ({
    // 保留需要的状态
    token: null,
    privacyPolicy: '',
    userAgreement: '',
    listdata: [], // 新增状态用于存储列表数据
    images: [], // 新增状态用于存储图片数据
    selectedSwiperIndex: null,
    campusData: [],
    classData: [],
    userinfo: null,
    resultDivData: null,
  }),
  actions: {
    // 登录
    // async login(adminlist) {
    //   try {
    //     const response = await api.loginUser(adminlist) // 调用 API 方法进行登录
    //     alert(11111)
    //     console.log('登录请求成功:', response)
    //     if (response.code === 1) {
    //       const userinfo = response.data.userinfo // 获取用户信息
    //       const { token } = userinfo // 解构获取 token 和 userinfo
    //       this.token = token // 存储登录成功后的 token
    //       this.userinfo = userinfo // 存储用户信息
    //       uni.setStorageSync('token', token) // 将 token 存储在 localStorage
    //       // 提示登录成功
    //       uni.showToast({
    //         title: response.msg,
    //         icon: 'success', // 图标类型，可选 'success', 'loading', 'none'
    //         duration: 2000, // 提示显示时间，默认为1500ms
    //         complete: () => {
    //           // 提示完成后跳转页面
    //           uni.switchTab({ url: '/pages/pagesall/home' })
    //         },
    //       })
    //       return userinfo // 返回数据
    //     }
    //     throw new Error(response.msg || '登录失败') // 如果登录失败，抛出错误
    //   } catch (error) {
    //     console.error('登录请求错误:', error)
    //     throw error // 抛出错误供调用方处理
    //   }
    // },

    // // 获取隐私政策
    // async fetchPrivacyPolicy() {
    //   return this.fetchPolicy(api.fetchPrivacyPolicy, '隐私政策')
    // },

    // // 获取用户协议
    // async fetchUserAgreement() {
    //   return this.fetchPolicy(api.fetchUserAgreement, '用户协议')
    // },

    // 通用获取政策的方法
    // async fetchPolicy(fetchFunction, policyType) {
    //   try {
    //     const response = await fetchFunction()
    //     if (response.status === 200) {
    //       this[policyType === '隐私政策' ? 'privacyPolicy' : 'userAgreement'] =
    //         response.data // 设置相应的政策
    //     } else {
    //       console.error(`获取${policyType}失败: ${response.status}`)
    //     }
    //   } catch (error) {
    //     console.error(`获取${policyType}出现错误: ${error.message}`)
    //   }
    // },
    // 新增方法以设置列表数据
    setListdata(data) {
      this.listdata = data
    },

    // 新增方法以设置图片数据
    setImages(data) {
      this.images = data
    },
    setSelectedSwiperIndex(index) {
      this.selectedSwiperIndex = index // 设置选中的下标
    },
    setCampusData(data) {
      this.campusData = data
    },
    setClassData(data) {
      this.classData = data
    },
    setResultDiv(data) {
      this.resultDivData = data
    },
  },
})
