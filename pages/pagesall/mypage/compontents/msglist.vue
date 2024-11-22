<template>
  <view class="classList" v-for="(item,index) in msgList" :key="index">
    <view class="classbox" @click="classgoback">
      <view class="classbox2">
        <view class="classbox_img">
          <img :src="item.head" alt="" />
        </view>

        <view class="classinter">
          <view class="class_text1">
            <text class="text-classname">{{item.teacher_name}}</text>
            <text class="text-hours">6-15</text>
          </view>
          <view class="class_text2">
            {{item.massage}}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'histlist',
  props: {
    msgList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {

    }
  },
}
</script>

<style>
.classbox_img {
  width: 88rpx;
  height: 88rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.classbox {
  width: 710rpx;
  padding: 20rpx;
  display: flex;
  justify-content: space-between;
}

.class_text1 {
  width: 594rpx;
  font-weight: 600;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.class_text2 {
  font-size: 24rpx;
  line-height: 34rpx;
  color: #666666;
}

.classbox2 {
  display: flex;
  align-items: center;
}

.classinter {
  margin-left: 28rpx;
}

.text-hours {
  font-weight: 400;
  font-size: 20rpx;
  line-height: 28rpx;
}
.text-classname {
  font-size: 32rpx;
  line-height: 44rpx;
}
</style>