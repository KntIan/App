<template>
  <view style="position: relative;">
    <view class="ai—_box" style="position: absolute; z-index: 1000;">
      <view class="ai_img">

      </view>

      <view class="ai_title">
        书法AI测评
      </view>
      <view class="photo_box">
        <view class="left_top">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8841afb2ed9b814c547bbb1d87bb42508771ef6fea67f1f4b54dae3061027a9c" alt="" />
        </view>
        <view class="right_top">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge94653dbe7f9bbbbe93f73e44c1dc68ccd17c869bf40e27cee8834315c37bd77" alt="" />
        </view>
        <view class="right_bottom">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb3b3f03ebc6279ecc80d4ea63aa70fe3cf9aea5a8a49c7a1abe68f3e7fda82ac" alt="" />
        </view>
        <view class="left_bottom">
          <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngff2bda36ded4b2b18a74c5ae9c8f5cc1c354864c822489c9660cfd7d2d26bc3e" alt="" />
        </view>

        <view class="photo_box2" @click="chooseImage">
          <view class="photo_box3">
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3ed3fe30d1cf29e35208039bd47fd79c2b4a0a89c3f20565393574a04704475a" alt="" />
            <view class="photo_text">
              拍照测评
            </view>
          </view>

        </view>
      </view>

      <view class="note1">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd665ec6e5f12213bcd360b46d2b0e39afe260a29e58b814a897a8c56e2b291fc" alt="" />
        <view class="note1_text notes">
          仅支持正版彩色专用纸
        </view>
      </view>
      <view class="note2">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd665ec6e5f12213bcd360b46d2b0e39afe260a29e58b814a897a8c56e2b291fc" alt="" />
        <view class="note2_text notes">
          测评标准为楷体GB2312
        </view>
      </view>
      <view class="note3">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8c5744b96f88c80e5403734a5a78cf3dc9beb68961ada322baeb0a797518ad0e" alt="" />
        <view class="note3_text notes">
          使用说明
        </view>
      </view>

      <view class="ai_img2">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdeab91cfdc22be815401b6cf4c05f5c507c5beef4251a3c40a67f1b0b244f034" alt="" />
      </view>
      <view class="ai_img3">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng913231901558ba50ba495eadedc97feb7ada633e54b7add3aee7edfe0fa09cea" alt="" />
      </view>

    </view>
    <div class="result" ref="aiBox">
      <scroll-view id="myScrollView" scroll-y="true" style="height: 100vh;">
        <view class="content">
          <!-- <button @click="login">登录</button>
          <text>{{token}}</text>
          <image class="logo" :src="imageSrc" mode="aspectFit"></image>
          <button @click="chooseImage">选择图片</button>
          <view>

          </view>
          <text style="font-size: 24px; color: red;">卷面分 {{pageMark}}</text>
          <view style="display: flex;">
            <canvas ref="wordMask" canvas-id="wordMask" id="wordMask" style="width: 128px; height: 128px; border: 1px solid red;"></canvas>
            <text class="pageDesc">{{evaluationDesc}}</text>
          </view> -->

          <view>
            <canvas ref="myCanvas" canvas-id="myCanvas" id="myCanvas" :style="{ width: '100vw', height: canvasHeight + 'px' }" @tap="handleCanvasClick">
            </canvas>
          </view>
        </view>
      </scroll-view>
    </div>
  </view>
</template>

<script>
import { useStore } from '@/store'
const user = 'test1';
const pass = 'test1';
export default {
  data() {
    return {
      imageSrc: '/static/logo.png',
      imagePath: null,
      token: null,
      pageMark: 0, // 卷面分
      canvasWidth: 0, // canvas 的宽度
      canvasHeight: 0, // canvas 的高度，根据图片比例动态设置
      chooseImageWidth: 0, // px
      chooseImageHeight: 0, // px
      ocrResults: null,
      wordMarks: null,
      scrollTop: 0,
      mouseX: 0,
      mouseY: 0,
      evaluationDesc: "",
    };
  },
  onLoad() {

    // 获取设备屏幕宽度，用于设置 canvas 宽度
    const systemInfo = uni.getSystemInfoSync();
    this.canvasWidth = systemInfo.windowWidth; // 设置 canvas 宽度为 100vw




  },
  mounted() {

    // const canvasStore = store.setCanvasNode(); // 使用 canvas store

    this.getToken(); // 在组件挂载时获取 token


  },
  methods: {

    getToken() {
      uni.getStorage({
        key: 'token', // 存储的 key 名
        success: (res) => {
          this.token = res.data; // 将获取的 token 存储到 data 属性中
          console.log('获取的 token:', this.token);
        },
        fail: (err) => {
          console.error('获取 token 失败:', err);
        }
      });
    },

    chooseImage() {
      this.pageMark = 0;
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success: (res) => {
          this.imageSrc = res.tempFilePaths[0];
          this.imagePath = res.tempFilePaths[0];
          console.log("choose file path ", res.tempFiles[0].path)
          console.log("choose file size ", res.tempFiles[0].size)



          uni.getImageInfo({
            src: res.tempFilePaths[0],
            success: (image) => {
              console.log("choose image width", image.width);
              console.log("choose image height", image.height);
              this.chooseImageWidth = image.width;
              this.chooseImageHeight = image.height;
              const aspectRatio = this.chooseImageHeight / this
                .chooseImageWidth; // 计算图片宽高比
              this.canvasHeight = this.canvasWidth * aspectRatio;
              setTimeout(() => {
                this.drawImage()
                this.submitForm()

              }, 100)

            }
          });
        },
        fail: (err) => {
          console.error("选择图片失败：", err);
        }
      });
    },
    // login() {
    //   uni.request({
    //     url: 'https://open.pixsmart.cn:6802/sdkMgr/auth/signin',
    //     method: 'POST',
    //     header: {
    //       'Content-Type': 'application/json'
    //     },
    //     data: {
    //       apiKey: user,
    //       apiSecret: pass
    //     },
    //     success: (res) => {
    //       if (res.data.code === 0) {
    //         this.token = res.data.data.accessToken;
    //         console.log('登录成功', this.token);
    //       } else {
    //         console.log('登录失败', res.data.message);
    //         uni.showToast({
    //           title: '登录失败',
    //           icon: 'none'
    //         });
    //       }
    //     },
    //     fail: (error) => {
    //       console.error('登录请求失败', error);
    //       uni.showToast({
    //         title: '请求失败',
    //         icon: 'none'
    //       });
    //     }
    //   });
    // },
    submitForm() {
      if (!this.imagePath) {
        return uni.showToast({
          title: '请先选择图片',
          icon: 'none'
        });
      }

      if (!this.token) {
        return uni.showToast({
          title: '请先登录',
          icon: 'none'
        });
      }

      uni.uploadFile({
        // url: 'http://admin.zexishuhua.com/api/common/detecthomework',
        url: 'http://www.zexiart.com/api/common/detecthomework',
        filePath: this.imagePath,
        name: 'file',
        header: {
          "token": `${this.token}`
        },
        formData: {
          "sdk": "WordEvaluation",
          "device_id": "test_device_id", // 随便填
          "isCheckExamNum": "false",
          "font": 0,
          "userId": user,
        },
        success: (uploadFileRes) => {
          const response = JSON.parse(uploadFileRes.data);
          if (response.code == 0) {
            this.pageMark = response.data.pageMark;
            this.ocrResults = response.data.ocrResults;
            this.wordMarks = response.data.wordMarks;
            this.drawImageWithData()
          }
        },
        fail: (err) => {
          console.error("提交失败：", err);
          uni.showToast({
            title: '提交失败',
            icon: 'none'
          });
        }
      });
    },

    drawImage() {
      const ctx = uni.createCanvasContext('myCanvas');
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      ctx.drawImage(this.imagePath, 0, 0, this.canvasWidth, this.canvasHeight); // 按比例绘制图片
      ctx.draw(false, () => {
        console.log('draw image success')
      });
    },

    handleCanvasClick(event) {
      const query = uni.createSelectorQuery().in(this);
      query.select('#myScrollView').scrollOffset((data) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.x, event.target.y)
        console.log(event.target.offsetLeft, event.target.offsetTop)
        const x = event.detail.x - event.target.offsetLeft;
        const y = event.detail.y - event.target.offsetTop;
        console.log('x', x)
        console.log('y', y)
        console.log(data)
        this.mouseX = x;
        this.mouseY = y + data.scrollTop;
        this.drawImageWithData();
      }).exec();
    },

    drawImageWithData() {
      const ctx = uni.createCanvasContext('myCanvas');
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      ctx.drawImage(this.imagePath, 0, 0, this.canvasWidth, this.canvasHeight); // 按比例绘制图片

      if (!this.ocrResults && !this.wordMarks) {
        return;
      }

      console.log("mouseX", this.mouseX);
      console.log("mouseY", this.mouseY)

      const aspectRatio = this.chooseImageHeight / this.chooseImageWidth; // 计算图片宽高比
      const scale = this.canvasWidth / this.chooseImageWidth;

      this.ocrResults.forEach((ocr, i) => {
        const word = this.wordMarks[i];
        // console.log('+++++++++', word)
        let x = ocr.points[0] * scale;
        let y = ocr.points[1] * scale;
        let width = (ocr.points[4] - ocr.points[0]) * scale;
        let height = (ocr.points[5] - ocr.points[1]) * scale;

        // 创建一个变量来存储显示的文本
        let displayText;

        if (word.mark > 80) {
          displayText = "优"; // 如果分数大于80，设置显示文本为"优"
        } else if (word.mark >= 60) {
          displayText = "良"; // 如果分数在60到80之间，设置显示文本为"良"
        } else {
          displayText = "学习"; // 如果分数低于60，设置显示文本为"去学习"
        }

        if (this.mouseX >= x && this.mouseX <= x + width && this.mouseY >= y && this.mouseY <= y +
          height) {
          ctx.strokeStyle = "blue";
          ctx.fillStyle = "blue";
          ctx.strokeRect(x, y, width, height);
          // ctx.fillText(`${word.mark.toFixed(0)}`, x, y + 25);
          ctx.fillText(displayText, x, y + 25);

          this.drawMask("wordMask", ocr.label, word.base64Mark);
          this.showWordsInfo(ocr, word);
          if (displayText === "学习") {
            console.log(11111)
            // uni.navigateTo({
            //   url: '/path/to/learningPage' // 替换为实际的页面路径
            // });
          }
        } else {
          // 低分用不同颜色
          if (word.mark < 70) {
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
          } else {
            ctx.strokeStyle = "#2e8b57";
            ctx.fillStyle = "#2e8b57";
          }
          ctx.strokeRect(x, y, width, height);
          ctx.fillText(displayText, x, y + 25);
          // ctx.fillText(`${word.mark.toFixed(0)}`, x, y + 25);
        }

      })

      if (this.mouseX == 0 && this.mouseY == 0 && this.ocrResults.length > 0) {
        this.drawMask("wordMask", this.ocrResults[0].label, this.wordMarks[0].base64Mark);
        this.showWordsInfo(this.ocrResults[0], this.wordMarks[0]);
      }

      ctx.draw(false, () => {
        console.log('draw image success')
      });

    },
    drawMask(canvasId, label, base64String) {
      const ctx = uni.createCanvasContext('wordMask', this);

      ctx.clearRect(0, 0, 128, 128)
      ctx.setFillStyle("#ffffff")
      ctx.fillRect(0, 0, 128, 128);

      // 标准字
      const x = 128 / 2;
      const y = 128 / 2;
      ctx.setFillStyle('#FF5733');
      ctx.font = '106px simkai'
      ctx.setFontSize(106)

      ctx.setTextAlign('center');
      ctx.setTextBaseline('middle');
      ctx.fillText(label, x, y);

      const binaryData = atob(base64String);
      const byteArray = new Uint8Array(binaryData.length);
      for (var i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }

      // Draw the image from the binary data
      function draw() {
        let bits = displayBits(byteArray);
        drawBinaryImage(bits);

        function drawBinaryImage(bits) {
          for (let i = 0; i < 128; ++i) {
            for (let j = 0; j < 128; ++j) {
              let bit = bits[128 * i + j];
              if (bit === 0) {
                const colorValue = bit === 0 ? 0 : 255;
                ctx.setFillStyle(`rgb(${colorValue}, ${colorValue}, ${colorValue})`);
                ctx.fillRect(j, i, 1, 1);
              }
            }
          }
        }

        function displayBits(uint8Array) {
          const bitValues = [];
          for (let i = 0; i < uint8Array.length; i++) {
            for (let j = 7; j >= 0; j--) {
              const bit = (uint8Array[i] >> j) & 1;
              bitValues.push(bit);
            }
          }
          return bitValues;
        }
      }
      draw();

      ctx.draw(false, () => {
        console.log('draw mask success')
        const store = useStore();
        const canvasElement = this.$refs.aiBox; // 获取 canvas 元素
        console.log(canvasElement)
        // console.log(JSON.stringify(canvasElement));
        store.setCanvasNode(canvasElement); // 保存元素到 store
        // uni.navigateTo({
        //   url: '/pages/pagesall/aiDete/aiResult', // 目标页面路径
        //   success: () => {
        //     console.log('成功跳转到目标页面');
        //   },
        //   fail: (err) => {
        //     console.error('跳转失败', err);
        //   }
        // });
      });


    },

    showWordsInfo(ocrResult, wordMark) {
      // 构建文本信息
      let sb = [];
      sb.push(ocrResult.label + "\n");
      if (wordMark.mark <= 0) {
        sb.push("暂无识别字的评测数据\n");
      }
      sb.push("综合得分 " + wordMark.mark + "\n");
      sb.push("重心得分 " + wordMark.centerMark);

      if (wordMark.centerInfo === 0) {
        sb.push("良好");
      } else if (wordMark.centerInfo === 1) {
        sb.push("偏上");
      } else if (wordMark.centerInfo === 2) {
        sb.push("偏下");
      } else if (wordMark.centerInfo === 3) {
        sb.push("偏左");
      } else if (wordMark.centerInfo === 4) {
        sb.push("偏右");
      }
      sb.push("\n");

      sb.push("形态得分 " + wordMark.rateMark);
      if (wordMark.rateInfo === 0) {
        sb.push("良好");
      } else if (wordMark.rateInfo === 1) {
        sb.push("太宽");
      } else if (wordMark.rateInfo === 2) {
        sb.push("太瘦");
      }
      sb.push("\n");

      sb.push("大小得分 " + wordMark.areaMark);
      if (wordMark.areaInfo === 0) {
        sb.push("良好");
      } else if (wordMark.areaInfo === 1) {
        sb.push("太小");
      } else if (wordMark.areaInfo === 2) {
        sb.push("太大");
      }
      sb.push("\n");

      sb.push("位置得分 " + wordMark.posMark);
      if (wordMark.posInfo === 0) {
        sb.push("良好");
      } else if (wordMark.posInfo === 1) {
        sb.push("偏上");
      } else if (wordMark.posInfo === 2) {
        sb.push("偏下");
      } else if (wordMark.posInfo === 3) {
        sb.push("偏左");
      } else if (wordMark.posInfo === 4) {
        sb.push("偏右");
      }
      sb.push("\n");

      sb.push("笔画得分 " + wordMark.conFMark);
      if (wordMark.conFInfo === 0) {
        sb.push("良好");
      } else if (wordMark.conFInfo === 1) {
        sb.push("不良");
      }
      sb.push("\n");

      this.evaluationDesc = sb.join("");
    },



  }
}
</script>



<style scoped>
.ai—_box {
  /* width: 100%;
		height: 100%; */
  width: 100%;
  height: 1530rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9bcae2a5986281f0465c7a08cd3f103d35cdf366a648ffb9bcaef79600119e22);
  background-size: 100% 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.ai_img {
  width: 646rpx;
  height: 554rpx;
  background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng847886c181f3a528b4a8e7dcf34469b8fa292411952583855e56895b69b53d8b)
    100% no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.ai_title {
  font-family: PangMenZhengDao;
  font-size: 112rpx;
  color: #000000;
  line-height: 128rpx;
  text-align: center;
  font-style: normal;
  margin-top: 96rpx;
}

.photo_box {
  width: 480rpx;
  height: 480rpx;
  background: linear-gradient(
    180deg,
    rgba(255, 159, 4, 0.24) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 173, 40, 0.24) 100%
  );
  box-shadow: inset 0rpx 2rpx 16rpx 8rpx rgba(255, 161, 9, 0.14);
  border-radius: 16rpx;
  border-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.8)
    )
    4 4;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 58rpx;
}

.left_top {
  width: 48rpx;
  height: 48rpx;
  position: absolute;
  left: -10rpx;
  top: -5rpx;
}

.right_top {
  width: 48rpx;
  height: 48rpx;
  position: absolute;
  right: 1rpx;
  top: -5rpx;
}

.right_bottom {
  width: 48rpx;
  height: 48rpx;
  position: absolute;
  right: 1rpx;
  bottom: 3rpx;
}

.left_bottom {
  width: 48rpx;
  height: 48rpx;
  position: absolute;
  left: -10rpx;
  bottom: 4rpx;
}

.photo_box2 {
  width: 396rpx;
  height: 396rpx;
  background: rgba(255, 158, 2, 0.32);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo_box3 {
  width: 360rpx;
  height: 360rpx;
  background: #ff9e00;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.photo_box3 img {
  width: 164rpx;
  height: 136rpx;
}

.photo_text {
  margin-top: 20rpx;
  font-weight: 600;
  font-size: 36rpx;
  color: #ffffff;
}

.note1 {
  display: flex;
  align-items: center;
  margin-top: 28rpx;
}

.note2 {
  display: flex;
  align-items: center;
  margin-top: 8rpx;
}

.note3 {
  display: flex;
  align-items: center;
  margin-top: 20rpx;
}

.notes {
  margin-left: 10rpx;
}

.ai_img2 {
  position: absolute;
  bottom: 5%;
  left: 0;
}

.ai_img3 {
  position: absolute;
  bottom: 5%;
  right: 0;
}
</style>