<template>
<<<<<<< HEAD
  <view>
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="code_page">
      <!-- <view style="text-align: center; font-size: 36rpx"> 资讯详情 </view> -->
      <view class="code_titlebox">
        <!-- <view class="messImg" @click="goback">
          <img
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94"
            alt=""
          />
        </view> -->
        <view class="code_title">
          {{ selectedMessage.title }}
        </view>
      </view>

      <view class="detail_title">
        <text
          style="
            font-weight: 500;
            font-size: 32rpx;
            color: #000000;
            width: 70%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          "
        ></text>
        <view class="detail_time">
          <view class="time_1">
            {{ selectedMessage.addtime }}
          </view>
          <!-- <view class="time_2">
          {{mours}}
        </view> -->
        </view>
      </view>
      <div class="detail_box" v-html="selectedMessage.content"></div>
    </view>
=======
  <view class="code_page">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="code_titlebox">
      <view class="messImg" @click="goback">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94" alt="" />
      </view>
      <view class="code_title">
        {{selectedMessage.title}}
      </view>
    </view>

    <view class="detail_title">
      <text style="font-weight: 500;font-size: 32rpx;color: #000000;width:70%;overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;"></text>
      <view class="detail_time">
        <view class="time_1">
          {{selectedMessage.addtime}}
        </view>
        <!-- <view class="time_2">
          {{mours}}
        </view> -->
      </view>
    </view>
    <div class="detail_box" v-html="selectedMessage.content"></div>

>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  </view>
</template>

<script>
<<<<<<< HEAD
import { useStore } from '@/store';
=======
import { useStore } from '@/store'
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
export default {
  data() {
    return {
      messageList: [], // 存储消息列表
      selectedMessage: null, // 存储选中的公告
      statusBarHeight: '',
<<<<<<< HEAD
    };
=======
    }
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  },
  onLoad(options) {
    this.statusBarHeight = getApp().globalData.top;
    const store = useStore(); // 获取 Pinia Store

    this.messageList = store.infoList; // 从 Store 中获取 messageList 并赋值

    const messageId = options.id; // 获取传入的公告 ID

<<<<<<< HEAD
    this.selectedMessage = this.messageList.find(
      (message) => message.id.toString() === messageId.toString()
    ); // 查找对应 ID 的公告

    console.log(this.selectedMessage);
  },
  methods: {
    goback() {
      uni.navigateBack();
    },
  },
};
=======

    this.selectedMessage = this.messageList.find(message => message.id.toString() === messageId.toString()); // 查找对应 ID 的公告

    console.log(this.selectedMessage)
  },
  methods: {
    goback() {
      uni.navigateBack()
    },
  }
}
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
</script>

<style>
.code_page {
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
<<<<<<< HEAD
  text-align: left;
  font-weight: 500;
  font-size: rpx;
=======
  text-align: center;
  font-weight: 500;
  font-size: 36rpx;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  color: #000;
}

.detail_title {
  padding-right: 30rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail_time {
  display: flex;
}

.time_1 {
  margin-right: 10rpx;
  font-weight: 400;
  font-size: 20rpx;
  color: #000000;
}

.time_2 {
  font-weight: 400;
  font-size: 20rpx;
  color: #000000;
}

.detail_box {
  text-indent: 2em;
  padding: 0 30rpx 0 30rpx;
  font-weight: 400;
<<<<<<< HEAD

  color: #666666;
}
::v-deep.detail_box div {
  font-size: 28rpx !important;
}
::v-deep.detail_box img {
  width: 100% !important;
}
</style>
=======
  font-size: 24rpx;
  color: #666666;
}
</style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
