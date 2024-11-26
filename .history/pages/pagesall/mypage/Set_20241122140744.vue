<template>
  <view class="container">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
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
      <button class="logout-btn" @click="logout">退出登录</button>
    </view>
  </view>
</template>

<script>

export default {
  data() {
    return {
      statusBarHeight: 0
    }
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    goToPage(page) {
      // 替换成实际的页面路径
      uni.navigateTo({
        url: `/pages/pagesall/mypage/${page}`
      });

    },
    logout() {
      // 处理退出登录的逻辑
      // 例如清除用户信息、跳转到登录页面等
      uni.clearStorageSync();
      uni.navigateTo({
        url: '/pages/login/login'
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
.logout-btn {
  width: 100%;
  padding: 2px;
  border-radius: 50px;
  background-color: #666666;
  color: #fff;
  text-align: center;
  font-size: 16px;
}
</style>