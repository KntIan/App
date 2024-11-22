<template>
  <view class="container">
    <view class="form">
      <input type="password" placeholder="请输入密码" class="input" />
      <input type="password" placeholder="请重新确认密码" class="input" />
      <button class="submit-button" @click="submit">完成</button>
    </view>
  </view>
</template>

<script>
import { fetchFindPassword } from '@/utils/api'
export default {
  methods: {
    async submit() {
      try {
        const response = await fetchFindPassword();
        console.log(response)
        this.actionSheetOptions.text = response.tel; // 根据实际返回结果调整
        console.log(this.actionSheetOptions.text)
      } catch (error) {
        console.error('获取关于我们的接口失败：', error);
      }
    },
    // submit() {
    // 	// 在这里处理提交逻辑
    // 	uni.showToast({
    // 		title: '密码已修改',
    // 		icon: 'success'
    // 	});

    // }
  }
}
</script>

<style scoped>
.container {
  background-color: #fff;
  /* height: 100vh; */
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