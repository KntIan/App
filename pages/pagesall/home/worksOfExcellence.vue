<template>
  <view>
    <!-- 弹窗 -->
    <div v-if="isModalVisible" class="modal" @click="hideImage">
      <img :src="currentImage" class="large-image" />
    </div>
    <view class="cont">
      <view
        class="item"
        v-for="(item, index) in imageList"
        :key="index"
        @click="showImage(item.image)"
      >
        <image :src="item.image" class="image" mode="widthFix" />
        <text class="title">{{ item.title }}</text>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchIndexStyleList } from '@/utils/api';

import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app';
const curt = ref(1);
const imageList = ref([]);
const isLoading = ref(false);
onReachBottom(() => {
  if (isLoading.value) {
    uni.showToast({
      title: '没有更多数据了',
      icon: 'none',
      duration: 3000,
    });
  }
  if (isLoading.value) return;
  curt.value++;
  getchIndexTeacherList();
});
onPullDownRefresh(() => {
  curt.value = 1;
  imageList.value = [];
  getchIndexTeacherList();
  uni.stopPullDownRefresh();
});

// 用于控制弹窗的显示与隐藏
const isModalVisible = ref(false);
const currentImage = ref('');
const showImage = (imageSrc) => {
  console.log(111);
  currentImage.value = imageSrc; // 设置当前显示的图片
  isModalVisible.value = true; // 显示弹窗
};
// 隐藏大图的方法
const hideImage = () => {
  isModalVisible.value = false; // 隐藏弹窗
};
const getchIndexTeacherList = async () => {
  try {
    let params = {
      page: curt.value,
      limit: 10,
    };
    let res = await fetchIndexStyleList(params);
    console.log(res);
    imageList.value = [...imageList.value, ...res.rows];

    if (imageList.value.length === res.total) {
      isLoading.value = true;
    }
  } catch (error) {}
};
onMounted(() => {
  getchIndexTeacherList();
});
</script>

<style scoped>
.cont {
  min-height: 90vh;
  background-color: #f7f8fa;
  padding: 26rpx;
  column-count: 2;
  column-gap: 30rpx;
}

.item {
  margin-bottom: 30rpx;
  box-sizing: border-box;
  break-inside: avoid-column;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.image {
  width: 100%;
  height: 246rpx;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.title {
  margin: 30rpx 0;
  font-size: 14px;
  color: #333;
  text-align: center;
  padding: 0 24rpx;
  display: inline-block;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 8888;
}

.large-image {
  max-width: 90%;
  max-height: 90%;
}
</style>
