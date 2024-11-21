<template>
  <div class="tabbar">
    <div v-for="(tab, index) in tabs" :key="index" class="tab" :class="{ active: currentIndex === index }" @click="selectTab(index)">
      <img :src="tab.icon" alt="" class="tab-icon" />
      <span class="tab-label">{{ tab.label }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    tabs: {
      type: Array,
      required: true
    },
    currentIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    selectTab(index) {
      this.$emit('tab-selected', index);
    }
  }
}
</script>

<style scoped>
.tabbar {
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;

  background-color: #fff;
  border-top: 1px solid #eaeaea;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 10px 0;
  cursor: pointer;
}

.tab.active {
  color: #007aff; /* 选中时的颜色 */
}

.tab-icon {
  width: 24px;
  height: 24px;
}

.tab-label {
  display: block;
  font-size: 12px;
}
</style>
