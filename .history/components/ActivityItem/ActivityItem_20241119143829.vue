<template>
  <!-- Course registration card -->
  <view class="courseRegistrationCard">
    <view class="courseRegistrationCard_bg" :style="{ backgroundColor: (hours === 0 && minutes === 0 && seconds === 0) ? 'gray' : '' }"></view>
    <view class="courseRegistrationCard_status">
      {{ (hours === 0 && minutes === 0 && seconds === 0) ? '已结束' : (online === 1 ? '线上' : '线下') }}
    </view>
    <view class="techerImg">
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41" alt="" />
    </view>
    <view class="courseInformation">
      <view class="courseTitle">{{ biaoti }}</view>
      <view class="courseTeacher">{{ laoshi }}</view>
      <view class="courseTime">开课时间: {{ star }} - {{ end }}</view>
      <view class="lecturerInfo">
        <img :src="hearimg" alt="" />
        <view class="lecturer_name">
          <text>{{ teachername }}</text>
          <text style="font-size: 20rpx; margin-top: 10rpx;">授课</text>
        </view>
        <view class="remainingTime">
          <text style="font-size: 24rpx;">距结束还剩:</text>
          <!-- <view class="timetextbox">
            <text class="time-num">{{ hours }}</text>
            <text style="font-size: 20rpx; background-color:#fff; color: #F53C38;">:</text>
            <text class="time-num">{{ minutes }}</text>
            <text style="font-size: 20rpx; background-color:#fff; color: #F53C38;">:</text>
            <text class="time-num">{{ seconds }}</text>
          </view> -->

          <uni-countdown :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" color="#FFFFFF" background-color="#007AFF" />

        </view>
      </view>
      <view class="endbaoming">
        <view class="peopers">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge82cb54448fe7b82f1100cbe1494f08248762c97952c5f2a8f4b9a26a743a00a" alt="" />
          <view class="peotext" style="font-size: 20rpx;">{{ pers }}人报名</view>
          <view class="imgbox">
            <!-- <img v-for="(img, idx) in imgs" :key="idx" :src="img.avatar" alt="" :style="{ right: (idx * 20) + 'rpx', zIndex: 10 - idx }" /> -->
            <image v-for="(img, idx) in imgs" :src="img.avatar ? img.avatar : ''" :key="idx" :style="{
    position: 'absolute',
    right: `calc(20rpx * ${idx})`,
    zIndex: 10 - idx,
    width: '30rpx',
    height: '30rpx',
    borderRadius: '50%'
  }" />
          </view>
        </view>
        <view class="perbtn">
          <view class="permoney">{{ money ?? 0 <= 0 ? '免费' : '￥' + (money ?? 0) }}</view>

          <view :style="signedUp ? { backgroundColor: '#999999' } : { background: '#ff9e02' }" class="gobtn" @click="handleSignup">{{ signupText }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

import UniCountdown from '@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.vue';
export default {
  components: {
    UniCountdown,


  },
  data() {
    return {
      testHour: 0,
      testMinute: 0,
      testSecond: 0,
      start: false,
    }
  },

  props: {
    online: Number,
    techerimg: String,
    biaoti: String,
    laoshi: String,
    star: String,
    end: String,
    hearimg: String,
    teachername: String,
    hours: Number,
    minutes: Number,
    seconds: Number,
    pers: Number,
    money: String,
    imgs: Array,
    signedUp: Number, // 是否已报名
  },
  computed: {
    signupText() {
      return this.signedUp ? '已报名' : '立即报名';
    }
  },
  mounted() {
    this.updateCountdown();
    // setTimeout(() => {
    //   this.testHour = this.hours
    //   this.testMinute = this.minutes
    //   this.testSecond = this.seconds
    //   this.start = true
    // }, 3000)
    // setTimeout(() => {
    //   this.start = false
    // }, 10000)
    // this.printTime();
  },
  watch: {
    hours: 'updateCountdown',
    minutes: 'updateCountdown',
    seconds: 'updateCountdown',
  },
  methods: {
    printTime() {
      console.log('Hours:', typeof this.hours);
      console.log('Minutes:', typeof this.minutes);
      console.log('Seconds:', typeof this.seconds);
    },
    updateCountdown() {
      this.testHour = this.hours;
      this.testMinute = this.minutes;
      this.testSecond = this.seconds;
      this.start = true; // 可以在此状态中进行其他逻辑，比如开始计时
      // console.log('Counting down:', this.testHour, this.testMinute, this.testSecond);
    },
    handleSignup() {
      // 如果已报名，则可以显示提示
      this.$emit('signup', this);
      // if (this.signedUp) {
      //   uni.showToast({
      //     title: '您已经报名了',
      //     icon: 'none'
      //   });
      // } else {
      //   this.$emit('signup', this); // 发出报名事件
      // }
    }
  }
}
</script>

<style scoped>
.timetextbox {
  display: flex;
  margin-top: 10rpx;
}

.timetextbox text {
  display: block;
  background-color: #f53c38;
  margin-right: 4rpx;
  color: #fff;
}

.courseRegistrationCard {
  margin-top: 16rpx;
  border-radius: 16rpx;
  position: relative;
  background-color: #eeeeee;
  width: 694rpx;
  // height: 466rpx;
  border: 1rpx solid #eeeeee;
}

.techerImg {
  position: absolute;
  right: 0;
  bottom: 15%;
}

.techerImg img {
  width: 240rpx;
  height: 350rpx;
}

.courseRegistrationCard_bg {
  background-color: #ff9e02;
  width: 80rpx;
  height: 80rpx;
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 100%, 100% 0);
  border-radius: 0 20rpx 0 0;
}

.courseRegistrationCard_status {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
  color: #fff;
  transform: rotate(45deg);
  transform-origin: 0 50%;
  font-size: 20rpx;
}

.courseInformation {
  width: 580rpx;
  background: #ffffff;
  box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
  border-radius: 16rpx;
  border: 0rpx solid rgba(0, 0, 0, 0.25);
  padding: 28rpx 0rpx 28rpx 30rpx;
}

.courseTitle {
  font-size: 32rpx;
  font-weight: 500;
}

.courseTeacher {
  font-size: 28rpx;
  color: #333333;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  width: 85%;
}

.courseTime {
  font-size: 24rpx;
  color: #666666;
}

.lecturerInfo {
  display: flex;
}

.lecturerInfo img {
  width: 80rpx;
  height: 80rpx;
}

.lecturer_name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 24rpx;
  margin-left: 20rpx;
  margin-right: 50rpx;
}

.remainingTime {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.imgbox {
  position: relative;
  width: 70rpx;
  height: 30rpx;
}

.imgbox img {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid white;
}

.endbaoming {
  width: 636rpx;
  height: 64rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 58rpx;
  background: linear-gradient(90deg, #ffffff 0%, #f9dcca 100%);
}

.peopers {
  width: 50%;
  display: flex;
  align-items: center;
}

.peotext {
  margin-left: 16rpx;
  margin-right: 16rpx;
}

.perbtn {
  width: 50%;
  position: relative;
}

.courseTitle {
  padding-top: 12rpx;
  padding-bottom: 8rpx;
}

.courseTime {
  padding-top: 16rpx;
  padding-bottom: 28rpx;
}

.permoney {
  color: #f53c38;
  font-size: 28rpx;
}

.gobtn {
  width: 232rpx;
  height: 80rpx;
  background: #ff9e02;
  border-radius: 0rpx 200rpx 200rpx 50rpx;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -60%;
  right: -5%;
  transform: skewX(-15deg);
  cursor: pointer;
}

.timetextbox {
  display: flex;
  margin-top: 10rpx;
}

.timetextbox text {
  display: block;
  background-color: #f53c38;
  margin-right: 4rpx;
  color: #fff;
}
</style>