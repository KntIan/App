<template>
  <view class="box-list">
    <view class="boxlist" v-for="(item,index) in histList" :key="index" @click="toCorr">
      <view class="boxlistImg">
        <img :src="item.img" alt="" />
      </view>
      <view class="boxlistText1">
        {{item.title}}
      </view>
      <view class="boxlistText2">
        <text>{{item.date ? item.date : item.teacherName}}</text>
        <view class="boxlistText3">
          <text>评测:</text>
          <text class="boxlistText4">{{ item.grade }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'histlist',
  props: {
    histList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {

    }
  },
  onload() {

  },
  methods: {
    toCorr() {
      uni.navigateTo({
        url: "/pages/pagesall/mypage/correction"
      })
    }
  }
}
</script>

<style>
.box-list {
  margin-top: 8rpx;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20rpx;
}

.boxlist {
  width: 340rpx;
  height: 260rpx;
  box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
  border-radius: 8rpx;
  margin-bottom: 20rpx;
}

.boxlistImg {
  width: 340rpx;
  height: 160rpx;
}

.boxlistImg img {
  width: 340rpx;
  height: 160rpx;
}

.boxlistText1 {
  margin-top: 8rpx;
  margin-left: 16rpx;
  font-weight: 600;
  font-size: 28rpx;
  line-height: 40rpx;
}

.boxlistText2 {
  margin-top: 10rpx;
  margin-left: 16rpx;
  font-size: 20rpx;
  line-height: 28rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.boxlistText3 {
  margin-right: 16rpx;
}

.boxlistText4 {
  padding: 0rpx 13rpx 1rpx 13rpx;
  border-radius: 4rpx;
  background: #ff9e02;
  font-size: 16rpx;
  color: #ffffff;
}
</style>