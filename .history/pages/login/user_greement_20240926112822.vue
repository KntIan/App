<template>
  <view>
    <text v-if="userAgreement">{{ userAgreement }}</text>
    <text v-else>正在加载用户协议...</text>
  </view>
</template>

<script>
import { mapState } from "vuex"; // 导入 mapState

export default {
  computed: {
    ...mapState(["userAgreement"]), // 映射 Vuex 状态
  },
  mounted() {
    // 这里可以添加其他逻辑
  },
};
</script>
