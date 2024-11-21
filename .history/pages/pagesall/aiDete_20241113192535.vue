<template>
  <view class="ai—_box">
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

      <view class="photo_box2" @click="go_AI">
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
    <canvas canvas-id="myCanvas" />
  </view>

</template>

<script setup>
import { ref, onMounted } from 'vue';
// 导入 fetchAIRecognition 函数（如需要可添加）
import { fetchAIRecognition } from '@/utils/api';
import { onLoad } from '@dcloudio/uni-app'; // 导入 onLoad 生命周期钩子
import { useStore } from '@/store'
const store = useStore()
// 定义 getToken 函数以获取Token
const getToken = () => {
  // 从存储中获取 token
  const token = uni.getStorageSync('token'); // 'token' 是您存储 token 时使用的键名
  return token || ''; // 如果 Token 存在，返回它，否则返回空字符串
};
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

onLoad(() => {
  handleLogin();

});
// ---------------------
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
      // const base64Data = event.target.result; // 获取Base64数据
      // console.log('Base64格式的数据:', base64Data);
      const img = new Image();
      // console.log('+++++++++++++++++++', img)
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
      url: 'http://zexiart.com/api/common/detecthomework', // 替换为你的上传接口地址
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

  console.log('+++++++', resultDiv)
  // 将 resultDiv 存入 Pinia
  store.setResultDiv(resultDiv);
  uni.navigateTo({
    url: '/pages/pagesall/aiDete/aiResult',
  });

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
        ctx.font = '13px Arial'
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

const blob = ref('')

const chooseImage1 = () => {
  // var _this = this;
  uni.chooseImage({
    success: chooseImageRes => {
      const tempFilePaths = chooseImageRes.tempFilePaths;
      uni.getImageInfo({
        src: tempFilePaths[0],
        success: imageInfoRes => {
          const { width, height } = imageInfoRes;
          var _this = this;
          ctx = uni.createCanvasContext('canvasid', this);
          const C_W = 650; //canvas宽度，使用的手机屏幕
          canvasW = C_W; //
          canvasH = 420; // 设置画布高度
          ctx.setFillStyle('#545a7a'); //canvas背景颜色
          ctx.fillRect(0, 0, canvasW, canvasH); //canvas画布大小
          ctx.width = 300;
          ctx.height = 300;
          const newWidth = 300; // 新的宽度
          // const newHeight = (height / width) * newWidth; // 根据宽高比例换算新高度
          const newHeight = (height / width) * newWidth; // 根据宽高比例换算新高度
          console.log('新图片宽高:', newWidth, newHeight)
          console.log('旧图片宽高:', height, width)
          ctx.drawImage(tempFilePaths[0], 0, 0, newWidth, newHeight);
          ctx.draw(false, () => {
            uni.canvasToTempFilePath({
              canvasId: 'myCanvas',
              success: canvasRes => {
                console.log('新图片路径:', canvasRes.tempFilePath);
                // 这里可以将canvasRes.tempFilePath作为上传的新图片路径
              },
              fail: err => {
                console.error('转换canvas失败:', err);
              }
            });
          });
        },
        fail: err => {
          console.error('获取图片信息失败:', err);
        }
      });
    },
    fail: err => {
      console.error('选择图片失败:', err);
    }
  });
}
const go_AI = async () => {
  // 选择图片
  // const chooseImageRes = await uni.chooseImage({
  //   count: 1, // 最多选择1张图片
  //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图
  //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机
  // });
  chooseImage1()
  // 获取选择的图片路径
  // console.log(chooseImageRes.tempFilePaths[0])
  // blob.value = chooseImageRes.tempFilePaths[0]
  // const tempFilePaths = chooseImageRes.tempFiles;
  // console.log('选择的图片路径:', tempFilePaths);

  // // // 将图片路径转换为 File 对象
  // const filePath = tempFilePaths[0];

  // handleChooseFile(filePath)

};
</script>


<style>
.ai—_box {
  /* width: 100%;
		height: 100%; */
  width: 750rpx;
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