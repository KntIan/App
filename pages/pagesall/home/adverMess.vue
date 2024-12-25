<template>
<<<<<<< HEAD
  <view>
    <view :style="'height:' + statusBarHeight + 'px;'"></view>

    <view class="codepage" v-if="messList.length > 0">
      <view class="adverbox" v-for="(item, index) in messList" :key="index">
        <view class="adver_time">
          <view
            class="adver_hour"
            style="
              text-align: center;
              font-weight: 400;
              font-size: 20rpx;
              color: #000000;
              margin: 28rpx 0 28rpx 0;
            "
          >
            <text>{{ item.createtime }}</text>
          </view>
          <view class="adver_content">
            <view class="adver_text1">{{ item.title }}</view>
            <view class="adver_text2">{{ item.description }}</view>
            <view class="line">
              <img
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng754b004becd9b25a8ebdc9d2cb98f423d3fa6fdf022dd0a97d950d38fe548f62"
                alt=""
              />
            </view>
            <view class="adver_btn" @click="adverbtn(event, index)">
              查看详情
            </view>
=======
  <view class="codepage">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="code_titlebox">
      <view class="messImg" @click="goback">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
      </view>
      <view class="code_title">
        公告消息
      </view>
    </view>

    <view v-if="messList.length > 0" class="adverbox" v-for="(item,index) in messList" :key="index">
      <view class="adver_time">
        <view class="adver_hour" style="text-align: center; font-weight: 400;font-size: 20rpx;color: #000000;margin: 28rpx 0 28rpx 0;">
          <text>{{item.createtime}}</text>
        </view>
        <view class="adver_content">
          <view class="adver_text1">{{item.title}}</view>
          <view class="adver_text2">{{item.description}}</view>
          <view class="line">
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng754b004becd9b25a8ebdc9d2cb98f423d3fa6fdf022dd0a97d950d38fe548f62" alt="" />
          </view>
          <view class="adver_btn" @click="adverbtn(event,index)">
            查看详情
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
        src="@/static/img/noAicp.png"
        mode="aspectFit"
      />
      <text style="color: #666; position: absolute; z-index: 1; bottom: 140rpx"
        >暂无资讯</text
      >
=======
    <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <image style="margin-top: -600rpx;" src="@/static/img/noMes.png" mode="aspectFit" />
      <!-- <view class="bg_img"></view> -->
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    </view>
  </view>
</template>

<script>
<<<<<<< HEAD
import { fetchNoticeList } from '@/utils/api';
import { useStore } from '@/store';
=======
import { fetchNoticeList } from '@/utils/api'
import { useStore } from '@/store'
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74

export default {
  data() {
    return {
      messList: [], // 初始化为空数组
<<<<<<< HEAD
      statusBarHeight: '',
    };
=======
      statusBarHeight: ''
    }
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
    this.loadNoticeList(); // 页面加载时调用方法获取公告消息
  },
  methods: {
    goback() {
<<<<<<< HEAD
      uni.navigateBack();
=======
      uni.navigateBack()
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    },
    async adverbtn(event, index) {
      console.log(event, index);
      const selectedNotice = this.messList[index]; // 获取选中的公告
      console.log(selectedNotice.id);
      uni.navigateTo({
<<<<<<< HEAD
        url: `/pages/pagesall/home/adver_detail?id=${selectedNotice.id}`,
=======
        url: `/pages/pagesall/home/adver_detail?id=${selectedNotice.id}`
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      });
    },
    mycode() {
      uni.navigateTo({
<<<<<<< HEAD
        url: '/pages/pagesall/home/mycode',
      });
=======
        url: "/pages/pagesall/home/mycode"
      })
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    },
    async loadNoticeList() {
      try {
        const store = useStore();
        const response = await fetchNoticeList(); // 调用接口获取公告消息
        this.messList = response.rows; // 将返回的数据赋值给 messList
        store.setMessageList(this.messList);
      } catch (error) {
<<<<<<< HEAD
        console.error('获取公告消息失败:', error);
      }
    },
  },
};
=======
        console.error("获取公告消息失败:", error);
      }
    }
  }
}
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
</script>

<style scoped>
.kong {
  background: white;
  width: 100%;
  height: 100%;
}
.bg_img {
  width: 100px;
  height: 100px;
  background-image: url(/static/img/kong.png);
  border: 1px solid;
}
.codepage {
  width: 750rpx;
<<<<<<< HEAD
  padding-bottom: 24rpx;
=======
  height: 1624rpx;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  background-color: #eeeeee;
}

.code_titlebox {
  position: relative;
  padding: 30rpx;
}

.messImg {
  position: absolute;
  /* background-color: ; */
}

.code_title {
  text-align: center;
  font-weight: 500;
  font-size: 36rpx;
  color: #000;
}

.adver_content {
  width: 634rpx;
  /* height: 276rpx; */
  background-color: #fff;
  padding: 30rpx;
  border-radius: 16rpx;
  /* padding-bottom: 20rpx; */
}

.adver_time {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.adver_text1 {
  margin-bottom: 16rpx;
  font-weight: 500;
  font-size: 32rpx;
  color: #000000;
}

.adver_text2 {
  font-weight: 400;
  font-size: 24rpx;
  color: #666666;
}

.line {
  width: 100%;
  margin: 28rpx 0 28rpx 0;
}

.line img {
  width: 636rpx;
}

.adver_btn {
  text-align: center;
  font-weight: 400;
  font-size: 28rpx;
  color: #5791f2;
}
.adverbox {
  margin-bottom: 84rpx;
}
</style>
