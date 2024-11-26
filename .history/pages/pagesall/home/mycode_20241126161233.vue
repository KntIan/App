<template>
  <view class="codepage">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>

    <view class="code_titlebox">
      <view class="messImg" @click="goback">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge1553c1d8d43568ee582b54f1deab731573c8804790b09e299c2e73eda1cfa68"
          alt=""
        />
      </view>
      <view class="code_title"> 分享二维码 </view>
    </view>

    <view class="code_codebox">
      <view class="code_img">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcd993bafb56f0fa9ca43f6a3a3f5885980722e955fcc6ed400fa9b64a364b72e"
          alt=""
        />
      </view>

      <view class="code_titileimg">
        <img
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/a1f75ab65caa4ac6afc5909f8472ecba_mergeImage.png"
          alt=""
        />
        <view class="code_name">
          <view style="font-weight: 500; font-size: 28rpx; color: #000000"
            >刘易阳的二维码</view
          >
          <view
            style="
              font-weight: 400;
              font-size: 16rpx;
              color: #666666;
              margin-top: 10rpx;
            "
            >分享给老师们加个好友吧
          </view>
        </view>
      </view>

      <view class="code_codeimg">
        <img
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdec58e091c33964c716ceeb24df93a33629b032a848ee6ada66281e68aeaa069"
          alt=""
        />
      </view>
    </view>
    <view class="code_baocun">
      <img
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga09d8270200e68c37da10c6fc926c63f90e314b103034a125a42216d2610bbbf"
        alt=""
      />
      <text>保存到手机</text>
    </view>
  </view>
</template>

<script>
import { generateQRCode } from '@/utils/api'
export default {
  data() {
    return {
      statusBarHeight: '',
    }
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top
  },
  mounted() {
    this.generateCode()
  },
  methods: {
    async generateCode() {
      let param = {
        params: uni.getStorageSync('user_id'),
      }
      const res = await generateQRCode(param)
      console.log(res)
      // this.codeUrl = res.data.url
    },
    goback() {
      uni.navigateBack()
    },
    mycode() {
      uni.navigateTo({
        url: '/pages/pagesall/home/mycode',
      })
    },
  },
}
</script>

<style>
.codepage {
  background-color: #ff9e02;
  width: 750rpx;
  height: 1624rpx;
}

.code_titlebox {
  position: relative;
  padding: 30rpx;
}

.messImg {
  position: absolute;
  background-color: ;
}

.code_title {
  text-align: center;
  font-weight: 500;
  font-size: 36rpx;
  color: #ffffff;
}

.code_codebox {
  width: 556rpx;
  height: 640rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2f44e9201c59e30551b904da05df9e722aa6c7cb73f8bbacb51e09e0cd9aa9a8)
    100% no-repeat;
  background-size: 100% 100%;
  margin: 176rpx 0 0 98rpx;
  position: relative;
}

.code_img {
  position: absolute;
  top: 23%;
  left: 50%;
  transform: translate(-50%);
}

.code_baocun {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  height: 80rpx;
  width: 360rpx;
  margin: 128rpx 0 354rpx 196rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.code_baocun img {
  margin-right: 10rpx;
}

.code_titileimg {
  width: 300rpx;
  height: 88rpx;
  display: flex;
  align-items: center;
  position: absolute;
  top: 5%;
  left: 5%;
}

.code_name {
  margin-left: 15rpx;
}

.code_codeimg {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}

.code_codeimg img {
  width: 450rpx;
  height: 450rpx;
}
</style>
