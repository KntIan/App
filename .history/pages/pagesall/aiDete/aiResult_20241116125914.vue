<template>
  <scroll-view id="myScrollView" scroll-y="true" style="height: 100vh;">
    <view class="res_box">
      <view class="res_box2">
        <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge1553c1d8d43568ee582b54f1deab731573c8804790b09e299c2e73eda1cfa68" alt="" @click="res_goback" />
        <view class="res_text">
          AI测评结果
        </view>
      </view>

      <view class="res_box3">
        <view class="res_heard">
          <img style="border-radius: 50%;" :src="userInfo.avatar" alt="" />
          <view class="head_text">
            <view class="text_1">
              {{userInfo.nickname}}
            </view>
            <view class="text_2">
              ID:{{userInfo.id}}
            </view>
          </view>
        </view>
        <view class="score_box">
          <view class="score_box1">
            <view class="score_text">
              {{ comprehensiveLevel }}
            </view>
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfe293373ca510260bf25cf15905e96d33c640dc3b4be40d673f30a4860f69215" alt="" />
            <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfe293373ca510260bf25cf15905e96d33c640dc3b4be40d673f30a4860f69215" alt="" />
          </view>
          <view class="scoring_box">

            <view class="xingxing1" v-for="(item,index) in score_List" :key="index">
              <view class="xingxing">
                {{item.title}}
              </view>
              <uni-rate :readonly="true" size="20" :value="item.score" />
            </view>

          </view>

        </view>

        <textarea type="text" class="ipt_res" placeholder="  重心写的很棒，注意整体形态，笔画再加长一些，加油！你距离成功仅仅一步之遥，多跟泽曦名师学习，相信可以写的更好！" />

      </view>

    </view>

    <div class="result" ref="resultsContainer">

      <view class="content">
        <view>
          <canvas ref="myCanvas" canvas-id="myCanvas" id="myCanvas" :style="{ width: '100vw', height: canvasHeight + 'px' }" @tap="handleCanvasClick">
          </canvas>
        </view>
      </view>

    </div>
  </scroll-view>

</template>

<script>
import { useStore } from '@/store';

export default {
  data() {
    return {
      canvasRef: null, // canvas 的引用
      stu_List: [{
        name: '刘琪琦',
        id: '1008601'
      }],
      score_List: [{
        title: '重心',
        score: 5,
      }, {
        title: '位置',
        score: 4,
      }, {
        title: '形态',
        score: 3,
      }, {
        title: '笔画',
        score: 2,
      }, {
        title: '大小',
        score: 1,
      }],
      comprehensiveLevel: '',



      // imageSrc: '/static/logo.png',
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
  computed: {
    userInfo() {
      const store = useStore();
      return store.userinfo;
    }
  },
  mounted() {

    // this.getToken(); // 在组件挂载时获取 token
    this.store = useStore(); // 使用状态管理
    console.log(this.store.canvasNode);

    if (this.store.canvasNode) {
      console.log(this.$refs.resultsContainer, '+++++++++');
      this.$refs.resultsContainer.appendChild(this.store.canvasNode);
    } else {
      console.error("canvasNode is null");
    }

    let scoreText = this.store.evaluationDesc;
    console.log(scoreText);

    if (scoreText) {
      // 使用正则表达式提取分数
      const scores = {
        综合得分: null,
        重心得分: null,
        形态得分: null,
        大小得分: null,
        位置得分: null,
        笔画得分: null
      };

      const regex = /(综合得分|重心得分|形态得分|大小得分|位置得分|笔画得分)[^\d]*(\d+)/g;
      let match;
      while ((match = regex.exec(scoreText)) !== null) {
        const scoreType = match[1]; // 得分类型
        const scoreValue = parseInt(match[2], 10); // 将得分值转换为整数
        if (scores.hasOwnProperty(scoreType)) {
          scores[scoreType] = scoreValue; // 存储得分
        }
      }

      const getComprehensiveLevel = (score) => {
        return score >= 60 ? '优' : '差'; // 60分及以上为优
      };

      if (scores.综合得分 !== null) {
        this.comprehensiveLevel = getComprehensiveLevel(scores.综合得分);
      }

      const getOtherLevel = (score) => {
        if (score >= 80) return 5;  // 80-100 -> 等级5
        if (score >= 60) return 4;  // 60-79 -> 等级4
        if (score >= 40) return 3;  // 40-59 -> 等级3
        if (score >= 20) return 2;  // 20-39 -> 等级2
        return 1;                   // 0-19 -> 等级1
      };

      const scoreMap = {
        '重心': scores.重心得分,
        '位置': scores.位置得分,
        '形态': scores.形态得分,
        '笔画': scores.笔画得分,
        '大小': scores.大小得分,
      };

      this.score_List.forEach(item => {
        const score = scoreMap[item.title];
        if (score !== undefined) {
          item.score = getOtherLevel(score); // 将等级赋值给对应的项
        }
      });
    }
  },
  onLoad() {
    // 获取设备屏幕宽度，用于设置 canvas 宽度
    const systemInfo = uni.getSystemInfoSync();
    this.canvasWidth = systemInfo.windowWidth; // 设置 canvas 宽度为 100vw
    // this.chooseImage()
  },
  // methods: {

  //   getToken() {
  //     uni.getStorage({
  //       key: 'token', // 存储的 key 名
  //       success: (res) => {
  //         this.token = res.data; // 将获取的 token 存储到 data 属性中
  //         console.log('获取的 token:', this.token);
  //       },
  //       fail: (err) => {
  //         console.error('获取 token 失败:', err);
  //       }
  //     });
  //   },

  //   chooseImage() {
  //     this.pageMark = 0;
  //     uni.chooseImage({
  //       count: 1,
  //       sizeType: ['compressed'],
  //       sourceType: ['album', 'camera'],
  //       success: (res) => {
  //         this.imageSrc = res.tempFilePaths[0];
  //         this.imagePath = res.tempFilePaths[0];
  //         console.log("choose file path ", res.tempFiles[0].path)
  //         console.log("choose file size ", res.tempFiles[0].size)



  //         uni.getImageInfo({
  //           src: res.tempFilePaths[0],
  //           success: (image) => {
  //             console.log("choose image width", image.width);
  //             console.log("choose image height", image.height);
  //             this.chooseImageWidth = image.width;
  //             this.chooseImageHeight = image.height;
  //             const aspectRatio = this.chooseImageHeight / this
  //               .chooseImageWidth; // 计算图片宽高比
  //             this.canvasHeight = this.canvasWidth * aspectRatio;
  //             setTimeout(() => {
  //               this.drawImage()
  //               this.submitForm()

  //             }, 100)

  //           }
  //         });
  //       },
  //       fail: (err) => {
  //         console.error("选择图片失败：", err);
  //       }
  //     });
  //   },
  //   // login() {
  //   //   uni.request({
  //   //     url: 'https://open.pixsmart.cn:6802/sdkMgr/auth/signin',
  //   //     method: 'POST',
  //   //     header: {
  //   //       'Content-Type': 'application/json'
  //   //     },
  //   //     data: {
  //   //       apiKey: user,
  //   //       apiSecret: pass
  //   //     },
  //   //     success: (res) => {
  //   //       if (res.data.code === 0) {
  //   //         this.token = res.data.data.accessToken;
  //   //         console.log('登录成功', this.token);
  //   //       } else {
  //   //         console.log('登录失败', res.data.message);
  //   //         uni.showToast({
  //   //           title: '登录失败',
  //   //           icon: 'none'
  //   //         });
  //   //       }
  //   //     },
  //   //     fail: (error) => {
  //   //       console.error('登录请求失败', error);
  //   //       uni.showToast({
  //   //         title: '请求失败',
  //   //         icon: 'none'
  //   //       });
  //   //     }
  //   //   });
  //   // },
  //   submitForm() {
  //     if (!this.imagePath) {
  //       return uni.showToast({
  //         title: '请先选择图片',
  //         icon: 'none'
  //       });
  //     }

  //     if (!this.token) {
  //       return uni.showToast({
  //         title: '请先登录',
  //         icon: 'none'
  //       });
  //     }

  //     uni.uploadFile({
  //       // url: 'http://admin.zexishuhua.com/api/common/detecthomework',
  //       url: 'http://www.zexiart.com/api/common/detecthomework',
  //       filePath: this.imagePath,
  //       name: 'file',
  //       header: {
  //         "token": `${this.token}`
  //       },
  //       formData: {
  //         "sdk": "WordEvaluation",
  //         "device_id": "test_device_id", // 随便填
  //         "isCheckExamNum": "false",
  //         "font": 0,
  //         // "userId": user,
  //       },
  //       success: (uploadFileRes) => {
  //         const response = JSON.parse(uploadFileRes.data);
  //         if (response.code == 0) {
  //           this.pageMark = response.data.pageMark;
  //           this.ocrResults = response.data.ocrResults;
  //           this.wordMarks = response.data.wordMarks;
  //           this.drawImageWithData()
  //         }
  //       },
  //       fail: (err) => {
  //         console.error("提交失败：", err);
  //         uni.showToast({
  //           title: '提交失败',
  //           icon: 'none'
  //         });
  //       }
  //     });
  //   },

  //   drawImage() {
  //     const ctx = uni.createCanvasContext('myCanvas');
  //     ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
  //     ctx.drawImage(this.imagePath, 0, 0, this.canvasWidth, this.canvasHeight); // 按比例绘制图片
  //     ctx.draw(false, () => {
  //       console.log('draw image success')
  //     });
  //   },

  //   handleCanvasClick(event) {
  //     const query = uni.createSelectorQuery().in(this);
  //     query.select('#myScrollView').scrollOffset((data) => {
  //       console.log(event)
  //       console.log(event.target)
  //       console.log(event.detail.x, event.detail.y)
  //       console.log(event.target.offsetLeft, event.target.offsetTop)
  //       const x = event.detail.x - event.target.offsetLeft;
  //       const y = event.detail.y - event.target.offsetTop;
  //       console.log('x', x)
  //       console.log('y', y)
  //       console.log(data)
  //       this.mouseX = x;
  //       this.mouseY = y + data.scrollTop;
  //       this.drawImageWithData();
  //     }).exec();
  //   },

  //   drawImageWithData() {
  //     const ctx = uni.createCanvasContext('myCanvas');
  //     ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
  //     ctx.drawImage(this.imagePath, 0, 0, this.canvasWidth, this.canvasHeight); // 按比例绘制图片

  //     if (!this.ocrResults && !this.wordMarks) {
  //       return;
  //     }

  //     console.log("mouseX", this.mouseX);
  //     console.log("mouseY", this.mouseY)

  //     const aspectRatio = this.chooseImageHeight / this.chooseImageWidth; // 计算图片宽高比
  //     const scale = this.canvasWidth / this.chooseImageWidth;

  //     this.ocrResults.forEach((ocr, i) => {
  //       const word = this.wordMarks[i];
  //       // console.log('+++++++++', word)
  //       let x = ocr.points[0] * scale;
  //       let y = ocr.points[1] * scale;
  //       let width = (ocr.points[4] - ocr.points[0]) * scale;
  //       let height = (ocr.points[5] - ocr.points[1]) * scale;

  //       // 创建一个变量来存储显示的文本
  //       let displayText;

  //       if (word.mark > 80) {
  //         displayText = "优"; // 如果分数大于80，设置显示文本为"优"
  //       } else if (word.mark >= 60) {
  //         displayText = "良"; // 如果分数在60到80之间，设置显示文本为"良"
  //       } else {
  //         displayText = "学习"; // 如果分数低于60，设置显示文本为"去学习"
  //       }

  //       if (this.mouseX >= x && this.mouseX <= x + width && this.mouseY >= y && this.mouseY <= y +
  //         height) {
  //         ctx.strokeStyle = "blue";
  //         ctx.fillStyle = "blue";
  //         ctx.strokeRect(x, y, width, height);
  //         // ctx.fillText(`${word.mark.toFixed(0)}`, x, y + 25);
  //         ctx.fillText(displayText, x, y + 25);

  //         this.drawMask("wordMask", ocr.label, word.base64Mark);
  //         this.showWordsInfo(ocr, word);
  //         if (displayText === "学习") {
  //           console.log(11111)
  //           // uni.navigateTo({
  //           //   url: '/path/to/learningPage' // 替换为实际的页面路径
  //           // });
  //         }
  //       } else {
  //         // 低分用不同颜色
  //         if (word.mark < 70) {
  //           ctx.strokeStyle = "red";
  //           ctx.fillStyle = "red";
  //         } else {
  //           ctx.strokeStyle = "#2e8b57";
  //           ctx.fillStyle = "#2e8b57";
  //         }
  //         ctx.strokeRect(x, y, width, height);
  //         ctx.fillText(displayText, x, y + 25);

  //         // ctx.fillText(`${word.mark.toFixed(0)}`, x, y + 25);
  //       }

  //     })

  //     if (this.mouseX == 0 && this.mouseY == 0 && this.ocrResults.length > 0) {
  //       this.drawMask("wordMask", this.ocrResults[0].label, this.wordMarks[0].base64Mark);
  //       this.showWordsInfo(this.ocrResults[0], this.wordMarks[0]);
  //     }

  //     ctx.draw(false, () => {
  //       console.log('draw image success')
  //     });

  //   },
  //   drawMask(canvasId, label, base64String) {
  //     const ctx = uni.createCanvasContext('wordMask', this);

  //     ctx.clearRect(0, 0, 128, 128)
  //     ctx.setFillStyle("#ffffff")
  //     ctx.fillRect(0, 0, 128, 128);

  //     // 标准字
  //     const x = 128 / 2;
  //     const y = 128 / 2;
  //     ctx.setFillStyle('#FF5733');
  //     ctx.font = '106px simkai'
  //     ctx.setFontSize(106)

  //     ctx.setTextAlign('center');
  //     ctx.setTextBaseline('middle');
  //     ctx.fillText(label, x, y);

  //     const binaryData = atob(base64String);
  //     const byteArray = new Uint8Array(binaryData.length);
  //     for (var i = 0; i < binaryData.length; i++) {
  //       byteArray[i] = binaryData.charCodeAt(i);
  //     }

  //     // Draw the image from the binary data
  //     function draw() {
  //       let bits = displayBits(byteArray);
  //       drawBinaryImage(bits);

  //       function drawBinaryImage(bits) {
  //         for (let i = 0; i < 128; ++i) {
  //           for (let j = 0; j < 128; ++j) {
  //             let bit = bits[128 * i + j];
  //             if (bit === 0) {
  //               const colorValue = bit === 0 ? 0 : 255;
  //               ctx.setFillStyle(`rgb(${colorValue}, ${colorValue}, ${colorValue})`);
  //               ctx.fillRect(j, i, 1, 1);
  //             }
  //           }
  //         }
  //       }

  //       function displayBits(uint8Array) {
  //         const bitValues = [];
  //         for (let i = 0; i < uint8Array.length; i++) {
  //           for (let j = 7; j >= 0; j--) {
  //             const bit = (uint8Array[i] >> j) & 1;
  //             bitValues.push(bit);
  //           }
  //         }
  //         return bitValues;
  //       }
  //     }
  //     draw();

  //     ctx.draw(false, () => {
  //       console.log('draw mask success')
  //       const store = useStore();
  //       const canvasElement = this.$refs.aiBox; // 获取 canvas 元素
  //       console.log(canvasElement)
  //       // console.log(JSON.stringify(canvasElement));
  //       // uni.setStorageSync('canvasNode', canvasElement);
  //       store.setCanvasNode(canvasElement); // 保存元素到 store
  //       // uni.navigateTo({
  //       //   url: '/pages/pagesall/aiDete/aiResult', // 目标页面路径
  //       //   success: () => {
  //       //     console.log('成功跳转到目标页面');
  //       //   },
  //       //   fail: (err) => {
  //       //     console.error('跳转失败', err);
  //       //   }
  //       // });
  //     });


  //   },

  //   showWordsInfo(ocrResult, wordMark) {
  //     // 构建文本信息
  //     let sb = [];
  //     sb.push(ocrResult.label + "\n");
  //     if (wordMark.mark <= 0) {
  //       sb.push("暂无识别字的评测数据\n");
  //     }
  //     sb.push("综合得分 " + wordMark.mark + "\n");
  //     sb.push("重心得分 " + wordMark.centerMark);

  //     if (wordMark.centerInfo === 0) {
  //       sb.push("良好");
  //     } else if (wordMark.centerInfo === 1) {
  //       sb.push("偏上");
  //     } else if (wordMark.centerInfo === 2) {
  //       sb.push("偏下");
  //     } else if (wordMark.centerInfo === 3) {
  //       sb.push("偏左");
  //     } else if (wordMark.centerInfo === 4) {
  //       sb.push("偏右");
  //     }
  //     sb.push("\n");

  //     sb.push("形态得分 " + wordMark.rateMark);
  //     if (wordMark.rateInfo === 0) {
  //       sb.push("良好");
  //     } else if (wordMark.rateInfo === 1) {
  //       sb.push("太宽");
  //     } else if (wordMark.rateInfo === 2) {
  //       sb.push("太瘦");
  //     }
  //     sb.push("\n");

  //     sb.push("大小得分 " + wordMark.areaMark);
  //     if (wordMark.areaInfo === 0) {
  //       sb.push("良好");
  //     } else if (wordMark.areaInfo === 1) {
  //       sb.push("太小");
  //     } else if (wordMark.areaInfo === 2) {
  //       sb.push("太大");
  //     }
  //     sb.push("\n");

  //     sb.push("位置得分 " + wordMark.posMark);
  //     if (wordMark.posInfo === 0) {
  //       sb.push("良好");
  //     } else if (wordMark.posInfo === 1) {
  //       sb.push("偏上");
  //     } else if (wordMark.posInfo === 2) {
  //       sb.push("偏下");
  //     } else if (wordMark.posInfo === 3) {
  //       sb.push("偏左");
  //     } else if (wordMark.posInfo === 4) {
  //       sb.push("偏右");
  //     }
  //     sb.push("\n");

  //     sb.push("笔画得分 " + wordMark.conFMark);
  //     if (wordMark.conFInfo === 0) {
  //       sb.push("良好");
  //     } else if (wordMark.conFInfo === 1) {
  //       sb.push("不良");
  //     }
  //     sb.push("\n");

  //     this.evaluationDesc = sb.join("");

  //     const store = useStore();
  //     store.setEvaluationDesc(this.evaluationDesc)

  //   },



  // }
};
</script>


<!-- <script>

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
      score_List: [{
        title: '重心',
        score: 5,
      },
      {
        title: '位置',
        score: 4,
      },
      {
        title: '形态',
        score: 3,
      },
      {
        title: '笔画',
        score: 2,
      }, {
        title: '大小',
        score: 1,
      }]
    };
  },
  onLoad() {

    // 获取设备屏幕宽度，用于设置 canvas 宽度
    const systemInfo = uni.getSystemInfoSync();
    this.canvasWidth = systemInfo.windowWidth; // 设置 canvas 宽度为 100vw
    // uni.$emit('update', { msg: '页面更新' })
    this.chooseImage()

  },
  mounted() {
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
          console.log(res)
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
        url: 'http://admin.zexishuhua.com/api/common/detecthomework',
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
        const x = event.target.x - event.target.offsetLeft;
        const y = event.target.y - event.target.offsetTop;

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
        let x = ocr.points[0] * scale;
        let y = ocr.points[1] * scale;
        let width = (ocr.points[4] - ocr.points[0]) * scale;
        let height = (ocr.points[5] - ocr.points[1]) * scale;

        if (this.mouseX >= x && this.mouseX <= x + width && this.mouseY >= y && this.mouseY <= y +
          height) {
          ctx.strokeStyle = "blue";
          ctx.fillStyle = "blue";
          ctx.strokeRect(x, y, width, height);
          ctx.fillText(`${word.mark.toFixed(0)}`, x, y);

          this.drawMask("wordMask", ocr.label, word.base64Mark);
          this.showWordsInfo(ocr, word);
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
          ctx.fillText(`${word.mark.toFixed(0)}`, x, y);
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
      this.scoreText()
      console.log(this.evaluationDesc)
    },

    // scoreText() {
    //   let scoreText = this.evaluationDesc
    //   let scores = {
    //     综合得分: null,
    //     重心得分: null,
    //     形态得分: null,
    //     大小得分: null,
    //     位置得分: null,
    //     笔画得分: null
    //   };
    //   const regex = /(综合得分|重心得分|形态得分|大小得分|位置得分|笔画得分)[^\d]*(\d+)/g;
    //   let match;
    //   while ((match = regex.exec(scoreText)) !== null) {
    //     // console.log('匹配到的内容:', match); // 打印每次匹配到的内容
    //     const scoreType = match[1]; // 得分类型
    //     const scoreValue = parseInt(match[2], 10); // 将得分值转换为整数
    //     if (scores.hasOwnProperty(scoreType)) {
    //       scores[scoreType] = scoreValue; // 存储得分
    //     }
    //   }

    //   // 打印提取的分数
    //   // console.log('提取的分数:', scores);

    //   // 定义评分级别函数
    //   const getComprehensiveLevel = (score) => {
    //     if (score >= 60) return '优'; // 60分及以上为优
    //     return '差';                 // 60分以下为差
    //   };

    //   if (scores.综合得分 !== null) {
    //     comprehensiveLevel.value = getComprehensiveLevel(scores.综合得分);
    //   }

    //   const getOtherLevel = (score) => {
    //     if (score >= 80) return 5;  // 80-100 -> 等级5
    //     if (score >= 60) return 4;  // 60-79 -> 等级4
    //     if (score >= 40) return 3;  // 40-59 -> 等级3
    //     if (score >= 20) return 2;  // 20-39 -> 等级2
    //     return 1;                   // 0-19 -> 等级1
    //   };

    //   // 打印提取的分数和等级
    //   for (const [key, value] of Object.entries(scores)) {
    //     if (value !== null) {
    //       let level;
    //       if (key === '卷面分') {
    //         level = getComprehensiveLevel(value); // 获取综合得分等级
    //       } else {
    //         level = getOtherLevel(value); // 获取其他得分等级
    //       }
    //       // console.log(`${key}: ${value}, 等级: ${level}`);
    //     }
    //   }

    //   const scoreMap = {
    //     '重心': scores.重心得分,
    //     '位置': scores.位置得分,
    //     '形态': scores.形态得分,
    //     '笔画': scores.笔画得分,
    //     '大小': scores.大小得分,
    //   };

    //   score_List.value.forEach(item => {
    //     const score = scoreMap[item.title];
    //     if (score !== undefined) {
    //       item.score = getOtherLevel(score); // 将等级赋值给对应的项
    //       // console.log(item.title, item.score);
    //     }
    //   });
    // }



  }
}
</script> -->


<style>
.res_box {
  width: 750rpx;
  height: 850rpx;
  background-color: rgba(249, 183, 34, 1);
}

.res_box2 {
  position: relative;
  padding: 30rpx;
}

.res_box2 img {
  position: absolute;
  top: 40rpx;
}

.res_text {
  text-align: center;
  font-weight: 500;
  font-size: 36rpx;
  color: #ffffff;
}

.res_box3 {
  width: 638rpx;
  height: 632rpx;
  background: #ffffff;
  border-radius: 16rpx;
  margin-left: 28rpx;
  padding: 28rpx;
  margin-top: 30rpx;
}

.res_heard {
  display: flex;
  align-items: center;
}

.res_heard img {
  width: 144rpx;
  height: 144rpx;
}

.head_text {
  margin-left: 28rpx;
}

.text_2 {
  margin-top: 8rpx;
  font-weight: 400;
  font-size: 24rpx;
  color: #000000;
}

.text_1 {
  font-weight: 500;
  font-size: 36rpx;
  color: #000000;
}

.score_text {
  width: 128rpx;
  height: 180rpx;
  overflow-wrap: break-word;
  color: rgba(219, 1, 12, 1);
  font-size: 128rpx;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 180rpx;
}

.score_box1 {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.score_box {
  display: flex;
  justify-content: space-between;
}

.xingxing1 {
  width: 284rpx;
  height: 48rpx;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5rpx 0;
}

.xingxing {
  font-weight: 600;
  font-size: 28rpx;
  color: #000000;
  line-height: 48rpx;
  text-align: left;
}

.ipt_res {
  width: 608rpx;
  height: 164rpx;
  background: #f1f1f1;
  border-radius: 8rpx;
  padding: 15rpx;
  margin-top: 15rpx;
  font-size: 28rpx;
}

.score_img {
  width: 870rpx;
  height: 946rpx;
}

.score_line {
  width: 870rpx;
  height: 1000rpx;
  background-color: rgba(249, 183, 34, 1);
}
</style>