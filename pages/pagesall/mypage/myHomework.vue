<template>
  <view>
<<<<<<< HEAD
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="homework_Title">
      <view class="homeworkImg" @click="work_goback">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
          alt=""
        />
      </view>
      <view class="homework_Title_text"> 我的作业 </view>
=======
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="homework_Title">
      <view class="homeworkImg" @click="work_goback">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
      </view>
      <view class="homework_Title_text">
        我的作业
      </view>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    </view>

    <view class="homeworktbox">
      <text class="box-text1">临时作业</text>
    </view>

<<<<<<< HEAD
    <view v-if="temworkList.length > 0">
      <view class="tem-list">
        <view
          class="temlist"
          v-for="(item, index) in temworkList"
          :key="index"
          @click="goToVideoPage(item.id)"
        >
=======
    <view v-if="temworkList.length>0">
      <view class="tem-list">
        <view class="temlist" v-for="(item,index) in temworkList" :key="index" @click="goToVideoPage(item.id)">
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          <view class="temlistImg">
            <img :src="item.sub_image" alt="" />
          </view>
          <view class="temlistText1">
<<<<<<< HEAD
            {{ item.content }}
          </view>
          <view class="temlistText2">
            <text>讲师：{{ item.teacher_name }}</text>
            <text>
              {{
                (new Date(item.finish_time).getMonth() + 1)
                  .toString()
                  .padStart(2, '0') +
                '-' +
                new Date(item.finish_time).getDate().toString().padStart(2, '0')
              }}
            </text>
=======
            {{item.content}}
          </view>
          <view class="temlistText2">
            <text>讲师：{{item.teacher_name}}</text>
            <text>
              {{
    (new Date(item.finish_time).getMonth() + 1).toString().padStart(2, '0') + '-' +
    new Date(item.finish_time).getDate().toString().padStart(2, '0')
  }}
            </text>

>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          </view>
        </view>
      </view>
    </view>
<<<<<<< HEAD
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
        >暂无作业</text
      >
=======
    <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;">
      <image style="width:400rpx;height: 400rpx;" src="@/static/img/noAct.png" mode="aspectFit" />
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    </view>
    <view class="homeworktbox">
      <text class="box-text1">近期作业</text>
    </view>

<<<<<<< HEAD
    <view v-if="workList.length > 0">
      <view class="tem-list">
        <view
          class="temlist"
          v-for="(item, index) in workList"
          :key="index"
          @click="goToVideoPage1(item.id)"
        >
          <view class="temlistImg">
            <img :src="item.sub_image" alt="" />
          </view>
          <view class="temlistText1"> 评语：{{ item.remark }} </view>
          <view class="boxlistText3">
            <text class="boxlistText4" v-if="mark !== undefined">{{
              mark < 60 ? '去学习' : mark >= 85 ? '优秀' : '良'
            }}</text>
          </view>
          <view class="temlistText2">
            <text>审阅：{{ item.teacher_name }}讲师</text>
=======
    <view v-if="workList.length>0">
      <view class="tem-list">
        <view class="temlist" v-for="(item,index) in workList" :key="index" @click="goToVideoPage1(item.id)">
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
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          </view>
        </view>
      </view>
    </view>
<<<<<<< HEAD
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
        >暂无作业</text
      >
    </view>
  </view>
</template>

<script>
import {
  fetchTemporaryHomeworkList,
  fetchRecentHomeworkList,
} from '@/utils/api';
=======
    <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;">
      <image style="width:400rpx;height: 400rpx;" src="@/static/img/noAct.png" mode="aspectFit" />
    </view>
  </view>

</template>

<script>
import { fetchMyTemporaryHomework, fetchMyHistoryHomework } from '@/utils/api'
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
import {
  onLoad,
  onShow,
  onPullDownRefresh,
  onReachBottom,
} from '@dcloudio/uni-app';
export default {
  data() {
    return {
      statusBarHeight: '',
      temworkList: [],
      workList: [],
      isLoading: false,
      params: {
        page: 1,
        limit: 6,
      },
      params1: {
        page: 1,
        limit: 6,
      },
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  },

  onPullDownRefresh() {
    this.loadMyTemporaryHomework(); // 确保这里调用的是一个存在的方法
    uni.stopPullDownRefresh();
  },
  onReachBottom() {
    if (this.isLoading) return; // 如果正在加载，直接返回
    this.params.page++;
    this.params1.page++;

    // 保存当前数组长度以便后续比较
    const currentLength = this.temworkList.length;
    const currentLength1 = this.workList.length;

<<<<<<< HEAD
    this.loadMyTemporaryHomework()
      .then(() => {
        const newLength1 = this.temworkList.length;
        const newLength2 = this.workList.length;
        // 检查新的数组长度
        if (newLength1 === currentLength && newLength2 === currentLength1) {
          // 如果数组长度没有增加，重置加载状态
          this.isLoading = true;
          uni.showToast({
            title: '没有更多数据',
            icon: 'none',
            duration: 2000, // 持续时间，单位为毫秒
          });
        } else {
          // 如果成功加载新的数据，保持加载状态为 false
          this.isLoading = false;
        }
      })
      .catch(() => {
        this.isLoading = false; // 如果请求失败，重置状态
      });
=======
    this.loadMyTemporaryHomework().then(() => {
      const newLength1 = this.temworkList.length;
      const newLength2 = this.workList.length;
      // 检查新的数组长度
      if (newLength1 === currentLength && newLength2 === currentLength1) {
        // 如果数组长度没有增加，重置加载状态
        this.isLoading = true;
        uni.showToast({
          title: '没有更多数据',
          icon: 'none',
          duration: 2000 // 持续时间，单位为毫秒
        });
      } else {
        // 如果成功加载新的数据，保持加载状态为 false
        this.isLoading = false;
      }
    }).catch(() => {
      this.isLoading = false; // 如果请求失败，重置状态
    });
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
    this.isLoading = false;
  },
  mounted() {
    this.loadMyTemporaryHomework(); // 在组件挂载时加载数据
  },
  methods: {
    goToVideoPage(id) {
      // 跳转到视频页面，并携带id作为参数
      uni.navigateTo({
<<<<<<< HEAD
        url: `/pages/pagesall/course/go_learn?homework_id=${id}`, // 使用模板字符串构建URL
=======
        url: `/pages/pagesall/course/go_learn?id=${id}`, // 使用模板字符串构建URL
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      });
    },
    goToVideoPage1(id) {
      // 跳转到视频页面，并携带id作为参数
      uni.navigateTo({
<<<<<<< HEAD
        url: `/pages/pagesall/course/go_learn?content_id=${id}`, // 使用模板字符串构建URL
=======
        url: `/pages/pagesall/course/go_learn?id=${id}`, // 使用模板字符串构建URL
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      });
    },
    async loadMyTemporaryHomework() {
      try {
<<<<<<< HEAD
        //临时作业
        const response = await fetchTemporaryHomeworkList(this.params); // 调用 API 请求
        // 近期作业
        const HistoryHomework = await fetchRecentHomeworkList(this.params1); // 调用 API 请求

        if (response.items && response.items.length > 0) {
          const existingIds = new Set(this.temworkList.map((item) => item.id));
          // 过滤新项，确保不重复
          const newItems = response.items
            .filter((item) => !existingIds.has(item.id))
            .map((item) => ({
              ...item, // 复制其他属性
              // 其他字段
            }));
=======
        const response = await fetchMyTemporaryHomework(this.params); // 调用 API 请求
        const HistoryHomework = await fetchMyHistoryHomework(this.params1); // 调用 API 请求

        if (response.items && response.items.length > 0) {
          const existingIds = new Set(this.temworkList.map(item => item.id));
          // 过滤新项，确保不重复
          const newItems = response.items.filter(item => !existingIds.has(item.id)).map(item => ({
            ...item, // 复制其他属性
            // 其他字段
          }));
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

          // 合并新项到现有列表
          this.temworkList = [...this.temworkList, ...newItems];
        } else {
<<<<<<< HEAD
        }
        if (HistoryHomework.items && HistoryHomework.items.length > 0) {
          const existingIds1 = new Set(this.workList.map((item) => item.id));
          // 过滤新项，确保不重复
          console.log(existingIds1);
          const newItems1 = HistoryHomework.items
            .filter((item) => !existingIds1.has(item.id))
            .map((item) => ({
              ...item, // 复制其他属性
              // 其他字段
            }));
          console.log(newItems1);
          // 合并新项到现有列表
          this.workList = [...this.workList, ...newItems1];
          console.log(this.workList);
        } else {
=======

        }
        if (HistoryHomework.items && HistoryHomework.items.length > 0) {
          const existingIds1 = new Set(this.temworkList.map(item => item.id));
          // 过滤新项，确保不重复
          const newItems1 = HistoryHomework.items.filter(item => !existingIds1.has(item.id)).map(item => ({
            ...item, // 复制其他属性
            // 其他字段
          }));

          // 合并新项到现有列表
          this.workList = [...this.workList, ...newItems1];
        } else {

>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        }
        // this.workList = HistoryHomework.items || []; // 更新数据
        console.log('教师信息:', this.temworkList); // 打印获取的数据
        console.log('雪花酥呢个:', this.workList); // 打印获取的数据
      } catch (error) {
        console.error('获取教学消息失败:', error); // 错误处理
      }
    },
    work_goback() {
<<<<<<< HEAD
      uni.navigateBack();
    },
  },
};
=======
      uni.navigateBack()
    }
  },
}
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
