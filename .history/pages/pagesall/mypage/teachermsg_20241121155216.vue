<template>
  <view>
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="mess_Title">

      <view class="messImg" @click="teacher_goback">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
      </view>
      <view class="title_text">
        我的老师
      </view>
      <view class="title_img">
        <image style="width: 36rpx;height: 36rpx;" src="../../../static/img/scan.png" mode="aspectFit" @click="mycode" />
        <image style="width: 36rpx;height: 36rpx;" src="../../../static/img/saoma.png" mode="aspectFit" @click="btnscan" />
        <image style="width: 36rpx;height: 36rpx;" src="../../../static/img/sousuo.png" mode="aspectFit" @click="btnsearch" />
      </view>
    </view>

    <!-- <view v-if="myteacher_List.length>0">
      <msglist :msgList="myteacher_List" />
    </view> -->
    <view style="padding: 28rpx;" class="container">
      <!-- <MessageList :messages="messagesList" /> -->
      <TUIChat v-if="teacherListLength.data._value.length>0" @updateConversationListLengthTeachers="handleLengthUpdateTeachers" />
      <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 100vh;">
        <image style="margin-top: -600rpx;" src="@/static/img/noTea.png" mode="aspectFit" />
      </view>
    </view>
    <!-- <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;">
      <image style="width:400rpx;height: 400rpx;" src="@/static/img/noTea.png" mode="aspectFit" />
    </view> -->

  </view>
</template>

<script>
import msglist from './compontents/msglist.vue';
import { fetchMyTeacher } from '@/utils/api'

import TUIChat from "@/TUIKit/components/TUIConversation/index.vue";
export default {
  components: {
    msglist,
    TUIChat
  },
  data() {
    return {
      statusBarHeight: '',
      // myteacher_List: [{
      //   className: '书法一班刘老师',
      //   massage: '刘易阳:王老师你教的真好啊',
      //   head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      // },
      // {
      //   className: '书法一班刘老师',
      //   massage: '刘易阳:王老师你教的真好啊',
      //   head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      // },
      // {
      //   className: '书法一班刘老师',
      //   massage: '刘易阳:王老师你教的真好啊',
      //   head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      // },
      // {
      //   className: '书法一班刘老师',
      //   massage: '刘易阳:王老师你教的真好啊',
      //   head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      // },
      // {
      //   className: '书法一班刘老师',
      //   massage: '刘易阳:王老师你教的真好啊',
      //   head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      // }]
      myteacher_List: [],
      teacherListLength: null,
    }
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
    this.teacherListLength = JSON.parse(uni.getStorageSync('teacherListLength'))
    console.log('+5+5+5+5+', this.teacherListLength)
    console.log('+5+5+5+5+66', uni.getStorageSync('teacherListLength'))
  },
  mounted() {
    this.loadTeacherMessages(); // 在组件挂载时加载数据
  },
  methods: {
    handleLengthUpdateTeachers(length) {
      conversationListLengthTeachers.value = length; // 更新长度信息
    },
    btnsearch() {
      uni.navigateTo({
        url: '/pages/pagesall/home/search'
      })
    },
    mycode() {
      uni.navigateTo({
        url: '/pages/pagesall/home/mycode'
      })
    },
    btnscan() {
      uni.scanCode({
        success: (res) => {
          console.log('条码类型：' + res.scanType)
          console.log('条码内容：' + res.result)
        },
        fail: (error) => {

          uni.showToast({
            title: error.errMsg || '扫码失败',
            icon: 'none',
            duration: 2000
          })
        },
      })
    },
    async loadTeacherMessages() {
      try {
        const response = await fetchMyTeacher(); // 调用 API 请求
        this.myteacher_List = response.items || []; // 更新数据
        console.log('教师信息:', this.myteacher_List); // 打印获取的数据
      } catch (error) {
        console.error('获取教学消息失败:', error); // 错误处理
      }
    },
    teacher_goback() {
      uni.navigateBack()
    }
  },
}
</script>

<style>
.class-group {
  width: 750rpx;
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

.classbox_img {
  width: 88rpx;
  height: 88rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
</style>