<template>
  <view class="container">
    <!-- <view class="header">
			<text class="back" @click="goBack">＜</text>
			<text class="title">设置</text>
		</view> -->
    <view class="list">
      <view class="item" @click="goToPage('privacy')">
        <text>隐私</text>
        <text class="arrow">＞</text>
      </view>
      <view class="item" @click="goToPage('changePassword')">
        <text>修改密码</text>
        <text class="arrow">＞</text>
      </view>
      <view class="item" @click="goToPage('changePhone')">
        <text>修改手机号</text>
        <text class="arrow">＞</text>
      </view>
      <view class="item" @click="goToPage('complaint')">
        <text>投诉意见</text>
        <text class="arrow">＞</text>
      </view>
      <view class="item" @click="goToPage('contactUs')">
        <text>联系我们</text>
        <text class="arrow">＞</text>
      </view>
      <view class="item" @click="goToPage('aboutUs')">
        <text>关于我们</text>
        <text class="arrow">＞</text>
      </view>
    </view>
  </view>
</template>

<script>
import { } from '@/utils/api'
export default {
  methods: {
    goBack() {
      uni.navigateBack();
    },
    goToPage(page) {
      // 替换成实际的页面路径
      uni.navigateTo({
        url: `/pages/pagesall/mypage/${page}`
      });

    }
  }
}
</script>

<style>
.container {
  background-color: #fff;
  height: 100vh;
  padding: 0 28rpx;
}

.header {
  display: flex;
  align-items: center;
  padding: 20px;
}

.back {
  font-size: 32rpx;
  margin-right: 10px;
}

.title {
  font-size: 36rpx;
  flex-grow: 1;
  text-align: center;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28rpx 0 30rpx;
  font-size: 28rpx;
  color: rgba(0, 0, 0, 0.8);
  border-bottom: 1rpx solid #eee;
}

.arrow {
  color: #999;
}
</style>