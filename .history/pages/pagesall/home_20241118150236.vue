<template>
  <view class="homePage">
    <view class="titleHome">
      <view class="nameId">
        <view class="head">
          <img style="width:32px;height:32px;border-radius:50%;" :src="userInfo.avatar" />
        </view>
        <view class="name">
          <text class="textname">{{ userInfo.nickname }}</text>
          <text class="textid">ID:{{ userInfo.id }}</text>
        </view>
        <view class="classID">{{userInfo.classly_name}}</view>
      </view>
      <view class="buttonImg">
        <view class="btnimg1" @click="btnscan">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5e1b57899cb5b9cd47a8d4e301f4f736efd47c45ca7713a43d00721e94370714" alt="" />
        </view>
        <view class="btnimg2" @click="btnsearch">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1bc2ffa456b6fda7ad06eee0d2a6f3efd0c7b823b9eeef0c186995bff9b22e4e" alt="" />
        </view>
        <view class="btnimg3" @click="btnmess">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfb5a4b958665280ae8b1c0018d674845333615a9dc10f846fe95ad308c868f08" alt="" />
        </view>
      </view>
    </view>
    <view class="posit">
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01" alt="" />
      <text class="postext">{{userInfo.school_name}}</text>
    </view>

    <swiper class="swiper-container" indicator-dots autoplay interval="3000" circular indicator-color="#ddd" indicator-active-color="#333">
      <swiper-item v-for="(item, index) in images" :key="index" @click="() => swiper_click(index+1)">
        <image :src="item.thumb" class="swiper-image"></image>
      </swiper-item>
    </swiper>

    <view class="showbox">
      <view class="showimg">
        <img :src="studentAndstyle.logo" alt="" class="showimg1" />
      </view>
      <view class="showtext">
        <text class="text-content">{{
            studentAndstyle.remark
          }}</text>
      </view>
    </view>

    <view class="works">
      <text class="worktext">优秀作品</text>
      <view class="worksImgs">
        <view class="worksimgbox" v-for="(item, index) in studentAndstyle.studentShowcase" :key="index">
          <img style="width:198rpx;height:122rpx;margin-top:12rpx" :src="item.avatar  " alt="" />
        </view>
      </view>
    </view>

    <view class="students">
      <text class="stutext">学员风采</text>
      <view class="stusImgs">
        <view class="stuimgbox" v-for="(item, index) in studentAndstyle.excellentWorks" :key="index">
          <img style="width:108rpx;height:108rpx;border-radius: 32px;margin-top: -4px;margin-left: -2px;" :src="item.sub_image" alt="" />
        </view>
      </view>
    </view>

    <view class="actiClass">
      <view class="actText">
        <text>活动课</text>
        <text style="font-size: 24rpx; color: #666666" @click="activityLists">更多</text>
      </view>
      <activity-item v-for="(item, index) in listdata" :key="index" :online="item.is_online" :techerimg="item.avatar" :biaoti="item.title" :laoshi="item.description" :star="item.s_time" :end="item.e_time" :hearimg="item.teacher_avatar" :teachername="item.teacher_name" :hours="item.hours" :minutes="item.minutes" :seconds="item.seconds" :pers="item.signup_member.total" :money="item.price" :imgs="item.signup_member.items" :signedUp="item.hadSignup" @signup="() => handleSignup(item.id)" />

    </view>

    <view class="infobox">
      <view class="infoText">
        <text>资讯</text>
        <text style="font-size: 24rpx; color: #666666" @click="informationLists">更多</text>
      </view>
      <view class="infolistbox" v-for="(item, index) in infoList" :key="index" @click="goToDetail(item)">
        <view class="infostr">
          <view class="huatibox">
            <img :src="item.titleimg" alt="" />
            <text style="font-size: 32rpx; font-weight: 500;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{
              item.title
            }}</text>
          </view>
          <view class="paddbox">
            <view class="titleText">{{ item.description }}</view>
            <view class="huatibox">
              <img :src="item.image_input" alt="" />
              <text style="font-weight: 400; font-size: 24rpx; color: #666666;margin-left: 6px;">{{ item.addtime || '2022-01-01' }}</text>
            </view>
            <view class="huatibox">
              <img :src="item.ressImg" alt="" />
              <text style="font-weight: 400; font-size: 24rpx;margin-left: 6px;">
                {{ item.school_name || 'http://www.baidu.com' }}
              </text>
            </view>
          </view>
        </view>
        <view class="infoImg">
          <view class="proNum" :style="{ opacity: item.views === 0 ? 0 : 1 }">
            <text style="font-weight: 400; font-size: 24rpx; color: #666666;">
              {{ item.views }}人已观看
            </text>
            <img :src="item.jiantouimg" alt="" style="width: 8rpx; height: 16rpx" />
          </view>
          <view class="proImg">
            <img :src="item.thumb" alt="" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import ActivityItem from '@/components/ActivityItem/ActivityItem';
import { useStore } from '@/store'
import {
  fetchActivityCourseList,
  fetchBannerList,
  fetchNewsList,
  fetchMyStyle
} from '@/utils/api'

const store = useStore()
const token = store.token

// const images = ref([
//   "/static/img/swiper1.png",
//   "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdadd194d15ae0a321cf1b69b42b82fbdb401e127f68d9e091f73b2ef2c6682a6",
//   "/static/img/swiper1.png",
// ]);
const images = computed(() => store.images) // 从 store 中获取 images
const listdata = computed(() => store.listdata) // 从 store 中获取 listdata
const userInfo = computed(() => store.userinfo) // 从 store 中获取 listdata

const infoList = computed(() => store.infoList) // 从 store 中获取 listdata
// const studentShowcase = ref([])
// const excellentWorks = ref([])
//学员风采&优秀作品
const studentAndstyle = ref({
  studentShowcase: [], // 学员风采数组
  excellentWorks: []    // 优秀作品数组
});
const intervalId = ref(null)


//首页活动传入的值
const page = 1; // 示例：当前页面
const limit = 7; // 示例：每页数据条数
const isindex = 1; // 示例：是否是首页数据

const fetchData = async () => {
  try {
    const responses = await Promise.all([
      fetchActivityCourseList(token, page, limit, isindex), // 传入 page, limit, isindex
      fetchBannerList(token),
      fetchNewsList(token),
      fetchMyStyle(token)
    ])
    console.log(responses)
    store.setListdata(responses[0].items)
    store.setImages(responses[1].items)
    // 遍历响应中的 items 并添加 titleimg
    const infoList = responses[2].items.map(item => ({
      ...item,          // 保留原有的属性
      titleimg: item.titleimg || 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng73002970eb6951969634d1ac818f9fbd983ad92340d21cf601ab0d495647806c',
      image_input: item.image_input || 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9124bf95026b34308d6bd993d7c3774578aa0f9fdf293cc08d4cb043bc1ba5a8',
      ressImg: item.ressImg || 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01',
      jiantouimg: item.jiantouimg || 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6deab9d71966dbbdc8297bb42543232fd5ab80e8f1b6e7650f9a66310b4f656e',
    }));
    store.setInfoList(infoList);
    studentAndstyle.value = responses[3].data
    // 这里是给 studentAndstyle 的数组赋值
    if (responses[3] && responses[3].data) {
      studentAndstyle.value.studentShowcase = responses[3].data.nice || []; // 确保赋值为数组
      studentAndstyle.value.excellentWorks = responses[3].data.stud || [];  // 确保赋值为数组
    }
    // console.log(studentAndstyle.value)
    // console.log(studentAndstyle.value.studentShowcase)
    // console.log('listdata.value', listdata.value)
    // console.log('images.value', images.value)
    // console.log('infoList.value', infoList.value)
  } catch (error) { }
}

onMounted(() => {
  fetchData()
  startCountdown()
})

onUnmounted(() => {
  stopCountdown()
})
// 跳转到详情页面的函数
const goToDetail = (item) => {
  uni.navigateTo({
    url: `/pages/pagesall/home/informationDetailsmess?id=${item.id}` // 确保将 item.id 修改为您的详情页所需的参数
  });
};
const activityLists = () => {
  uni.switchTab({ url: '/pages/pagesall/oper' })
};
const formatDate = (dateString) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0') // 月份从0开始计算
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}.${month}.${day}` // 格式化为 YYYY.MM.DD
}

const formatTime = (value) => {
  return value.toString().padStart(2, '0')
}

const updateCountdown = () => {
  const now = new Date()
  listdata.value.forEach((item) => {
    const end = new Date(item.end_time)
    console.log('end++++++++', end)
    if (!isNaN(end)) {
      // 确保 end_date 可以被正确解析
      const timeDiff = end - now
      console.log(timeDiff)
      if (timeDiff > 0) {
        const totalSeconds = Math.floor(timeDiff / 1000)
        item.hours = formatTime(Math.floor(totalSeconds / 3600))
        item.minutes = formatTime(Math.floor((totalSeconds % 3600) / 60))
        item.seconds = formatTime(totalSeconds % 60)
        console.log('item.hours', item.hours)
        console.log('item.minutes', item.minutes)
        console.log('item.seconds', item.seconds)
      } else {
        item.hours = item.minutes = item.seconds = '00'
      }
    } else {
      item.hours = item.minutes = item.seconds = '00' // 如果无法解析则设为默认值
    }
  })
}

const startCountdown = () => {
  updateCountdown()
  intervalId.value = setInterval(updateCountdown, 1000)
}

const stopCountdown = () => {
  clearInterval(intervalId.value)
  intervalId.value = null
}

const btnscan = () => {
  uni.scanCode({
    success: (res) => {
      console.log('条码类型：' + res.scanType)
      console.log('条码内容：' + res.result)
    },
    fail: (error) => {
      console.error('扫码失败', error)
      uni.showToast({ title: '扫码失败', icon: 'error', duration: 2000 })
    },
  })
}

const btnsearch = () => {
  uni.navigateTo({ url: '/pages/pagesall/home/search' })
}

const btnmess = () => {
  uni.navigateTo({ url: '/pages/pagesall/home/message' })
}
const informationLists = () => {
  uni.navigateTo({ url: '/pages/pagesall/home/informationDetails' })
}

const handleSignup = (id) => {

  uni.navigateTo({
    url: `/pages/pagesall/home/signUp?id=${id}` // 确保替换为相应的页面路径
  });
}

const swiper_click = (index) => {
  console.log('当前点击的轮播图下标:', index); // 打印下标
  store.setSelectedSwiperIndex(index);
  uni.navigateTo({ url: '/pages/pagesall/home/game' })
}

const linshi = () => {
  uni.navigateTo({ url: '/pages/pagesall/home/chat' })
}
</script>

<style lang="scss" scoped>
.homePage {
  padding: 15rpx 20rpx;

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
    // justify-content: space-evenly;
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
    box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
    margin-top: 16rpx;
    border-radius: 16rpx;
    position: relative;
    background-color: #eeeeee;

    .techerImg {
      position: absolute;
      right: 0;
      bottom: 15%;

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
    width: 580rpx;
    background: #ffffff;
    box-shadow: 0rpx 4rpx 8rpx 2rpx rgba(0, 0, 0, 0.05);
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
}
</style>
