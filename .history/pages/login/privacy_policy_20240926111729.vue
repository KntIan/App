<template>
  <view>
    <text v-if="privacyPolicy">{{ privacyPolicy }}</text>
    <text v-else>正在加载隐私政策...</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      privacyPolicy: "", // 用于存储隐私政策内容
    };
  },
  onLoad() {
    this.loadPrivacyPolicy(); // 页面加载时从本地存储读取隐私政策
  },
  methods: {
    loadPrivacyPolicy() {
      this.privacyPolicy =
        uni.getStorageSync("privacyPolicyContent") || "未获取到隐私政策。"; // 获取存储内容
    },
  },
};
</script>
