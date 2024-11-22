<template>
  <view class="homePage">
    <view class="titleHome">
      <view class="nameId">
        <view class="head">
          <img src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/dc222dae1c45493a96cd7da35e8a1a38_mergeImage.png" alt="" />
        </view>
        <view class="name">
          <text class="textname">刘易阳</text>
          <text class="textid">ID:000000</text>
        </view>
        <view class="classID">书法一班</view>
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
      <text class="postext">湛江市-霞山区-京广路校区</text>
    </view>

    <swiper class="swiper-container" indicator-dots autoplay interval="3000" circular indicator-color="#ddd" indicator-active-color="#333">
      <swiper-item v-for="(item, index) in images" :key="index" @click="() => swiper_click(item)">
        <image :src="item" class="swiper-image"></image>
      </swiper-item>
    </swiper>

    <view class="showbox">
      <view class="showimg">
        <img src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/18d1eafb43df40dd8a2c22c0b95e5326_mergeImage.png" alt="" class="showimg1" />
      </view>
      <view class="showtext">
        <text class="text-content">鲁迅先生说：“唯有民魂是值得宝贵的，唯
          有让它发扬起来，中国才能进步！”泽熙书
          法进行书法教育，正是要使学生从中体验民
          族的精神与魂魄，引导他们热爱祖国及其文
          化。研学是换种方式带孩子们去体会中国深 厚的文化底蕴…{{
            images.content
          }}</text>
      </view>
    </view>

    <view class="works">
      <text class="worktext">优秀作品</text>
      <view class="worksImgs">
        <view class="worksimgbox" v-for="(item, index) in excellentWorks" :key="index">
          <img :src="item.img" alt="" />
        </view>
      </view>
    </view>

    <view class="students" @click="linshi">
      <text class="stutext">学员风采</text>
      <view class="stusImgs">
        <view class="stuimgbox" v-for="(item, index) in studentShowcase" :key="index">
          <img :src="item" alt="" />
        </view>
      </view>
    </view>

    <view class="actiClass">
      <view class="actText">
        <text>活动课</text>
        <text style="font-size: 24rpx; color: #666666">更多</text>
      </view>
      <view class="actitme" v-for="(item, index) in listdata" :key="index">
        <view class="linetext"></view>
        <view class="linetext1">{{ item.is_online === 1 ? "线上" : "线下" }}</view>
        <view class="techerImg">
          <img :src="item.techerimg" alt="" />
        </view>
        <view class="listindex">
          <view class="actitmeText1">{{ item.title }}</view>
          <view class="actitmeText2">{{ item.desc }}</view>
          <view class="actitmeText3">开课时间:{{ formatDate(item.start_date) }} -
            {{ formatDate(item.end_date) }}</view>
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
                    padding: 3rpx 5rpx;
                    border-radius: 5rpx;
                  ">{{ item.hours }}</text>
                <text style="
                    font-size: 20rpx;
                    background-color: #fff;
                    color: #f53c38;
                  ">:</text>
                <text style="
                    font-size: 20rpx;
                    padding: 3rpx 5rpx;
                    border-radius: 5rpx;
                  ">{{ item.minutes }}</text>
                <text style="
                    font-size: 20rpx;
                    background-color: #fff;
                    color: #f53c38;
                  ">:</text>
                <text style="
                    font-size: 20rpx;
                    padding: 3rpx 5rpx;
                    border-radius: 5rpx;
                  ">{{ item.seconds }}</text>
              </view>
            </view>
          </view>
          <view class="endbaoming">
            <view class="peopers">
              <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge82cb54448fe7b82f1100cbe1494f08248762c97952c5f2a8f4b9a26a743a00a" alt="" />
              <view class="peotext" style="font-size: 20rpx">{{ item.plan_num }}人报名</view>
              <view class="imgbox">
                <img v-for="(img, idx) in item.imgs" :src="img" :key="idx" style="position: absolute; right: calc(20rpx * {{ idx }}); z-index: {{ 10 - idx }}" />
              </view>
            </view>
            <view class="perbtn">
              <view class="permoney">{{
                item.money === "免费" ? "免费" : "￥" + item.money
              }}</view>
              <view class="gobtn" @click="btnsignup">立即报名</view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="infobox">
      <view class="infoText">
        <text>资讯</text>
        <text style="font-size: 24rpx; color: #666666">更多</text>
      </view>
      <view class="infolistbox" v-for="(item, index) in infoList" :key="index">
        <view class="infostr">
          <view class="huatibox">
            <img :src="item.titleimg" alt="" />
            <text style="font-size: 32rpx; font-weight: 500">{{
              item.title
            }}</text>
          </view>
          <view class="paddbox">
            <view class="titleText">{{ item.synopsis }}</view>
            <view class="huatibox">
              <img :src="item.image_input" alt="" />
              <text style="font-weight: 400; font-size: 24rpx; color: #666666">{{ item.add_time }}</text>
            </view>
            <view class="huatibox">
              <img :src="item.ressImg" alt="" />
              <text style="font-weight: 400; font-size: 24rpx">
                {{ item.url }}
              </text>
            </view>
          </view>
        </view>
        <view class="infoImg">
          <view class="proNum">
            <text style="font-weight: 400; font-size: 24rpx; color: #666666">
              {{ item.visit }}人已观看
            </text>
            <img :src="item.jiantouimg" alt="" style="width: 8rpx; height: 16rpx" />
          </view>
          <view class="proImg">
            <img :src="item.infoImg" alt="" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useStore } from "@/store";
import {
  fetchActivityCourseList
} from "@/utils/api";

const store = useStore();
const token = store.token;

const images = ref([
  "/static/img/swiper1.png",
  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdadd194d15ae0a321cf1b69b42b82fbdb401e127f68d9e091f73b2ef2c6682a6",
  "/static/img/swiper1.png",
]);
const listdata = ref([]);
const infoList = ref([]);
const studentShowcase = ref([]);
const excellentWorks = ref([]);
const intervalId = ref(null);

// const fetchData = async () => {
//   try {
//     const responses = await Promise.all([
//       fetchImages(token),
//       fetchExcellentWorks(token),
//       fetchStudentShowcase(token),
//       fetchActivityClasses(token),
//       fetchInfoList(token),
//     ]);

//     images.value = responses[0].data.list.map((item) => item.image.join(","));
//     excellentWorks.value = responses[1].data.list.map((item) => item.task_file);
//     studentShowcase.value = responses[2].data.list.map((item) => item.avatar);
//     listdata.value = responses[3].data.list;
//     infoList.value = responses[4].data;

//     updateCountdown();
//   } catch (error) {
//     console.error("数据请求失败", error);
//     uni.showToast({
//       title: "数据加载失败，请稍后再试",
//       icon: "error",
//       duration: 2000,
//     });
//   }
// };

const fetchData = async () => {
  try {
    const responses = await Promise.all([
      fetchActivityCourseList(token),
    ]);
    console.log(responses)
    listdata.value = responses[0].items;
    console.log(listdata.value)
  } catch (error) { }
}

onMounted(() => {
  fetchData();
  startCountdown();
});

onUnmounted(() => {
  stopCountdown();
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从0开始计算
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`; // 格式化为 YYYY.MM.DD
};

const formatTime = (value) => {
  return value.toString().padStart(2, "0");
};

const updateCountdown = () => {
  const now = new Date();
  listdata.value.forEach((item) => {
    const end = new Date(item.end_date);
    if (!isNaN(end)) {
      // 确保 end_date 可以被正确解析
      const timeDiff = end - now;
      if (timeDiff > 0) {
        const totalSeconds = Math.floor(timeDiff / 1000);
        item.hours = formatTime(Math.floor(totalSeconds / 3600));
        item.minutes = formatTime(Math.floor((totalSeconds % 3600) / 60));
        item.seconds = formatTime(totalSeconds % 60);
      } else {
        item.hours = item.minutes = item.seconds = "00";
      }
    } else {
      item.hours = item.minutes = item.seconds = "00"; // 如果无法解析则设为默认值
    }
  });
};

const startCountdown = () => {
  updateCountdown();
  intervalId.value = setInterval(updateCountdown, 1000);
};

const stopCountdown = () => {
  clearInterval(intervalId.value);
  intervalId.value = null;
};

const btnscan = () => {
  uni.scanCode({
    success: (res) => {
      console.log("条码类型：" + res.scanType);
      console.log("条码内容：" + res.result);
    },
    fail: (error) => {
      console.error("扫码失败", error);
      uni.showToast({ title: "扫码失败", icon: "error", duration: 2000 });
    },
  });
};

const btnsearch = () => {
  uni.navigateTo({ url: "/pages/pagesall/home/search" });
};

const btnmess = () => {
  uni.navigateTo({ url: "/pages/pagesall/home/message" });
};

const btnsignup = () => {
  uni.navigateTo({ url: "/pages/pagesall/home/signUp" });
};

const swiper_click = () => {
  uni.navigateTo({ url: "/pages/pagesall/home/game" });
};

const linshi = () => {
  uni.navigateTo({ url: "/pages/pagesall/home/chat" });
};
</script>

<style lang="scss" scoped>
.homePage {
  padding: 15rpx 20rpx;

  .titleHome {
    display: flex;
    justify-content: space-between;
  }

  .nameId {
    width: 40%;
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
    margin-right: 16rpx;
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
