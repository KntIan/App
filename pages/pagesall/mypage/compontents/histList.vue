<template>
  <view class="box-list">
    <view
      class="boxlist"
      v-for="(item, index) in histList"
      :key="index"
      @click="toCorr(item.id)"
    >
      <view :class="{ boxlistImg: item.title, boxlistImg2: !item.title }">
        <img :src="item.img" alt="" />
      </view>
      <view class="boxlistText1">
        {{ item.title }}
      </view>
      <view class="boxlistText2">
        <text>{{ item.date ? item.date : item.teacherName }}</text>
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
      default: [],
    },
  },
  emits: ['tea'],
  data() {
    return {}
  },
  onload() {},
  methods: {
    toCorr(id) {
      this.$emit('tea', id) // 向父组件传值
      // uni.navigateTo({
      //   url: `/pages/pagesall/aiDete/aiResult?homework_id=${id}`, // 使用模板字符串传入变量
      // })
    },
  },
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
.boxlistImg2 {
  width: 340rpx;
  height: 200rpx;
}

.boxlistImg img {
  width: 100%;
  height: 100%;
}
.boxlistImg2 img {
  width: 100%;
  height: 100%;
}

.boxlistText1 {
  margin-top: 8rpx;
  margin-left: 16rpx;
  font-weight: 600;
  font-size: 28rpx;
  line-height: 40rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
