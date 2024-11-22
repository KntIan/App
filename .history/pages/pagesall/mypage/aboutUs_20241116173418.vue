<template>
  <view class="page">
    <view class="box1">
      <image class="image_2" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4253829e1a377894ca42c94d7edf9cdfd758b5bf890e937604ce7635bfc36c30" />
      <text class="text-group_2">泽熙书法</text>
    </view>
    <view class="box2">
      <text class="text2">当前版本：v1.0</text>
    </view>
  </view>

</template>
<script>
import { fetchAboutUs } from '@/utils/api'
export default {
  data() {
    return {
      constants: {},
    };
  },
  onLoad() {
    this.getAboutUs();
  },

  methods: {
    async getAboutUs() {
      try {
        const response = await fetchAboutUs();
        this.constants = response.data; // 根据实际返回结果调整
      } catch (error) {
        console.error('获取关于我们的接口失败：', error);
      }
    }
  },
};
</script>
<style>
.page {
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.box1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 10%;
}

.image_2 {
  width: 240rpx;
  height: 240rpx;
  background: #ffffff;
  border-radius: 32rpx;
  border: 1rpx solid #666;
  padding: 20rpx;
}

.box2 {
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
}

.box_2 {
  border-radius: 4px;
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/236b4a513e3f4f5fb13b40084948436c_mergeImage.png);
  width: 44px;
  height: 44px;
}

.text2 {
  font-size: 14px;
  font-weight: 400;
  margin-left: 10px;
  font-family: PangMenZhengDao;
}

.text-group_2 {
  padding-top: 28rpx;
  font-size: 36rpx;
  color: #000000;
}
</style>