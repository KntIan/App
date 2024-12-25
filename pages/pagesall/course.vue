<template>
  <view class="code_titlebox">
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="code_title"> 课程 </view>
  </view>

  <view class="game_time">
    <text style="font-weight: bold; font-size: 36rpx; color: #000000"
      >今日课程</text
    >
  </view>

  <timeline v-if="infolist.length > 0">
    <view class="line_list" v-for="(item, index) in infolist" :key="index">
      <timelineItem
        class="list_box_cour"
        :leftTime="item.title"
        color="#5791F2"
        @tiaozhuan="handleChildClick(item.content_id)"
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
      display: grid;
      justify-items: center;
      position: relative;
      height: 500rpx;
    "
  >
    <image
      style="width: 400rpx; height: 400rpx; margin-bottom: -30rpx"
      src="http://admin.zexishuhua.com/uploads/20241213/1902bf0b9b6c3eb0731d0ef867f6c458.png"
      mode="aspectFit"
    />
    <text style="color: #666; position: absolute; z-index: 1; bottom: 140rpx"
      >暂无课程</text
    >
  </view>

  <view class="game_time">
    <text style="font-weight: bold; font-size: 36rpx; color: #000000"
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
        :id="item.id"
        :color="item.color"
        style="font-weight: 600; font-size: 28rpx; color: #000000"
        @tiaozhuan="handleChildClick(item.content_id)"
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
          <view
            style="
              font-weight: 400;
              color: #000000;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              width: 270rpx;
              text-align: left;
            "
            >教室:{{ item.classroom }}</view
          >
          <view
            style="
              font-weight: 400;
              font-size: 24rpx;
              color: #333333;
              max-width: 400rpx;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            "
            >时间:{{ item.start_date }}{{ item.s_time }}-{{ item.e_time }}</view
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
          @click="btn_study($event, item.status, item.homework_id)"
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
      display: grid;
      justify-items: center;
      position: relative;
      height: 500rpx;
    "
  >
    <image
      style="width: 400rpx; height: 400rpx; margin-bottom: -30rpx"
      src="http://admin.zexishuhua.com/uploads/20241213/1902bf0b9b6c3eb0731d0ef867f6c458.png"
      mode="aspectFit"
    />
    <text style="color: #666; position: absolute; z-index: 1; bottom: 140rpx"
      >暂无课程</text
    >
  </view>
  <view class="infobox"></view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import timeline from '../../components/chenbin-timeline/timeLine.vue'
import timelineItem from '../../components/chenbin-timeline/timelineItem.vue'
import { fetchMyCourseList, fetchMyRecentCourse } from '@/utils/api'
import {
  onLoad,
  onPullDownRefresh,
  onReachBottom,
  onShow,
} from '@dcloudio/uni-app'
const statusBarHeight = ref()
const cur = ref(1)
const isLoading = ref(false)
onLoad(() => {
  // fetchCourse();
  statusBarHeight.value = getApp().globalData.top
})
onReachBottom(() => {
  if (isLoading.value) {
    uni.showToast({
      title: '没有更多数据了',
      icon: 'none',
      duration: 3000,
    })
    return
  }
  if (isLoading.value) return
  cur.value++
  fetchCourse()
})
onShow(() => {
  cur.value = 1
  isLoading.value = false
  ti_tea_room_list.value = []
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
const handleChildClick = (id) => {
  // 在这里处理事件
  console.log('子组件被点击', id)
  uni.navigateTo({
    url: '/pages/pagesall/course/golearn?content_id=' + id,
  })
}
const handleChildClick1 = (ids) => {
  // 在这里处理事件
  console.log('子组件被点击', ids)
  uni.navigateTo({
    url: '/pages/pagesall/course/golearn?content_id=' + ids,
  })
}
onMounted(() => {})
const fetchCourse = async () => {
  try {
    const param = {
      page: cur.value,
      limit: 10,
    }
    // 同时请求两个接口
    const [courseListResponse, recentCourseResponse] = await Promise.all([
      fetchMyCourseList(),
      fetchMyRecentCourse(param),
    ])

    infolist.value = courseListResponse.items

    // 处理 recentCourseResponse 的数据
    // 根据您的需求，您可以将其存放到组件中的某个响应式变量中
    // 例如：
    const statusColorMap = {
      0: '#5791F2', // 状态 0 对应的颜色
      1: '#33CC33', // 状态 1 对应的颜色
      2: '#666666', // 状态 2 对应的颜色
      // 您可以根据需要添加更多状态
      default: '#ed7171', // 默认颜色
    }
    let ti_tea_room_list_new = ti_tea_room_list.value.concat(
      recentCourseResponse.items.map((item) => ({
        ...item, // 保留原有属性
        color: statusColorMap[item.status] || statusColorMap.default,
      }))
    )
    ti_tea_room_list.value = ti_tea_room_list_new

    if (ti_tea_room_list.value.length === recentCourseResponse.total) {
      uni.showToast({
        title: '没有更多数据了',
        icon: 'none',
        duration: 3000,
      })
      isLoading.value = true
    }
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
      return '#ed7171' // 对于其他未定义的状态设置一个默认背景色，也可按需调整
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
      return '暂无作业' // 对于其他未定义的状态显示一个默认文字，可按需调整
  }
}

function btn_study(event, status, homework_id) {
  if (status === 0) {
    uni.navigateTo({
      url: `/pages/pagesall/course/go_learn?homework_id=${homework_id}`,
    }) // 跳转到写作业页面，需按照项目实际路由配置修改路径
  } else if (status === 1 || status === 2) {
    uni.navigateTo({
      url: `/pages/pagesall/mypage/correction?homework_id=${homework_id}`,
    }) // 跳转到作业审阅详情页面，按实际配置调整路径
  }
}
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
  font-weight: bold;
}
.disabled-btn {
  pointer-events: none;
  opacity: 0.5;
}
</style>
