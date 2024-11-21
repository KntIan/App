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
        <image style="width: 36rpx;height: 36rpx;" src="../../../static/img/scan.png" mode="aspectFit" />
        <image style="width: 36rpx;height: 36rpx;" src="../../../static/img/saoma.png" mode="aspectFit" @click="btnscan" />
        <image style="width: 36rpx;height: 36rpx;" src="../../../static/img/sousuo.png" mode="aspectFit" />
      </view>
    </view>

    <msglist :msgList="myteacher_List" />
  </view>
</template>

<script>
import msglist from './compontents/msglist.vue';
import { fetchMyTeacher } from '@/utils/api'
export default {
  components: {
    msglist
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
      myteacher_List: null
    }
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
  mounted() {
    this.loadTeacherMessages(); // 在组件挂载时加载数据
  },
  methods: {
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