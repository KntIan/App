<!-- <template>
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
    };
  },
  methods: {
    res_goback() {
      uni.navigateBack();
    },
  },
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
</style> -->


<template>
  <view>
    <input type="file" id="ipt_image" @change="handleImageChange" multiple accept=".txt,.pdf,.docx" />
    <select id="server" v-model="SERVER">
      <option value="http://example.com">Server 1</option>
      <option value="http://example2.com">Server 2</option>
    </select>
    <select id="single" v-model="DATA.single">
      <option value="true">Single</option>
      <option value="false">Multiple</option>
    </select>
    <select id="font" v-model="DATA.font">
      <option value="0">Font 1</option>
      <option value="1">Font 2</option>
    </select>
    <select id="exam_num" v-model="DATA.isCheckExamNum">
      <option value="true">Check Exam Num</option>
      <option value="false">Don't Check Exam Num</option>
    </select>
    <button id="login" @click="handleLogin">Login</button>
    <div id="resultsContainer">
      <div v-for="(result, index) in results" :key="index" class="horizontal-container">
        <canvas :width="result.canvasWidth" :height="result.canvasHeight" @click="handleCanvasClick(index, $event)"></canvas>
        <div class="vertical-container">
          <p>卷面分：{{ result.pageMark }}</p>
          <p>测评耗时（包含网络请求）：{{ result.elapsedTime.toFixed(2) }} ms</p>
          <p>学号测评 {{ result.examNum }}</p>
          <p>文件名 {{ result.filename }}</p>
          <pre class="word-detail">{{ result.wordDetail }}</pre>
          <canvas class="base64Mask" :width="result.base64MaskWidth" :height="result.base64MaskHeight"></canvas>
        </div>
      </div>
    </div>
  </view>
</template>

<script>
export default {
  data() {
    return {
      SERVER: 'http://example.com',
      DATA: {
        login_url: "",
        process_url: "",
        process_single_url: "",
        token: "",
        single: false,
        font: 0,
        isCheckExamNum: true,
        lowMark: 70
      },
      results: []
    };
  },
  methods: {
    handleImageChange(e) {
      const files = Array.from(e.target.files);
      this.results = [];
      files.forEach(async (file) => {
        await this.handleChooseFile(file);
      });
    },
    async handleChooseFile(file) {
      let blob = await this.compressImageFile(file);
      let imageData = await this.file2ImageData(blob);
      let data = await this.evaluationImageData(imageData);
      data.filename = file.name;
      await this.displayResults(data);
      console.log("测评结束", data);
    },
    async handleLogin() {
      let user = document.getElementById("ipt_user").value;
      let pass = document.getElementById("ipt_pass").value;

      const jsonParams = {
        apiKey: user,
        apiSecret: pass,
      };

      try {
        const response = await fetch(this.SERVER + "/sdkMgr/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonParams),
        });
        const responseJson = await response.json();
        if (responseJson.code === 0) {
          let token = responseJson.data.accessToken;
          this.DATA.token = token;
          document.getElementById("login_result").textContent = "登录成功";
        }
      } catch (error) {
        console.log(error);
      }
    },
    async file2ImageData(blob) {
      return new Promise((resolve, reject) => {
        const compressFile = new File([blob], "tmp.jpg", { type: blob.type });
        const reader = new FileReader();

        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            resolve({
              img,
              file: compressFile,
              filesize_str: `${(compressFile.size / 1024).toFixed(2)}KB`,
            });
          };
          img.src = event.target.result;
        };

        reader.onerror = reject;
        reader.readAsDataURL(compressFile);
      });
    },
    async evaluationImageData(imgData) {
      return new Promise(async (resolve, reject) => {
        const startTime = performance.now();

        const ipt_user = document.getElementById("ipt_user");
        console.log("file size ", imgData.file.size);

        const formData = new FormData();
        formData.append("sdk", "WordEvaluation");
        formData.append("device_id", "test_device_id");
        formData.append("w", imgData.img.width);
        formData.append("h", imgData.img.height);
        formData.append("rotation", 0);
        formData.append("jpgSize", imgData.file.size);
        formData.append("isCheckExamNum", this.DATA.isCheckExamNum);
        formData.append("font", this.DATA.font);
        formData.append("userId", ipt_user.value);
        formData.append("file", imgData.file);

        let headers = {
          "X-SW-Auth-Token": this.DATA.token,
        };

        let url = "";
        if (this.DATA.single == "true") {
          url = this.SERVER + "/sdkMgr/sdk/sdkConcentrationDetectSingle";
        } else {
          url = this.SERVER + "/sdkMgr/sdk/sdkConcentrationDetect";
        }

        try {
          const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: formData
          });
          const data = await response.json();
          const endTime = performance.now();
          const elapsedTime = endTime - startTime;
          resolve({ imgData, data: data, elapsedTime: elapsedTime });
        } catch (error) {
          reject(error);
        }
      });
    },
    async displayResults({ imgData, data, elapsedTime, filename }) {
      const img = imgData.img;

      const resultDiv = {
        canvasWidth: img.width,
        canvasHeight: img.height,
        pageMark: data.data.pageMark,
        elapsedTime: elapsedTime,
        examNum: data.data.examNum,
        filename: filename,
        wordDetail: "",
        base64MaskWidth: 128,
        base64MaskHeight: 128
      };

      this.results.push(resultDiv);

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const scale = img.width > 1000 ? 1000 / img.width : 1;
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      this.prepareHDCanvas(canvas, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);

      const ocrResults = data.data.ocrResults;
      const wordMarks = data.data.wordMarks;

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imgData.img, 0, 0, imgData.img.width, imgData.img.height, 0, 0, canvas.width, canvas.height);

        ocrResults.forEach((ocr, i) => {
          const word = wordMarks[i];
          let x = ocr.points[0] * scale;
          let y = ocr.points[1] * scale;
          let width = (ocr.points[4] - ocr.points[0]) * scale;
          let height = (ocr.points[5] - ocr.points[1]) * scale;

          ctx.lineWidth = 2;
          ctx.font = "18px Arial";
          if (word.mark < this.DATA.lowMark) {
            ctx.strokeStyle = "red";
            ctx.fillStyle = "red";
          } else {
            ctx.strokeStyle = "#2e8b57";
            ctx.fillStyle = "#2e8b57";
          }

          ctx.strokeRect(x, y, width, height);
          ctx.fillText(`${word.mark.toFixed(0)}`, x, y - 5);
        });
      }

      canvas.addEventListener("click", (event) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        draw();
      });

      this.drawMask(canvas, ocrResults[0].label, wordMarks[0].base64Mark);
      this.showWordsInfo(ocrResults[0], wordMarks[0]);
    },
    prepareHDCanvas(canvas, w, h) {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = w * ratio;
      canvas.height = h * ratio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      ctx.scale(ratio, ratio);
      return canvas;
    },
    drawMask(canvas, label, base64String) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const x = canvas.width / 2;
      const y = canvas.height / 2;
      ctx.fillStyle = "#FF5733";
      if (this.DATA.font == 0) {
        ctx.font = "106px kaiti";
      } else {
        ctx.font = "80px sijie";
      }

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, x, y);

      var binaryData = atob(base64String);
      var byteArray = new Uint8Array(binaryData.length);
      for (var i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }

      function drawBinaryImage(bits) {
        for (let i = 0; i < 128; ++i) {
          for (let j = 0; j < 128; ++j) {
            let bit = bits[128 * i + j];

            if (bit === 0) {
              const colorValue = bit === 0 ? 0 : 255;
              ctx.fillStyle = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
              ctx.fillRect(j, i, 1, 1);
            }
          }
        }
      }

      let bits = this.displayBits(byteArray);
      drawBinaryImage(bits);
    },
    displayBits(uint8Array) {
      const bitValues = [];

      for (let i = 0; i < uint8Array.length; i++) {
        for (let j = 7; j >= 0; j--) {
          const bit = (uint8Array[i] >> j) & 1;
          bitValues.push(bit);
        }
      }

      return bitValues;
    },
    showWordsInfo(ocrResult, wordMark) {
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

      return sb.join("");
    },
    async compressImageFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            canvas.toBlob(
              (blob) => {
                resolve(blob);
              },
              "image/jpeg",
              0.8
            );
          };
          img.src = event.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
  }
};
</script>

<style scoped>
.horizontal-container {
  display: flex;
  border: 1px solid black;
  margin-bottom: 10px;
}

.vertical-container {
  display: flex;
  flex-direction: column;
}

.word-detail {
  white-space: pre-wrap;
}

.base64Mask {
  width: 128px;
  height: 128px;
}
</style>
