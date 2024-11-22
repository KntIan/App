<template>
  <view class="code_page">
    <view class="code_titlebox">
      <view class="messImg" @click="goback">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
      </view>
      <view class="code_title">
        {{messList.title}}
      </view>
    </view>

    <view class="detail_title">
      <text style="font-weight: 500;font-size: 32rpx;color: #000000;">快来参加书法协会的比赛吧</text>
      <view class="detail_time">
        <view class="time_1">
          {{hour}}
        </view>
        <view class="time_2">
          {{mours}}
        </view>
      </view>
    </view>
    <view class="detail_box">
      {{detail}}
    </view>

  </view>
</template>

<script>
import { useStore } from '@/store'
export default {
  data() {
    return {
      messList: [],
    }
  },
  onLoad() {
    const store = useStore(); // 获取 Pinia Store
    console.log(store.messList)
    this.messList = store.messList; // 从 Store 中获取 messList 并赋值
    console.log(this.messList)
  },
  methods: {
    goback() {
      uni.navigateBack()
    },
  }
}
</script>

<style>
.code_page {
  width: 750rpx;
  height: 1624rpx;
}

.code_titlebox {
  position: relative;
  padding: 30rpx;
}

.messImg {
  position: absolute;
  background-color: ;
}

.code_title {
  text-align: center;
  font-weight: 500;
  font-size: 36rpx;
  color: #000;
}

.detail_title {
  padding: 30rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail_time {
  display: flex;
}

.time_1 {
  margin-right: 10rpx;
  font-weight: 400;
  font-size: 20rpx;
  color: #000000;
}

.time_2 {
  font-weight: 400;
  font-size: 20rpx;
  color: #000000;
}

.detail_box {
  text-indent: 2em;
  padding: 0 30rpx 0 30rpx;
  font-weight: 400;
  font-size: 24rpx;
  color: #666666;
}
</style>