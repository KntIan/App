<template>
  <view>
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="hist_Title">
      <view class="histImg" @click="hist_goback">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
          alt=""
        />
      </view>
      <view class="hist_text"> 历史测评 </view>
    </view>

    <view class="histbox">
      <text class="box-text1">AI检测</text>
      <text class="box-text2" @click="aihist">更多</text>
    </view>

    <view
      style="height: 580rpx; overflow: hidden"
      v-if="AIassessmentList.length > 0"
      v-cloak
    >
      <myhistList @tea="ai" :histList="AIassessmentList" />
    </view>
    <view
      v-cloak
      v-else
      class="kong"
      style="
        display: grid;
        justify-items: center;
        position: relative;
        height: 500rpx;
      "
    >
      <image
        style="width: 400rpx; height: 400rpx; margin-bottom: -30rpx"
        src="@/static/img/noAicp.png"
        mode="aspectFit"
      />
      <text style="color: #666; position: absolute; z-index: 1; bottom: 140rpx"
        >暂无测评结果</text
      >
    </view>

    <view class="histbox">
      <text class="box-text1">老师审阅</text>
      <text class="box-text2" @click="teacherhist">更多</text>
    </view>
    <view
      style="height: 580rpx; overflow: hidden"
      v-if="teacherList.length > 0"
      v-cloak
    >
      <myhistList @tea="tea" :histList="teacherList" />
    </view>
    <view
      v-cloak
      v-else
      class="kong"
      style="
        display: grid;
        justify-items: center;
        position: relative;
        height: 500rpx;
      "
    >
      <image
        style="width: 400rpx; height: 400rpx; margin-bottom: -30rpx"
        src="@/static/img/noAicp.png"
        mode="aspectFit"
      />
      <text style="color: #666; position: absolute; z-index: 1; bottom: 140rpx"
        >暂无老师审阅</text
      >
    </view>
  </view>
</template>

<script>
import myhistList from './compontents/histList.vue'

import {
  fetchMyAIWork,
  fetchMyHistoryHomework,
  fetchTeacherReviewHomework,
  fetchAIAssessmentScoreRange,
} from '@/utils/api'
export default {
  components: {
    myhistList,
  },
  data() {
    return {
      statusBarHeight: '',
      AIassessmentList: [],
      teacherList: [],
      params: {
        page: 1,
        limit: 4,
      },
      params1: {
        page: 1,
        limit: 4,
      },
    }
  },
  mounted() {
    this.getAIassessmentList()
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top
  },
  methods: {
    ai(id) {
      console.log('222', id)
      uni.navigateTo({
        url: `/pages/pagesall/aiDete/aiResult?homework_id=${id}`, // 使用模板字符串传入变量
      })
    },
    tea(id) {
      console.log(id)
      uni.navigateTo({
        url: `/pages/pagesall/mypage/correction?homework_id=${id}`,
      })
    },
    async getAIassessmentList() {
      try {
        const res = await fetchMyAIWork(this.params)
        //老师审阅
        const res1 = await fetchTeacherReviewHomework(this.params1)
        console.log(res1)
        // 确保每个项的结构一致
        this.AIassessmentList = res.items.map((item) => ({
          id: item.id,
          img: item.origin_img || '', // 确保有 img 属性
          // title: item.title || '未命名', // 确保有 title 属性
          date: item.addtime || '未知日期', // 确保有 date 属性
          grade: item.score_title || '差',
        }))
        this.teacherList = res1.items.map((item) => ({
          id: item.id,
          img: item.sub_image || '', // 确保有 img 属性
          title: item.content || '未命名', // 确保有 title 属性
          date: item.teacher_name || '未知日期', // 确保有 date 属性
          grade: item.mark || 0,
        }))
      } catch (e) {}
    },
    // async getTeacherList() {
    //   try {
    //     const res = await fetchTeacherReviewHomework(this.params2)
    //     console.log(res)
    //   } catch (e) {}
    // },
    hist_goback() {
      uni.navigateBack()
    },
    aihist() {
      uni.navigateTo({
        url: '/pages/pagesall/mypage/AIhist',
      })
    },
    teacherhist() {
      uni.navigateTo({
        url: '/pages/pagesall/mypage/teacherHist',
      })
    },
  },
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
[v-cloak] {
  display: none;
}
</style>
