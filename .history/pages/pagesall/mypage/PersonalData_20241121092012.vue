<template>
  <view>
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
    <view>

      <!-- <view style="height: 350rpx"></view> -->
      <uv-datetime-picker ref="datetimePicker" v-model="formData.value" mode="date" :minDate="946695809000" @confirm="confirm">
      </uv-datetime-picker>
      <bottom-sheet style="font-weight: 400;" :isVisible="isActionSheetVisible" :options="actionSheetOptions" @update:isVisible="isActionSheetVisible = $event" @optionSelected="handleOptionSelect" />
      <view class="container">
        <view class="form">
          <view class="textTitle">
            <view class="title1">
              更换头像
            </view>
          </view>
          <view class="textlogin">
            <view class="img1" @click="chooseAvatar">
              <img style="width: 192rpx;height: 192rpx;border-radius: 50%;" :src="avatarUrl" alt="" />
              <!-- <img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng37fd122e911efbf5a6c9a5907384d8c8ed78d7e5b8bc971416d09e8e914fe7a3" alt="" /> -->
              <!-- <img v-else src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngccb17aadab169aefc90146fec8d12c387bab7ca72b9085f1b18a2a993cef6316" alt="" /> -->
              <view class="imgtext1">
                男
              </view>

            </view>
          </view>
          <view class="title">姓名</view>
          <view class="input_po">
            <custom-input v-model="formData.name" :placeholder="'输入姓名'" :disabled="true" />
          </view>
          <view class="title">年龄</view>
          <view class="input_po">
            <custom-input v-model="formData.age" :placeholder="'例如:12'" :disabled="true" />
          </view>
          <view class="title">出生年月日</view>
          <view class="input_po">
            <view :class="{'disabled':isDisabled}" class="image-text_1 flex-row justify-between input">
              <text>{{ dateYear }}</text>
            </view>
            <image class="icon_1" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng020f3b0f7825fdd6e79b0361c149b486540d9894e91feb72f43c076696f9d05f" style="width: 28rpx; height: 28rpx;" @click="!isDisabled ? null : open()" />
          </view>
          <view class="title">校区</view>
          <view class="input_po">
            <view class="input">
              <picker :disabled="isDisabled1" @change="giftPickerChange($event, giftArray)" :value="giftindex" :range="giftArray && giftArray.map(item => item.title)" :range-key="'gift'">
                <view class="uni-input text-group_2">{{ giftmoren }}</view>
              </picker>

            </view>
            <image class="icon_1" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng020f3b0f7825fdd6e79b0361c149b486540d9894e91feb72f43c076696f9d05f" style="width: 28rpx; height: 28rpx;" @click="togglePicker" />
          </view>
          <view class="title">班级</view>
          <view class="input_po">
            <view class="uni-list-cell-db input">
              <picker mode="selector" @change="onClassChange" :value="multiIndex" :range="multiArray &&multiArray.map(item => item.title)" :disabled="isDisabled2">
                <view class="uni-input">{{ selectedValue }}</view>
              </picker>
            </view>
            <image class="icon_1" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng020f3b0f7825fdd6e79b0361c149b486540d9894e91feb72f43c076696f9d05f" style="width: 28rpx; height: 28rpx;" @click="togglePickerclass" />
          </view>
          <view class="title">推荐人</view>
          <view class="input_po">
            <custom-input v-model="formData.referrer" :placeholder="'输入推荐人'" :disabled="true" />
          </view>
          <view class="title">手机号</view>
          <view class="input_po">
            <custom-input v-model="formData.phone" :placeholder="'输入手机号'" :disabled="true" />
          </view>

          <button class="login-button" @click="getlogin">完成</button>
        </view>
        <view class="footer"></view>
      </view>
    </view>
  </view>
</template>

<script setup>
import {
  ref,
  reactive,
  onMounted
} from 'vue';
import CustomInput from '@/components/CustomInput/CustomInput';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { fetchUserInfo, uploadImage } from '@/utils/api';
import { useStore } from '@/store'
const store = useStore()
import { onLoad } from '@dcloudio/uni-app';
const statusBarHeight = ref()
onLoad(() => {
  statusBarHeight.value = getApp().globalData.top;
})

// 响应式数据
const formData = reactive({
  name: '张三', // 模拟数据
  age: 33, // 模拟数据
  referrer: '李老师', // 模拟数据
  phone: '13812345678', // 模拟数据
  password: '12315',
  value: ''
});

const isActionSheetVisible = ref(false);
const actionSheetOptions = ref([{
  text: '拍照'
},
{
  text: '从手机相册选择'
}
]);
const isDisabled1 = ref(true);
const isDisabled2 = ref(true);
const isDisabled = ref(true);
const dateYear = ref('年/月/日');
const giftmoren = ref('选择校区');
const selectedValue = ref("请选择班级");
const datetimePicker = ref(null);
const giftindex = ref(0);
const giftArray = ref();
const multiArray = ref();
const multiIndex = ref();
const refelist = ref({});
const avatarUrl = ref(''); // 新增：存储头像URL
// 方法
const retPass = async () => {
  await uni.navigateTo({
    url: "/pages/login/ratpass"
  });
};

const open = () => {
  datetimePicker.value.open();
  console.log(datetimePicker.value);
};

const togglePicker = () => {
  isDisabled1.value = !isDisabled1.value; // 切换禁用状态
};

const togglePickerclass = () => {
  isDisabled2.value = !isDisabled2.value; // 切换禁用状态
};

const getlogin = () => {
  // refelist.value = {
  //   gender: '',
  //   name: formData.name,
  //   dateYear: dateYear.value,
  //   giftmoren: giftmoren.value,
  //   multiArray: multiArray.value[1][multiIndex.value[1]],
  //   refe: formData.referrer,
  //   iphone: formData.phone,
  //   trepass: formData.password
  // };
  console.log(refelist.value);
  uni.navigateBack()
};

const giftPickerChange = (e, giftArray) => {
  console.log('picker发送选择改变，携带值为', e.detail.value);
  let index = e.detail.value;
  giftindex.value = index;
  giftmoren.value = giftArray[index].title
};

const chooseAvatar = () => {

  isActionSheetVisible.value = true; // 打开底部拉起栏

};

const handleOptionSelect = (option) => {
  if (option === '拍照') {
    takePhoto();
  } else {
    pickImageFromAlbum();
  }
  console.log('选择的选项:', option); // 处理选项选择
};

const takePhoto = () => {
  uni.chooseImage({
    count: 1,
    sourceType: ['camera'],
    success: async (res) => {
      console.log(res, '+++++++++')
      uni.uploadFile({
        url: 'http://admin.zexishuhua.com/api/common/upload', //仅为示例，非真实的接口地址
        filePath: res.tempFilePaths[0],
        name: 'file',
        formData: {
          'token': uni.getStorageSync('token')
        },
        success: (uploadFileRes) => {
          console.log(uploadFileRes.data);
          avatarUrl.value = res.tempFilePaths[0]
        }
      });
    },
    fail: (error) => {
      console.error('拍照失败:', error);
    }
  });
};

const pickImageFromAlbum = () => {
  uni.chooseImage({
    count: 1,
    sourceType: ['album'],
    success: async (res) => {
      console.log(res, '+++++++++')
      if (res.tempFilePaths.length === 0) {
        console.error('未选择任何图片');
        return; // 如果没有选择图片，提前退出
      }
      uni.uploadFile({
        url: 'http://admin.zexishuhua.com/api/common/upload', //仅为示例，非真实的接口地址
        filePath: res.tempFilePaths[0],
        name: 'file',
        formData: {
          'token': uni.getStorageSync('token')
        },
        success: (uploadFileRes) => {
          console.log(uploadFileRes.data);
          avatarUrl.value = res.tempFilePaths[0]
        }
      });

    },
    fail: (error) => {
      console.error('选择图片失败:', error);
    }
  });
};

const onClassChange = (event) => {
  multiIndex.value = event.detail.value;
  // 检查 multiIndex.value 是否是有效的索引
  if (isNaN(multiIndex.value) || multiIndex.value.length === 0) {
    selectedValue.value = multiArray.value[0].title; // 默认选择第一项
    classlyId.value = multiArray.value[0].id
  } else {
    selectedValue.value = multiArray.value[multiIndex.value].title; // 更新为用户选择的值
    classlyId.value = multiArray.value[multiIndex.value].id
  }
};


const confirm = (e) => {
  let date = new Date(e.value);
  let y = date.getFullYear();
  let MM = date.getMonth() + 1;
  MM = MM < 10 ? ('0' + MM) : MM; //月补0
  let d = date.getDate();
  d = d < 10 ? ('0' + d) : d; //天补0
  let h = date.getHours();
  h = h < 10 ? ('0' + h) : h; //小时补0
  let m = date.getMinutes();
  m = m < 10 ? ('0' + m) : m; //分钟补0
  let s = date.getSeconds();
  s = s < 10 ? ('0' + s) : s; //秒补0
  let newtime = y + '-' + MM + '-' + d; //年月日
  let newtime2 = y + '.' + MM + '.' + d;

  dateYear.value = newtime2;
};

// 页面加载时请求接口获取个人信息
onMounted(async () => {

  console.log(store.campusData)
  giftArray.value = store.campusData
  console.log(giftArray.value)
  multiArray.value = store.classData
  try {
    const userInfo = await fetchUserInfo();
    console.log(userInfo)
    // 将获取到的用户信息赋值给 formData
    formData.name = userInfo.data.nickname;
    formData.age = userInfo.data.age;
    formData.referrer = userInfo.data.referee;
    formData.phone = userInfo.data.mobile;
    formData.password = userInfo.data.password;

    // 处理出生年月日
    const birthDate = new Date(userInfo.data.birthday);
    console.log(birthDate)
    const y = birthDate.getFullYear();
    const MM = (birthDate.getMonth() + 1).toString().padStart(2, '0');
    const d = birthDate.getDate().toString().padStart(2, '0');
    console.log(y, MM, d)
    dateYear.value = `${y}.${MM}.${d}`;

    // 处理校区
    const campus = store.campusData.find(item => item.id === userInfo.data.school_id);
    if (campus) {
      giftmoren.value = campus.title;
      giftindex.value = store.campusData.indexOf(campus);
    }

    // 处理班级
    // const num = userInfo.data.classly_id = 2

    console.log(store.classData)
    console.log(userInfo.data.classly_id)

    const classItem = store.classData.find(item => item.id === userInfo.data.classly_id);
    console.log(classItem)
    if (classItem) {
      const classIndex = store.classData.indexOf(classItem);
      selectedValue.value = classItem.title;
      multiIndex.value = [classIndex];
    }
  } catch (error) {
    console.error('获取用户信息失败:', error);
  }
});
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  background-color: #fff;
}

.input_po {
  position: relative;
}

.icon_1 {
  position: absolute;
  top: 26rpx;
  right: 36rpx;
}

.form {
  width: 90%;
}

.title {
  margin-bottom: 20rpx;
}

.title1 {
  height: 25rpx;
  font-family: PingFangSC, PingFang SC;
  font-weight: 700;
  font-size: 36rpx;
  color: #000000;
  line-height: 25rpx;
  text-align: left;
  font-style: normal;
}

.title2 {
  margin-top: 24rpx;
  height: 17rpx;
  font-family: PingFangSC, PingFang SC;
  font-weight: 400;
  font-size: 24rpx;
  color: #999999;
  line-height: 17rpx;
  text-align: left;
  font-style: normal;
}

.textTitle {
  margin-top: 60rpx;
}

.input {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 50px;
  background-color: #eeeeee;
  font-size: 14px;
}

.login-button {
  width: 100%;
  padding: 2px;
  border-radius: 50px;
  background-color: #666666;
  color: #fff;
  text-align: center;
  font-size: 16px;
  margin-top: 48rpx;
  margin-bottom: 48rpx;
}

.textlogin {
  margin-bottom: 24rpx;
  font-weight: 700;
  display: flex;
  margin-top: 24rpx;
}

.links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10rpx;
}

.link {
  color: #555;
  font-size: 12rpx;
}

.footer {
  margin-top: 20rpx;
  text-align: center;
  color: #888;
}

.imgtext1 {
  text-align: center;
  font-size: 28rpx;
  font-weight: 500;
}
</style>