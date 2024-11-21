<template>
  <view class="AI_Title">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="aiImg" @click="goback">
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
    </view>
    <view class="ai_text">
      AI历史测评
    </view>
  </view>

  <view class="aihist-box">
    <input type="text" @click="searchCity" class="aihist_input" placeholder="请输入要查找的城市" />
  </view>
  <myhistList :histList="AIhistList" />

</template>

<script>
import myhistList from './compontents/histList.vue';
import { fetchMyAIWork } from '@/utils/api'
import {
  onLoad,
  onShow,
  onPullDownRefresh,
  onReachBottom,
} from '@dcloudio/uni-app';
export default {
  components: {
    myhistList
  },
  data() {
    return {
      statusBarHeight: '',
      AIhistList: [{
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '书法练习第一课',
        date: '2024-07-1',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '书法练习第二课',
        date: '2024-07-1',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '书法练习第三课',
        date: '2024-07-1',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '书法练习第四课',
        date: '2024-07-1',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '书法练习第四课',
        date: '2024-07-1',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '书法练习第四课',
        date: '2024-07-1',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e5923dca4d594da3abf115ee5a05cf14_mergeImage.png',
        title: '书法练习第四课',
        date: '2024-07-1',
      },
      {
        img: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/fdef5ff762634f9f883ddd89c8af057a_mergeImage.png',
        title: '书法练习第四课',
        date: '2024-07-1',
      }
      ],
    }
  },
  onLoad() { this.statusBarHeight = getApp().globalData.top; this.getAIassessmentList() },
  methods: {
    async getAIassessmentList() {
      try {
        const res = await fetchMyAIWork(this.params)
        console.log(res)
        // 确保每个项的结构一致
        this.AIassessmentList = res.items.map(item => ({
          img: item.origin_img || '', // 确保有 img 属性
          title: item.title || '未命名', // 确保有 title 属性
          date: item.addtime || '未知日期', // 确保有 date 属性
          grade: item.result >= 80 ? '优秀' : '良好'
        }));
        console.log(this.AIassessmentList)
      } catch (e) { }
    },
    goback() {
      uni.navigateBack()
    }
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