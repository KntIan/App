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
import { fetchAIRecognition } from '@/utils/api';

// 定义 go_AI 方法
const go_AI = async () => {
  try {
    // 选择图片
    const [chooseImageError, chooseImageRes] = await uni.chooseImage({
      count: 1, // 最多选择1张图片
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    });

    if (chooseImageError) {
      console.error('选择图片失败', chooseImageError);
      return;
    }

    // 获取选择的图片路径
    const tempFilePaths = chooseImageRes.tempFilePaths;

    // 上传图片
    const [uploadFileError, uploadFileRes] = await uni.uploadFile({
      url: 'http://zexiart.com/api/common/detecthomework', // 替换为你的上传接口地址
      filePath: tempFilePaths[0], // 选择的图片路径
      name: 'file', // 上传接口的字段名
      formData: {
        // 其他需要上传的参数
      },
    });

    if (uploadFileError) {
      console.error('上传图片失败', uploadFileError);
      return;
    }

    // 上传成功后，可以调用 fetchAIRecognition 方法进行AI识别
    // const [aiRecognitionError, aiRecognitionRes] = await fetchAIRecognition(uploadFileRes.data);

    // if (aiRecognitionError) {
    //   console.error('AI识别失败', aiRecognitionError);
    //   return;
    // }

    // AI识别成功后的处理逻辑
    // console.log('AI识别结果', aiRecognitionRes);
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