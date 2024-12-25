<template>
  <view class="container">
<<<<<<< HEAD
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
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
=======
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="form">
      <input type="password" placeholder="请输入旧密码" class="input" v-model="oldPassword" />
      <input type="password" placeholder="请输入新密码" class="input" v-model="newPassword" />

      <input type="password" placeholder="请重新确认密码" class="input" v-model="qrPassword" />
      <button class="submit-button" @click="submit">完成</button>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    </view>
  </view>
</template>

<script>
<<<<<<< HEAD
import { fetchFindPassword } from '@/utils/api';
=======
import { fetchFindPassword } from '@/utils/api'
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
export default {
  data() {
    return {
      statusBarHeight: '',
<<<<<<< HEAD
      oldPassword: '', // 用于存储旧密码
      newPassword: '', // 用于存储新密码
      qrPassword: '',
      isSubmitting: false, // 用于跟踪按钮是否被点击
    };
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
  methods: {
    async submit() {
      if (this.isSubmitting) {
        return;
      }
      this.isSubmitting = true;
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
          });
          this.isSubmitting = false;
          return;
        }
        if (this.oldPassword === this.newPassword) {
          uni.showToast({
            title: '新旧密码不能相同',
            icon: 'none',
          });
          this.isSubmitting = false;
          return;
        }

        if (this.newPassword !== this.qrPassword) {
          uni.showToast({
            title: '密码不一致',
            icon: 'none',
          });
          this.isSubmitting = false;
=======
      oldPassword: '',  // 用于存储旧密码
      newPassword: '', // 用于存储新密码
      qrPassword: ''

    };
  },
  onLoad() { this.statusBarHeight = getApp().globalData.top; },
  methods: {
    async submit() {
      try {
        // 确认密码是否匹配
        if (this.oldPassword === '' || this.newPassword === '') {
          uni.showToast({
            title: '密码不能为空',
            icon: 'none'
          });
          return;
        }

        if (this.newPassword === '' || this.qrPassword === '') {
          uni.showToast({
            title: '密码不一致',
            icon: 'none'
          });
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          return;
        }

        const response = await fetchFindPassword({
          type: 'oldpassword',
          newpassword: this.newPassword,
          oldpassword: this.oldPassword,
        });

        console.log(response);
        if (response.code === 1) {
          uni.showToast({
<<<<<<< HEAD
            title: response.msg + '即将重新登录',
            icon: 'success',
            duration: 5000,
          });
          // 跳转到登录页面
          uni.clearStorageSync();
          setTimeout(() => {
            uni.navigateTo({
              url: '/pages/login/login',
            });
          }, 3000); // 3 秒后跳转
        } else {
          uni.showToast({
            title: response.msg,
            icon: 'error',
=======
            title: response.msg,
            icon: 'success'
          });
          uni.navigateBack()
        } else {
          uni.showToast({
            title: response.msg,
            icon: 'error'
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          });
        }
        // 根据实际返回结果进行处理
        // 例如更新 UI 或显示成功消息
<<<<<<< HEAD
      } catch (error) {
        console.error('修改密码接口失败：', error);
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
=======

      } catch (error) {
        console.error('修改密码接口失败：', error);
      }
    },
  }
}
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
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
