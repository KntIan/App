<template>
  <view class="res_box">
    <view class="res_box2">
      <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge1553c1d8d43568ee582b54f1deab731573c8804790b09e299c2e73eda1cfa68" alt="" @click="res_goback" />
      <view class="res_text">
        AI测评结果
      </view>
    </view>

    <view class="res_box3">
      <view class="res_heard">
        <img src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e8add875eba745c3a7751cefc8b2d793_mergeImage.png" alt="" />
        <view class="head_text" v-for="(item,index) in stu_List" :key="index">
          <view class="text_1">
            {{item.name}}
          </view>
          <view class="text_2">
            ID:{{item.id}}
          </view>
        </view>
      </view>
      <view class="score_box">
        <view class="score_box1">
          <view class="score_text">
            优
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

  <view class="score_line">
    <img src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/5b552fc679d6478d8ccc2f8c6c6aadf1_mergeImage.png" alt="" class="score_img" />
  </view>
</template>

<script>
export default {
  props: {
    resultData: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      stu_List: [
        {
          name: "刘琪琦",
          id: "1008601",
        },
      ],
      score_List: [
        {
          title: "重心",
          score: 5,
        },
        {
          title: "位置",
          score: 3,
        },
        {
          title: "形态",
          score: 2,
        },
        {
          title: "笔画",
          score: 4,
        },
        {
          title: "大小",
          score: 5,
        },
      ],

      mouseX: 0,
      mouseY: 0,
      ocrResults: [],
      wordMarks: [],
      img: null,
      elapsedTime: 0,
      filename: '',
      result: null,
      ImageData: null,
    };
  },
  onLoad() {
    if (this.resultData) {
      this.result = JSON.parse(decodeURIComponent(this.resultData));
      const data = this.result; // 使用 const 来声明 data 变量
      console.log('接收到的数据:', data)
    }

  },
  // methods: {

  //   // async evaluationImageData(imgData) {
  //   //   return new Promise(async (r, j) => {
  //   //     const startTime = performance.now();

  //   //     let ipt_user = Q("#ipt_user");
  //   //     console.log("file size ", imgData.file.size);

  //   //     const formData = new FormData();
  //   //     formData.append("sdk", "WordEvaluation");
  //   //     formData.append("device_id", "test_device_id");
  //   //     formData.append("w", imgData.img.width);
  //   //     formData.append("h", imgData.img.height);
  //   //     formData.append("rotation", 0);
  //   //     formData.append("jpgSize", imgData.file.size);
  //   //     formData.append("isCheckExamNum", DATA.isCheckExamNum);
  //   //     formData.append("font", DATA.font);
  //   //     formData.append("userId", ipt_user.value);
  //   //     formData.append("file", imgData.file);

  //   //     let headers = {
  //   //       "X-SW-Auth-Token": DATA.token,
  //   //     };

  //   //     let url = "";
  //   //     if (DATA.single == "true") {
  //   //       url = SERVER + "/sdkMgr/sdk/sdkConcentrationDetectSingle";
  //   //     } else {
  //   //       url = SERVER + "/sdkMgr/sdk/sdkConcentrationDetect"
  //   //     }

  //   //     let response = await fetch(url, {
  //   //       method: "POST",
  //   //       headers: headers,
  //   //       body: formData
  //   //     });

  //   //     let data = await response.json();
  //   //     const endTime = performance.now();
  //   //     const elapsedTime = endTime - startTime;
  //   //     r({ imgData, data: data, elapsedTime: elapsedTime });
  //   //   });
  //   // }, 
  //   async displayResults({ imgData, data, elapsedTime, filename }) {
  //     console.log(displayResults, imgData, data, elapsedTime);
  //     this.img = imgData.img;
  //     this.elapsedTime = elapsedTime;
  //     this.filename = filename;

  //     const resultDiv = document.createElement("div");
  //     resultDiv.className = "horizontal-container";
  //     resultDiv.style.border = "1px solid black";
  //     const rightDiv = document.createElement("div");
  //     rightDiv.className = "vertical-container";
  //     this.mouseX = 0;
  //     this.mouseY = 0;

  //     const canvas = document.createElement("canvas");
  //     const ctx = canvas.getContext("2d");
  //     const maxWidth = 1000;
  //     const scale = this.img.width > maxWidth ? maxWidth / this.img.width : 1;

  //     canvas.width = this.img.width * scale;
  //     canvas.height = this.img.height * scale;
  //     this.prepareHDCanvas(canvas, canvas.width, canvas.height);
  //     ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, canvas.width, canvas.height);

  //     const wordDetail = document.createElement("pre");
  //     wordDetail.className = "word-detail";

  //     const base64Mask = document.createElement("canvas");
  //     base64Mask.width = 128;
  //     base64Mask.height = 128;
  //     base64Mask.className = "base64Mask";

  //     rightDiv.appendChild(this.genPageInfoEl(data));
  //     resultDiv.appendChild(canvas);
  //     rightDiv.appendChild(base64Mask);
  //     rightDiv.appendChild(wordDetail);
  //     rightDiv.appendChild(this.genExamNumEl(data));
  //     rightDiv.appendChild(this.genExtraInfoEl(elapsedTime));
  //     rightDiv.appendChild(this.genFilenameEl(filename));
  //     resultDiv.appendChild(rightDiv);

  //     this.$refs.resultsContainer.appendChild(resultDiv);
  //     this.ocrResults = data.data.ocrResults;
  //     this.wordMarks = data.data.wordMarks;

  //     this.initCanvas(canvas, ctx, base64Mask, wordDetail);
  //   },
  //   genPageInfoEl(data) {
  //     let pageInfo = "卷面分：" + data.data.pageMark;
  //     let p = document.createElement("p");
  //     p.textContent = pageInfo;
  //     p.style.color = "red";
  //     return p;
  //   },
  //   genExamNumEl(data) {
  //     let p = document.createElement("p");
  //     p.textContent = "学号测评 " + data.data.examNum;
  //     p.style.color = "red";
  //     return p;
  //   },
  //   genExtraInfoEl(elapsedTime) {
  //     let extraInfo = "测评耗时（包含网络请求）" + `${elapsedTime.toFixed(2)} ms`;
  //     let p = document.createElement("p");
  //     p.textContent = extraInfo;
  //     return p;
  //   },
  //   genFilenameEl(filename) {
  //     let p = document.createElement("p");
  //     p.textContent = "文件名 " + filename;
  //     return p;
  //   },
  //   initCanvas(canvas, ctx, base64Mask, wordDetail) {
  //     canvas.addEventListener("click", (event) => {
  //       const rect = canvas.getBoundingClientRect();
  //       this.mouseX = event.clientX - rect.left;
  //       this.mouseY = event.clientY - rect.top;
  //       this.draw(canvas, ctx, base64Mask, wordDetail);
  //     });
  //     this.draw(canvas, ctx, base64Mask, wordDetail);
  //   },
  //   draw(canvas, ctx, base64Mask, wordDetail) {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, canvas.width, canvas.height);

  //     this.ocrResults.forEach((ocr, i) => {
  //       const word = this.wordMarks[i];
  //       let x = ocr.points[0] * (canvas.width / this.img.width);
  //       let y = ocr.points[1] * (canvas.height / this.img.height);
  //       let width = (ocr.points[4] - ocr.points[0]) * (canvas.width / this.img.width);
  //       let height = (ocr.points[5] - ocr.points[1]) * (canvas.height / this.img.height);

  //       if (this.mouseX >= x && this.mouseX <= x + width && this.mouseY >= y && this.mouseY <= y + height) {
  //         ctx.strokeStyle = "blue";
  //         ctx.fillStyle = "blue";
  //         ctx.lineWidth = 2;
  //         ctx.font = `${width / 3}px Arial`;
  //         ctx.strokeRect(x, y, width, height);
  //         ctx.fillText(`${word.mark.toFixed(0)}`, x, y - 5);

  //         let wordInfo = this.showWordsInfo(ocr, word);
  //         wordDetail.textContent = wordInfo;

  //         this.drawMask(base64Mask, ocr.label, word.base64Mark);
  //       } else {
  //         this.setWordStyle(ctx, word, x, y, width, height);
  //       }
  //     });

  //     if (this.mouseX === 0 && this.mouseY === 0 && this.ocrResults.length > 0) {
  //       this.drawMask(base64Mask, this.ocrResults[0].label, this.wordMarks[0].base64Mark);
  //       let wordInfo = this.showWordsInfo(this.ocrResults[0], this.wordMarks[0]);
  //       wordDetail.textContent = wordInfo;
  //     }
  //   },
  //   setWordStyle(ctx, word, x, y, width, height) {
  //     ctx.lineWidth = 2;
  //     ctx.font = "18px Arial";
  //     ctx.strokeStyle = word.mark < DATA.lowMark ? "red" : "#2e8b57";
  //     ctx.fillStyle = word.mark < DATA.lowMark ? "red" : "#2e8b57";
  //     ctx.strokeRect(x, y, width, height);
  //     ctx.fillText(`${word.mark.toFixed(0)}`, x, y - 5);
  //   },
  //   drawMask(canvas, label, base64String) {
  //     const ctx = canvas.getContext("2d");
  //     canvas.width = 128;
  //     canvas.height = 128;
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);

  //     const x = canvas.width / 2;
  //     const y = canvas.height / 2;
  //     ctx.fillStyle = "#FF5733";
  //     ctx.font = DATA.font == 0 ? "106px kaiti" : "80px sijie";
  //     ctx.textAlign = "center";
  //     ctx.textBaseline = "middle";
  //     ctx.fillText(label, x, y);

  //     const binaryData = atob(base64String);
  //     const byteArray = new Uint8Array(binaryData.length);
  //     for (let i = 0; i < binaryData.length; i++) {
  //       byteArray[i] = binaryData.charCodeAt(i);
  //     }

  //     this.drawBinaryImage(ctx, byteArray);
  //   },





  // }

  methods: {
    prepareHDCanvas(canvas, w, h) {
      const ratio = window.devicePixelRatio || 1
      canvas.width = w * ratio
      canvas.height = h * ratio
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      const ctx = canvas.getContext('2d')
      ctx.scale(ratio, ratio)
      return canvas
    },
    drawMask: function (canvas, label, base64String) {
      canvas.width = 128
      canvas.height = 128
      const ctx = canvas.getContext('2d')

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 标准字
      const x = canvas.width / 2
      const y = canvas.height / 2
      ctx.fillStyle = '#FF5733'
      if (DATA.font == 0) {
        ctx.font = '106px kaiti'
      } else {
        ctx.font = '80px sijie'
      }

      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(label, x, y)

      var binaryData = atob(base64String)
      var byteArray = new Uint8Array(binaryData.length)
      for (var i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i)
      }

      function draw() {
        function drawBinaryImage(bits) {
          for (let i = 0; i < 128; ++i) {
            for (let j = 0; j < 128; ++j) {
              let bit = bits[128 * i + j]

              if (bit === 0) {
                const colorValue = bit === 0 ? 0 : 255
                ctx.fillStyle = `rgb(${colorValue}, ${colorValue}, ${colorValue})`
                ctx.fillRect(j, i, 1, 1)
              }
            }
          }
        }
        let bits = displayBits(byteArray)
        drawBinaryImage(bits)

        function displayBits(uint8Array) {
          function getBitValues(data) {
            const bitValues = []

            for (let i = 0; i < data.length; i++) {
              for (let j = 7; j >= 0; j--) {
                const bit = (data[i] >> j) & 1
                bitValues.push(bit)
              }
            }

            return bitValues
          }

          const bits = getBitValues(uint8Array)
          return bits
        }
      }
      draw()
    },
    draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(
        imgData.img,
        0,
        0,
        imgData.img.width,
        imgData.img.height,
        0,
        0,
        canvas.width,
        canvas.height
      )

      ocrResults.forEach((ocr, i) => {
        const word = wordMarks[i]
        let x = ocr.points[0] * scale
        let y = ocr.points[1] * scale
        let width = (ocr.points[4] - ocr.points[0]) * scale
        let height = (ocr.points[5] - ocr.points[1]) * scale

        if (
          mouseX >= x &&
          mouseX <= x + width &&
          mouseY >= y &&
          mouseY <= y + height
        ) {
          ctx.strokeStyle = 'blue'
          ctx.fillStyle = 'blue'
          ctx.lineWidth = 2
          ctx.font = `${width / 3}px Arial`
          ctx.strokeRect(x, y, width, height)
          ctx.fillText(`${word.mark.toFixed(0)}`, x, y - 5)

          let wordInfo = showWordsInfo(ocr, word)
          wordDetail.textContent = wordInfo

          drawMask(base64Mask, ocr.label, word.base64Mark)
        } else {
          ctx.lineWidth = 2
          ctx.font = '18px Arial'
          if (word.mark < DATA.lowMark) {
            ctx.strokeStyle = 'red'
            ctx.fillStyle = 'red'
          } else {
            ctx.strokeStyle = '#2e8b57'
            ctx.fillStyle = '#2e8b57'
          }

          ctx.strokeRect(x, y, width, height)
          ctx.fillText(`${word.mark.toFixed(0)}`, x, y - 5)
        }
      })
      if (mouseX == 0 && mouseY == 0 && ocrResults.length > 0) {
        drawMask(base64Mask, ocrResults[0].label, wordMarks[0].base64Mark)
        let wordInfo = showWordsInfo(ocrResults[0], wordMarks[0])
        wordDetail.textContent = wordInfo
      }
    }

  }

};
</script>


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