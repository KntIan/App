<template>
  <view class="container">
    <view class="form">
      <input type="password" placeholder="请输入旧密码" class="input" v-model="oldPassword" />
      <input type="password" placeholder="请输入新密码" class="input" v-model="newPassword" />

      <input type="password" placeholder="请重新确认密码" class="input" v-model="qrPassword" />
      <button class="submit-button" @click="submit">完成</button>
    </view>
  </view>
</template>

<script>
import { fetchFindPassword } from '@/utils/api'
export default {
  data() {
    return {
      oldPassword: '',  // 用于存储旧密码
      newPassword: ''   // 用于存储新密码
    };
  },
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

        const response = await fetchFindPassword({
          type: 'oldpassword',
          newpassword: this.newPassword,
        });

        console.log(response);
        if (response.code === 1) {
          uni.showToast({
            title: '密码已修改',
            icon: 'success'
          });
        }
        // 根据实际返回结果进行处理
        // 例如更新 UI 或显示成功消息

      } catch (error) {
        console.error('修改密码接口失败：', error);
      }
    },
  }
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
