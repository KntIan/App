<template>
  <view>
    <view class="hist_Title">
      <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
      <view class="histImg" @click="hist_goback">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
      </view>
      <view class="hist_text">
        历史测评
      </view>
    </view>

    <view class="histbox">
      <text class="box-text1">AI检测</text>
      <text class="box-text2" @click="aihist">更多</text>
    </view>

    <view v-if="AIassessmentList.length>0">
      <myhistList :histList="AIassessmentList" />
    </view>
    <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;">
      <image style="width:400rpx;height: 400rpx;" src="@/static/img/noAct.png" mode="aspectFit" />
    </view>

    <view class="histbox">
      <text class="box-text1">老师审阅</text>
      <text class="box-text2" @click="teacherhist">更多</text>
    </view>
    <view v-if="teacherList.length>0">
      <myhistList :histList="teacherList" />
    </view>
    <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;">
      <image style="width:400rpx;height: 400rpx;" src="@/static/img/noAct.png" mode="aspectFit" />
    </view>
  </view>

</template>

<script>
import myhistList from './compontents/histList.vue';

import { fetchMyAIWork } from '@/utils/api'
export default {
  components: {
    myhistList
  },
  data() {
    return {
      statusBarHeight: '',
      AIassessmentList: [{
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '书法练习第一课',
        date: '2024-07-1',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '书法练习第二课',
        date: '2024-07-1',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '书法练习第三课',
        date: '2024-07-1',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '书法练习第四课',
        date: '2024-07-1',
      }],
      teacherList: [{
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
      }],
      params: {
        page: 1,
        limit: 7,
      }
    }
  },
  mounted() {
    this.getAIassessmentList()
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
  methods: {
    async getAIassessmentList() {
      try {
        const res = await fetchMyAIWork(this.params)
        console.log(res)
        // 确保每个项的结构一致
        this.AIassessmentList = res.items.map(item => ({
          img: item.img || '', // 确保有 img 属性
          title: item.title || '未命名', // 确保有 title 属性
          date: item.date || '未知日期' // 确保有 date 属性
        }));
        this.AIassessmentList = res.items
        console.log(this.AIassessmentList)
      } catch (e) { }
    },
    hist_goback() {
      uni.navigateBack()
    },
    aihist() {
      uni.navigateTo({
        url: "/pages/pagesall/mypage/AIhist"
      })
    },
    teacherhist() {
      uni.navigateTo({
        url: "/pages/pagesall/mypage/teacherHist"
      })
    }
  }
}
</script>

<style>
.hist_Title {
  display: flex;
  align-items: center;
  padding: 20rpx;
}

.hist_text {
  width: 100%;
  text-align: center;
}

.histbox {
  padding: 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-text1 {
  font-weight: 600;
  font-size: 32rpx;
  line-height: 44rpx;
}

.box-text2 {
  font-size: 24rpx;
  line-height: 34rpx;
  color: #666666;
}

.AI-list {
  margin-top: 8rpx;
  padding: 20rpx;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ailist {
  width: 340rpx;
  height: 260rpx;
  box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
  border-radius: 8rpx;
  margin-bottom: 20rpx;
}

.ailistImg {
  width: 340rpx;
  height: 160rpx;
}

.ailistImg img {
  width: 340rpx;
  height: 160rpx;
}

.ailistText1 {
  margin-top: 8rpx;
  margin-left: 16rpx;
  font-weight: 600;
  font-size: 28rpx;
  line-height: 40rpx;
}

.ailistText2 {
  margin-top: 10rpx;
  margin-left: 16rpx;
  font-size: 20rpx;
  line-height: 28rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ailistText3 {
  margin-right: 16rpx;
}

.ailistText4 {
  padding: 0rpx 13rpx 1rpx 13rpx;
  border-radius: 4rpx;
  background: #ff9e02;
  font-size: 16rpx;
  color: #ffffff;
}
</style>