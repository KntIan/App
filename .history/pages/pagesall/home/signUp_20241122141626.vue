<template>
  <view style="overflow-x: hidden;">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="homePage">

      <swiper v-if="images.length" class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true" indicator-color="#ddd" indicator-active-color="#333">
        <swiper-item v-for="(item, index) in images" :key="index">
          <image :src="item.thumb" class="swiper-image"></image>
        </swiper-item>
      </swiper>

      <!-- 活动 -->
      <view class="actiClass" v-if="matchedDetails">
        <view class="actitme">
          <!-- <view class="linetext"></view> -->
          <!-- <view class="linetext1">{{
          item.is_online === 1 ? '线上' : '线下'
        }}</view> -->
          <view class="techerImg" style="width:192rpx;height:176rpx;border-radius: 8rpx;">
            <!-- <img :src="item.avatar" alt="" /> -->
            <img style="width: 100%;height:100%" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41" alt="" />
          </view>
          <view class="listindex">
            <view class="actitmeText1">{{ matchedDetails.title }}</view>
            <view class="actitmeText2">计划人数：{{ matchedDetails.planum || 20}}人</view>
            <!-- <view class="actitmeText3">开课时间:{{ formatDate(item.s_time) }} -
            {{ formatDate(item.e_time) }}</view> -->
            <view class="actImg">

              <img :src="matchedDetails.teacher_avatar" alt="" />
              <view class="actTeacher">
                <text>{{ matchedDetails.teacher_name }}</text>
                <text style="font-size: 20rpx; margin-top: 10rpx">授课</text>
              </view>
              <view class="acttime">
                <text style="font-size: 24rpx">距结束还剩:</text>

                <uni-countdown :show-day="false" :hour="testHour" :minute="testMinute" :second="testSecond" color="#FFFFFF" background-color="#007AFF" />

              </view>
            </view>
            <view class="endbaoming">
              <view class="peopers">
                <image style="width: 24rpx;height: 32rpx;" src="../../../static/img/fir.png" mode="aspectFit" />

                <view class="peotext" style="font-size: 20rpx">{{ matchedDetails.signup_member.total }}人报名</view>
                <view class="imgbox">
                  <image v-for="(img, idx) in matchedDetails.signup_member.items" :src="img.avatar ? img.avatar : ''" :key="idx" :style="{
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
                <view class="permoney">
                  {{ matchedDetails.price <= 0 ? '免费' : '￥' + item.price }}
                </view>
                <view class="gobtn" @click="btnsignup" :style="matchedDetails.hadSignup ? { backgroundColor: '#999999' } : { background: '#ff9e02' }">
                  {{ matchedDetails.hadSignup ? '已报名' : '立即报名' }}
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="eventDetails">
        <view class="detaTitle">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng771a065a39e551cb80b0755732dcaf20cc3ae52e9d4ee72c3e9f6c9d414f07cb" alt="" />
          <text class="detaText">活动详情</text>
        </view>
        <div class="detaxiangqing" v-if="matchedDetails" v-html="matchedDetails.content">
        </div>
        <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;">
          <image style="width:400rpx;height: 400rpx;" src="@/static/img/noAct.png" mode="aspectFit" />
        </view>

      </view>
    </view>
  </view>
</template>

<script>
import { useStore } from '@/store'
import UniCountdown from '@dcloudio/uni-ui/lib/uni-countdown/uni-countdown.vue';
import { signUpActivity, fetchActivityCourseList } from '@/utils/api'
export default {
  data() {
    return {

      intervalId: null, // 保存计时器ID
      activityId: null, //
      options: null,

      testHour: 1,
      testMinute: 0,
      testSecond: 0,
      start: false,
      timeupSecond: 10,
      statusBarHeight: '',
      matchedDetails: null,

    }
  },
  computed: {
    images() {
      const store = useStore()
      return store.images // 从 Pinia 存储中获取 images
    },
    listdata() {
      const store = useStore()
      return store.listdata // 从 Pinia 存储中获取 listdata
    },
  },
  mounted() {
    this.details() // 获取活动详情
    // setTimeout(() => {
    //   this.testHour = 1
    //   this.testMinute = 1
    //   this.testSecond = 0
    //   this.start = true
    // }, 3000)
    // setTimeout(() => {
    //   this.start = false
    // }, 10000)
  },

  onLoad(options) {

    this.statusBarHeight = getApp().globalData.top;
    // console.log(options)
    this.activityId = options.id; // 假设路由中有一个参数id
    this.options = options;
    // console.log('活动ID:', this.activityId);
    // this.startCountdown() // 开始倒计时

  },
  onUnload() {
    // this.stopCountdown() // 页面卸载时停止倒计时
  },

  methods: {
    async details() {
      try {
        let details = await fetchActivityCourseList(this.options);
        // console.log('活动详情:', details);

        // 假设 details 是一个数组，找到匹配的活动ID
        const matchedDetail = details.items.find(detail => detail.id === Number(this.activityId));



        // 打印匹配的活动详情
        if (matchedDetail) {

          this.matchedDetails = matchedDetail
          // console.log('匹配的活动详情:', matchedDetail);

          this.updateCountdown();
        } else {
          console.log('未找到对应的活动详情');
        }
      } catch (error) {
        console.error('获取活动详情失败:', error);
      }
    },

    timeup() {
      uni.showToast({
        title: '时间到'
      })
      this.timeupSecond = 29
    },
    formatTime(value) {
      // 确保时间总是两位数
      return value.toString().padStart(2, '0')
    },
    updateCountdown() {
      const currentDateTimestampInMilliseconds = new Date().getTime();
      const now = Math.floor(currentDateTimestampInMilliseconds / 1000);

      // 确保 matchedDetails 存在并且包含 end_time
      if (this.matchedDetails && !isNaN(this.matchedDetails.end_time)) {
        const timeDiff = this.matchedDetails.end_time - now;
        if (timeDiff > 0) {

          this.testHour = Math.floor(timeDiff / 3600);
          this.testMinute = Math.floor((timeDiff % 3600) / 60);
          this.testSecond = timeDiff % 60;
        } else {
          this.testHour = this.testMinute = this.testSecond = 0; // 时间到达
        }
      } else {
        // console.warn('matchedDetails 无效，无法更新倒计时');
        this.testHour = this.testMinute = this.testSecond = 0; // 处理无效时间
      }
    },

    async btnsignup() {
      // 从本地存储获取用户 ID
      const store = useStore()
      const { user_id } = store.userinfo // 假设用户 ID 存储在 'userId' 下



      // 检查用户 ID 和活动 ID 是否存在
      if (!user_id) {
        uni.showToast({
          title: '用户未登录，请先登录',
          icon: 'none'
        });
        return;
      }

      if (!this.activityId) {
        uni.showToast({
          title: '活动 ID 不存在',
          icon: 'none'
        });
        return;
      }
      // 检查活动是否已结束

      if (this.testHour === 0 && this.testMinute === 0 && this.testSecond === 0) {
        uni.showToast({
          title: '活动已结束',
          icon: 'none'
        });
        return;
      }
      // 调用封装的 signUpActivity 方法
      try {
        const response = await signUpActivity({ user_id: user_id, activity_id: Number(this.activityId) });

        if (response.code === 1) {
          uni.showToast({
            title: response.msg || '报名成功',
            icon: 'success',
            duration: 2000
          });
          if (this.matchedDetails) {
            // 假设 you want to set hadSignup to true
            this.matchedDetails.hadSignup = true;

          } else {
            console.log('matchedDetails 尚未加载');
          }
          const courseListResponse = await fetchActivityCourseList(this.options);


        } else {
          uni.showToast({
            title: response.msg || '报名失败，请重试',
            icon: 'error',
            duration: 2000
          });
        }

      } catch (error) {
        console.error('报名失败:', error);
      }
    }
  },
}
</script>

<style lang="scss">
.homePage {
  padding: 15rpx 20rpx 15rpx 20rpx;
}

.time_textbox {
  display: flex;
  margin-top: 10rpx;
}

.time_textbox text {
  display: block;
  background-color: #f53c38;
  margin-right: 4rpx;
  color: #fff;
}

.swiper-container {
  width: 710rpx;
  height: 320rpx;
  padding: 30rpx 0 30rpx 0;
}

.swiper-image {
  width: 710rpx;
  height: 320rpx;
}

.act_itme {
  margin-top: 16rpx;
  border-radius: 16rpx;
  position: relative;
}

.techer_Img {
  position: absolute;
  right: 5%;
  bottom: 30%;
}

.techer_Img img {
  width: 192rpx;
  height: 176rpx;
  border-radius: 8rpx;
}

.linetext {
  background-color: #ff9e02;
  width: 80rpx;
  height: 80rpx;
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 100%, 100% 0);
  border-radius: 0 20rpx 0 0;
}

.linetext1 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
  color: #fff;
  transform: rotate(45deg);
  transform-origin: 0 50%;
  font-size: 20rpx;
}

.list_index {
  width: 580rpx;
  background: #ffffff;

  border-radius: 16rpx;
  border: 0rpx solid rgba(0, 0, 0, 0.25);
  padding: 28rpx 0rpx 28rpx 30rpx;
}

.actitme_Text1 {
  font-weight: 800;
  font-size: 36rpx;
  color: #000000;
}

.actitmeText2 {
  font-size: 28rpx;
  color: #333333;
}

.actitmeText3 {
  font-size: 24rpx;
  color: #666666;
}

.act_Img {
  display: flex;
}

.act_Img img {
  width: 80rpx;
  height: 80rpx;
}

.act_Teacher {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 24rpx;
  margin-left: 20rpx;
  margin-right: 50rpx;
}

.act_time {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.img_box {
  position: relative;
  width: 70rpx;
  height: 30rpx;
}

.img_box img {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid white;
}

.end_baoming {
  width: 636rpx;
  height: 64rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 38rpx;
  background: linear-gradient(90deg, #ffffff 0%, #f9dcca 100%);
}

.peo_pers {
  width: 50%;
  display: flex;
  align-items: center;
}

.peo_text {
  margin-left: 16rpx;
  margin-right: 16rpx;
}

.perbtn {
  width: 50%;
  position: relative;
}

.actitme_Text1 {
  padding-top: 12rpx;
  padding-bottom: 8rpx;
}

.actitmeText3 {
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
}

.planumber {
  font-weight: 400;
  font-size: 24rpx;
  color: #666666;
  padding: 22rpx 0 12rpx 0;
}

.quenumber {
  font-weight: 400;
  font-size: 24rpx;
  color: #666666;
  padding: 0rpx 0 12rpx 0;
}

.detaTitle {
  display: flex;
  align-items: center;
}

.detaText {
  margin-left: 12rpx;
  font-weight: 500;
  font-size: 32rpx;
  color: #000000;
}

.eventDetails {
  background: #ffffff;
  border-radius: 16rpx;
  border: 0rpx solid rgba(0, 0, 0, 0.25);
  padding: 28rpx 30rpx 28rpx 30rpx;
}

.detaxiangqing {
  font-weight: 400;
  font-size: 24rpx;
  color: #666666;
  text-indent: 2em;
  padding-top: 16rpx;
  line-height: 34rpx;
}

.titleHome {
  display: flex;
  justify-content: space-between;
}

.nameId {
  width: 42%;
  display: flex;
  align-items: flex-start;
}

.timetextbox {
  display: flex;
  margin-top: 10rpx;

  text {
    display: block;
    background-color: #f53c38;
    margin-right: 4rpx;
    color: #fff;
  }
}

.name {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 16rpx;
  // margin-right: 16rpx;
}

.buttonImg {
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.textname {
  font-size: 28rpx;
}

.textid {
  font-size: 16rpx;
}

.classID {
  font-size: 16rpx;
  padding: 2rpx 12rpx;
  background-color: #ff9e02;
  color: #fff;
  margin-top: 8rpx;
}

.posit {
  display: flex;
  align-items: center;
}

.postext {
  font-size: 16rpx;
}

.swiper-container {
  width: 710rpx;
  height: 320rpx;
  padding: 30rpx 0;
}

.swiper-image {
  width: 710rpx;
  height: 320rpx;
}

.showbox {
  display: flex;
  justify-content: center;
  align-items: center;

  .showimg {
    width: 212rpx;
    height: 212rpx;
  }

  .showtext {
    margin-left: 20rpx;
  }
}

.text-content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 24rpx;
  color: #000000;
  line-height: 34rpx;
  text-align: left;
}

.worksImgs,
.stusImgs {
  display: grid;
  grid-auto-columns: 7.1875rem;
  grid-auto-flow: column;
  overflow-x: auto;
  scrollbar-width: none;
  justify-content: space-evenly;
}

.stutext {
  margin: 15rpx 0;
}

.stuimgbox {
  width: 254rpx;
  height: 254rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbd78fc264dd7a014ef4d8c87f28b0858f0fac59b2a450df23b73c19c048bc5f5)
    50% no-repeat;

  img {
    width: 100%;
  }
}

.worksimgbox {
  width: 254rpx;
  height: 254rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0e0e71aa4be084e3a16a052095bf6950ed5290cb2c60b5f90b0eb25b21205b9d)
    50% no-repeat;
}

.actText,
.infoText {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15rpx 0;
}

.actitme {
  // box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
  margin-top: 16rpx;
  // border-radius: 16rpx;
  position: relative;
  // background-color: #eeeeee;

  .techerImg {
    position: absolute;
    right: 4%;
    bottom: 36%;
    img {
      width: 240rpx;
      height: 350rpx;
    }
  }
}

.linetext {
  background-color: #ff9e02;
  width: 80rpx;
  height: 80rpx;
  position: absolute;
  top: 0;
  right: 0;
  clip-path: polygon(0 0, 100% 100%, 100% 0);
  border-radius: 0 20rpx 0 0;
}
.linetext1 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 4;
  color: #fff;
  transform: rotate(45deg);
  transform-origin: 0 50%;
  font-size: 20rpx;
}

.listindex {
  width: 100%;
  height: 100%;
  background: #ffffff;
  // box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
  border-radius: 16rpx;
  padding: 28rpx 0 28rpx 30rpx;
}

.actitmeText1 {
  font-size: 32rpx;
  font-weight: 500;
}

.actitmeText2 {
  width: 80%;
  font-size: 28rpx;
  color: #333333;
  height: 76rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
}

.actitmeText3 {
  font-size: 24rpx;
  color: #666666;
}

.actImg {
  display: flex;

  img {
    width: 80rpx;
    height: 80rpx;
  }
}

.actTeacher {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 24rpx;
  margin-left: 20rpx;
  margin-right: 50rpx;
}

.acttime {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.imgbox {
  position: relative;
  width: 70rpx;
  height: 30rpx;

  img {
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid white;
  }
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

  .peotext {
    margin-left: 16rpx;
    margin-right: 16rpx;
  }
}

.perbtn {
  width: 50%;
  position: relative;
}

.actitmeText1 {
  padding-top: 12rpx;
  padding-bottom: 8rpx;
  white-space: nowrap; /*强制文字在一行文本框内*/
  overflow: hidden; /*溢出部分文字隐藏*/
  text-overflow: ellipsis; /*溢出部分省略号处理*/
  width: 90%;
}

.actitmeText3 {
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

.infostr {
  width: 70%;
}

.infolistbox {
  display: flex;
  justify-content: space-between;
}

.paddbox {
  padding: 28rpx 40rpx 36rpx 40rpx;
}

.titleText {
  width: 90%;
  font-size: 28rpx;
  font-weight: 400;
  margin-bottom: 28rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.huatibox {
  display: flex;
  align-items: center;
}

.proImg {
  width: 192rpx;
  height: 176rpx;
  border-radius: 8rpx;
  margin-top: 38rpx;
  margin-bottom: 34rpx;

  img {
    width: 192rpx;
    height: 176rpx;
    border-radius: 8rpx;
  }
}

.proNum {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
