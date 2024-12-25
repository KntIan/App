<template>
  <view>
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <TUIContact />
  </view>
</template>

<script>
import TUIContact from '../../../TUIKit/components/TUIContact/index.vue';

export default {
  components: { TUIContact },
  data() {
    return {
      statusBarHeight: '',
      btnyes: true,
      input_text: '',
      friends_List: [],
    };
  },
  onLoad(options) {
    // const userId = options.user_id
    // console.log('接收到的用户ID：', userId)
    this.statusBarHeight = getApp().globalData.top;
  },
  methods: {
    input_search(event) {
      console.log(event.detail.value);
      this.input_text = event.detail.value;
      if (this.input_text == '') {
        this.btnyes = true;
      } else if (this.input_text != '') {
        this.btnyes = false;
      }
    },
    add_friend() {
      uni.navigateTo({
        url: '/pages/pagesall/home/add_friend',
      });
    },
    cancel_lation() {
      uni.navigateBack();
    },
  },
};
</script>

<style>
.btnbox {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 14rpx;
  margin-bottom: 80rpx;
}

.input1 {
  width: 540rpx;
  height: 80rpx;
  background: #eeeeee;
  border-radius: 40rpx;
  font-weight: 400;
  font-size: 28rpx;
  color: #666666;
  padding-left: 80rpx;
}

.btn {
  font-weight: 400;
  font-size: 28rpx;
  color: #666666;
  margin-left: 20rpx;
}

.btns_img {
  position: absolute;
  left: 10%;
  top: 35%;
}

.friendsbox_img {
  width: 88rpx;
  height: 88rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.friendsbox {
  padding: 20rpx;
  display: flex;
  justify-content: space-between;
}

.friends_text1 {
  font-weight: 500;
  font-size: 28rpx;
  color: #000000;
}

.friends_text2 {
  font-weight: 400;
  font-size: 16rpx;
  color: #000000;
}

.friends_text3 {
  width: 160rpx;
  height: 64rpx;

  background: #5791f2;
  border-radius: 32rpx;
  font-weight: 500;
  font-size: 28rpx;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.friendsbox2 {
  display: flex;
  align-items: center;
}

.friendsinter {
  margin-left: 28rpx;
}
</style>
