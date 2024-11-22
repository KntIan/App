<template>
  <view>
    <uv-datetime-picker ref="datetimePicker" v-model="value" mode="date" :minDate="946695809000" @confirm="confirm" />
    <view style="height: 500rpx"></view>
    <view class="container">

      <view class="form">
        <view class="textTitle">
          <view class="title1"> 欢迎来到泽曦书画 </view>
          <view class="title2"> 请选择性别年龄，校区班级推荐人 </view>
        </view>
        <view style="margin-top: 24rpx;" class="textlogin">
          <view class="img1" @click="selectGender('男')">
            <img v-if="isMale" src="@/static/img/boy.png" alt="" />
            <img v-else src="@/static/img/boy1.png" alt="" />
            <view class="imgtext1"> 男 </view>
          </view>
          <view class="img2" @click="selectGender('女')">
            <img v-if="isFemale" src="@/static/img/girl.png" alt="" />
            <img v-else src="@/static/img/girl1.png" alt="" />
            <view class="imgtext1"> 女 </view>
          </view>
        </view>
        <view class="title">姓名</view>
        <input type="text" placeholder="输入姓名" class="input" @input="updateField('name', $event)" />
        <view class="title">年龄</view>
        <input type="number" placeholder="例如:12" class="input" @input="updateField('old', $event)" />
        <view class="title">出生年月日</view>
        <view class="image-text_1 flex-row justify-between input" @click="open">
          <text>{{ dateYear }}</text>
        </view>
        <view class="title">校区</view>
        <view class="input">
          <picker @change="giftPickerChange" :value="giftIndex" :range="giftArray.map(item => item.title)" :range-key="'gift'">
            <view class="uni-input">{{ giftmoren }}</view>
          </picker>
        </view>

        <view class="title">班级</view>
        <view class="input">
          <picker mode="selector" @change="onClassChange" :value="multiIndex" :range="multiArray.map(item => item.title)" :disabled="isClassPickerDisabled">
            <view class="uni-input">{{ selectedValue }}</view>
          </picker>
        </view>

        <view class="title">推荐人</view>
        <input type="text" placeholder="输入推荐人" class="input" @input="updateField('refe', $event)" />
        <view class="title">手机号</view>
        <!-- autocomplete="off" off/nope 防止自动填充 -->
        <input type="text" placeholder="输入手机号" class="input" autocomplete="off" @input="updateField('iphone', $event)" />
        <view style="position: relative;">
          <view class="title">验证码</view>
          <!-- autocomplete="off" off/nope 防止自动填充 -->
          <input type="text" placeholder="验证码" class="input" autocomplete="off" @input="updateField('captcha', $event)" />
          <view style="position: absolute;right: 0;
    bottom: 4px;
}" @click.stop="requestVerificationCode" :disabled="isCodeSent" :class="{ 'code-button': true, 'disabled-button': isCodeSent }">
            {{ isCodeSent ? `${countdown}秒` : '获取验证码' }}
          </view>
        </view>
        <view class="title">密码</view>
        <!--autocomplete="new-password" new-password/off 防止使用已保存的密码填充 -->
        <input type="password" placeholder="输入密码" class="input" autocomplete="off" @input="updateField('password', $event)" />
        <button class="login-button" @click="getlogin">完成</button>
      </view>
      <view class="footer"></view>
    </view>
  </view>
</template>

<script setup>
import {
  ref,
  onMounted
} from "vue";
import {
  fetchCampusData,
  fetchVerificationCode,
  fetchClassData,
  submitRegisterInfo
} from "@/utils/api";

import {
  useStore
} from '@/store'

const name = ref("");
const old = ref("");
const refe = ref("");
const iphone = ref("");
const captcha = ref("");
const password = ref("");
const dateYear = ref("年/月/日");
const giftmoren = ref("选择校区");
const giftIndex = ref(0);
const giftArray = ref([]);
const multiArray = ref([]);
const multiIndex = ref([0, 0, 0]);
const selectedValue = ref("请选择班级");
const value = ref(null);
const isMale = ref(false);
const isFemale = ref(false);
const datetimePicker = ref(null);
const campusId = ref("");
const classlyId = ref("");
const isClassPickerDisabled = ref(true); // 初始化为禁用状态
const isCodeSent = ref(false)
const countdown = ref(60)
let timer = null

const store = useStore()

const updateField = (field, event) => {
  switch (field) {
    case "name":
      name.value = event.detail.value;
      break;
    case "old":
      old.value = event.detail.value;
      break;
    case "refe":
      refe.value = event.detail.value;
      break;
    case "iphone":
      iphone.value = event.detail.value;
      break;
    case "captcha":
      captcha.value = event.detail.value;
    case "password":
      password.value = event.detail.value;

      break;
  }
};

const loadClasses = async () => {
  try {
    const response = await fetchClassData({
      school_id: campusId.value
    });
    console.log(response)
    if (response && response.items) {
      multiArray.value = response.items
      store.setClassData(response.items)
    }
  } catch (error) {
    console.error("获取班级数据失败", error);
  }
};

const loadCampus = async () => {
  try {
    const response = await fetchCampusData();
    if (response) {
      giftArray.value = response.items
      store.setCampusData(response.items)
    }
  } catch (error) {
    console.error("获取校区数据失败", error);
  }
};

const open = () => {
  datetimePicker.value.open();
};

const getlogin = async () => {
  const formData = {
    gender: isMale.value ? 1 : 0,
    username: name.value,
    age: old.value,
    birthday: dateYear.value,
    school_id: campusId.value,
    classly_id: classlyId.value,
    referee: refe.value,
    mobile: iphone.value,
    password: password.value,
    captcha: captcha.value
    // avatar: avatar.value
  };

  try {
    let response = await submitRegisterInfo(formData);
    console.log(response);
    if (response.code === 1) {
      uni.showToast({
        title: response.msg,
        icon: "success",
        duration: 2000
      });
      uni.navigateTo({
        url: "/pages/login/login"
      });
    } else {
      uni.showToast({
        title: response.msg,
        icon: "error",
        duration: 2000
      });
    }
  } catch (error) {

  }

};

const giftPickerChange = (event) => {
  giftIndex.value = event.detail.value; // 选择索引
  // 确认 giftIndex 是否在范围内
  if (giftIndex.value >= 0 && giftIndex.value < giftArray.value.length) {
    giftmoren.value = giftArray.value[giftIndex.value].title; // 使用 title
    campusId.value = giftArray.value[giftIndex.value].id; // 更新 campusId
    // 打印选择项的 id
    console.log('选择的校区 ID:', campusId.value); // 打印选择的校区 ID
    // 启用班级选择器
    isClassPickerDisabled.value = false;
    // 请求班级数据
    loadClasses();
  } else {
    console.warn('选择的索引超出范围:', giftIndex.value);
  }
};


const selectGender = (gender) => {
  if (gender === "男") {
    isMale.value = true;
    isFemale.value = false;
  } else {
    isMale.value = false;
    isFemale.value = true;
  }
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
  const date = new Date(e.value);

  // 使用连字符格式化日期
  const formattedDate =
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

  dateYear.value = formattedDate; // 更新为新的格式
  value.value = date.toISOString(); // ISO 格式
};
const requestVerificationCode = async () => {
  const phonePattern = /^[1][3-9][0-9]{9}$/

  if (!phonePattern.test(iphone.value)) {
    return showToast('手机号格式不正确')
  }



  try {
    const response = await fetchVerificationCode({
      mobile: iphone.value,
      event: 'register',
    });
    console.log(response);

    if (response.code === 1) {
      isCodeSent.value = true;
      startCountdown();
      uni.showToast({
        title: response.msg || '验证码发送成功',
        icon: 'success', // 提示图标类型
        duration: 2000 // 持续时间
      });
    } else {
      uni.showToast({
        title: response.msg || '发送验证码失败，请重试',
        icon: 'none', // 提示图标类型
        duration: 2000 // 持续时间
      });
    }
  } catch (error) {
    uni.showToast({
      title: '发送验证码失败，请重试',
      icon: 'none', // 提示图标类型
      duration: 2000 // 持续时间
    });
    console.error('发送验证码错误:', error);
  } finally {
    uni.hideLoading();
  }

}
const startCountdown = () => {
  countdown.value = 60
  clearInterval(timer)
  timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
      isCodeSent.value = false
    }
  }, 1000)
}

onMounted(async () => {
  // await loadClasses();
  await loadCampus();
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

.form {
  width: 90%;
}

.title {
  margin-bottom: 20rpx;
}

.title1,
.title2 {
  font-family: PingFangSC, PingFang SC;
  line-height: 25rpx;
  text-align: left;
}

.title1 {
  font-weight: 700;
  font-size: 36rpx;
  color: #000;
}

.title2 {
  margin-top: 24rpx;
  font-weight: 400;
  font-size: 24rpx;
  color: #999;
}

.input {
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 50px;
  background-color: #eee;
  font-size: 14px;
}

.login-button {
  width: 100%;
  border-radius: 50px;
  background-color: #666;
  color: #fff;
  font-size: 16px;
  margin-top: 48rpx;
  margin-bottom: 48rpx;
}

.textlogin {
  margin-bottom: 24rpx;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
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

.code-button {
  width: 110px;
  height: 32px;
  border-radius: 100px;

  font-size: 12px;
  text-align: center;
  line-height: 32px;
}

.disabled-button {
  pointer-events: none;
}
</style>