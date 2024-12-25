<template>
  <view>
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="AI_Title">
      <view class="aiImg" @click="goback">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
          alt=""
        />
      </view>
      <view class="ai_text"> AI历史测评 </view>
    </view>

    <view class="aihist-box">
      <input
        type="text"
        @blur="searchCity"
        class="aihist_input"
        v-model="searchDate"
        placeholder="请输入日期查找"
      />
    </view>
    <view v-if="AIhistList.length > 0">
      <myhistList @tea="aiResult" :histList="AIhistList" />
    </view>
    <view
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
        >暂无测评</text
      >
    </view>
  </view>
</template>

<script>
import myhistList from './compontents/histList.vue'
import { fetchMyAIWork } from '@/utils/api'
import {
  onLoad,
  onShow,
  onPullDownRefresh,
  onReachBottom,
} from '@dcloudio/uni-app'
export default {
  components: {
    myhistList,
  },
  data() {
    return {
      statusBarHeight: '',
      AIhistList: [],
      params: {
        page: 1,
        limit: 10,
        search: '',
      },
      isLoading: false,
      searchDate: '',
    }
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top
    this.getAIassessmentList(), (this.isLoading = false)
  },
  onPullDownRefresh() {
    this.getAIassessmentList()
    uni.stopPullDownRefresh()
  },
  onReachBottom() {
    if (this.isLoading) {
      uni.showToast({
        title: '没有更多数据了',
        icon: 'none',
        duration: 3000,
      })
    }
    if (this.isLoading) return
    this.params.page++

    this.getAIassessmentList()
  },

  methods: {
    aiResult(id) {
      console.log(id)
      // 跳转到结果页并传递参数
      uni.navigateTo({
        url: `/pages/pagesall/aiDete/aiResult?homework_id=${id}`, // 使用模板字符串传入变量
      })
    },
    async searchCity() {
      // 当输入日期时，更新params中的日期参数
      this.params.search = this.searchDate // 假设您在params中添加了date属性
      this.params.page = 1 // 重置页码以重新请求数据
      this.AIhistList = [] // 清空当前列表以便重新加载数据
      await this.getAIassessmentList() // 重新请求数据
    },
    async getAIassessmentList() {
      try {
        const res = await fetchMyAIWork(this.params)
        console.log(res)

        const newItems = res.items.map((item) => ({
          id: item.id,
          img: item.origin_img || '',
          date: item.addtime || '未知日期',
          grade: item.score_title || '差',
        }))

        // 如果是加载更多，将新数据追加到现有列表中
        if (this.params.page > 1) {
          this.AIhistList = this.AIhistList.concat(newItems)
        } else {
          this.AIhistList = newItems // 直接赋值，确保是最新的列表
        }
        if (this.AIhistList.length === res.total) {
          this.isLoading = true
        }
      } catch (e) {
        console.error(e)
      }
    },
    goback() {
      uni.navigateBack()
    },
  },
}
</script>

<style>
.AI_Title {
  display: flex;
  align-items: center;
  padding: 20rpx;
}

.ai_text {
  width: 100%;
  text-align: center;
}

.aihist-box {
  padding: 20rpx;
  padding-bottom: 0rpx;
}

.aihist_input {
  height: 80rpx;
  padding-left: 36rpx;
  background: #eeeeee;
  border-radius: 40rpx;
  margin-top: 16rpx;
}
</style>
