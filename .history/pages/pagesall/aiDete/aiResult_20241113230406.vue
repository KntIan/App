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

  <div ref="resultsContainer" class="vertical-container"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from '@/store';
import { onLoad } from '@dcloudio/uni-app'; // 导入 onLoad 生命周期钩子

// 使用状态管理
const store = useStore();

// 定义响应式数据
const stu_List = ref([{
  name: '刘琪琦',
  id: '1008601'
}]);

const score_List = ref([{
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
}]);
// ---------------------

let DATA = {
  login_url: '',
  process_url: '',
  process_single_url: '',
  token: '',
  single: false,
  font: 0,
  // isCheckExamNum: true,
  lowMark: 70,
}
const blob = ref('')
const choose = () => {
  uni.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success: (res) => {
      // console.log(res.tempFilePaths[0])


      // 获取选择的图片路径
      console.log(chooseImageRes.tempFilePaths)
      blob.value = chooseImageRes.tempFilePaths[0]
      const tempFilePaths = chooseImageRes.tempFiles;
      console.log('选择的图片路径:', tempFilePaths);
      let filePath = tempFilePaths[0]
    }
  })
}
onLoad(() => {
  handleLogin();

  // let filePath = uni.getStorageSync('tempFilePaths')
  // console.log(filePath)
  handleChooseFile(filePath)
});
// const SERVER = ref('https://open.pixsmart.cn:6802')
const handleLogin = () => {
  let user = 'yunpengkeji'
  let pass = 'Sy6Z$wl@et1h'

  const jsonParams = {
    apiKey: user,
    apiSecret: pass,
  }

  fetch('https://open.pixsmart.cn:6802/sdkMgr/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jsonParams),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((response) => {
      console.log('login response', response)
      if (response.code === 0) {
        let token = response.data.accessToken
        // DATA.token = token
        DATA.token = 'eyJhbGciOiJIUzI1NiJ9.eyJwYXlsb2FkIjp7InN5c1ByZVJvbGUiOmZhbHNlLCJvYyI6bnVsbCwiZSI6MTczMTQyMDA3ODYyMSwidCI6MSwidSI6Inl1bnBlbmdrZWppIiwiYWNzIjpudWxsLCJsdyI6bnVsbCwic3ByIjpmYWxzZX19.Hh969-k8whchGCoqlBAg5VGk135gG03z9Lnpgq-S73Y'
        console.log('登录成功')
        // Q('#login_result').textContent = '登录成功'
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

const prepareHDCanvas = (canvas, w, h) => {
  const deviceWidth = window.innerWidth;  // 获取设备的宽度
  const deviceHeight = window.innerHeight; // 获取设备的高度
  console.log('设备宽度', deviceWidth);
  console.log('设备高度', deviceHeight);
  const ratio = window.devicePixelRatio || 1;
  console.log('设备像素比', ratio)
  canvas.width = deviceWidth;
  canvas.height = 500;
  // canvas.width = 375;
  // canvas.height = 500;
  console.log(canvas.width, canvas.height)
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  console.log('准备画布', canvas.style.width, canvas.style.height)
  const ctx = canvas.getContext('2d');
  ctx.scale(ratio, ratio);
  return canvas;
};
const handleChooseFile = async (file) => {
  console.log('choose file', file)
  let blob = await compressImageFile(file)
  console.log('choose blob', blob)
  let imageData = await file2ImageData(blob)
  console.log('choose imageData', imageData)
  let data = await evaluationImageData(imageData)
  // console.log('choose data', data)
  data.filename = file.name
  await displayResults(data)
  console.log('测评结束', data)

}

const compressImageFile = async (file) => {
  console.log(file);

  // 添加文件类型检查
  if (!file.type.startsWith('image/')) {
    return Promise.reject(new Error("文件类型不支持，必须是图像文件."));
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // 添加读取错误处理
    reader.onerror = (error) => {
      reject(new Error("文件读取失败: " + error));
    };

    reader.onload = (event) => {

      const img = new Image();

      // 添加图像加载错误处理
      img.onerror = () => {
        reject(new Error("图像加载失败."));
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // 添加对 toBlob 失败的处理
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("生成 Blob 失败."));
            }
          },
          "image/jpeg",
          0.8
        );
      };

      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  });
};


const file2ImageData = (blob) => {
  return new Promise((resolve, reject) => {
    const compressFile = new File([blob], 'tmp.jpg', { type: blob.type });
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

    reader.onerror = (error) => {
      reject(new Error('文件读取失败: ' + error.message));
    };

    reader.readAsDataURL(compressFile);
  });
};
async function evaluationImageData(imgData) {
  return new Promise(async (r, j) => {
    const startTime = performance.now()
    console.log('file size ', imgData.file.size)

    // 上传图片
    const uploadFileRes = await uni.uploadFile({
      url: 'http://www.zexiart.com/api/common/detecthomework', // 替换为你的上传接口地址
      filePath: blob.value, // 选择的图片路径
      name: 'file', // 上传接口的字段名
      header: {
        'token': ` ${getToken()}`, // 使用 Bearer Token 进行认证
      },
    });

    // 打印上传结果


    const resultData = uploadFileRes.data;

    // console.log(JSON.parse(resultData))
    let data = JSON.parse(resultData);

    // let data = await response.json()
    const endTime = performance.now()
    const elapsedTime = endTime - startTime
    r({ imgData, data: data, elapsedTime: elapsedTime })
  })
}
const resultsContainer = ref(null);

async function displayResults({ imgData, data, elapsedTime, filename }) {
  console.log(displayResults, imgData, data, elapsedTime)
  // const newWidth = 200;
  // const newHeight = 300;
  // imgData.img.width = newWidth;        // 设置新的宽度
  // imgData.img.height = newHeight;
  const img = imgData.img

  const resultDiv = document.createElement('div')
  resultDiv.className = 'horizontal-container'
  resultDiv.style.border = '1px solid black'
  const rightDiv = document.createElement('div')
  rightDiv.className = 'vertical-container'

  let mouseX = 0
  let mouseY = 0
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const maxWidth = 375
  // const ratio = window.devicePixelRatio || 1; // 获取设备的像素比
  // console.log('设备像素比', ratio)
  // const scale = (img.width > maxWidth ? maxWidth / img.width : 1) * ratio; // 将设备像素比纳入缩放比例
  const scale = img.width > maxWidth ? maxWidth / img.width : 1

  canvas.width = img.width
  canvas.height = img.height
  console.log('canvas width', canvas.width)
  console.log('canvas height', canvas.height)
  // img.width = img.width * scale
  // img.height = img.height * scale

  // prepareHDCanvas(canvas, canvas.width, canvas.height)
  console.log('图片宽高', img.width)
  console.log('图片宽高', img.height)
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,

    0,
    0,
    canvas.width,
    canvas.height
  )

  const wordDetail = document.createElement('pre')
  wordDetail.className = 'word-detail'

  const base64Mask = document.createElement('canvas')
  base64Mask.width = 128
  base64Mask.height = 128
  base64Mask.className = 'base64Mask'

  function genPageInfoEl() {

    let pageInfo = '卷面分：' + data.data.pageMark
    let p = document.createElement('p')
    p.textContent = pageInfo
    p.style.color = 'red'
    return p
  }
  rightDiv.appendChild(genPageInfoEl())

  function genExtraInfoEl() {
    let extraInfo =
      '测评耗时（包含网络请求）' + `${elapsedTime.toFixed(2)} ms`
    let p = document.createElement('p')
    p.textContent = extraInfo
    return p
  }

  resultDiv.appendChild(canvas)
  rightDiv.appendChild(base64Mask)
  rightDiv.appendChild(wordDetail)
  rightDiv.appendChild(
    (() => {
      let p = document.createElement('p')
      p.textContent = '学号测评 ' + data.data.examNum
      p.style.color = 'red'
      return p
    })()
  )
  rightDiv.appendChild(genExtraInfoEl())
  rightDiv.appendChild(
    (() => {
      let p = document.createElement('p')
      p.textContent = '文件名 ' + filename
      return p
    })()
  )
  resultDiv.appendChild(rightDiv)
  console.log('resultsContainer:', resultsContainer.value);
  resultsContainer.value.appendChild(resultDiv)
  console.log('+++++++', resultDiv)
  // 将 resultDiv 存入 Pinia
  // store.setResultDiv(resultDiv);


  const ocrResults = data.data.ocrResults
  const wordMarks = data.data.wordMarks

  function draw() {
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

  canvas.addEventListener('click', function (event) {
    const rect = canvas.getBoundingClientRect()
    mouseX = event.clientX - rect.left
    mouseY = event.clientY - rect.top
    draw()
  })

  let drawMask = function (canvas, label, base64String) {
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
  }

  let showWordsInfo = function (ocrResult, wordMark) {
    // 构建文本信息
    let sb = []
    sb.push(ocrResult.label + '\n')
    if (wordMark.mark <= 0) {
      sb.push('暂无识别字的评测数据\n')
    }
    sb.push('综合得分 ' + wordMark.mark + '\n')
    sb.push('重心得分 ' + wordMark.centerMark)

    if (wordMark.centerInfo === 0) {
      sb.push('良好')
    } else if (wordMark.centerInfo === 1) {
      sb.push('偏上')
    } else if (wordMark.centerInfo === 2) {
      sb.push('偏下')
    } else if (wordMark.centerInfo === 3) {
      sb.push('偏左')
    } else if (wordMark.centerInfo === 4) {
      sb.push('偏右')
    }
    sb.push('\n')

    sb.push('形态得分 ' + wordMark.rateMark)
    if (wordMark.rateInfo === 0) {
      sb.push('良好')
    } else if (wordMark.rateInfo === 1) {
      sb.push('太宽')
    } else if (wordMark.rateInfo === 2) {
      sb.push('太瘦')
    }
    sb.push('\n')

    sb.push('大小得分 ' + wordMark.areaMark)
    if (wordMark.areaInfo === 0) {
      sb.push('良好')
    } else if (wordMark.areaInfo === 1) {
      sb.push('太小')
    } else if (wordMark.areaInfo === 2) {
      sb.push('太大')
    }
    sb.push('\n')

    sb.push('位置得分 ' + wordMark.posMark)
    if (wordMark.posInfo === 0) {
      sb.push('良好')
    } else if (wordMark.posInfo === 1) {
      sb.push('偏上')
    } else if (wordMark.posInfo === 2) {
      sb.push('偏下')
    } else if (wordMark.posInfo === 3) {
      sb.push('偏左')
    } else if (wordMark.posInfo === 4) {
      sb.push('偏右')
    }
    sb.push('\n')

    sb.push('笔画得分 ' + wordMark.conFMark)
    if (wordMark.conFInfo === 0) {
      sb.push('良好')
    } else if (wordMark.conFInfo === 1) {
      sb.push('不良')
    }
    sb.push('\n')

    return sb.join('')
  }
  draw()
}
// ------------------------
// 这里可以定义 refs


// 在组件挂载后执行
onMounted(() => {
  console.log('resultsContainer:', resultsContainer.value);

  const newElement = document.createElement('div');
  console.log('111:', newElement);
  // 从 store 中获取 resultDivData，并确保它是有效的
  if (store.resultDivData) {
    newElement.innerHTML = store.resultDivData;
    // newElement.appendChild(store.resultDivData)// 根据实际内容决定使用 textContent 或 innerHTML
    console.log('222:', newElement.innerHTML);

    // 提取分数
    const scoreText = newElement.querySelector('.word-detail').textContent;
    const scores = {
      综合得分: null,
      重心得分: null,
      形态得分: null,
      大小得分: null,
      位置得分: null,
      笔画得分: null
    };

    // 使用正则表达式提取分数
    const regex = /(综合得分|重心得分|形态得分|大小得分|位置得分|笔画得分)\s+(\d+)/g;
    let match;
    while ((match = regex.exec(scoreText)) !== null) {
      const scoreType = match[1]; // 得分类型
      const scoreValue = parseInt(match[2], 10); // 将得分值转换为整数
      if (scores.hasOwnProperty(scoreType)) {
        scores[scoreType] = scoreValue; // 存储得分
      }
    }

    // 打印提取的分数
    console.log('提取的分数:', scores);
    // 定义评分级别函数
    // 定义评分级别函数（四个等级用于综合得分，其他为五个等级）
    const getComprehensiveLevel = (score) => {
      if (score >= 85) return '优'; // 85-100 -> 优
      if (score >= 70) return '良'; // 70-84 -> 良
      if (score >= 50) return '中';  // 50-69 -> 中
      return '差';                   // 0-49 -> 差
    };
    const getOtherLevel = (score) => {
      if (score >= 80) return 5;  // 80-100 -> 等级5
      if (score >= 60) return 4;  // 60-79 -> 等级4
      if (score >= 40) return 3;  // 40-59 -> 等级3
      if (score >= 20) return 2;  // 20-39 -> 等级2
      return 1;                   // 0-19 -> 等级1
    };

    // 打印提取的分数和等级
    for (const [key, value] of Object.entries(scores)) {
      if (value !== null) {
        let level;
        if (key === '综合得分') {
          level = getComprehensiveLevel(value); // 获取综合得分等级
        } else {
          level = getOtherLevel(value); // 获取其他得分等级
        }
        console.log(`${key}: ${value}, 等级: ${level}`);
      }
    }
    const scoreMap = {
      '重心': scores.重心得分,
      '位置': scores.位置得分,
      '形态': scores.形态得分,
      '笔画': scores.笔画得分,
      '大小': scores.大小得分,
    };

    score_List.value.forEach(item => {
      const score = scoreMap[item.title];
      if (score !== undefined) {
        item.score = getOtherLevel(score); // 将等级赋值给对应的项
        console.log(item.title, item.score);
      }
    });
  }

  // 确保 resultsContainer 存在
  if (resultsContainer.value) {
    resultsContainer.value.appendChild(newElement);
  }
});

// 方法定义
const res_goback = () => {
  uni.navigateBack();
};

const addResult = () => {
  // 示例：添加新的操作
  const resultDiv = document.createElement('div');
  resultDiv.textContent = '新的结果';
  resultsContainer.value.appendChild(resultDiv);
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