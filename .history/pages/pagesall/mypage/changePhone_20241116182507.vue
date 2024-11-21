<template>
  <view class="container">
    <view class="form">
      <view class="input-container">
        <input type="text" placeholder="请输入新的手机号" class="input" v-model="phone" />
        <button class="get-code-button" :disabled="isCodeSent" @click="getCode">
          {{ getCodeButtonText }}
        </button>
      </view>
      <input type="text" placeholder="请输入验证码" class="input" v-model="code" />
      <button class="submit-button" @click="submit">完成</button>
    </view>
  </view>
</template>

<script>
import { fetchCampusData, fetchVerificationCode, fetchClassData, submitRegisterInfo } from "@/utils/api";
export default {
  data() {
    return {
      phone: '',
      code: '',
      isCodeSent: false,
      countdown: 60,
      timer: null,
      getCodeButtonText: '获取验证码',
    }
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
          icon: 'none'
        });
        return;
      }

      // 发送请求到后端
      try {
        const response = await fetchVerificationCode({
          mobile: phone.value,
          event: 'changemobile',
        });

      } catch (error) {
        console.error('获取关于我们的接口失败：', error);
      }
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
    submit() {
      // 在这里处理手机号码修改的提交逻辑
      if (!this.code) {
        uni.showToast({
          title: '请输入验证码',
          icon: 'none'
        });
        return;
      }
      uni.showToast({
        title: '手机号已修改',
        icon: 'success'
      });
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #fff;
  height: 100vh;
}

.form {
  padding: 48rpx 64rpx;
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
</style>