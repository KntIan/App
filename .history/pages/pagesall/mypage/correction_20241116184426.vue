<template>
  <view class="corr_Title">
    <view class="corrImg" @click="corr_goback">
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
    </view>
    <view class="corr_text">
      批改作业
    </view>
  </view>

  <view class="corr-banner">
  </view>

  <view class="corr-work" v-for="item in corrlist" :key="item">
    <view class="box_3 flex-col">
      <view class="section_2 flex-col">
        <image class="image_2" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga8bdcdc42cb8abff5e083a6b06d4babd504f55028e66bd740598ca6e4c215f63" />
        <view class="section_3 flex-col justify-center">
          <view class="box_4 flex-col">
            <text class="text_4">飞</text>
            <image class="image_3" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6cc8f7834ef7b5d3491c2d4dd44cb93fc443519c40d959f937e54216c0d0b745" />
          </view>
        </view>
      </view>
    </view>
    <view class="worktext">
      <view>
        <text class="workText3">评测:</text>
        <text class="workText4">优秀</text>
      </view>
      <view class="workinput">
        <view style="font-size: 20rpx;">请输入评语</view>
        <view style="font-size: 20rpx; width: 466rpx; text-align: right">0/30</view>
      </view>
    </view>
  </view>
</template>

<script>
import { fetchMyHistoryHomework } from '@/utils/api'
export default {
  data() {
    return {
      corrlist: 4,
      limit: 5, // 你可以根据需要赋值
      page: 1    // 你可以根据需要赋值
    }
  },
  methods: {

    async getMyHistoryHomework() {
      try {
        const response = await fetchMyHistoryHomework({ limit: this.limit, page: this.page });
        console.log(response)
        this.corrlist = response.items; // 根据实际返回结果调整
        console.log(this.corrlist)
      } catch (error) {
        console.error('获取关于我们的接口失败：', error);
      }
    },
    corr_goback() {
      uni.navigateBack()
    }
  }
}
</script>

<style>
.corr_Title {
  display: flex;
  align-items: center;
  padding: 20rpx;
}

.corr_text {
  width: 100%;
  text-align: center;
}

.corr-banner {
  background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7d37ad8dcc9e4df9a9f91877bcc919e6_mergeImage.png);
  width: 750rpx;
  height: 479rpx;
}

.corr-banner img {
  width: 750rpx;
  height: 479rpx;
}

.box_3 {
  background-color: rgba(249, 183, 34, 1);
  border-radius: 8px;
  height: 160rpx;
  width: 160rpx;
}

.section_2 {
  background-color: rgba(255, 228, 63, 1);
  border-radius: 8px;
  height: 148rpx;
  width: 148rpx;
  position: relative;
  top: 6rpx;
  left: 6rpx;
}

.image_2 {
  width: 148rpx;
  height: 2rpx;
  margin-top: 80rpx;
}

.section_3 {
  height: 136rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga35bab1e0e151f44b12e4e0b1f267681fef9018c9f2b917b199af126c81a5d4a) -2rpx
    0rpx no-repeat;
  background-size: 140rpx 136rpx;
  width: 136rpx;
  position: absolute;
  left: 6rpx;
  top: 6rpx;
}

.box_4 {
  height: 136rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng7324678af235f529103c73d84c4b31f509cc40d8085ed8f7d39e996449897b8b)
    0rpx 0rpx no-repeat;
  background-size: 138rpx 136rpx;
  width: 136rpx;
  position: relative;
}

.text_4 {
  width: 96rpx;
  height: 134rpx;
  overflow-wrap: break-word;
  color: rgba(0, 0, 0, 1);
  font-size: 96rpx;
  font-family: PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  line-height: 134rpx;
  margin: 2rpx 0 0 16rpx;
}

.image_3 {
  position: absolute;
  left: 68rpx;
  top: -6rpx;
  width: 2rpx;
  height: 146rpx;
}

.corr-work {
  padding: 20rpx;
  display: flex;
}

.worktext {
  margin-left: 28rpx;
}

.workText3 {
  font-size: 28rpx;
  margin-right: 16rpx;
}

.workText4 {
  padding: 6rpx 20rpx;
  border-radius: 4rpx;
  background: #ff9e02;
  font-size: 20rpx;
  color: #ffffff;
}

.workinput {
  width: 466rpx;
  height: 92rpx;
  padding: 6rpx 20rpx;
  margin-top: 16rpx;
  background: #f4f5f9;
  border-radius: 4rpx;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>