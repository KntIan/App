<template>
  <view>
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view
      v-if="learnList && learnList.font_data && learnList.font_data.length > 0"
    >
      <!-- <view class="learn_title">
        <img
          src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/abf07bd571444c73aceb1d1b20093538_mergeImage.png"
          alt=""
          @click="back_learn"
        />
        <view>视频学习</view>
      </view> -->

      <!-- 确保在这里先检查 learnList 和 learnList.font_data 是否存在 -->
      <video
        v-if="currentVideoIndex !== null && learnList.font_data.length > 0"
        @play="playAudio"
        @pause="pauseAudio"
        @ended="nextVideo"
        class="learn_video"
        :src="learnList.font_data[currentVideoIndex].video"
        muted="true"
      ></video>

      <view class="learn_text">
        {{ learnList.font_data[currentVideoIndex].handout }}
      </view>
      <view class="actiClass">
        <view class="act_itme">
          <view class="list_index">
            <view class="act_Img">
              <img
                v-if="learnList.info && learnList.info.sub_image"
                :src="learnList.info.sub_image"
                alt=""
              />
              <view class="act_Teacher">
                <text v-if="learnList.info && learnList.info.teacher_name">{{
                  learnList.info.teacher_name
                }}</text>
                <text style="font-size: 20rpx; margin-top: 10rpx">授课</text>
              </view>
              <!-- <view class="act_time">
								<text style="font-size: 24rpx">距结束还剩:</text>
								<view class="time_textbox">
									<uni-countdown style="margin-left: -30rpx" :hour="testHour" :minute="testMinute"
										:second="testSecond" color="#FFFFFF" background-color="#007AFF" />
								</view>
							</view> -->
            </view>
          </view>
          <view class="peo_text">
            已有{{ learnList.font_data[currentVideoIndex].views }}人学习
          </view>
        </view>
      </view>

      <!-- <view class="input_leabox">
        <view class="ipt_learn">
          <textarea
            type="text"
            placeholder="本次横撇斜钩教学视频：相关作业就是多写多练多练多写"
            class="input_padd"
          />
        </view>
        <view
          class="btn_leabox"
          @click="isSubmitDisabled ? submit : submitHomework"
          :style="{
            backgroundColor: isSubmitDisabled ? '#d7d7d7' : '#ff9e02',
            color: isSubmitDisabled ? '#999' : '#fff',
          }"
        >
          提交作业
        </view>
      </view> -->
    </view>

    <view
      v-else
      class="kong"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      "
    >
      <image
        style="width: 400rpx; height: 400rpx"
        src="@/static/img/noVideo.png"
        mode="aspectFit"
      />
    </view>
  </view>
</template>

<script>
import {
  fetchHomeworkAudio,
  submitHomework,
  goStudyFromRecentList,
} from '@/utils/api';
import { aesEncrypt, aesDecrypt } from '@/utils/utils.js';
export default {
  data() {
    return {
      images: [
        '/static/img/swiper1.png',
        'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdadd194d15ae0a321cf1b69b42b82fbdb401e127f68d9e091f73b2ef2c6682a6',
        '/static/img/swiper1.png',
      ],
      listdata: [
        {
          biaoti: '书法综合突破集训营(赠教学视频)',
          laoshi: ' 书法综合突破集训营主导讲师刘老师经验丰富…',
          star: '2024.8.22',
          end: '2024.8.24',
          hearimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1',
          techerimg:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775',
          teachername: '李衣裳',
          pers: '2034',
          money: '免费',
          online: '线上',

          planum: '26000',
          quenum: '15999',
        },
      ],
      testHour: 0,
      testMinute: 0,
      testSecond: 0,
      intervalId: null, // 保存计时器ID
      audioContext: null, // 用于存储音频上下文的引用
      videoContext: null, // 用于存储音频上下文的引用
      learnList: {
        font_data: null, //
      },
      homeworkFinishTime: null,
      statusBarHeight: '',
      isSubmitDisabled: false,
      currentVideoIndex: 0,
    };
  },
  onLoad(options) {
    const homework_id = options.homework_id;
    const content_id = options.content_id;
    const url = options.url;

    uni.request({
      url: url,
      header: {
        token: uni.getStorageSync('token'),
      },
      method: 'GET',
      success: (response) => {
        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data.items
        ) {
          // 清空之前的数据
          this.learnList.font_data = []; // 确保是空数组
          // this.learnList.info = [] // 确保是空数组

          // 检查获取到的数据并赋值

          this.learnList.font_data = response.data.data.items || {}; // 存储音频或视频信息

          // 检查并设置音频源
          if (this.learnList.font_data.length > 0) {
            const audioSrc = this.learnList.font_data[0].voice_url; // 获取音频 URL
            this.audioContext.src = audioSrc; // 设置音频源地址
          }
          this.updateCountdown();
        }
      },
      fail: (error) => {
        console.log(error);
      },
    });

    this.statusBarHeight = getApp().globalData.top;

    // 创建音频上下文
    this.audioContext = uni.createInnerAudioContext();
    if (homework_id) {
      this.loadHomeworkAudio(homework_id);
    } else {
      this.loadStudyFrom(content_id);
    }
    // this.loadHomeworkAudio(homework_id) // 加载音频路径
    // this.audioContext.src = 'https://lv-sycdn.kuwo.cn/54b050f63f0cf2c46e7ad4a70bb2fb29/6734043a/resource/30106/trackmedia/M800001DZgUf2NfnXZ.mp3'; // 设置音频源地址

    // this.loadStudyFrom(content_id)
  },
  onUnload() {
    // this.stopCountdown() // 页面卸载时停止倒计时
    this.audioContext.destroy(); // 销毁音频上下文
  },

  methods: {
    async loadStudyFrom(content_id) {
      try {
        const data = {
          content_id: content_id,
        };
        const paramsString = JSON.stringify(data) + '|$~|~$|';
        const encryptedId = encodeURIComponent(aesEncrypt(paramsString)); // 使用 encodeURIComponent 转义加密后的字符串

        let p = { params: encryptedId };
        const response = await goStudyFromRecentList(p); // 调用 API 请求
        // console.log('获取到的数据:', response.items); // 打印获取的数据
        if (response && response.data && response.data.items) {
          // 清空之前的数据
          this.learnList.font_data = []; // 确保是空数组
          // this.learnList.info = [] // 确保是空数组

          // 检查获取到的数据并赋值

          this.learnList.font_data = response.data.items || {}; // 存储音频或视频信息

          // 检查并设置音频源
          if (this.learnList.font_data.length > 0) {
            const audioSrc = this.learnList.font_data[0].voice_url; // 获取音频 URL
            this.audioContext.src = audioSrc; // 设置音频源地址
          }
          this.updateCountdown();
        }
      } catch (error) {
        console.error('获取作业失败:', error); // 错误处理
      }
    },
    async submitHomework() {
      uni.chooseImage({
        count: 1, // 选择的图片数量
        sourceType: ['camera', 'album'], // 选择的来源，'camera' 表示使用摄像头
        success: (res) => {
          // console.log('选择的图片:', res.tempFilePaths);
          this.images = res.tempFilePaths; // 保存选择的图片路径

          // 在这里，您可以选择将图片上传到服务器
          this.uploadImage(res.tempFilePaths[0]); // 上传第一张选择的图片
        },
        fail: (err) => {
          console.error('选择图片失败:', err);
        },
      });
    },

    async uploadImage(filePath) {
      // 处理上传图片的逻辑
      try {
        const uploadResult = await uni.uploadFile({
          url: 'http://admin.zexishuhua.com/api/user/submithomework', // 替换为您的上传接口
          filePath: filePath,
          name: 'file', // 根据后端要求设置文件字段的名称
          formData: {
            homework_id: this.learnList.info.id, // 将 homework_id 添加到 formData 中
            token: uni.getStorageSync('token'),
            // 其他需要发送的数据
          },
        });

        // 解析后台返回的结果
        const response = JSON.parse(uploadResult.data);
        // console.log('上传结果:', response);

        // 检查返回的 code 并提示用户
        if (response.code === 1) {
          uni.showToast({
            title: response.msg, // 从接口返回的消息
            icon: 'none',
            duration: 2000, // 提示显示2秒
          });
          uni.navigateBack();
        } else {
          // 处理其他可能的状态码
          uni.showToast({
            title: '上传失败，请重试', // 默认的失败提示
            icon: 'none',
            duration: 2000, // 提示显示2秒
          });
        }
      } catch (error) {
        console.error('上传失败:', error);
        // 在上传失败时提醒用户
        uni.showToast({
          title: '上传异常，请稍后再试',
          icon: 'none',
          duration: 2000, // 提示显示2秒
        });
      }
    },

    async loadHomeworkAudio(homework_id) {
      try {
        let params = { homework_id: homework_id };
        const paramsString = JSON.stringify(params) + '|$~|~$|';
        const encryptedId = encodeURIComponent(aesEncrypt(paramsString)); // 使用 encodeURIComponent 转义加密后的字符串
        const encryptedId1 = decodeURIComponent(encryptedId); // 使用 encodeURIComponent 转义加密后的字符串
        console.log(encryptedId1, 'decode');
        console.log(encryptedId1.length, 'decode length');
        console.log(encryptedId, '+++++');
        console.log(encryptedId.length, '长度');
        let s = 'cBIXiKijKGsAv0Yi%2BvqrLuBtfCraXUv7FbFVDmvaUaY%3D';
        console.log(s.length, 's');
        let p = { params: encryptedId };
        const response = await fetchHomeworkAudio(p); // 调用 API 请求
        // console.log('获取到的数据:', response.items); // 打印获取的数据

        // 清空之前的数据
        this.learnList.font_data = []; // 确保是空数组
        this.learnList.info = []; // 确保是空数组

        // 检查获取到的数据并赋值

        this.learnList.font_data = response.items.font_data || {}; // 存储音频或视频信息
        this.learnList.info = response.items[0]; // 将完整的第一个元素放入 info 数组中

        this.homeworkFinishTime = this.learnList.info.finish_time;
        // 检查并设置音频源
        if (this.learnList.font_data.length > 0) {
          const audioSrc = this.learnList.font_data[0].voice_url; // 获取音频 URL
          this.audioContext.src = audioSrc; // 设置音频源地址
        }
        this.updateCountdown();
      } catch (error) {
        console.error('获取作业失败:', error); // 错误处理
      }
    },

    playAudio() {
      this.audioContext.play(); // 播放音频
    },
    pauseAudio() {
      this.audioContext.pause(); // 暂停音频
    },
    stopAudio() {
      this.audioContext.stop(); // 停止音频
    },
    nextVideo() {
      if (this.currentVideoIndex < this.learnList.font_data.length - 1) {
        this.currentVideoIndex++; // 切换到下一个视频
      } else {
        this.currentVideoIndex = 0; // 如果达到最后一个，则可以选择重头播放或其他逻辑
      }
    },
    formatTime(value) {
      // 确保时间总是两位数
      return value.toString().padStart(2, '0');
    },
    updateCountdown() {
      const currentDateTimestampInMilliseconds = new Date().getTime();
      const now = Math.floor(currentDateTimestampInMilliseconds / 1000);

      // 确保 matchedDetails 存在并且包含 end_time
      if (this.learnList.info && !isNaN(this.learnList.info.finish_time)) {
        const timeDiff = this.learnList.info.finish_time - now;
        if (timeDiff > 0) {
          this.testHour = Math.floor(timeDiff / 3600);
          this.testMinute = Math.floor((timeDiff % 3600) / 60);
          this.testSecond = timeDiff % 60;

          this.isSubmitDisabled = false;
        } else {
          this.testHour = this.testMinute = this.testSecond = 0; // 时间到达
          this.isSubmitDisabled = true;
        }
      } else {
        // console.warn('matchedDetails 无效，无法更新倒计时');
        this.testHour = this.testMinute = this.testSecond = 0; // 处理无效时间
        this.isSubmitDisabled = true;
      }
    },
    back_learn() {
      uni.navigateBack();
    },
    btnsignup() {},
  },
};
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
  font-size: 32rpx;
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
  /* background-color: #f53c38; */
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
  /* height: 740rpx; */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #d7d7d7;
  border-radius: 5rpx;
}

.ipt_learn textarea {
  width: 694rpx;
  /* height: 740rpx; */
}
</style>
