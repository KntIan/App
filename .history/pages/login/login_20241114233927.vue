<template>
  <view class="container">
    <view class="form">
      <view class="textlogin">
        <text>登录/注册</text>
      </view>

      <input type="text" placeholder="账号" class="input" @input="getadmin" />
      <input type="password" placeholder="密码" class="input" @input="getpass" />
      <button class="login-button" @click="handleLoginInfo">登录</button>
      <view class="links">
        <text class="link" @click="retPass">找回密码</text>
        <text class="link" @click="regiSter">注册</text>
      </view>
    </view>

    <view class="footer">
      <checkbox-group @change="radiogrp" style="display: flex; align-items: center">
        <label class="radio">
          <checkbox value="true" activeBorderColor="#000" activeBackgroundColor="#fff" iconColor="#000" style="transform: scale(0.5)" />
        </label>

        <text>
          点击登录，即表示同意
          <text @click="handlePolicyClick('privacyPolicy')" style="color: blue; text-decoration: underline">《隐私政策》</text>
          和
          <text @click="handlePolicyClick('userAgreement')" style="color: blue; text-decoration: underline">《用户协议》</text>
        </text>
      </checkbox-group>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "@/store"; // 导入 Pinia store
import { genTestUserSig } from "../../TUIKit/debug";
import { TUITranslateService } from "@tencentcloud/chat-uikit-engine";
import { isPC, isH5, isApp } from "../../TUIKit/utils/env";
import { loginChat } from "../../loginChat";
import { loginUser } from "@/utils/api";
const privateAgree = ref(false);
const inputValue = ref("");

const handleLoginInfo = async () => {
  const store = useStore(); // 获取 Pinia store
  const response = await loginUser({
    mobile: account.value,
    password: password.value,
  });
  console.log(response);
  if (response.code === 1) {
    uni.showToast({
      title: response.msg,
      icon: "success",
    });

    const { token } = response.data.userinfo;

    store.setUserinfo(response.data.userinfo);
    store.setToken(token);
    uni.setStorageSync("token", token); // 将 token 存储在 localStorage
    uni.switchTab({ url: "/pages/pagesall/home" });
    // uni.navigateTo({
    //   url: "/pages/home/home",
    // });
    // return;
  }
  // console.log(response.data.userinfo);
  const { user_id } = response.data.userinfo;
  console.log(user_id);

  const options = genTestUserSig({
    SDKAppID: uni.$chat_SDKAppID,
    secretKey: uni.$chat_secretKey,
    userID: String(user_id),
  });
  const loginInfo = {
    SDKAppID: uni.$chat_SDKAppID,
    userID: String(user_id), // 确保使用正确的user_id,
    userSig: options.userSig,
    // useUploadPlugin: true,
    // framework: `vue${vueVersion}`,
    TIMPush: uni.$TIMPush, // register TencentCloud-TIMPush
    pushConfig: {
      androidConfig: uni.$TIMPushConfigs, // Android timpush-configs.json
      iOSConfig: {
        iOSBusinessID: "", // iOS Certificate ID
      },
    },
  };
  login(loginInfo);
};

const login = (loginInfo: any) => {
  console.log(loginInfo);
  loginChat(loginInfo).catch(() => {
    uni.showToast({
      title: TUITranslateService.t("Login.登录失败"),
      icon: "none",
    });
  });
};

const account = ref("");
const password = ref("");
const radio = ref(false);
const store = useStore();

const capitalizeFirstLetter = (string) => {
  if (!string) return ""; // 检查输入是否有效
  return string.charAt(0).toUpperCase() + string.slice(1); // 首字母大写
};

const parsePolicyContent = (content, title) => {
  if (!content) {
    uni.showToast({
      title: `${title}内容为空，请稍后重试`,
      icon: "error",
      duration: 2000,
    });
    return;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");
  const paragraphs = Array.from(doc.getElementsByTagName("p"))
    .map((p) => p.textContent)
    .join("\n");

  uni.showModal({
    title: title,
    content: paragraphs,
    showCancel: false,
  });
};

// const handlePolicyClick = async (type) => {
//   const titleMap = {
//     privacyPolicy: "隐私政策",
//     userAgreement: "用户协议",
//   };

//   const title = titleMap[type]; // 使用映射表获取标题
//   if (!title) {
//     uni.showToast({
//       title: "无效的协议类型，请重试",
//       icon: "error",
//       duration: 2000,
//     });
//     return;
//   }

//   try {
//     await store[`fetch${capitalizeFirstLetter(type)}`]();
//     parsePolicyContent(store[type]?.content, title); // 使用可选链避免错误
//   } catch (error) {
//     console.error(`获取${type}失败:`, error);
//     uni.showToast({
//       title: `获取${title}失败，请重试`,
//       icon: "error",
//       duration: 2000,
//     });
//   }
// };

const retPass = async () => {
  await uni.navigateTo({ url: "/pages/login/ratpass" });
};

const regiSter = () => {
  uni.navigateTo({ url: "/pages/login/register" });
};

const radiogrp = (event) => {
  radio.value = event.detail.value.length > 0; // 确保获取到的值是否有效
};

const getadmin = (event) => {
  account.value = event.detail.value;
};

const getpass = (event) => {
  password.value = event.detail.value;
};

const getlogin = async () => {
  if (!radio.value) {
    uni.showToast({
      title: "请勾选同意协议",
      icon: "error",
      duration: 2000,
    });
    return;
  }

  if (!account.value) {
    uni.showToast({
      title: "请输入账号",
      icon: "error",
      duration: 2000,
    });
    return;
  }

  if (!password.value) {
    uni.showToast({
      title: "请输入密码",
      icon: "error",
      duration: 2000,
    });
    return;
  }

  try {
    const response = await store.login({
      mobile: account.value,
      password: password.value,
    });

    const { user_id } = response;
    // console.log(user_id);
    const options = genTestUserSig({
      SDKAppID: uni.$chat_SDKAppID,
      secretKey: uni.$chat_secretKey,
      userID: String(user_id),
    });
    const loginInfo = {
      SDKAppID: uni.$chat_SDKAppID,
      userID: inputValue.value,
      userSig: options.userSig,
      // useUploadPlugin: true,
      // framework: `vue${vueVersion}`,
      TIMPush: uni.$TIMPush, // register TencentCloud-TIMPush
      pushConfig: {
        androidConfig: uni.$TIMPushConfigs, // Android timpush-configs.json
        iOSConfig: {
          iOSBusinessID: "", // iOS Certificate ID
        },
      },
    };
    loginChat(loginInfo).catch(() => {
      uni.showToast({
        title: TUITranslateService.t("Login.登录失败"),
        icon: "none",
      });
    });
    console.log(options, "-+++++++-");
    // 假设后端返回的响应对象中包含 msg 字段
    uni.showToast({
      title: response.msg || "登录成功", // 使用后端返回的 msg
      icon: "success",
      duration: 2000,
      success: () => {
        // handleLoginInfo(options)
      },
    });
    console.log(1111, "-+++++++-");
    setTimeout(() => {
      uni.switchTab({ url: "/pages/pagesall/home" });
    }, 1500);
  } catch (error) {
    uni.showToast({
      title: error.msg || "登录失败，请重试", // 使用后端返回的 msg
      icon: "error",
      duration: 2000,
    });
  }
};
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
  width: 80%;
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
}

.textlogin {
  margin-bottom: 24px;
  font-weight: 700;
}

.links {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.link {
  color: #555;
  font-size: 12px;
}

.footer {
  margin-top: 20px;
  text-align: center;
  font-size: 12px;
  color: #888;
}
</style>
