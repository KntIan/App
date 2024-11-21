<template>
  <view class="container">
    <view class="content_box">
      <text>客服电话</text>
      <text class="phone-number" @click="showActionSheet">400-000-0000</text>
    </view>
    <bottom-sheet :isVisible="isActionSheetVisible" :options="actionSheetOptions" :fontColor="'#5791F2'" @update:isVisible="isActionSheetVisible = $event" @optionSelected="handleOptionSelect" />
  </view>
</template>

<script>
import BottomSheet from '@/components/BottomSheet/BottomSheet.vue';
import { fetchContactUs } from '@/utils/api'
export default {
  components: {
    BottomSheet,
  },
  data() {
    return {
      isActionSheetVisible: false,
      actionSheetOptions: [{
        text: '呼叫 400-000-0000',
        imageSrc: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng508af3211aff2093c82948b6b714248f4e7c9dd737836b3b8d1449d9c81c5b12'
      }],
    };
  },
  onLoad() {
    this.getContactUs();
  },
  methods: {
    async getContactUs() {
      try {
        const response = await fetchContactUs();
        console.log(response)
        // this.constants = response; // 根据实际返回结果调整
        // console.log(this.constants)
      } catch (error) {
        console.error('获取关于我们的接口失败：', error);
      }
    },

    showActionSheet() {
      this.isActionSheetVisible = true; // 打开底部拉起栏
    },
    handleOptionSelect() {
      this.makePhoneCall()
    },
    makePhoneCall() {
      uni.makePhoneCall({
        phoneNumber: '4000000000',
        success: () => {
          console.log("拨打电话成功");
        },
        fail: () => {
          console.log("拨打电话失败");
        }
      });
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #fff;
  padding: 28rpx;
  font-size: 28rpx;
  line-height: 80rpx;
  padding-top: 0;
}

.header {
  padding: 20px;
  display: flex;
  align-items: center;
}

.back {
  font-size: 30px;
  margin-right: 10px;
}

.title {
  font-size: 18px;
  flex-grow: 1;
  text-align: center;
}

.content_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1rpx solid #eee;
}

.phone-number {
  color: blue;
}
</style>