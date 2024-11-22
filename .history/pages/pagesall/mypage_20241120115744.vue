<template>
  <view class="container">
    <!-- 用户信息 -->
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view class="user-info">

      <view class="titleHome">
        <view class="nameId">
          <view class="head" @click="setInfo">
            <img style="width:88rpx;height:88rpx;border-radius:50%;" :src="userInfo.avatar" />
          </view>
          <view class="name" @click="myInfo">
            <text class="textname">{{userInfo.nickname}}</text>
            <text class="textid">ID:{{ userInfo.id }}</text>
            <view class="posit">
              <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01" alt="" />
              <text class="postext">{{userInfo.school_name}}</text>
            </view>
          </view>
          <view class="classID">
            {{userInfo.classly_name}}
          </view>
        </view>
      </view>

      <view class="icon" @click="goSet">
        <image class="icon_2" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng934ba38bd39e53f863bede7e013d900beae25399907156b67da9b28d156a6777" />
      </view>

    </view>

    <!-- 功能选项 -->
    <view class="features">
      <view class="feature" v-for="feature in features" :key="feature.title" @click="toggle(feature.title)">
        <image :src="feature.icon" class="feature-icon" />
        <text>{{ feature.title }}</text>
      </view>
    </view>

    <!-- 今日作业 -->
    <view class="section">
      <text class="section-title">今日作业</text>
      <view class="homework-list">
        <view class="homework" v-for="task in homework" :key="task.title" @click="goTask(task.id)">
          <image class="task-image" :src="task.image" />
          <view class="task-details">
            <text class="task-title">{{ task.title }}</text>
            <view class="task-status">
              <text>{{ task.from }}</text>
              <view class="status_img">
                <image src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2da006757aba600979e398ec0c09e7190d6db896432216ec206836dc25bb68e4" mode="aspectFill"></image>
                <text>{{ task.status }}</text>
              </view>

            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 我的活动 -->
    <view class="section">
      <view v-if="participatingActivitiess.length > 0">
        <activity-item v-for="(item, index) in participatingActivitiess" :key="index" :online="item.is_online" :techerimg="item.avatar" :biaoti="item.title" :laoshi="item.description" :star="item.s_time" :end="item.e_time" :hearimg="item.teacher_avatar" :teachername="item.teacher_name" :hours="item.hours" :minutes="item.minutes" :seconds="item.seconds" :pers="item.signup_member?.total || 0" :money="item.price" :imgs="item.signup_member?.items || []" :signedUp="item.hadSignup" @signup="() => handleSignup(item.id)" />
      </view>
      <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;">
        <image style="width:400rpx;height: 400rpx;" src="@/static/img/noAct.png" mode="aspectFit" />
      </view>
    </view>
  </view>
</template>


<script>
import ActivityItem from '@/components/ActivityItem/ActivityItem';
import { useStore } from '@/store'
import {
  fetchActivityCourseList,
  fetchMyTemporaryHomework
} from '@/utils/api'
import {
  onLoad,
  onShow
} from '@dcloudio/uni-app';
export default {
  components: {
    ActivityItem,
  },
  data() {
    return {

      statusBarHeight: '',

      features: [{
        title: '我的作业',
        icon: '../../static/img/hw.png',
      },
      {
        title: '班级群',
        icon: '../../static/img/gro.png',
      },
      {
        title: '我的老师',
        icon: '../../static/img/tea.png',
      },
      {
        title: '历史测评',
        icon: '../../static/img/lAi.png',
      },
        // 更多功能...
      ],
      homework: [{
        title: '书法练习第一课',
        image: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4f12d9b5c7ee4468ae4a232563300604_mergeImage.png',
        from: '来自刘老师',
        status: '未完成'
      },
      {
        title: '书法练习第二课',
        image: 'https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4f12d9b5c7ee4468ae4a232563300604_mergeImage.png',
        status: '未完成',
        from: '来自刘老师',
      },
      ],
      participatingActivitiess: null,
      //   listdata: [{
      //     online: '线上',
      //     techerimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41',
      //     biaoti: '书法综合突破集训营(赠教学视频)',
      //     laoshi: '书法综合突破集训营主导讲师刘老师经验丰富…',
      //     star: '2024.8.14',
      //     end: '2024.8.16',
      //     hearimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1',
      //     teachername: '李老师',
      //     hours: 1,
      //     minutes: 30,
      //     seconds: 45,
      //     pers: 100,
      //     money: '免费',
      //     imgs: ['https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3',
      //       'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3',
      //       'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3'
      //     ],
      //     signedUp: true, // 状态示例
      //   },
      //     // 其他活动数据...
      //   ],
    };
  },
  computed: {
    listdata() {
      const store = useStore()
      return store.listdata // 从 Pinia 存储中获取 listdata
    },
    userInfo() {
      const store = useStore()
      return store.userinfo // 从 Pinia 存储中获取 userinfo
    }
  },
  onShow() {
    this.pa()
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
  },
  methods: {
    goTask(id) {
      uni.navigateTo({
        url: `/pages/pagesall/course/go_learn?id=${id}`
      });
    },
    async pa() {
      let params = {
        page: 1,
        limit: 7,
      }
      let params1 = {
        page: 1,
        limit: 5,
      }
      try {
        let participatingActivities = await fetchActivityCourseList(params);
        let myTemporaryHomework = await fetchMyTemporaryHomework(params1);

        // 查找所有 hadSignup 为 1 的活动
        const matchedDetails = participatingActivities.items.filter(detail =>
          detail.hadSignup === 1
        );
        let matchedD = matchedDetails.map(item => ({
          ...item, // 保留原有的属性
          timerId: null,//用于存储定时器ID
          hours: 0, // 增加时字段，初始化为0
          minutes: 0, // 增加分字段，初始化为0
          seconds: 0, // 增加秒字段，初始化为0

        }));
        // 打印匹配的活动详情
        if (matchedD.length > 0) {
          this.participatingActivitiess = matchedD; // 将符合条件的活动存入 participatingActivitiess 数组
          this.updateCountdown();
        } else {
          console.log('未找到已经报名的活动');
        }
      } catch (error) {
        console.error('获取活动详情失败:', error);
      }
    },
    setInfo() {
      uni.navigateTo({
        url: "/pages/pagesall/mypage/PersonalData"
      })
    },
    handleSignup(id) {
      // const paramsString = encodeURIComponent(JSON.stringify(params));
      uni.navigateTo({
        url: `/pages/pagesall/home/signUp?id=${id}` // 确保替换为相应的页面路径
      });
    },
    updateCountdown() {
      const currentDateTimestampInMilliseconds = new Date().getTime();
      const now = Math.floor(currentDateTimestampInMilliseconds / 1000);

      this.participatingActivitiess.forEach(item => {
        // const newItem = { ...item };
        if (!isNaN(item.end_time)) {
          const timeDiff = item.end_time - now;
          if (timeDiff > 0) {
            item.hours = Math.floor(timeDiff / 3600);
            item.minutes = Math.floor((timeDiff % 3600) / 60);
            item.seconds = timeDiff % 60;
          } else {
            item.hours = item.minutes = item.seconds = 0; // 时间到达
          }
          // console.log('Updated time for item:', item.hours, item.minutes, item.seconds);
        } else {
          item.hours = item.minutes = item.seconds = 0; // 处理无效时间
        }
        // console.log('Updated time:', item.hours, item.minutes, item.seconds);
        // return newItem;
      });
      // 更新 store
    },
    goSet() {
      uni.navigateTo({
        url: "/pages/pagesall/mypage/Set"
      })
    },
    toggle(title) {
      console.log(title);
      if (title === '我的作业') {
        uni.navigateTo({
          url: "/pages/pagesall/mypage/myHomework"
        })
      } else if (title === '班级课程') {
        uni.navigateTo({
          url: "/pages/pagesall/mypage/myCourses"
        })
      } else if (title === '班级群') {
        uni.navigateTo({
          url: "/pages/pagesall/mypage/classGroup"
        })
      } else if (title === '我的老师') {
        uni.navigateTo({
          url: "/pages/pagesall/mypage/teachermsg"
        })
      } else if (title === '历史测评') {
        uni.navigateTo({
          url: "/pages/pagesall/mypage/historyAssessment"
        })
      }
    },
    myInfo() {
      uni.navigateTo({
        url: "/pages/pagesall/mypage/individualmsg"
      })
    }
  }
};
</script>


<style scoped>
.titleHome {
  display: flex;
  justify-content: space-between;
}

.nameId {
  display: flex;
  align-items: flex-start;
}

.icon_2 {
  width: 36rpx;
  height: 32rpx;
}

.class_ {
  float: left;
}

.name {
  display: flex;
  flex-direction: column;
  margin-left: 16rpx;
  margin-right: 16rpx;
  gap: 6rpx;
}

.textname {
  font-size: 28rpx;
}

.textid {
  font-size: 16rpx;
}

.classID {
  font-size: 16rpx;
  padding: 2rpx 12rpx 2rpx 12rpx;
  background-color: #ff9e02;
  color: #fff;
  margin-top: 8rpx;
  margin-left: -140rpx;
}

.status_img image {
  width: 24rpx;
  height: 24rpx;
}

.posit {
  display: flex;
  align-items: center;
}

.postext {
  font-size: 16rpx;
}

.container {
  padding: 16px;
}

.task-status {
  display: flex;
  justify-content: space-between;
  font-size: 20rpx;
  padding: 10rpx 12rpx 14rpx 16rpx;
}

.task-title {
  font-size: 28rpx;
  color: #000000;
  padding: 10rpx 12rpx 14rpx 16rpx;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}

.user-details {
  margin-left: 10px;
}

.homework {
  background: #ffffff;
  box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(0, 0, 0, 0.08);
  border-radius: 8rpx;
  border: 0rpx solid;
}

.features,
.homework-list {
  display: flex;
  font-size: 28rpx;
  color: #000000;
  justify-content: space-around;
  margin-top: 70rpx;
  gap: 14rpx;
}

.task-details {
}

.feature {
  display: grid;
  justify-items: center;
}

.task-image {
  width: 340rpx;
  height: 160rpx;
}

.feature-icon,
.activity-image {
  width: 64rpx;
  height: 64rpx;
}

.section {
  margin-top: 20px;
}
</style>