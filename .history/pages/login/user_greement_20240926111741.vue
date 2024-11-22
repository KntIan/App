<template>
  <view>
    <text v-if="userAgreement">{{ userAgreement }}</text>
    <text v-else>正在加载用户协议...</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userAgreement: "", // 用于存储用户协议内容
    };
  },
  onLoad() {
    this.loadUserAgreement(); // 页面加载时从本地存储读取用户协议
  },
  methods: {
    loadUserAgreement() {
      this.userAgreement =
        uni.getStorageSync("userAgreementContent") || "未获取到用户协议。"; // 获取存储内容
    },
  },
};
</script>
