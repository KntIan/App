<template>
  <view class="codepage">
    <view :style="'height:' + statusBarHeight + 'px;'"></view>

    <view v-if="infoList.length > 0">
      <view class="adverbox" v-for="(item, index) in infoList" :key="index">
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
            <text>{{ item.addtime }}</text
            ><text style="margin-left: 20rpx">{{ item.hour }}</text>
          </view>
          <view class="adver_content">
            <view class="adver_text1">{{ item.title }}</view>
            <view>
              <image :src="item.thumb" mode="scaleToFill" />
            </view>
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
          </view>
        </view>
      </view>
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
        >暂无资讯</text
      >
    </view>
  </view>
</template>

<script>
import { fetchNewsList } from '@/utils/api'
import { useStore } from '@/store'
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
export default {
  data() {
    return {
      // messList: [], // 初始化为空数组
      infoList: [], // 初始化为空数组
      statusBarHeight: '',
      currentPage: 1, // 当前页
      isLoading: false,
    }
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top
    this.loadNoticeList() // 页面加载时调用方法获取公告消息
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
    this.currentPage++
    this.loadNoticeList()
  },
  onPullDownRefresh() {
    this.loadNoticeList()
    uni.stopPullDownRefresh()
  },
  methods: {
    goback() {
      uni.navigateBack()
    },
    async adverbtn(event, index) {
      console.log(event, index)
      const selectedNotice = this.infoList[index] // 获取选中的公告
      console.log(selectedNotice.id)
      uni.navigateTo({
        url: `/pages/pagesall/home/informationDetailsmess?id=${selectedNotice.id}`,
      })
    },
    mycode() {
      uni.navigateTo({
        url: '/pages/pagesall/home/mycode',
      })
    },
    async loadNoticeList() {
      try {
        let store = useStore()
        let data = {
          page: this.currentPage,
          limit: 10,
        }
        let res = await fetchNewsList(data)
        console.log(res)
        this.infoList = [...this.infoList, ...res.items]
        if ((this.infoList.length = res.total)) {
          this.isLoading = true
        }
        store.setInfoList(this.infoList)
      } catch (error) {
        console.error('获取公告消息失败:', error)
      }
    },
  },
}
</script>

<style scoped>
uni-page-body,
html,
body,
uni-page-body {
  padding-bottom: 0 !important;
}
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
  /* min-height: 145vh; */
  /* height: 1624rpx; */
  /* padding-bottom: 1px; */
  background-color: #eeeeee;
  padding: 1px 0;
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
