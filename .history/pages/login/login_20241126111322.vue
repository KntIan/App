<template>
  <view @scroll.passive="handleScroll">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="container">
      <view class="form">
        <view class="textlogin">
          <text>登录/注册</text>
        </view>

        <input type="text" placeholder="账号" class="input" @input="getadmin" />
        <input
          type="password"
          placeholder="密码"
          class="input"
          @input="getpass"
        />
        <button class="login-button" @click="handleLoginInfo">登录</button>
        <view class="links">
          <text class="link" @click="retPass">找回密码</text>
          <text class="link" @click="regiSter">注册</text>
        </view>
      </view>

      <view class="footer">
        <checkbox-group
          @change="radiogrp"
          style="display: flex; align-items: center"
        >
          <label class="radio">
            <checkbox
              value="true"
              activeBorderColor="#000"
              activeBackgroundColor="#fff"
              iconColor="#000"
              style="transform: scale(0.5)"
            />
          </label>

          <text>
            点击登录，即表示同意
            <text
              @click="handlePolicyClick('privacy')"
              style="color: blue; text-decoration: underline"
              >《隐私政策》</text
            >
            和
            <text
              @click="handlePolicyClick('user')"
              style="color: blue; text-decoration: underline"
              >《用户协议》</text
            >
          </text>
        </checkbox-group>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '@/store' // 导入 Pinia store
import { genTestUserSig } from '../../TUIKit/debug'
import { TUITranslateService } from '@tencentcloud/chat-uikit-engine'
import { isPC, isH5, isApp } from '../../TUIKit/utils/env'
import { loginChat } from '../../loginChat'
import { loginUser, fetchUserAgreement } from '@/utils/api'
import { onLoad } from '@dcloudio/uni-app'
const privateAgree = ref(false)
const inputValue = ref('')
const statusBarHeight = ref()
onLoad(async () => {
  statusBarHeight.value = getApp().globalData.top

  if (uni.getStorageSync('token') && uni.getStorageSync('isLoggedIn')) {
    const userId = uni.getStorageSync('user_id') // 获取用户 ID
    if (userId) {
      const options = genTestUserSig({
        SDKAppID: uni.$chat_SDKAppID,
        secretKey: uni.$chat_secretKey,
        userID: String(userId),
      })

      const loginInfo = {
        SDKAppID: uni.$chat_SDKAppID,
        userID: String(userId),
        userSig: options.userSig,
        TIMPush: uni.$TIMPush,
        pushConfig: {
          androidConfig: uni.$TIMPushConfigs,
          iOSConfig: {
            iOSBusinessID: '',
          },
        },
      }

      try {
        await login(loginInfo) // 等待登录结果
        // 登录成功后跳转到主页
        uni.switchTab({
          url: '/pages/pagesall/home',
        })
      } catch (error) {
        // 登录失败处理
        uni.showToast({
          title: '自动登录失败，请重试',
          icon: 'error',
          duration: 2000,
        })
      }
    }
  } else {
    uni.navigateTo({
      url: '/pages/login/login',
    })
  }
})
const handleScroll = (event) => {
  console.log('滚动位置：', event.target.scrollTop)
}
const handleLoginInfo = async () => {
  if (!radio.value) {
    uni.showToast({
      title: '请勾选同意协议',
      icon: 'error',
      duration: 2000,
    })
    return
  }

  if (!account.value) {
    uni.showToast({
      title: '请输入账号',
      icon: 'error',
      duration: 2000,
    })
    return
  }

  if (!password.value) {
    uni.showToast({
      title: '请输入密码',
      icon: 'error',
      duration: 2000,
    })
    return
  }
  const store = useStore() // 获取 Pinia store
  const response = await loginUser({
    mobile: account.value,
    password: password.value,
  })
  console.log(response)
  if (response.code === 1) {
    uni.showToast({
      title: response.msg,
      icon: 'success',
    })

    const { token } = response.data.userinfo

    store.setUserinfo(response.data.userinfo)
    store.setToken(token)
    uni.setStorageSync('token', token) // 将 token 存储在 localStorage
    uni.switchTab({ url: '/pages/pagesall/home' })
    // uni.navigateTo({
    //   url: "/pages/home/home",
    // });
    // return;
  } else {
    uni.showToast({
      title: response.msg,
      icon: 'error',
      duration: 2000,
    })
  }
  // console.log(response.data.userinfo);
  const { user_id } = response.data.userinfo
  console.log(user_id)
  uni.setStorageSync('user_id', user_id)
  tengXun()
}

const tengXun = () => {
  const options = genTestUserSig({
    SDKAppID: uni.$chat_SDKAppID,
    secretKey: uni.$chat_secretKey,
    userID: String(uni.getStorageSync('user_id')),
  })
  const loginInfo = {
    SDKAppID: uni.$chat_SDKAppID,
    userID: String(String(uni.getStorageSync('user_id'))), // 确保使用正确的user_id,
    userSig: options.userSig,
    // useUploadPlugin: true,
    // framework: `vue${vueVersion}`,
    TIMPush: uni.$TIMPush, // register TencentCloud-TIMPush
    pushConfig: {
      androidConfig: uni.$TIMPushConfigs, // Android timpush-configs.json
      iOSConfig: {
        iOSBusinessID: '', // iOS Certificate ID
      },
    },
  }
  login(loginInfo)
}

const login = (loginInfo: any) => {
  return loginChat(loginInfo) // 返回 Promise
    .then(() => {
      uni.setStorageSync('isLoggedIn', true)
      uni.setStorageSync('loginInfo', JSON.stringify(loginInfo))
    })
    .catch((error) => {
      uni.showToast({
        title: TUITranslateService.t('Login.登录失败'),
        icon: 'none',
      })
      throw error // 抛出错误，以便在外部处理
    })
}
// export { tengXun, login };
const account = ref('')
const password = ref('')
const radio = ref(false)
const store = useStore()

const capitalizeFirstLetter = (string) => {
  if (!string) return '' // 检查输入是否有效
  return string.charAt(0).toUpperCase() + string.slice(1) // 首字母大写
}

const parsePolicyContent = (content, title) => {
  console.log(content)

  if (!content) {
    uni.showToast({
      title: `${title}内容为空，请稍后重试`,
      icon: 'error',
      duration: 2000,
    })
    return
  }

  // 用正则表达式检查内容是否包含 HTML 标签
  const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(content)

  if (!hasHtmlTags) {
    // 如果没有 HTML 标签，直接显示内容
    uni.showModal({
      title: title,
      content: content, // 直接传入内容
      showCancel: false,
    })
  } else {
    // 如果有 HTML 标签，进行解析处理
    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')
    const paragraphs = Array.from(doc.getElementsByTagName('p'))
      .map((p) => p.textContent)
      .join('\n')

    uni.showModal({
      title: title,
      content: paragraphs,
      showCancel: false,
    })
  }
}

const handlePolicyClick = async (type) => {
  const titleMap = {
    privacy: '隐私政策',
    user: '用户协议',
  }

  const title = titleMap[type] // 使用映射表获取标题
  if (!title) {
    uni.showToast({
      title: '无效的协议类型，请重试',
      icon: 'error',
      duration: 2000,
    })
    return
  }

  try {
    let params = {
      type: type,
    }
    let res = await fetchUserAgreement(params)
    parsePolicyContent(res.data.content, title) // 使用可选链避免错误
  } catch (error) {
    console.error(`获取${type}失败:`, error)
    uni.showToast({
      title: `获取${title}失败，请重试`,
      icon: 'error',
      duration: 2000,
    })
  }
}

const retPass = async () => {
  await uni.navigateTo({ url: '/pages/login/ratpass' })
}

const regiSter = () => {
  uni.navigateTo({ url: '/pages/login/register' })
}

const radiogrp = (event) => {
  radio.value = event.detail.value.length > 0 // 确保获取到的值是否有效
}

const getadmin = (event) => {
  account.value = event.detail.value
}

const getpass = (event) => {
  password.value = event.detail.value
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  background-color: #fff;
}

.form {
  width: 80%;
}

.input {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 50px;
  background-color: #eeeeee;
  font-size: 14px;
}

.login-button {
  width: 100%;
  padding: 2px;
  border-radius: 50px;
  background-color: #666666;
  color: #fff;
  text-align: center;
  font-size: 16px;
}

.textlogin {
  margin-bottom: 24px;
  font-weight: 700;
}

.links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.link {
  color: #555;
  font-size: 12px;
}

.footer {
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  color: #888;
}
</style>
