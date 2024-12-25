<template>
  <view class="codepage">
<<<<<<< HEAD
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
=======
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="code_titlebox">
      <view class="messImg" @click="goback">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
      </view>
      <view class="code_title">
        资讯
      </view>
    </view>

    <view v-if="infoList.length > 0" class="adverbox" v-for="(item,index) in infoList" :key="index">
      <view class="adver_time">
        <view class="adver_hour" style="text-align: center; font-weight: 400;font-size: 20rpx;color: #000000;margin: 28rpx 0 28rpx 0;">
          <text>{{item.month}}</text><text style="margin-left: 20rpx;">{{item.hour}}</text>
        </view>
        <view class="adver_content">
          <view class="adver_text1">{{item.title}}</view>
          <view>
            <image :src="item.thumb" mode="scaleToFill" />
          </view>
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
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    </view>
  </view>
</template>

<script>
<<<<<<< HEAD
import { fetchNewsList } from '@/utils/api';
import { useStore } from '@/store';
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app';
=======
// import { fetchNoticeList } from '@/utils/api'
import { useStore } from '@/store'
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
export default {
  data() {
    return {
      // messList: [], // 初始化为空数组
      infoList: [], // 初始化为空数组
      statusBarHeight: '',
<<<<<<< HEAD
      currentPage: 1, // 当前页
      isLoading: false,
    };
=======
    }
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
    this.loadNoticeList(); // 页面加载时调用方法获取公告消息
  },
<<<<<<< HEAD
  onReachBottom() {
    if (this.isLoading) {
      uni.showToast({
        title: '没有更多数据了',
        icon: 'none',
        duration: 3000,
      });
    }
    if (this.isLoading) return;
    this.currentPage++;
    this.loadNoticeList();
  },
  onPullDownRefresh() {
    this.loadNoticeList();
    uni.stopPullDownRefresh();
  },
  methods: {
    goback() {
      uni.navigateBack();
=======
  methods: {
    goback() {
      uni.navigateBack()
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    },
    async adverbtn(event, index) {
      console.log(event, index);
      const selectedNotice = this.infoList[index]; // 获取选中的公告
      console.log(selectedNotice.id);
      uni.navigateTo({
<<<<<<< HEAD
        url: `/pages/pagesall/home/informationDetailsmess?id=${selectedNotice.id}`,
=======
        url: `/pages/pagesall/home/informationDetailsmess?id=${selectedNotice.id}`
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      });
    },
    mycode() {
      uni.navigateTo({
<<<<<<< HEAD
        url: '/pages/pagesall/home/mycode',
      });
    },
    async loadNoticeList() {
      try {
        let store = useStore();
        let data = {
          page: this.currentPage,
          limit: 10,
        };
        let res = await fetchNewsList(data);
        console.log(res);
        this.infoList = [...this.infoList, ...res.items];
        if ((this.infoList.length = res.total)) {
          this.isLoading = true;
        }
        store.setInfoList(this.infoList);
      } catch (error) {
        console.error('获取公告消息失败:', error);
      }
    },
  },
};
</script>

<style scoped>
uni-page-body,
html,
body,
uni-page-body {
  padding-bottom: 0 !important;
}
=======
        url: "/pages/pagesall/home/mycode"
      })
    },
    async loadNoticeList() {
      try {
        const store = useStore();
        this.infoList = store.infoList;
        console.log('+++++++++++', this.infoList)
      } catch (error) {
        console.error("获取公告消息失败:", error);
      }
    }
  }
}
</script>

<style scoped>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
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
  /* min-height: 145vh; */
  /* height: 1624rpx; */
  /* padding-bottom: 1px; */
  background-color: #eeeeee;
  padding: 1px 0;
=======
  /* height: 1624rpx; */
  padding-bottom: 1px;
  background-color: #eeeeee;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
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
