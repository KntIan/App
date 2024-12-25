<template>
  <view class="teacher_Title">
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="teacherImg" @click="teacherhist_goback">
      <img
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
        alt=""
      />
    </view>
    <view class="teacher_text"> 老师历史审阅 </view>
  </view>

  <!-- <view class="teacherhist-box">
    <input type="text" @click="searchCity" class="teacherhist_input" placeholder="请输入要查找的城市" />
  </view> -->
  <view v-if="teacherhistList.length > 0">
    <myhistList @tea="list" :histList="teacherhistList" />
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
      src="@/static/img/noHomework.png"
      mode="aspectFit"
    />
    <text style="color: #666; position: absolute; z-index: 1; bottom: 140rpx"
      >暂无历史审阅</text
    >
  </view>
</template>

<script>
import myhistList from './compontents/histList.vue';
import {
  onLoad,
  onShow,
  onPullDownRefresh,
  onReachBottom,
} from '@dcloudio/uni-app';
import { fetchTeacherReviewHomework } from '@/utils/api';
export default {
  components: {
    myhistList,
  },
  data() {
    return {
      statusBarHeight: '',
      teacherhistList: [],
      params: {
        page: 1,
        limit: 10,
      },
    };
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
  onPullDownRefresh() {
    this.getAIassessmentList();
    uni.stopPullDownRefresh();
  },
  onReachBottom() {
    if (this.isLoading) {
      uni.showToast({
        title: '没有更多数据了',
        icon: 'none',
        duration: 3000,
      });
    }
    if (this.isLoading) return;
    this.params.page++;

    this.getAIassessmentList();
  },
  mounted() {
    this.getAIassessmentList();
  },
  methods: {
    list(id) {
      console.log(id);
      uni.navigateTo({
        url: `/pages/pagesall/mypage/correction?homework_id=${id}`,
      });
    },
    async getAIassessmentList() {
      try {
        const res = await fetchTeacherReviewHomework(this.params);
        // console.log(res);

        // 检查返回结果是否有数据
        if (res.items && res.items.length > 0) {
          const newItems = res.items.map((item) => ({
            id: item.id,
            img: item.sub_image || '', // 确保有 img 属性
            title: item.content || '未命名', // 确保有 title 属性
            date: item.addtime
              ? new Date(item.addtime * 1000).toLocaleDateString() // 只保留年月日
              : '未知日期',
            grade: item.result || 0,
          }));
          // 如果是加载更多，将新数据追加到现有列表中
          if (this.params.page > 1) {
            this.teacherhistList = this.teacherhistList.concat(newItems);
          } else {
            this.teacherhistList = newItems; // 直接赋值，确保是最新的列表
          }
          if (this.teacherhistList.length === res.total) {
            this.isLoading = true;
          }
          // // 合并新获取的数据与现有数据
          // this.teacherhistList = [...this.teacherhistList, ...newItems];
        } else {
          // 如果没有新数据，则可以设置提示
          uni.showToast({
            title: '没有更多数据',
            icon: 'none',
            duration: 2000, // 持续时间，单位为毫秒
          });
        }
      } catch (e) {
        console.error(e);
      }
    },
    teacherhist_goback() {
      uni.navigateBack();
    },
  },
};
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
