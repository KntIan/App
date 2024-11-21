<template>
  <view class="container">
    <view class="form">
      <textarea class="textarea" placeholder="请输入您的投诉意见" v-model="feedback" @input="updateCharCount"></textarea>
      <text class="char-count">{{ charCount }}/1000</text>
      <button class="submit-button" @click="submitFeedback">提交</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { submitComplaint } from "@/utils/api";

const feedback = ref("");
const charCount = ref(0);

const updateCharCount = () => {
  charCount.value = feedback.value.length;
};

const showToast = (title, icon) => {
  uni.showToast({
    title,
    icon,
  });
};

const submitFeedback = async () => {
  if (!feedback.value.trim()) {
    return showToast("请输入投诉意见", "none");
  }

  try {
    await submitComplaint({ data: feedback.value }); // 将 feedback.value 作为参数传递
    showToast("投诉意见已提交", "success");
  } catch (error) {
    showToast("提交失败，请稍后再试", "none");
    console.error("提交反馈失败:", error);
  }
};
</script>

<style scoped>
.container {
  background-color: #fff;
  height: 100vh;
}

.form {
  padding: 28rpx;
  display: grid;
  grid-template-rows: 13fr 1fr;
}

.textarea {
  width: 94%;
  height: 600rpx;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 28rpx; /* 只保留一个字体大小 */
  color: #666666;
  margin-bottom: 10px;
}

.char-count {
  font-size: 14px;
  color: #999;
  position: absolute;
  z-index: 2;
  right: 60rpx;
  top: 600rpx;
}

.submit-button {
  border-radius: 40rpx;
  background-color: #ffa500;
  color: #fff;
  text-align: center;
  font-size: 28rpx;
  line-height: 80rpx;
  width: 100%;
}
</style>
