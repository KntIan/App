<template>
  <view class="mess_page">
    <view class="mess_Title">
      <view class="messImg" @click="goback">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
      </view>
      <view class="title_text">
        消息
      </view>
      <view class="title_img">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng321758fb81a047a63eed79ffbd8a9de39b6d95d0adc9749329922655c760bb3a" alt="" @click="mycode" />
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5e1b57899cb5b9cd47a8d4e301f4f736efd47c45ca7713a43d00721e94370714" alt="" />
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng60de4c6690251e592eeb3edf5e89b8b74e18a9d17717d9949db1edcb3fcd23bd" alt="" />
      </view>
    </view>

    <view class="messbox" @click="messgoback">
      <view class="messbox2">
        <view class="messbox_img">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd6279aab531ef9632e4b587c47bd1b290e34249129eb3b24c940e727cb528bd0" alt="" />
        </view>

        <view class="messinter">
          <view class="inter_text1">
            公告消息
          </view>
          <view class="inter_text2">
            书法比赛将在2024年7月15号开始…
          </view>

        </view>
      </view>

      <text class="inter_text3">6-15</text>
    </view>

    <view class="messbox" @click="messgoback">
      <view class="messbox2">
        <view class="messbox_img">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd6279aab531ef9632e4b587c47bd1b290e34249129eb3b24c940e727cb528bd0" alt="" />
        </view>

        <view class="messinter">
          <view class="inter_text1">
            公告消息
          </view>
          <view class="inter_text2">
            书法比赛将在2024年7月15号开始…
          </view>

        </view>
      </view>

      <text class="inter_text3">6-15</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  onLoad() {

  },
  methods: {
    goback() {
      uni.navigateBack()
    },
    mycode() {
      uni.navigateTo({
        url: "/pages/pagesall/home/mycode"
      })
    },
    messgoback() {
      uni.navigateTo({
        url: "/pages/pagesall/home/adverMess"
      })
    },
  }
}
</script>

<style>
.mess_Title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx;
}

.title_text {
  margin-left: 90rpx;
}

.title_img img {
  margin-left: 25rpx;
  width: 32rpx;
  height: 32rpx;
}

.messbox_img {
  width: 88rpx;
  height: 88rpx;
  background-color: #ff9e02;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.messbox_img img {
  width: 48rpx;
  height: 48rpx;
}

.messbox {
  padding: 20rpx;
  display: flex;
  justify-content: space-between;
}

.inter_text1 {
  font-weight: 500;
  font-size: 32rpx;
  color: #000000;
}

.inter_text2 {
  font-weight: 400;
  font-size: 24rpx;
  color: #666666;
  margin-top: 8rpx;
}

.inter_text3 {
  font-weight: 500;
  font-size: 20rpx;
  color: #000000;
}

.messbox2 {
  display: flex;
  align-items: center;
}

.messinter {
  margin-left: 30rpx;
}
</style>