<template>
  <view>
    <view class="oper_Title"> 活动 </view>

    <view class="oper_area" @click="selectCity">
      <view class="area_img">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8115b2c160eee2c4a0b2d28b5170401ecd79f5c361abd0bc4f8a82f0af559654" alt="" />
        <view class="area_text">
          {{ oper_area }}
        </view>
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf4e9bc406788b9232143810336e08dc7652f21137fb2a98411b6742d7f4dffb2" alt="" />
      </view>
      <input type="text" class="area_input" placeholder="请输入要查找的城市" />
    </view>

    <view>
      <uni-section title="实心标签" type="line">
        <view class="uni-padding-wrap uni-common-mt">
          <uni-segmented-control :current="current" :values="items" :active-color="activeColor" @clickItem="onClickItem" />
          <view class="line_oper" v-if="current === 0"> </view>
          <view class="line_oper1" v-if="current === 1"> </view>
        </view>
        <view class="oper_title_text"> 正在进行 </view>
        <view class="content">

          <view v-if="current === 0">
            <activity-item v-for="(item, index) in listdata" :key="index" :online="item.is_online" :techerimg="item.avatar" :biaoti="item.title" :laoshi="item.description" :star="item.s_time" :end="item.e_time" :hearimg="item.teacher_avatar" :teachername="item.teacher_name" :hours="item.hours" :minutes="item.minutes" :seconds="item.seconds" :pers="item.signup_member.total" :money="item.price" :imgs="item.signup_member.items" :signedUp="item.signedUp" @signup="handleSignup" />

            <view class="oper_title_text1"> 往期回顾 </view>
            <view class="actitme" v-for="(item, index) in listdata" :key="index">
              <view class="linetext" style="background-color: #999999"> </view>
              <view class="linetext1">
                {{ item.online }}
              </view>
              <view class="techerImg">
                <img :src="item.techerimg" alt="" />
              </view>
              <view class="listindex">
                <view class="actitmeText1">
                  {{ item.biaoti }}
                </view>
                <view class="actitmeText2">
                  {{ item.laoshi }}
                </view>
                <view class="actitmeText3">
                  开课时间:{{ item.star }}-
                  {{ item.end }}
                </view>
                <view class="actImg">
                  <img :src="item.hearimg" alt="" />
                  <view class="actTeacher">
                    <text>{{ item.teachername }}</text>
                    <text style="font-size: 20rpx; margin-top: 10rpx">授课</text>
                  </view>
                  <view class="acttime">
                    <text style="font-size: 24rpx">距结束还剩:</text>
                    <view class="timetextbox">
                      <text style="
                          font-size: 20rpx;
                          padding: 3rpx 5rpx 3rpx 5rpx;
                          border-radius: 5rpx;
                          background-color: #999999;
                        ">{{ item.hours }}</text>
                      <text style="
                          font-size: 20rpx;
                          background-color: #fff;
                          color: #f53c38;
                        ">:</text>
                      <text style="
                          font-size: 20rpx;
                          padding: 3rpx 5rpx 3rpx 5rpx;
                          border-radius: 5rpx;
                          background-color: #999999;
                        ">{{ item.minutes }}</text>
                      <text style="
                          font-size: 20rpx;
                          background-color: #fff;
                          color: #f53c38;
                        ">:</text>
                      <text style="
                          font-size: 20rpx;
                          padding: 3rpx 5rpx 3rpx 5rpx;
                          border-radius: 5rpx;
                          background-color: #999999;
                        ">{{ item.seconds }}</text>
                    </view>
                  </view>
                </view>

                <view class="endbaoming">
                  <view class="peopers">
                    <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbc0752e4c2b0c1556949591525f3b7f380e2ed3b52eb73e48c263c0f235e675f" alt="" />
                    <view class="peotext" style="font-size: 20rpx; color: #999999">
                      {{ item.pers }}人报名
                    </view>
                    <view class="imgbox">
                      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3" alt="" style="right: 0rpx; z-index: 10" />
                      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3" alt="" style="right: 20rpx; z-index: 9" />
                      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3" alt="" style="right: 40rpx; z-index: 8" />
                    </view>
                  </view>
                  <view class="perbtn">
                    <view class="permoney" style="color: #999999">
                      {{ item.money == '免费' ? '免费' : '￥' + item.money }}
                    </view>
                    <view class="gobtn" @click="btnsignup" style="background-color: #999999">立即报名
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <view v-if="current === 1">
            <activity-item v-for="(item, index) in listdata" :key="index" :online="item.is_online" :techerimg="item.avatar" :biaoti="item.title" :laoshi="item.description" :star="item.s_time" :end="item.e_time" :hearimg="item.teacher_avatar" :teachername="item.teacher_name" :hours="item.hours" :minutes="item.minutes" :seconds="item.seconds" :pers="item.signup_member.total" :money="item.price" :imgs="item.signup_member.items" :signedUp="item.signedUp" @signup="handleSignup" />

            <view class="oper_title_text1"> 往期回顾 </view>
            <view class="actitme" v-for="(item, index) in listdata1" :key="index">
              <view class="linetext" style="background-color: #999999"> </view>
              <view class="linetext1">
                {{ item.online }}
              </view>
              <view class="techerImg">
                <img :src="item.techerimg" alt="" />
              </view>
              <view class="listindex">
                <view class="actitmeText1">
                  {{ item.biaoti }}
                </view>
                <view class="actitmeText2">
                  {{ item.laoshi }}
                </view>
                <view class="actitmeText3">
                  开课时间:{{ item.star }}-
                  {{ item.end }}
                </view>
                <view class="actImg">
                  <img :src="item.hearimg" alt="" />
                  <view class="actTeacher">
                    <text>{{ item.teachername }}</text>
                    <text style="font-size: 20rpx; margin-top: 10rpx">授课</text>
                  </view>
                  <view class="acttime">
                    <text style="font-size: 24rpx">距结束还剩:</text>
                    <view class="timetextbox">
                      <text style="
                          font-size: 20rpx;
                          padding: 3rpx 5rpx 3rpx 5rpx;
                          border-radius: 5rpx;
                          background-color: #999999;
                        ">{{ item.hours }}</text>
                      <text style="
                          font-size: 20rpx;
                          background-color: #fff;
                          color: #f53c38;
                        ">:</text>
                      <text style="
                          font-size: 20rpx;
                          padding: 3rpx 5rpx 3rpx 5rpx;
                          border-radius: 5rpx;
                          background-color: #999999;
                        ">{{ item.minutes }}</text>
                      <text style="
                          font-size: 20rpx;
                          background-color: #fff;
                          color: #f53c38;
                        ">:</text>
                      <text style="
                          font-size: 20rpx;
                          padding: 3rpx 5rpx 3rpx 5rpx;
                          border-radius: 5rpx;
                          background-color: #999999;
                        ">{{ item.seconds }}</text>
                    </view>
                  </view>
                </view>

                <view class="endbaoming">
                  <view class="peopers">
                    <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbc0752e4c2b0c1556949591525f3b7f380e2ed3b52eb73e48c263c0f235e675f" alt="" />
                    <view class="peotext" style="font-size: 20rpx; color: #999999">
                      {{ item.pers }}人报名
                    </view>
                    <view class="imgbox">
                      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3" alt="" style="right: 0rpx; z-index: 10" />
                      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3" alt="" style="right: 20rpx; z-index: 9" />
                      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3" alt="" style="right: 40rpx; z-index: 8" />
                    </view>
                  </view>
                  <view class="perbtn">
                    <view class="permoney" style="color: #999999">
                      {{ item.money == '免费' ? '免费' : '￥' + item.money }}
                    </view>
                    <view class="gobtn" @click="btnsignup" style="background-color: #999999">立即报名
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </uni-section>
    </view>
  </view>
</template>
<script>
import ActivityItem from '@/components/ActivityItem/ActivityItem';
import { useStore } from '@/store'
import {
  fetchActivityCourseList,
} from '@/utils/api'

export default {
  components: {
    ActivityItem,
  },
  data() {
    return {
      items: ['线上活动', '线下活动'],
      current: 0,
      colorIndex: 0,
      listdata: [
        {
          biaoti: '书法综合突破集训营(赠教学视频)',
          laoshi: ' 书法综合突破集训营主导讲师刘老师经验丰富…',
          star: '2024.8.14',
          end: '2024.8.16',
          hearimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1',
          techerimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41',
          teachername: '李衣裳',
          pers: '2034',
          money: '免费',
          online: '线上',
          hours: '',
          minutes: '',
          seconds: '',
        },
        {
          biaoti: '书法综合突破集训营(赠教学视频)',
          laoshi: ' 书法综合突破集训营主导讲师刘老师经验丰富…',
          star: '2024.8.26',
          end: '2024.8.27',
          hearimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1',
          techerimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41',
          teachername: '李衣裳',
          pers: '2034',
          money: '450',
          online: '线上',
          hours: '',
          minutes: '',
          seconds: '',
        },
      ],
      listdata1: [
        {
          biaoti: '书法综合突破集训营(赠教学视频)',
          laoshi: ' 书法综合突破集训营主导讲师刘老师经验丰富…',
          star: '2024.8.14',
          end: '2024.8.16',
          hearimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1',
          techerimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41',
          teachername: '李衣裳',
          pers: '2034',
          money: '免费',
          online: '线下',
          hours: '',
          minutes: '',
          seconds: '',
        },
        {
          biaoti: '书法综合突破集训营(赠教学视频)',
          laoshi: ' 书法综合突破集训营主导讲师刘老师经验丰富…',
          star: '2024.8.26',
          end: '2024.8.27',
          hearimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1',
          techerimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41',
          teachername: '李衣裳',
          pers: '2034',
          money: '450',
          online: '线下',
          hours: '',
          minutes: '',
          seconds: '',
        },
      ],
      intervalId: null, // 保存计时器ID
      oper_area: '郑州',
    }
  },

  computed: {
    listdata() {
      const store = useStore()
      return store.listdata // 从 Pinia 存储中获取 listdata
    },

  },
  onLoad() {
    this.startCountdown() // 开始倒计时
  },
  onUnload() {
    this.stopCountdown() // 页面卸载时停止倒计时
  },
  mounted() {
    this.fetchActivityData(); // 页面加载时请求数据
  },
  methods: {
    async fetchActivityData() {
      try {
        // 调用fetchActivityCourseList方法并传入必要参数
        const response = await fetchActivityCourseList();

        // 根据返回的数据分配给listdata和listdata1
        this.listdata = response.onlineActivities || []; // 假设返回的数据结构中有onlineActivities
        this.listdata1 = response.offlineActivities || []; // 假设返回的数据结构中有offlineActivities
      } catch (error) {
        console.error("获取活动数据失败:", error);
      }
    },
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex
      }
    },
    styleChange(e) {
      if (this.styleType !== e.detail.value) {
        this.styleType = e.detail.value
      }
    },
    colorChange(e) {
      if (this.styleType !== e.detail.value) {
        console.log(e.detail.value)
        this.activeColor = e.detail.value
      }
    },
    formatTime(value) {
      // 确保时间总是两位数
      return value.toString().padStart(2, '0')
    },
    updateCountdown() {
      this.listdata.forEach((e, index) => {
        let now = new Date()
        let end = new Date(e.end)
        let timeDiff = end - now

        if (timeDiff > 0) {
          let totalSeconds = Math.floor(timeDiff / 1000)
          let hours = Math.floor(totalSeconds / 3600)
          let minutes = Math.floor((totalSeconds % 3600) / 60)
          let seconds = totalSeconds % 60

          // 格式化小时、分钟和秒
          this.listdata[index].hours = this.formatTime(hours)
          this.listdata[index].minutes = this.formatTime(minutes)
          this.listdata[index].seconds = this.formatTime(seconds)
          this.listdata1[index].hours = this.formatTime(hours)
          this.listdata1[index].minutes = this.formatTime(minutes)
          this.listdata1[index].seconds = this.formatTime(seconds)
        } else {
          // 倒计时结束，设置为 00:00:00
          this.listdata[index].hours = '00'
          this.listdata[index].minutes = '00'
          this.listdata[index].seconds = '00'
          this.listdata1[index].hours = '00'
          this.listdata1[index].minutes = '00'
          this.listdata1[index].seconds = '00'
        }
      })
    },
    startCountdown() {
      this.updateCountdown() // 初始化
      this.intervalId = setInterval(this.updateCountdown, 1000) // 每秒更新一次
    },
    stopCountdown() {
      if (this.intervalId) {
        clearInterval(this.intervalId) // 停止计时器
        this.intervalId = null
      }
    },
    selectCity() {
      uni.navigateTo({
        url: 'SelectCity',
      })
    },
    updateSelectedCity(city) {
      this.oper_area = city // 更新选中的城市
    },
  },
}
</script>

<style lang="scss">
.oper_Title {
  text-align: center;
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
  margin: 30rpx 0;
}

.area_img {
  display: flex;
  align-items: center;
}

.area_text {
  // width: 200rpx;
  margin: 0 10rpx;
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.area_input {
  width: 524rpx;
  height: 40rpx;
  padding: 20rpx;
  background: #eeeeee;
  border-radius: 40rpx;
}

.oper_area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20rpx;
}

.example-body {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  padding: 0;
}

.uni-common-mt {
  margin-top: 20px;
}

.uni-padding-wrap {
  // width: 750rpx;
  padding: 0px 15px;
  position: relative;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-text {
  font-size: 14px;
  color: #666;
}

.color-tag {
  width: 25px;
  height: 25px;
}

.uni-list {
  flex: 1;
}

.uni-list-item {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex: 1;
  flex-direction: row;
  background-color: #ffffff;
}

.uni-list-item__content-title {
  font-size: 14px;
}

.line_oper {
  width: 48rpx;
  height: 8rpx;
  background-color: #ff9e02;
  position: absolute;
  left: 9%;
  top: 75%;
  border-radius: 30rpx;
}

.line_oper1 {
  width: 48rpx;
  height: 8rpx;
  background-color: #ff9e02;
  position: absolute;
  left: 35%;
  top: 75%;
  border-radius: 30rpx;
}

.actitme {
  box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
  margin-top: 16rpx;
  border-radius: 16rpx;
  position: relative;
  background-color: #eeeeee;
  width: 694rpx;
  height: 466rpx;
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
  width: 580rpx;
  background: #ffffff;
  box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
  border-radius: 16rpx;
  border: 0rpx solid rgba(0, 0, 0, 0.25);
  padding: 28rpx 0rpx 28rpx 30rpx;
}

.actitmeText1 {
  font-size: 32rpx;
  font-weight: 500;
}

.actitmeText2 {
  font-size: 28rpx;
  color: #333333;
}

.actitmeText3 {
  font-size: 24rpx;
  color: #666666;
}

.actImg {
  display: flex;
}

.actImg img {
  width: 80rpx;
  height: 80rpx;
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

.actitmeText1 {
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

.oper_title_text {
  padding: 10rpx 30rpx;
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
  line-height: 50rpx;
}

.oper_title_text1 {
  padding: 20rpx 0 0 0;
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
  line-height: 50rpx;
  margin: 28rpx 0 24rpx 0;
}
</style>
