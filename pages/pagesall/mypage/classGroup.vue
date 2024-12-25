<template>
  <view class="class-group">
<<<<<<< HEAD
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="mess_Title">
      <view class="messImg" @click="goback">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
          alt=""
        />
      </view>
      <view class="title_text"> 班级群 </view>
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
        />
=======
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="mess_Title">
      <view class="messImg" @click="goback">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
      </view>
      <view class="title_text">
        班级群
      </view>
      <view class="title_img">
        <image style="width: 36rpx;height: 36rpx;" src="../../../static/img/scan.png" mode="aspectFit" @click="mycode" />
        <image style="width: 36rpx;height: 36rpx;" src="../../../static/img/saoma.png" mode="aspectFit" @click="btnscan" />
        <image style="width: 36rpx;height: 36rpx;" src="../../../static/img/sousuo.png" mode="aspectFit" />
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        <!-- <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng321758fb81a047a63eed79ffbd8a9de39b6d95d0adc9749329922655c760bb3a" alt="" @click="mycode" />
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5e1b57899cb5b9cd47a8d4e301f4f736efd47c45ca7713a43d00721e94370714" alt="" />
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng60de4c6690251e592eeb3edf5e89b8b74e18a9d17717d9949db1edcb3fcd23bd" alt="" /> -->
      </view>
    </view>

    <!-- <msglist :msgList="class_List"/> -->
<<<<<<< HEAD
    <view style="padding: 0 28rpx">
      <TUIChat1 />
    </view>
=======
    <view style="padding: 0 28rpx;">
      <TUIChat1 />

    </view>

>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  </view>
</template>

<script>
// import msglist from './compontents/msglist.vue';
<<<<<<< HEAD
import TUIChat1 from '../../../TUIKit/components/TUIConversation/index1.vue';
export default {
  components: {
    TUIChat1,
=======
import TUIChat1 from "../../../TUIKit/components/TUIConversation/index1.vue";
export default {
  components: {
    TUIChat1
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  },
  data() {
    return {
      classGroupListListLength: null,
      statusBarHeight: '',
<<<<<<< HEAD
    };
=======
      // class_List: [{
      //   className: '书法一班班级群',
      //   massage: '刘易阳:王老师你教的真好啊',
      //   head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      // },
      // {
      //   className: '书法二班班级群',
      //   massage: '刘易阳:王老师你教的真好啊',
      //   head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      // },
      // {
      //   className: '书法三班班级群',
      //   massage: '刘易阳:王老师你教的真好啊',
      //   head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      // },
      // {
      //   className: '书法四班班级群',
      //   massage: '刘易阳:王老师你教的真好啊',
      //   head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      // },
      // {
      //   className: '书法五班班级群',
      //   massage: '刘易阳:王老师你教的真好啊',
      //   head: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png'
      // }]
    }
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
  methods: {
    mycode() {
      uni.navigateTo({
<<<<<<< HEAD
        url: '/pages/pagesall/home/mycode',
      });
    },

    goback() {
      uni.navigateBack();
    },
    btnscan() {
      uni.scanCode({
        success: async (res) => {
          // console.log('条码类型：' + res.scanType)
          console.log('条码内容：' + res.result);

          const userIdMatch = res.result.match(/user_id=(\d+)/);
          const typeMatch = res.result.match(/type=(\d+)/);
          console.log(userIdMatch);
          console.log(typeMatch);

          if (userIdMatch) {
            let user_id = userIdMatch[1]; // 获取提取的 user_id 值
            console.log(user_id);
            let params = {
              user_id: user_id,
            };
            uni.setStorageSync('params', params); // 存入本地缓存
          } else {
            console.log('未找到用户ID参数');
          }

          if (typeMatch) {
            let type = typeMatch[1]; // 获取提取的 type 值
            console.log(type);
            switch (type) {
              case '1':
                uni.navigateTo({
                  url: '/pages/pagesall/home/search', // 加好友页面
                });
                break;
              case '2':
                const urlMatch = res.result.match(/type=2\|(.*)/);
                if (urlMatch && urlMatch[1]) {
                  const url = urlMatch[1];
                  console.log('截取到的 URL:', url);

                  // 处理 URL，例如跳转到双师课堂页面并传递 URL 参数
                  uni.navigateTo({
                    url: `/pages/pagesall/course/golearn?url=${url}`, // 双师课堂页面
                  });
                }

                break;
              case '3':
                uni.navigateTo({
                  url: '/pages/pagesall/home/recentCourse', // 近期课程页面
                });
                break;
              default:
                console.log('未知的 type 值');
                uni.navigateTo({
                  url: '/pages/pagesall/home/search', // 默认跳转页面
                });
            }
          } else {
            console.log('未找到 type 参数');
            uni.navigateTo({
              url: '/pages/pagesall/home/search', // 默认跳转页面
            });
          }
        },

        fail: (error) => {
          console.error('扫码失败', error);
          uni.showToast({
            title: '扫码失败',
            icon: 'error',
            duration: 2000,
          });
        },
      });
    },
  },
};
=======
        url: '/pages/pagesall/home/mycode'
      })
    },

    goback() {
      uni.navigateBack()
    }
  }
}
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
