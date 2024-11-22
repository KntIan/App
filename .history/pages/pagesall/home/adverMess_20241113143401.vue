<template>
  <view class="codepage">
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
          <text>{{item.month}}</text><text style="margin-left: 20rpx;">{{item.hour}}</text>
        </view>
        <view class="adver_content">
          <view class="adver_text1">{{item.title}}</view>
          <view class="adver_text2">{{item.description}}</view>
          <view class="line">
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng754b004becd9b25a8ebdc9d2cb98f423d3fa6fdf022dd0a97d950d38fe548f62" alt="" />
          </view>
          <view class="adver_btn" @click="adverbtn(event,index)">
            查看详情
          </view>
        </view>
      </view>
    </view>
    <view v-else class="kong" style="text-align: center;">
      暂无公告消息
      <!-- <view class="bg_img"></view> -->
    </view>
  </view>
</template>

<script>
import { fetchNoticeList } from '@/utils/api'
export default {
  data() {
    return {
      messList: [], // 初始化为空数组
    }
  },
  onLoad() {
    this.loadNoticeList(); // 页面加载时调用方法获取公告消息
  },
  methods: {
    goback() {
      uni.navigateBack()
    },
    adverbtn(event, index) {
      console.log(event, index)
      uni.navigateTo({
        url: "/pages/pagesall/home/adver_detail"
      })
    },
    mycode() {
      uni.navigateTo({
        url: "/pages/pagesall/home/mycode"
      })
    },
    async loadNoticeList() {
      try {
        const response = await fetchNoticeList(); // 调用接口获取公告消息
        this.messList = response.rows; // 将返回的数据赋值给 messList
      } catch (error) {
        console.error("获取公告消息失败:", error);
      }
    }
  }
}
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
  height: 1624rpx;
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
