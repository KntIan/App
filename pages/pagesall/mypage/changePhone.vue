<template>
  <view class="container">
<<<<<<< HEAD
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="form">
      <view class="input-container">
        <input
          type="text"
          placeholder="请输入新的手机号"
          class="input"
          v-model="phone"
        />
=======
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="form">
      <view class="input-container">
        <input type="text" placeholder="请输入新的手机号" class="input" v-model="phone" />
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        <button class="get-code-button" :disabled="isCodeSent" @click="getCode">
          {{ getCodeButtonText }}
        </button>
      </view>
<<<<<<< HEAD
      <input
        type="text"
        placeholder="请输入验证码"
        class="input"
        v-model="code"
      />
=======
      <input type="text" placeholder="请输入验证码" class="input" v-model="code" />
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      <button class="submit-button" @click="submit">完成</button>
    </view>
  </view>
</template>

<script>
<<<<<<< HEAD
import {
  fetchCampusData,
  fetchVerificationCode,
  updatePhone,
  submitRegisterInfo,
} from '@/utils/api';
=======
import { fetchCampusData, fetchVerificationCode, updatePhone, submitRegisterInfo } from "@/utils/api";
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
export default {
  data() {
    return {
      phone: '',
      code: '',
      isCodeSent: false,
      countdown: 60,
      timer: null,
      getCodeButtonText: '获取验证码',
      statusBarHeight: '',
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },

    async getCode() {
      // 检查手机号格式
      if (!/^1[3-9]\d{9}$/.test(this.phone)) {
        uni.showToast({
          title: '手机号格式不正确',
<<<<<<< HEAD
          icon: 'none',
=======
          icon: 'none'
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        });
        return;
      }

      // 发送请求到后端
      try {
        const response = await fetchVerificationCode({
          mobile: this.phone,
          event: 'changemobile',
        });
        console.log(response);
        if (response.code === 1) {
<<<<<<< HEAD
          uni.showToast({
            title: response.msg || '验证码发送成功',
            icon: 'success', // 提示图标类型
            duration: 2000, // 持续时间
          });
          this.isCodeSent = true;
          startCountdown();
=======

          uni.showToast({
            title: response.msg || '验证码发送成功',
            icon: 'success', // 提示图标类型
            duration: 2000 // 持续时间
          });
          this.isCodeSent = true;
          startCountdown();

>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        } else {
          uni.showToast({
            title: response.msg || '发送验证码失败，请重试',
            icon: 'none', // 提示图标类型
<<<<<<< HEAD
            duration: 2000, // 持续时间
          });
        }
      } catch (error) {}
=======
            duration: 2000 // 持续时间
          });
        }

      } catch (error) {

      }
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    },
    startCountdown() {
      this.isCodeSent = true;
      this.getCodeButtonText = `${this.countdown}秒`;
      this.timer = setInterval(() => {
        this.countdown--;
        this.getCodeButtonText = `${this.countdown}秒`;
        if (this.countdown <= 0) {
          clearInterval(this.timer);
          this.isCodeSent = false;
          this.countdown = 60;
          this.getCodeButtonText = '获取验证码';
        }
      }, 1000);
    },
    async submit() {
      // 在这里处理手机号码修改的提交逻辑
      if (!this.code) {
        uni.showToast({
          title: '请输入验证码',
<<<<<<< HEAD
          icon: 'none',
=======
          icon: 'none'
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        });
        return;
      }
      const response = await updatePhone({
        mobile: this.phone,
        captcha: this.code,
      });
<<<<<<< HEAD

      if (response.code === 1) {
        this.isCodeSent = true;
        uni.showToast({
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
=======
      if (response.code === 1) {
        this.isCodeSent = true;
        startCountdown();
        uni.showToast({
          title: response.msg,

          icon: 'none',
          duration: 2000 // 持续时间
        });
        uni.navigateBack();
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      } else {
        uni.showToast({
          title: response.msg || '发送验证码失败，请重试',
          icon: 'none', // 提示图标类型
<<<<<<< HEAD
          duration: 2000, // 持续时间
        });
      }
    },
  },
};
=======
          duration: 2000 // 持续时间
        });
      }

    }
  }
}
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
</script>

<style scoped>
.container {
  background-color: #fff;
  height: 100vh;
}

.form {
<<<<<<< HEAD
  padding: 30rpx 64rpx;
=======
  padding: 48rpx 64rpx;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
}

.input {
  padding: 20rpx;
  border-radius: 40rpx;
  background-color: #f5f5f5;
  font-size: 28rpx;
  padding-left: 28rpx;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 40rpx;
}

.get-code-button::after {
  border: none;
}

.get-code-button {
  border: none;
  color: #000;
  font-size: 24rpx;
  background-color: transparent;
}

.submit-button {
  border-radius: 40rpx;
  background-color: #666;
  color: #fff;
  text-align: center;
  font-size: 30rpx;
  margin-top: 28rpx;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
