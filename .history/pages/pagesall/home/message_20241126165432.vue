<template>
  <view>
    <view class="container">
      <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>

      <view class="mess_Title">
        <view class="messImg" @click="goback">
          <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
            alt=""
          />
        </view>
        <view class="title_text"> 消息 </view>
        <view class="title_img">
          <image
            style="width: 36rpx; height: 36rpx"
            src="../../../static/img/scan.png"
            mode="aspectFit"
            @click="mycode"
          />
          <image
            style="width: 36rpx; height: 36rpx"
            src="../../../static/img/saoma.png"
            mode="aspectFit"
            @click="btnscan"
          />
          <image
            style="width: 36rpx; height: 36rpx"
            src="../../../static/img/sousuo.png"
            mode="aspectFit"
            @click="btnsearch"
          />
        </view>
      </view>

      <view class="messbox" @click="messgoback">
        <view class="messbox2">
          <view class="messbox_img">
            <img
              src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd6279aab531ef9632e4b587c47bd1b290e34249129eb3b24c940e727cb528bd0"
              alt=""
            />
          </view>
          <view class="messinter">
            <view class="inter_text1"> 公告消息 </view>
            <!-- <view class="inter_text2"> 书法比赛将在2024年7月15号开始… </view> -->
          </view>
        </view>

        <!-- <text class="inter_text3">6-15</text> -->
      </view>

      <!-- <MessageList :messages="messages" @click="goToChat" /> -->
      <view class="group_group" style="height: 130rpx">
        <TUIChat1 />
      </view>
    </view>
    <view style="width: 100%; height: 16rpx; background: #eeeeee"></view>
    <view class="container">
      <!-- <MessageList :messages="messagesList" /> -->
      <TUIChat />
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MessageList from '@/components/MessageList/MessageList'
import TUIChat from '../../../TUIKit/components/TUIConversation/index.vue'
import TUIChat1 from '../../../TUIKit/components/TUIConversation/index1.vue'
import Avatar from '../../../TUIKit/components/common/Avatar/index.vue'
// 在组件挂载时获取存储的 conversationList1
// onMounted(() => {
//   uni.getStorage({
//     key: 'conversationList1', // 本地存储的键
//     success: function (res) {
//       console.log('Retrieved conversationList1: ', res.data);
//       // 将获取的 conversationList1 赋值给 messages
//       conversationList1.value = res.data || []; // 确保赋值的是数组，若没有找到则默认赋值为空数组
//     },
//     fail: function () {
//       console.error('Failed to retrieve conversationList1.');
//     }
//   });
// });
import { onLoad } from '@dcloudio/uni-app'
const statusBarHeight = ref()
onLoad(() => {
  statusBarHeight.value = getApp().globalData.top
})

const conversationList1 = ref([
  {
    avatar:
      'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc16f5b5f9c443120840c9f3ff8028109651b9e21de9ee0d18951c54acb7132e8',
    title: '书法一班群聊',
    subtitle: '刘易阳王老师你号啊',
    time: '6-15',
    color: '#5791F2',
  },
  {
    avatar:
      'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc16f5b5f9c443120840c9f3ff8028109651b9e21de9ee0d18951c54acb7132e8',
    title: '书法二班群聊',
    subtitle: '刘易阳王老师你号啊',
    time: '6-15',
    color: '#5791F2',
  },
  // 更多假数据
])

const messagesList = ref([
  {
    avatar:
      'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3c05227c15cc3e583fbe8af777d512ad3c5dd22f9540376effbda59a5f162710',
    title: '公告消息',
    subtitle: '书法比赛将在2024年7月15号开始...',
    time: '6-15',
    size: '88rpx',
  },
  // 更多假数据
])

const navigateTo = (url) => {
  // 错误处理机制
  try {
    uni.navigateTo({ url })
  } catch (error) {
    console.error('导航失败:', error)
    uni.showToast({ title: '导航失败，请重试', icon: 'none' })
  }
}
const btnsearch = () => {
  uni.navigateTo({
    url: '/pages/pagesall/home/search',
  })
}
const goback = () => {
  uni.switchTab({ url: '/pages/pagesall/home' }) // 修改为实际的 tabBar 首页路径
}

const btnscan = () => {
  uni.scanCode({
    success: async (res) => {
      // console.log('条码类型：' + res.scanType)
      // console.log('条码内容：' + res.result)
      const userIdMatch = res.result.match(/user_id=(\d+)/)
      if (userIdMatch) {
        let user_id = userIdMatch[1] // 获取提取的 user_id 值

        let params = {
          user_id: user_id,
        }
        uni.setStorageSync('params', params) // 存入本地缓存
      } else {
        console.log('未找到用户ID参数')
      }

      uni.navigateTo({
        url: '/pages/pagesall/home/search',
      })
    },
    fail: (error) => {
      console.error('扫码失败', error)
      uni.showToast({
        title: '扫码失败',
        icon: 'error',
        duration: 2000,
      })
    },
  })
}
const mycode = () => navigateTo('/pages/pagesall/home/mycode')
const messgoback = () => navigateTo('/pages/pagesall/home/adverMess')
</script>

<style scoped>
.container {
  padding: 28rpx;
}

.mess_Title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx;
}

.title_text {
  margin-left: 90rpx;
}

.title_img image {
  margin-left: 25rpx;
  width: 32rpx;
  height: 32rpx;
}

.messbox {
  padding-top: 8rpx;
  padding-bottom: 28rpx;
  display: flex;
  justify-content: space-between;
}

.inter_text1 {
  font-weight: 500;
  font-size: 32rpx;
  color: #000000;
}

.inter_text2 {
  font-weight: 400;
  font-size: 24rpx;
  color: #666666;
  margin-top: 8rpx;
}

.inter_text3 {
  font-weight: 500;
  font-size: 20rpx;
  color: #000000;
}

.messbox2 {
  display: flex;
  align-items: center;
}

.messinter {
  margin-left: 30rpx;
}

.messbox_img {
  width: 88rpx;
  height: 88rpx;
  background-color: #ff9e02;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.messbox_img img {
  width: 48rpx;
  height: 48rpx;
}
.group_group .kong {
  height: 100% !important;
}
</style>
