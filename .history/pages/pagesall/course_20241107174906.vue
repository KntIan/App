<template>
  <view class="code_titlebox">
    <view class="code_title"> 课程 </view>
  </view>

  <view class="game_time">
    <text style="font-weight: 500; font-size: 36rpx; color: #000000">活动时间安排</text>
  </view>

  <timeline>
    <view class="line_list" v-for="(item, index) in infolist" :key="index">
      <timelineItem class="list_box_cour" :leftTime="item.title" color="#5791F2">
        <view class="tips" style="
            height: 134rpx;
            font-weight: 500;
            font-size: 28rpx;
            color: #000000;
            margin-left: 20rpx;
          ">
          主讲：{{ item.teach }}
        </view>
        <view class="class_room">
          <view style="font-weight: 400; font-size: 24rpx; color: #000000">教室:{{ item.classroom }}</view>
          <view style="font-weight: 400; font-size: 24rpx; color: #333333">时间:{{ item.start }}-{{ item.end }}</view>
        </view>
      </timelineItem>
    </view>
  </timeline>

  <view class="game_time">
    <text style="font-weight: 500; font-size: 36rpx; color: #000000">近期课程</text>
  </view>

  <timeline>
    <view class="line_list" v-for="(item, index) in ti_tea_room_list" :key="index">
      <timelineItem class="list_box_cour" :leftTime="item.title" :color="item.color" style="font-weight: 600; font-size: 28rpx; color: #000000">
        <view class="tips" style="
            height: 154rpx;
            font-weight: 500;
            font-size: 28rpx;
            color: #000000;
          ">
          主讲：{{ item.teach }}
        </view>
        <view class="class_room">
          <view style="font-weight: 400; color: #000000">教室:{{ item.classroom }}</view>
          <view style="font-weight: 400; font-size: 24rpx; color: #333333">时间:{{ item.start }}-{{ item.end }}</view>
        </view>
        <view class="list_btn" :style="{ backgroundColor: item.color }" @click="btn_study">
          {{ item.status }}
        </view>
      </timelineItem>
    </view>
  </timeline>

  <view class="infobox"></view>
</template>

<script setup>
import { ref, onMounted } from "vue";
import timeline from "../../components/chenbin-timeline/timeLine.vue";
import timelineItem from "../../components/chenbin-timeline/timelineItem.vue";
import { fetchMyCourseList } from "@/utils/api";

const infolist = ref([]);
const ti_tea_room_list = ref([]);
const old = ref({
  scrollTop: 0,
});

onMounted(async () => {
  try {
    const response = await fetchMyCourseList();
    console.log(response)
    const nowCourse = response.data.now.calligraphycourse || {};

    infolist.value = nowCourse
      ? [
        {
          title: nowCourse.title,
          teach: nowCourse.teach,
          classroom: nowCourse.classroom,
          start: nowCourse.start_date,
          end: nowCourse.end_date,
          color: "#5791F2",
        },
      ]
      : [];

    const combinedCourses = [];
    if (response.data.history?.calligraphycourse) {
      combinedCourses.push({
        ...response.data.history.calligraphycourse,
        status: "作业已完成",
        color: "#666666",
      });
    }
    if (nowCourse.title) {
      combinedCourses.push({
        ...nowCourse,
        status: "未开始",
        color: "#5791F2",
      });
    }

    ti_tea_room_list.value = combinedCourses.map(
      ({
        title,
        teach,
        classroom,
        start_date: start,
        end_date: end,
        status = "未开始",
        color = "#5791F2",
      }) => ({
        title,
        teach,
        classroom,
        start,
        end,
        status,
        color,
      })
    );
  } catch (error) {
    console.error("获取课程失败:", error);
  }
});

function goback() {
  uni.navigateBack();
}

function scroll(e) {
  old.value.scrollTop = e.detail.scrollTop;
}

function btn_study() {
  uni.navigateTo({
    url: "/pages/pagesall/course/go_learn",
  });
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
}
</style>
