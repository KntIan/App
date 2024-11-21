<template>
  <view>
    <view class="learn_title">
      <img src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/abf07bd571444c73aceb1d1b20093538_mergeImage.png" alt="" @click="back_learn" />
      <view>视频学习</view>
    </view>

    <!-- 确保在这里先检查 learnList 和 learnList.font_data 是否存在 -->
    <video v-if="learnList && learnList.font_data && learnList.font_data.length > 0" @play="playAudio" @pause="pauseAudio" @ended="stopAudio" class="learn_video" :src="learnList.font_data[0].video" muted='true'>
    </video>
    <!-- <audio class="learn_audio" src="https://lv-sycdn.kuwo.cn/54b050f63f0cf2c46e7ad4a70bb2fb29/6734043a/resource/30106/trackmedia/M800001DZgUf2NfnXZ.mp3" controls></audio> -->
    <!-- <button @click="playAudio">播放音频</button>
  <button @click="pauseAudio">暂停音频</button>
  <button @click="stopAudio">停止音频</button> -->
    <view class="learn_text" v-if="learnList.font_data && learnList.font_data.length > 0">
      {{learnList[0].content}}
    </view>
    <view class="actiClass">
      <view class="act_itme">
        <view class="list_index">
          <view class="act_Img">
            <img :src="learnList[0].sub_image" alt="" />
            <view class="act_Teacher">
              <text>{{learnList[0].teacher_name}}</text>
              <text style="font-size: 20rpx; margin-top: 10rpx;">授课</text>
            </view>
            <view class="act_time">
              <text style="font-size: 24rpx;">距结束还剩:</text>
              <view class="time_textbox">
                <text style="font-size: 20rpx;padding: 3rpx 5rpx 3rpx 5rpx;border-radius: 5rpx;">{{ hours}}</text>
                <text style="font-size: 20rpx;background-color	:#fff;color: #F53C38;">:</text>
                <text style="font-size: 20rpx;padding: 3rpx 5rpx 3rpx 5rpx;border-radius: 5rpx;">{{ minutes}}</text>
                <text style="font-size: 20rpx;background-color:#fff;color: #F53C38;">:</text>
                <text style="font-size: 20rpx;padding: 3rpx 5rpx 3rpx 5rpx;border-radius: 5rpx;">{{ seconds}}</text>
              </view>
            </view>
          </view>
        </view>
        <view class="peo_text">
          已有30人学习
        </view>
      </view>
    </view>

    <view class="input_leabox">
      <view class="ipt_learn">
        <textarea type="text" placeholder="本次横撇斜钩教学视频：相关作业就是多写多练多练多写" class="input_padd" />
      </view>
      <view class="btn_leabox">
        提交作业
      </view>
    </view>
  </view>

</template>

<script>
import { fetchHomeworkAudio } from '@/utils/api'
export default {
  data() {
    return {
      images: [
        '/static/img/swiper1.png',
        'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdadd194d15ae0a321cf1b69b42b82fbdb401e127f68d9e091f73b2ef2c6682a6',
        '/static/img/swiper1.png'
      ],
      listdata: [{
        biaoti: "书法综合突破集训营(赠教学视频)",
        laoshi: " 书法综合突破集训营主导讲师刘老师经验丰富…",
        star: "2024.8.22",
        end: "2024.8.24",
        hearimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1',
        techerimg: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775',
        teachername: '李衣裳',
        pers: '2034',
        money: '免费',
        online: '线上',

        planum: '26000',
        quenum: '15999'
      }],
      hours: '',
      minutes: '',
      seconds: '',
      intervalId: null, // 保存计时器ID
      audioContext: null,// 用于存储音频上下文的引用
      videoContext: null, // 用于存储音频上下文的引用
      learnList: {
        font_data: [], // 初始化为一个数组，用于存储音频或视频信息
        info: [] // 初始化为一个数组，用于存储其他相关信息
      },
      homeworkFinishTime: null
    };
  },
  onLoad() {
    this.startCountdown(); // 开始倒计时

    // 创建音频上下文
    this.audioContext = uni.createInnerAudioContext();
    this.loadHomeworkAudio(); // 加载音频路径
    // this.audioContext.src = 'https://lv-sycdn.kuwo.cn/54b050f63f0cf2c46e7ad4a70bb2fb29/6734043a/resource/30106/trackmedia/M800001DZgUf2NfnXZ.mp3'; // 设置音频源地址
  },
  onUnload() {
    this.stopCountdown(); // 页面卸载时停止倒计时
    this.audioContext.destroy(); // 销毁音频上下文
  },
  mounted() {
    this.loadHomeworkAudio(); // 在组件挂载时加载数据
  },
  methods: {

    async loadHomeworkAudio() {
      try {
        const response = await fetchHomeworkAudio(); // 调用 API 请求
        console.log('获取到的数据:', response.items); // 打印获取的数据

        // 清空之前的数据
        this.learnList.font_data = []; // 确保是空数组
        this.learnList.info = []; // 确保是空数组

        // 检查获取到的数据并赋值

        this.learnList.font_data = response.items.font_data || []; // 存储音频或视频信息
        this.learnList.info = [response.items[0]]; // 将完整的第一个元素放入 info 数组中

        console.log('Font Data:', this.learnList.font_data); // 打印音频或视频信息
        console.log('Info Data:', this.learnList.info); // 打印相关信息

        // 检查并设置音频源
        if (this.learnList.font_data.length > 0) {
          const audioSrc = this.learnList.font_data[0].voice_url; // 获取音频 URL
          this.audioContext.src = audioSrc; // 设置音频源地址
        }

      } catch (error) {
        console.error('获取作业失败:', error); // 错误处理
      }
    },


    // loadHomeworkAudio() {
    //   const audioSrc = 'https://lv-sycdn.kuwo.cn/54b050f63f0cf2c46e7ad4a70bb2fb29/6734043a/resource/30106/trackmedia/M800001DZgUf2NfnXZ.mp3'; // 这里替换为动态获取的路径
    //   this.audioContext.src = audioSrc; // 设置音频源地址


    // },

    playAudio() {
      this.audioContext.play(); // 播放音频
    },
    pauseAudio() {
      this.audioContext.pause(); // 暂停音频
    },
    stopAudio() {
      this.audioContext.stop(); // 停止音频
    },
    formatTime(value) {
      // 确保时间总是两位数
      return value.toString().padStart(2, '0');
    },
    updateCountdown() {
      // 假设 homeworkFinishTime 是一个字符串，您可以直接将其转换为 Date 对象
      let end = new Date(this.homeworkFinishTime); // 将 homeworkFinishTime 转换为 Date 对象
      let now = new Date(); // 当前时间

      // 计算时间差
      let timeDiff = end - now;

      // 将计算结果应用于您的列表
      if (timeDiff > 0) {
        let totalSeconds = Math.floor(timeDiff / 1000); // 总秒数
        let hours = Math.floor(totalSeconds / 3600); // 小时
        let minutes = Math.floor((totalSeconds % 3600) / 60); // 分钟
        let seconds = totalSeconds % 60; // 秒

        // 格式化小时、分钟和秒
        // 此处可以将结果用于固定的 displayBox，或在 listdata 中分配给特定项
        this.hours = this.formatTime(hours);
        this.minutes = this.formatTime(minutes);
        this.seconds = this.formatTime(seconds);
      } else {
        // 倒计时结束，设置为 00:00:00
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
      }
    },


    startCountdown() {
      this.updateCountdown(); // 初始化
      this.intervalId = setInterval(this.updateCountdown, 1000); // 每秒更新一次
    },
    stopCountdown() {
      if (this.intervalId) {
        clearInterval(this.intervalId); // 停止计时器
        this.intervalId = null;
      }
    },
    back_learn() {
      uni.navigateBack()
    },
    btnsignup() {

    },
  }
}
</script>

<style>
.learn_title {
  display: flex;
  padding: 20rpx;
}

.learn_title view {
  width: 100%;
  text-align: center;
}

.learn_video {
  width: 100%;
}

.learn_text {
  font-weight: 600;
  font-size: 48rpx;
  color: #000000;
  margin: 28rpx 0 0 28rpx;
}

.input_leabox {
  display: flex;
  justify-content: center;
  position: relative;
}

.btn_leabox {
  position: absolute;
  bottom: 5%;
  padding: 15rpx 40rpx 15rpx 40rpx;
  background-color: #ff9e02;
  color: #fff;
  border-radius: 40rpx;
}

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

.peo_text {
  position: absolute;
  bottom: 20%;
  right: 28rpx;
  font-weight: 500;
  font-size: 24rpx;
  color: #000000;
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

.actitme_Text1 {
  padding-top: 12rpx;
  padding-bottom: 8rpx;
}

.actitmeText3 {
  padding-top: 16rpx;
  padding-bottom: 28rpx;
}

.ipt_learn {
  width: 694rpx;
  height: 740rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #d7d7d7;
  border-radius: 5rpx;
}

.ipt_learn textarea {
  width: 694rpx;
  height: 740rpx;
}
</style>