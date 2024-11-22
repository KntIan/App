<template>
  <view>
    <text v-if="privacyPolicy">{{ privacyPolicy }}</text>
    <text v-else>正在加载隐私政策...</text>
  </view>
</template>

<script>
import { fetchPrivacyPolicy } from "@/api"; // 导入请求方法

export default {
  data() {
    return {
      privacyPolicy: "", // 用于存储隐私政策内容
    };
  },
  onLoad() {
    this.loadPrivacyPolicy(); // 页面加载时请求隐私政策
  },
  methods: {
    loadPrivacyPolicy() {
      const token = ""; // 从存储中获取token
      fetchPrivacyPolicy(token)
        .then((res) => {
          this.privacyPolicy = res.content; // 假设返回的数据结构中有content字段
        })
        .catch((err) => {
          console.error(err);
          this.privacyPolicy = "加载隐私政策失败"; // 处理错误情况
        });
    },
  },
};
</script>
