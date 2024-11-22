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

  </view>
</template>

<script setup>
import { ref } from 'vue';
// 导入 fetchAIRecognition 函数（如需要可添加）
import { fetchAIRecognition } from '@/utils/api';

// 定义 getToken 函数以获取Token
const getToken = () => {
  // 从存储中获取 token
  const token = uni.getStorageSync('token'); // 'token' 是您存储 token 时使用的键名
  return token || ''; // 如果 Token 存在，返回它，否则返回空字符串
};

// ---------------------
async function handleChooseFile(file) {
  console.log(file)
  let blob = await compressImageFile(file);
  console.log('127', blob)
  let imageData = await file2ImageData(blob);
  console.log('129', imageData)
  // let data = await evaluationImageData(imageData);
  // data.filename = file.name;
  // await displayResults(data)
  console.log("测评结束", data);
}

function compressImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = function (event) {
      const img = new Image()
      img.onload = function () {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        canvas.toBlob(
          function (blob) {
            resolve(blob)
          },
          'image/jpeg',
          0.8
        )
      }
      img.src = event.target.result
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

// function file2ImageData(blob) {
//   return new Promise((r, j) => {
//     const compressFile = new File([blob], "tmp.jpg", { type: blob.type });
//     const reader = new FileReader();

//     reader.onload = (event) => {
//       const img = new Image();
//       img.onload = () => {
//         r({
//           img,
//           file: compressFile,
//           filesize_str: `${(compressFile.size / 1024).toFixed(2)}KB`,
//         })
//       };
//       img.src = event.target.result;
//     };

//     reader.readAsDataURL(compressFile);
//   });
// }


// ------------------------


const go_AI = async () => {
  try {
    // 选择图片
    const chooseImageRes = await uni.chooseImage({
      count: 1, // 最多选择1张图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机
    });

    // 获取选择的图片路径
    const tempFilePaths = chooseImageRes.tempFilePaths;
    console.log('选择的图片路径:', tempFilePaths);

    // 将图片路径转换为 File 对象
    const filePath = tempFilePaths[0];
    const fileInfo = await uni.getFileInfo({
      filePath: filePath,
    });

    const file = new File([fileInfo], 'selected-image.jpg', {
      type: fileInfo.type, // 将"type"作为文件的类型
    });

    console.log('转换后的 File 对象:', file);
    handleChooseFile(file)
    // 上传图片
    // const uploadFileRes = await uni.uploadFile({
    //   url: 'http://zexiart.com/api/common/detecthomework', // 替换为你的上传接口地址
    //   filePath: tempFilePaths[0], // 选择的图片路径
    //   name: 'file', // 上传接口的字段名
    //   header: {
    //     'token': ` ${getToken()}`, // 使用 Bearer Token 进行认证
    //   },
    // });
    // -------------------------------------------------------------




    // ----------------------------------------------------

    // 打印上传结果

    // console.log('上传结果:', uploadFileRes);
    // if (uploadFileRes.statusCode === 200) {
    //   // 获取需要传递到下一个页面的数据
    //   const resultData = JSON.stringify(uploadFileRes.data); // 假设需要传递的是 uploadFileRes.data
    //   uni.navigateTo({
    //     // url: `/pages/pagesall/aiDete/aiResult?resultData=${encodeURIComponent(resultData)}`, // 跳转到 aiResult 页面，并传递数据
    //   });
    // }
  } catch (error) {
    console.error('go_AI 方法出错', error);
  }
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