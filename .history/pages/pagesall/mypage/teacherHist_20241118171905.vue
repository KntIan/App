<template>
  <view class="teacher_Title">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="teacherImg" @click="teacherhist_goback">
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
    </view>
    <view class="teacher_text">
      老师历史审阅
    </view>
  </view>

  <view class="teacherhist-box">
    <input type="text" @click="searchCity" class="teacherhist_input" placeholder="请输入要查找的城市" />
  </view>
  <myhistList :histList="teacherhistList" />

</template>

<script>
import myhistList from './compontents/histList.vue';
export default {
  components: {
    myhistList
  },
  data() {
    return {
      statusBarHeight: '',
      teacherhistList: [{
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '有进步继续努力',
        teacherName: '王老师',
      }]
    }
  },
  onLoad() { this.statusBarHeight = getApp().globalData.top; },
  methods: {
    teacherhist_goback() {
      uni.navigateBack()
    }
  },
}
</script>

<style>
.teacher_Title {
  display: flex;
  align-items: center;
  padding: 20rpx;
}

.teacher_text {
  width: 100%;
  text-align: center;
}

.teacherhist-box {
  padding: 20rpx;
  padding-bottom: 0rpx;
}

.teacherhist_input {
  height: 80rpx;
  padding-left: 36rpx;
  background: #eeeeee;
  border-radius: 40rpx;
  margin-top: 16rpx;
}
</style>