<template>
  <view class="message-list">
    <view
      v-for="(message, index) in messages"
      :key="index"
      class="message-item"
    >
      <view class="avatar_box" :style="{ backgroundColor: message.color }">
        <image
          :src="message.avatar"
          class="avatar"
          :style="{ width: message.size, height: message.size }"
        />
      </view>
      <view class="message-content">
        <view class="message-title">{{ message.title }}</view>
        <view class="message-subtitle">{{ message.subtitle }}</view>
      </view>
      <view class="message-time">{{ message.time }}</view>
    </view>
  </view>
</template>

<script setup>
defineProps({
  messages: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.message-list {
  /* border-top: 1px solid #d9d9d9; */
}

.message-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 28rpx;
}

.avatar_box {
  width: 88rpx;
  height: 88rpx;
  background-color: #ff9e02;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20rpx;
}

.avatar {
  width: 48rpx;
  height: 48rpx;
}

.message-content {
  flex: 1;
}

.message-title {
  font-size: 32rpx;
  font-weight: bold;
  color: #000000;
}

.message-subtitle {
  font-size: 24rpx;
  color: #666666;
  margin-top: 8rpx;
}

.message-time {
  font-size: 20rpx;
  color: #000000;
}
</style>