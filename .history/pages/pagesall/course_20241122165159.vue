<template>
  <view class="code_titlebox">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="code_title"> 课程 </view>
  </view>

  <view class="game_time">
    <text style="font-weight: 500; font-size: 36rpx; color: #000000"
      >活动时间安排</text
    >
  </view>

  <timeline v-if="infolist.length > 0">
    <view class="line_list" v-for="(item, index) in infolist" :key="index">
      <timelineItem
        class="list_box_cour"
        :leftTime="item.title"
        color="#5791F2"
      >
        <view
          class="tips"
          style="
            height: 134rpx;
            font-weight: 500;
            font-size: 28rpx;
            color: #000000;
            margin-left: 20rpx;
          "
        >
          主讲：{{ item.teacher_name }}
        </view>
        <view class="class_room">
          <view style="font-weight: 400; font-size: 24rpx; color: #000000"
            >教室:{{ item.classroom }}</view
          >
          <view style="font-weight: 400; font-size: 24rpx; color: #333333"
            >时间:{{ item.s_time }}-{{ item.e_time }}</view
          >
        </view>
      </timelineItem>
    </view>
  </timeline>
  <view
    v-else
    class="kong"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 500rpx;
    "
  >
    <image
      style="width: 400rpx; height: 400rpx"
      src="@/static/img/noAct.png"
      mode="aspectFit"
    />
  </view>

  <view class="game_time">
    <text style="font-weight: 500; font-size: 36rpx; color: #000000"
      >近期课程</text
    >
  </view>

  <timeline v-if="ti_tea_room_list.length > 0">
    <view
      class="line_list"
      v-for="(item, index) in ti_tea_room_list"
      :key="index"
    >
      <timelineItem
        class="list_box_cour"
        :leftTime="item.title"
        :color="item.color"
        style="font-weight: 600; font-size: 28rpx; color: #000000"
      >
        <view
          class="tips"
          style="
            height: 154rpx;
            font-weight: 500;
            font-size: 28rpx;
            color: #000000;
          "
        >
          主讲：{{ item.teacher_name }}
        </view>
        <view class="class_room">
          <view style="font-weight: 400; color: #000000"
            >教室:{{ item.classroom }}</view
          >
          <view style="font-weight: 400; font-size: 24rpx; color: #333333"
            >时间:{{ item.s_time }}-{{ item.e_time }}</view
          >
        </view>
        <!-- <view class="list_btn" style="color:white" :style="{ backgroundColor: item.status === 0 ? '#5791F2' : '#666666' }" @click="btn_study">
          {{ item.status === 0 ? '写作业' : '作业已完成' }}
        </view> -->
        <view
          class="list_btn"
          :class="{ 'disabled-btn': item.status === -1 }"
          style="color: white"
          :style="{ backgroundColor: getBackgroundColor(item.status) }"
          @click="btn_study"
          :disabled="item.status === -1"
        >
          {{ getButtonText(item.status) }}
        </view>
      </timelineItem>
    </view>
  </timeline>
  <view
    v-else
    class="kong"
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 500rpx;
    "
  >
    <image
      style="width: 400rpx; height: 400rpx"
      src="@/static/img/noAct.png"
      mode="aspectFit"
    />
  </view>
  <view class="infobox"></view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import timeline from '../../components/chenbin-timeline/timeLine.vue'
import timelineItem from '../../components/chenbin-timeline/timelineItem.vue'
import { fetchMyCourseList, fetchMyRecentCourse } from '@/utils/api'
import { onLoad, onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app'
const statusBarHeight = ref()
onLoad(() => {
  statusBarHeight.value = getApp().globalData.top
})
onReachBottom(() => {
  fetchCourse()
})
onPullDownRefresh(() => {
  fetchCourse()
  uni.stopPullDownRefresh()
})
const infolist = ref([])
const ti_tea_room_list = ref([])
// const recentCourseInfo = ref([]);
const old = ref({
  scrollTop: 0,
})

onMounted(() => {
  fetchCourse()
})
const fetchCourse = async () => {
  try {
    // 同时请求两个接口
    const [courseListResponse, recentCourseResponse] = await Promise.all([
      fetchMyCourseList(),
      fetchMyRecentCourse(),
    ])

    // console.log(courseListResponse);
    // console.log(recentCourseResponse);

    infolist.value = courseListResponse.items

    // 处理 recentCourseResponse 的数据
    // 根据您的需求，您可以将其存放到组件中的某个响应式变量中
    // 例如：
    ti_tea_room_list.value = recentCourseResponse.items.map((item) => ({
      ...item, // 保留原有属性
      color: item.status === 0 ? '#5791F2' : '#666666', // 根据状态设置颜色
    }))
    // console.log(ti_tea_room_list.value)
  } catch (error) {
    console.error('获取课程失败:', error)
  }
}

function goback() {
  uni.navigateBack()
}

function scroll(e) {
  old.value.scrollTop = e.detail.scrollTop
}
function getBackgroundColor(status) {
  switch (status) {
    case 0:
      return '#5791F2'
    case 1:
      return '#33CC33' // 假设已提交作业可以设置为绿色，可按需调整颜色
    case 2:
      return '#666666'
    default:
      return '#CCCCCC' // 对于其他未定义的状态设置一个默认背景色，也可按需调整
  }
}
function getButtonText(status) {
  switch (status) {
    case 0:
      return '写作业'
    case 1:
      return '已提交作业'
    case 2:
      return '作业已完成'
    default:
      return '' // 对于其他未定义的状态显示一个默认文字，可按需调整
  }
}

function btn_study() {
  switch (this.item.status) {
    case 0:
      uni.navigateTo({
        url: '/pages/pagesall/course/go_learn',
      }) // 跳转到写作业页面，需根据实际路由配置调整路径
      break
    case 1:
      this.$router.push('/homework-review-details') // 跳转到作业审阅详情页面，同样需按实际配置调整路径
      break
    case 2:
      this.$router.push('/completed-homework') // 跳转到作业已完成页面，按需调整路径
      break
    default:
      break
  }
}
function btn_study() {}
</script>

<style lang="scss">
.codepage {
  width: 750rpx;
  height: 1624rpx;
  background-color: #eeeeee;
}
.code_titlebox {
  position: relative;
  padding: 30rpx;
}
.code_title {
  text-align: center;
  font-weight: 500;
  font-size: 36rpx;
  color: #000;
}
.game_time {
  padding: 0 20rpx;
}
.line_list {
  position: relative;
}
.class_room {
  width: 96%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 5%;
  bottom: 45%;
}
.list_btn {
  width: 200rpx;
  height: 52rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10%;
  right: 0;
  border-radius: 10rpx;
}
</style>
