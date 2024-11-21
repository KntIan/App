<template>
  <view class="homework_Title">
    <view class="homeworkImg" @click="work_goback">
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
    </view>
    <view class="homework_Title_text">
      我的作业
    </view>
  </view>

  <view class="homeworktbox">
    <text class="box-text1">临时作业</text>
  </view>

  <view class="tem-list">
    <view class="temlist" v-for="(item,index) in temworkList" :key="index">
      <view class="temlistImg">
        <img :src="item.sub_image" alt="" />
      </view>
      <view class="temlistText1">
        {{item.content}}
      </view>
      <view class="temlistText2">
        <text>{{item.teacher_name}}</text>
        <text>
          {{
    new Date(item.finish_time).getFullYear() + '-' +
    (new Date(item.finish_time).getMonth() + 1).toString().padStart(2, '0')
  }}
        </text>
      </view>
    </view>
  </view>

  <view class="homeworktbox">
    <text class="box-text1">近期作业</text>
  </view>

  <view class="tem-list">
    <view class="temlist" v-for="(item,index) in workList" :key="index">
      <view class="temlistImg">
        <img :src="item.img" alt="" />
      </view>
      <view class="temlistText1">
        {{item.title}}
      </view>
      <view class="boxlistText3">
        <text class="boxlistText4">优秀</text>
      </view>
      <view class="temlistText2">
        <text>{{item.teacher}}</text>
      </view>
    </view>
  </view>

</template>

<script>
import { fetchMyTemporaryHomework } from '@/utils/api'
export default {
  data() {
    return {
      temworkList: [{
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ea7d95474d6a417b957c39bcd0690a48_mergeImage.png',
        title: '硬比书法"三点水"书写',
        teacher: '讲师:李晓华',
        date: '6-22'
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ea7d95474d6a417b957c39bcd0690a48_mergeImage.png',
        title: '硬比书法"三点水"书写',
        teacher: '讲师:李晓华',
        date: '6-22'
      }],
      workList: [{
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ea7d95474d6a417b957c39bcd0690a48_mergeImage.png',
        title: '有进步继续努力',
        teacher: '审阅:李晓华老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ea7d95474d6a417b957c39bcd0690a48_mergeImage.png',
        title: '有进步继续努力',
        teacher: '审阅:李晓华老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ea7d95474d6a417b957c39bcd0690a48_mergeImage.png',
        title: '有进步继续努力',
        teacher: '审阅:李晓华老师',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ea7d95474d6a417b957c39bcd0690a48_mergeImage.png',
        title: '有进步继续努力',
        teacher: '审阅:李晓华老师',
      }]
    }
  },
  mounted() {
    this.loadMyTemporaryHomework(); // 在组件挂载时加载数据
  },
  methods: {
    async loadMyTemporaryHomework() {
      try {
        const response = await fetchMyTemporaryHomework(); // 调用 API 请求
        this.temworkList = response.items || []; // 更新数据
        console.log('教师信息:', this.temworkList); // 打印获取的数据
      } catch (error) {
        console.error('获取教学消息失败:', error); // 错误处理
      }
    },
    work_goback() {
      uni.navigateBack()
    }
  },
}
</script>

<style>
.homework_Title {
  display: flex;
  align-items: center;
  padding: 20rpx;
}

.homework_Title_text {
  width: 100%;
  text-align: center;
}

.homeworktbox {
  padding: 20rpx;
  padding-bottom: 0rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-text1 {
  font-weight: 600;
  font-size: 32rpx;
  line-height: 44rpx;
}

.tem-list {
  margin-top: 8rpx;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20rpx;
  padding-bottom: 0rpx;
}

.temlist {
  width: 340rpx;
  border-radius: 16rpx;
  margin-bottom: 20rpx;
}

.temlistImg {
  width: 340rpx;
  height: 240rpx;
}

.temlistImg img {
  width: 340rpx;
  height: 240rpx;
}

.temlistText1 {
  margin-top: 16rpx;
  font-weight: 600;
  font-size: 28rpx;
  line-height: 40rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.temlistText2 {
  margin-top: 14rpx;
  margin-bottom: 14rpx;
  font-size: 20rpx;
  line-height: 28rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.boxlistText4 {
  width: 80rpx;
  height: 40rpx;
  padding: 2rpx 16rpx 2rpx 16rpx;
  background: #5791f2;
  border-radius: 8rpx;
  font-size: 16rpx;
  color: #ffffff;
}
</style>