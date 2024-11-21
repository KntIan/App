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
  <view>
    <myhistList :histList="AIhistList" />
  </view>

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
      AIhistList: [
      ],
      params: {
        page: 1,
        limit: 10,
      },
      isLoading: false,
    }
  },
  onLoad() { this.statusBarHeight = getApp().globalData.top; this.getAIassessmentList(), this.isLoading = false; },
  onPullDownRefresh() {
    this.getAIassessmentList()
    uni.stopPullDownRefresh();
  },
  onReachBottom() {
    if (this.isLoading) return; // 如果正在加载，直接返回
    this.params.page++;

    // 保存当前数组长度以便后续比较
    const currentLength = this.AIhistList.length;

    this.getAIassessmentList().then(() => {
      // 检查新的数组长度
      if (this.AIhistList.length === currentLength) {
        // 如果数组长度没有增加，重置加载状态
        this.isLoading = true;
      } else {
        // 如果成功加载新的数据，保持加载状态为 false
        this.isLoading = false;
      }
    }).catch(() => {
      this.isLoading = false; // 如果请求失败，重置状态
    });
  },

  methods: {
    async getAIassessmentList() {
      try {
        const res = await fetchMyAIWork(this.params);
        console.log(res);

        // 检查返回结果是否有数据
        if (res.items && res.items.length > 0) {
          const newItems = res.items.map(item => ({
            img: item.origin_img || '', // 确保有 img 属性
            title: item.title || '未命名', // 确保有 title 属性
            date: item.addtime || '未知日期', // 确保有 date 属性
            grade: item.result >= 80 ? '优秀' : '良好'
          }));

          // 合并新获取的数据与现有数据
          this.AIhistList = [...this.AIhistList, ...newItems];
        } else {
          // 如果没有新数据，则可以设置提示
          uni.showToast({
            title: '没有更多数据',
            icon: 'none',
            duration: 2000 // 持续时间，单位为毫秒
          });
        }
      } catch (e) {
        console.error(e);
      }
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