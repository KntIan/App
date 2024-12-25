<template>
  <view>
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="friend_goback" @click="fri_goback">
      <img
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
        alt=""
      />
    </view>

    <view class="friend_name">
      <img :src="friend_heard" alt="" />
      <view class="fri_text1" style="margin-top: 8rpx">
        {{ friend_name }}
      </view>
      <view class="fri_text2" style="margin-top: 8rpx">
        ID:{{ friend_id }}
      </view>
    </view>
    <view class="test_verify">
      <view class="verify_text"> 验证信息: </view>
      <view class="verify_input">
        <input type="text" placeholder="书法一班刘易阳" />
      </view>
    </view>
    <view class="centerbox">
      <view class="friend_btn">
        <text style="font-weight: 500; font-size: 28rpx; color: #ffffff"
          >添加好友</text
        >
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      friend_heard:
        'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/26483a4d5dc54c63ae2af524e81ebb4d_mergeImage.png',
      friend_name: '张老师',
      friend_id: '1232222',
      statusBarHeight: '',
    };
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
  methods: {
    fri_goback() {
      uni.navigateBack();
    },
  },
};
</script>

<style>
.friend_goback {
  padding: 30rpx;
}

.friend_name {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140rpx;
  margin-bottom: 128rpx;
}

.friend_name img {
  width: 176rpx;
  height: 176rpx;
}

.fri_text1 {
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
}

.fri_text2 {
  font-weight: 400;
  font-size: 24rpx;
  color: #000000;
}

.verify_text {
  margin-left: 64rpx;
  margin-bottom: 48rpx;
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
}

.verify_input {
  display: flex;
  justify-content: center;
}

.verify_input input {
  width: 580rpx;
  height: 80rpx;
  padding: 0 40rpx;
  background: #eeeeee;
  border-radius: 40rpx;
}

.friend_btn {
  width: 662rpx;
  height: 80rpx;
  background: #5791f2;
  border-radius: 40rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.centerbox {
  display: flex;
  justify-content: center;
  margin-top: 180rpx;
}
</style>
