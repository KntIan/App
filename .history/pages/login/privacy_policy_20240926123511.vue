<template>
  <view>
    <text v-if="privacyPolicy">{{ privacyPolicy.content }}</text>
    <text v-else>正在加载隐私政策...</text>
  </view>
</template>

<script>
import { mapState } from "vuex"; // 导入 mapState

export default {
  computed: {
    ...mapState(["privacyPolicy"]), // 映射 Vuex 状态
  },
  mounted() {
    // 这里可以添加其他逻辑
  },
};
</script>
