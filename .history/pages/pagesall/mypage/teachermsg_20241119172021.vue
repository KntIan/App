<template>
  <view class="mess_Title">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="messImg" @click="teacher_goback">
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
    </view>
    <view class="title_text">
      我的老师
    </view>
    <view class="title_img">
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng321758fb81a047a63eed79ffbd8a9de39b6d95d0adc9749329922655c760bb3a" alt="" @click="mycode" />
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5e1b57899cb5b9cd47a8d4e301f4f736efd47c45ca7713a43d00721e94370714" alt="" />
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng60de4c6690251e592eeb3edf5e89b8b74e18a9d17717d9949db1edcb3fcd23bd" alt="" />
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

.title_img img {
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