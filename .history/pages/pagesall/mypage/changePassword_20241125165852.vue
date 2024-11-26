<template>
  <view class="container">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="form">
      <input
        type="password"
        placeholder="请输入旧密码"
        class="input"
        v-model="oldPassword"
      />
      <input
        type="password"
        placeholder="请输入新密码"
        class="input"
        v-model="newPassword"
      />

      <input
        type="password"
        placeholder="请重新确认密码"
        class="input"
        v-model="qrPassword"
      />
      <button class="submit-button" :disabled="isSubmitting" @click="submit">
        完成
      </button>
    </view>
  </view>
</template>

<script>
import { fetchFindPassword } from '@/utils/api'
export default {
  data() {
    return {
      statusBarHeight: '',
      oldPassword: '', // 用于存储旧密码
      newPassword: '', // 用于存储新密码
      qrPassword: '',
      isSubmitting: false, // 用于跟踪按钮是否被点击
    }
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top
  },
  methods: {
    async submit() {
      if (this.isSubmitting) {
        return
      }
      this.isSubmitting = true
      try {
        // 确认密码是否匹配
        if (
          this.oldPassword === '' ||
          this.newPassword === '' ||
          this.qrPassword === ''
        ) {
          uni.showToast({
            title: '密码不能为空',
            icon: 'none',
          })
          this.isSubmitting = false
          return
        }
        if (this.oldPassword === this.newPassword) {
          uni.showToast({
            title: '新旧密码不能相同',
            icon: 'none',
          })
          this.isSubmitting = false
          return
        }

        if ((this.newPassword = this.qrPassword)) {
          uni.showToast({
            title: '密码不一致',
            icon: 'none',
          })
          this.isSubmitting = false
          return
        }

        const response = await fetchFindPassword({
          type: 'oldpassword',
          newpassword: this.newPassword,
          oldpassword: this.oldPassword,
        })

        console.log(response)
        if (response.code === 1) {
          uni.showToast({
            title: response.msg + '即将重新登录',
            icon: 'success',
            duration: 5000,
          })
          // 跳转到登录页面
          uni.clearStorageSync()
          setTimeout(() => {
            uni.navigateTo({
              url: '/pages/login/login',
            })
          }, 3000) // 3 秒后跳转
        } else {
          uni.showToast({
            title: response.msg,
            icon: 'error',
          })
        }
        // 根据实际返回结果进行处理
        // 例如更新 UI 或显示成功消息
      } catch (error) {
        console.error('修改密码接口失败：', error)
      } finally {
        this.isSubmitting = false
      }
    },
  },
}
</script>

<style scoped>
.container {
  background-color: #fff;
}

.form {
  padding: 48rpx 64rpx;
}

.input {
  padding: 20rpx;
  margin-bottom: 28rpx;
  border-radius: 40rpx;
  background-color: #f5f5f5;
  font-size: 28rpx;
  padding-left: 28rpx;
}

.submit-button {
  border-radius: 40rpx;
  background-color: #666;
  color: #fff;
  text-align: center;
  font-size: 30rpx;
}
</style>
