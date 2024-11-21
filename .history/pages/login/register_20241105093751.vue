<template>
  <uv-datetime-picker ref="datetimePicker" v-model="value" mode="date" :minDate="946695809000" @confirm="confirm" />
  <view class="container">
    <view class="form">
      <view class="textTitle">
        <view class="title1"> 欢迎来到泽曦书画 </view>
        <view class="title2"> 请选择性别年龄，校区班级推荐人 </view>
      </view>
      <view class="textlogin">
        <view class="img1" @click="selectGender('男')">
          <img v-if="isMale" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng37fd122e911efbf5a6c9a5907384d8c8ed78d7e5b8bc971416d09e8e914fe7a3" alt="" />
          <img v-else src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngccb17aadab169aefc90146fec8d12c387bab7ca72b9085f1b18a2a993cef6316" alt="" />
          <view class="imgtext1"> 男 </view>
        </view>
        <view class="img2" @click="selectGender('女')">
          <img v-if="isFemale" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngccb17aadab169aefc90146fec8d12c387bab7ca72b9085f1b18a2a993cef6316" alt="" />
          <img v-else src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc7b155ca914f20d43e6b0d5df21fd1967a8aaf33858c8ee8f6f7906c8af300ed" alt="" />
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
        <picker mode="selector" @change="onClassChange" :value="multiIndex" :range="multiArray" :disabled="isClassPickerDisabled">
          <view class="uni-input">{{ selectedValue }}</view>
        </picker>
      </view>

      <view class="title">推荐人</view>
      <input type="text" placeholder="输入推荐人" class="input" @input="updateField('refe', $event)" />
      <view class="title">手机号</view>
      <!-- autocomplete="off" off/nope 防止自动填充 -->
      <input type="text" placeholder="输入手机号" class="input" autocomplete="off" @input="updateField('iphone', $event)" />
      <view class="title">密码</view>
      <!--autocomplete="new-password" new-password/off 防止使用已保存的密码填充 -->
      <input type="password" placeholder="输入密码" class="input" autocomplete="off" @input="updateField('password', $event)" />
      <button class="login-button" @click="getlogin">完成</button>
    </view>
    <view class="footer"></view>
  </view>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { postRequest, getRequest } from "@/utils/axios";
import { fetchClassData, fetchCampusData } from "@/utils/api";

const name = ref("");
const old = ref("");
const refe = ref("");
const iphone = ref("");
const password = ref("");
const dateYear = ref("年/月/日");
const giftmoren = ref("选择校区");
const giftIndex = ref(0);
const giftArray = ref([]);
const multiArray = ref([]);
const multiIndex = ref([0, 0, 0]);
const selectedValue = ref("班级一");
const value = ref(null);
const isMale = ref(false);
const isFemale = ref(false);
const datetimePicker = ref(null);
const campusId = ref("");
const isClassPickerDisabled = ref(true); // 初始化为禁用状态

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
    case "password":
      password.value = event.detail.value;
      break;
  }
};

const loadClasses = async () => {
  console.log(campusId.value)
  try {
    const response = await fetchClassData({ 'school_id': campusId.value }); // 将 campusId 传入
    console.log(response)
    if (response && response.data) {
      multiArray.value = response.data.map((item) => item.class_name);
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
      console.log(giftArray.value);
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
    gender: isMale.value ? "男" : "女",
    username: name.value,
    birthday: dateYear.value,
    campus_id: giftmoren.value,
    classly_id: selectedValue.value,
    referee: refe.value,
    mobile: iphone.value,
    password: password.value,
    // avatar: avatar.value
  };

  try {
    const response = await postRequest("/user/register", formData);
    if (response.status === 200) {
      uni.showToast({ title: "注册成功", icon: "success", duration: 2000 });
      uni.navigateTo({ url: "/pages/login/login" });
    } else {
      throw new Error(response.msg || "注册失败");
    }
  } catch (error) {
    console.error("请求错误:", error);
    uni.showToast({ title: "请求失败，请重试", icon: "error", duration: 2000 });
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
    selectedValue.value = multiArray.value[0]; // 默认选择第一项
  } else {
    selectedValue.value = multiArray.value[multiIndex.value]; // 更新为用户选择的值
  }
};

const confirm = (e) => {
  const date = new Date(e.value);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  dateYear.value = formattedDate;
  value.value = date.toISOString();
};

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
</style>
