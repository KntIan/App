<template>
  <view>
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
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
            <view v-if="listdata2.length>0">
              <activity-item v-for="(item, index) in listdata2" :key="index" :online="item.is_online" :techerimg="item.avatar" :biaoti="item.title" :laoshi="item.description" :star="item.s_time" :end="item.e_time" :hearimg="item.teacher_avatar" :teachername="item.teacher_name" :hours="Number(item.hours)" :minutes="Number(item.minutes)" :seconds="Number(item.seconds)" :pers="item.signup_member?.total || 0" :money="item.price" :imgs="item.signup_member?.items || []" :signedUp="item.hadSignup" @signup="() => handleSignupXSline(item.id)" />
            </view>
            <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;">
              <image style="width:400rpx;height: 400rpx;" src="@/static/img/noAct.png" mode="aspectFit" />
            </view>

            <view class="oper_title_text1"> 往期回顾 </view>

            <view v-if="listdata.length>0">
              <activity-item v-for="(item, index) in listdata" :key="index" :online="item.is_online" :techerimg="item.avatar" :biaoti="item.title" :laoshi="item.description" :star="item.s_time" :end="item.e_time" :hearimg="item.teacher_avatar" :teachername="item.teacher_name" :hours="Number(item.hours)" :minutes="Number(item.minutes)" :seconds="Number(item.seconds)" :pers="item.signup_member?.total || 0" :money="item.price" :imgs="item.signup_member?.items || []" :signedUp="item.hadSignup" @signup="() => handleSignup1(item.id)" />
            </view>
            <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;width: 730rpx;">
              <image style="width:400rpx;height: 400rpx;" src="@/static/img/noAct.png" mode="aspectFit" />
            </view>
          </view>
          <view v-if="current === 1">
            <view v-if="listdata3.length>0">
              <activity-item v-for="(item, index) in listdata3" :key="index" :online="item.is_online" :techerimg="item.avatar" :biaoti="item.title" :laoshi="item.description" :star="item.s_time" :end="item.e_time" :hearimg="item.teacher_avatar" :teachername="item.teacher_name" :hours="Number(item.hours)" :minutes="Number(item.minutes)" :seconds="Number(item.seconds)" :pers="item.signup_member?.total || 0" :money="item.price" :imgs="item.signup_member?.items || []" :signedUp="item.hadSignup" @signup="() => handleSignupOnline(item.id)" />
            </view>
            <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;">
              <image style="width:400rpx;height: 400rpx;" src="@/static/img/noAct.png" mode="aspectFit" />
            </view>

            <view class="oper_title_text1"> 往期回顾 </view>

            <view>
              <view v-if="listdata1.length>0">
                <activity-item v-for="(item, index) in listdata1" :key="index" :online="item.is_online" :techerimg="item.avatar" :biaoti="item.title" :laoshi="item.description" :star="item.s_time" :end="item.e_time" :hearimg="item.teacher_avatar" :teachername="item.teacher_name" :hours="Number(item.hours)" :minutes="Number(item.minutes)" :seconds="Number(item.seconds)" :pers="item.signup_member?.total || 0" :money="item.price" :imgs="item.signup_member?.items || []" :signedUp="item.hadSignup" @signup="() => handleSignup(item.id)" />
              </view>

              <view v-else class="kong" style="display: flex; justify-content: center; align-items: center; height: 500rpx;width: 730rpx;">
                <image style="width:400rpx;height: 400rpx;" src="@/static/img/noAct.png" mode="aspectFit" />
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
import {
  onLoad,
  onShow,
  onPullDownRefresh,
  onReachBottom,
} from '@dcloudio/uni-app';
export default {
  components: {
    ActivityItem,
  },
  data() {
    return {
      statusBarHeight: '',
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
      listdata2: [
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
      listdata3: [
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
      timer: null,
      currentPage: 1,
      isLoading: false,

    }
  },

  //   computed: {
  //     listdata() {
  //       const store = useStore()
  //       return store.listdata // 从 Pinia 存储中获取 listdata
  //     },

  //   },
  onPullDownRefresh() {
    this.fetchActivityData()
    uni.stopPullDownRefresh();
  },
  // onReachBottom() {
  //   if (this.isLoading) return;
  //   this.currentPage++;
  //   let noData = this.fetchActivityData()
  //   console.log(noData, '++++')
  //   // 判断 noData 的状态
  //   if (noData) {
  //     // 提示没有更多数据
  //     uni.showToast({
  //       title: '没有更多数据',
  //       icon: 'none',
  //       duration: 2000 // 持续时间，单位为毫秒
  //     });
  //     this.isLoading = true; // 防止多次请求
  //   }
  //   // uni.stopPullDownRefresh();
  // },
  onReachBottom() {
    if (this.isLoading) return; // 如果正在加载，直接返回
    this.currentPage++;

    // 保存当前数组长度以便后续比较
    const currentLength1 = this.listdata1.length;
    const currentLength2 = this.listdata2.length;
    const currentLength3 = this.listdata3.length;
    const currentLength4 = this.listdata4.length;

    this.fetchActivityData().then(() => {
      const newLength1 = this.listdata1.length;
      const newLength2 = this.listdata2.length;
      const newLength3 = this.listdata3.length;
      const newLength4 = this.listdata4.length;
      // 检查新的数组长度
      if (
        newLength1 === currentLength1 &&
        newLength2 === currentLength2 &&
        newLength3 === currentLength3 &&
        newLength4 === currentLength4
      ) {
        // 如果数组长度没有增加，重置加载状态
        this.isLoading = true;
      } else {
        // 如果成功加载新的数据，保持加载状态为 false
        this.isLoading = false;
      }
    }).catch(() => {
      this.isLoading = false; // 如果请求失败，重置状态
    });
  },
  onLoad() {
    this.statusBarHeight = getApp().globalData.top;
    this.isLoading = true;
    // this.startCountdown() // 开始倒计时
  },
  onShow() { this.fetchActivityData(); this.isLoading = false; },
  onUnload() {
    // this.stopCountdown() // 页面卸载时停止倒计时
  },

  mounted() {
    // this.updateCountdown()
    // 页面加载时请求数据
    this.updateCountdown()
    // this.timer = setInterval(this.updateCountdown, 1000);
  },
  methods: {
    async fetchActivityData() {
      try {
        const params = {
          limit: 7,
          page: this.currentPage,
          end_activity: 1,
          is_online: this.current === 0 ? 1 : 0 // 根据当前状态设置在线状态
        };

        const params1 = {
          limit: 7,
          page: this.currentPage,
          is_online: this.current === 0 ? 1 : 0 // 根据当前状态设置在线状态
        };
        // const store = useStore()
        // 已结束的活动
        const response = await fetchActivityCourseList(params);

        //正在进行中的活动
        const afoot = await fetchActivityCourseList(params1);
        if (response.items && response.items.length === 0 && afoot.items && afoot.items.length === 0) {
          // 返回特定值以表明没有更多数据
          return true; // 表示没有更多数据
        }
        console.log(response)
        if (this.current.value === 0) {

          //线上已结束
          // this.listdata1 = response.items || [];

          // 线上已结束
          this.listdata1 = response.items.map(item => ({
            ...item,          // 保留原有的属性
            hours: 0,       // 增加时字段，初始化为0
            minutes: 0,     // 增加分字段，初始化为0
            seconds: 0      // 增加秒字段，初始化为0
          }));

          //线上进行中
          // this.listdata2 = afoot.items || [];
          // 线上进行中
          this.listdata2 = afoot.items.map(item => ({
            ...item,          // 保留原有的属性
            hours: 0,       // 增加时字段，初始化为0
            minutes: 0,     // 增加分字段，初始化为0
            seconds: 0      // 增加秒字段，初始化为0
          }));
          // store.setOnlineOngoingActivities(this.listdata1)
          // uni.getStorageSync('onlineOngoingActivities', listdata1)
        } else {
          //线下已结束
          // this.listdata = response.items || [];
          this.listdata = response.items.map(item => ({
            ...item,          // 保留原有的属性
            hours: 0,       // 增加时字段，初始化为0
            minutes: 0,     // 增加分字段，初始化为0
            seconds: 0      // 增加秒字段，初始化为0
          }));

          //线下进行中
          // this.listdata3 = afoot.items || [];
          this.listdata3 = afoot.items.map(item => ({
            ...item,          // 保留原有的属性
            hours: 0,       // 增加时字段，初始化为0
            minutes: 0,     // 增加分字段，初始化为0
            seconds: 0      // 增加秒字段，初始化为0
          }));

          // store.setOfflineOngoingActivities(this.listdata)
          // uni.getStorageSync('offlineOngoingActivities', listdata)
        }
        console.log(this.listdata)
        console.log(this.listdata1)
      } catch (error) {
        console.error("获取活动数据失败:", error);
      }
    },
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex
        this.fetchActivityData(); // 切换时重新请求数据
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
    handleSignup(id) {
      const params = {
        limit: 7,
        page: 1,
        end_activity: 1,

      };
      // const paramsString = encodeURIComponent(JSON.stringify(params));
      uni.navigateTo({
        url: `/pages/pagesall/home/signUp?id=${id}&limit=${params.limit}&page=${params.page}&end_activity=${params.end_activity}` // 确保替换为相应的页面路径
      });
    },
    handleSignup1(id) {
      const params = {
        limit: 7,
        page: 1,
        end_activity: 1,

      };
      // const paramsString = encodeURIComponent(JSON.stringify(params));
      uni.navigateTo({
        url: `/pages/pagesall/home/signUp?id=${id}&limit=${params.limit}&page=${params.page}&end_activity=${params.end_activity}` // 确保替换为相应的页面路径
      });
    },

    handleSignupXSline(id) {
      const params = {
        limit: 7,
        page: 1,
        end_activity: 1,
        is_online: 1 // 根据当前状态设置在线状态
      };

      uni.navigateTo({
        url: `/pages/pagesall/home/signUp?id=${id}&limit=${params.limit}&page=${params.page}&end_activity=${params.end_activity}&is_online=${params.is_online}` // 确保替换为相应的页面路径
      });
    },
    handleSignupOnline(id) {
      // 在此处可以解析请求参数
      const params = {
        limit: 7,
        page: 1,
        end_activity: 1,
        is_online: 0// 根据当前状态设置在线状态
      };

      uni.navigateTo({
        url: `/pages/pagesall/home/signUp?id=${id}&limit=${params.limit}&page=${params.page}&end_activity=${params.end_activity}&is_online=${params.is_online}` // 确保替换为相应的页面路径
      });
    },
    formatTime(value) {
      // 确保时间总是两位数
      return value.toString().padStart(2, '0')
    },
    // 监听 listdata 的变化
    //     watch(listdata, (newListdata) => {
    //   updateCountdown()
    //   console.log(newListdata)
    // }),
    updateCountdown() {
      const currentDateTimestampInMilliseconds = new Date().getTime();
      const now = Math.floor(currentDateTimestampInMilliseconds / 1000);

      this.listdata.forEach(item => {
        // const newItem = { ...item };
        if (!isNaN(item.end_time)) {
          const timeDiff = item.end_time - now;
          console.log(timeDiff)
          if (timeDiff > 0) {
            item.hours = Math.floor(timeDiff / 3600);
            item.minutes = Math.floor((timeDiff % 3600) / 60);
            item.seconds = timeDiff % 60;
            this.intervalId = setInterval(this.updateCountdown, 1000) // 每秒更新一次

          } else {

            item.hours = item.minutes = item.seconds = 0; // 时间到达
            clearInterval(this.intervalId) // 停止计时器
            this.intervalId = null
          }
          // console.log('Updated time for item:', item.hours, item.minutes, item.seconds);
        } else {
          item.hours = item.minutes = item.seconds = 0; // 处理无效时间
        }
        // console.log('Updated time:', item.hours, item.minutes, item.seconds);
        // return newItem;
      });

      // store.setListdataIndex(listdataIndex.value); // 更新 store
    },

    btnsignup(id) {
      // const paramsString = encodeURIComponent(JSON.stringify(params));
      // uni.navigateTo({
      //   url: `/pages/pagesall/home/signUp?id=${id}&params=${paramsString}` // 确保替换为相应的页面路径
      // });
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
  margin-bottom: 40rpx;
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
