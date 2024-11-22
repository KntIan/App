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
import { fetchCampusData, fetchVerificationCode, updatePhone, submitRegisterInfo } from "@/utils/api";
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
          mobile: this.phone,
          event: 'changemobile',
        });
        console.log(response);
        if (response.code === 1) {
          this.isCodeSent = true;
          startCountdown();
          uni.showToast({
            title: response.msg || '验证码发送成功',
            icon: 'success', // 提示图标类型
            duration: 2000 // 持续时间
          });
        } else {
          uni.showToast({
            title: response.msg || '发送验证码失败，请重试',
            icon: 'none', // 提示图标类型
            duration: 2000 // 持续时间
          });
        }

      } catch (error) {

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
    async submit() {
      // 在这里处理手机号码修改的提交逻辑
      if (!this.code) {
        uni.showToast({
          title: '请输入验证码',
          icon: 'none'
        });
        return;
      }
      const response = await updatePhone({
        mobile: this.phone,
        captcha: this.code,
      });
      if (response.code === 1) {
        this.isCodeSent = true;
        startCountdown();
        uni.showToast({
          title: response.msg,

          icon: 'none',
          duration: 2000 // 持续时间
        });
        uni.navigateBack();
      } else {
        uni.showToast({
          title: response.msg || '发送验证码失败，请重试',
          icon: 'none', // 提示图标类型
          duration: 2000 // 持续时间
        });
      }

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