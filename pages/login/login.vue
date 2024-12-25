<template>
<<<<<<< HEAD
  <view @touchmove.prevent>
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view class="container">
      <view class="form">
        <view class="textlogin">
          <text>登录/注册</text>
        </view>

        <input type="text" placeholder="账号" class="input" @input="getadmin" />
        <input
          type="password"
          placeholder="密码"
          class="input"
          @input="getpass"
        />
        <button class="login-button" @click="handleLoginInfo">登录</button>
        <view class="links">
          <text class="link" @click="retPass">找回密码</text>
          <text class="link" @click="regiSter">注册</text>
        </view>
      </view>

      <view class="footer">
        <checkbox-group
          @change="radiogrp"
          style="display: flex; align-items: center"
        >
          <label class="radio">
            <checkbox
              value="true"
              activeBorderColor="#000"
              activeBackgroundColor="#fff"
              iconColor="#000"
              style="transform: scale(0.5)"
            />
          </label>

          <text>
            点击登录，即表示同意
            <text
              @click="handlePolicyClick('privacy')"
              style="color: blue; text-decoration: underline"
              >《隐私政策》</text
            >
            和
            <text
              @click="handlePolicyClick('user')"
              style="color: blue; text-decoration: underline"
              >《用户协议》</text
            >
          </text>
        </checkbox-group>
      </view>
    </view>
=======
  <view class="container">
    <view :style="'height:' + (statusBarHeight + 5) + 'px;'"></view>
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
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  </view>
</template>

<script lang="ts" setup>
<<<<<<< HEAD
import { ref } from 'vue';
import { useStore } from '@/store'; // 导入 Pinia store
import { genTestUserSig } from '../../TUIKit/debug';
import {
  TUITranslateService,
  TUIUserService,
} from '@tencentcloud/chat-uikit-engine';
import { isPC, isH5, isApp } from '../../TUIKit/utils/env';
import { loginChat } from '../../loginChat';
import { loginUser, fetchUserAgreement } from '@/utils/api';
import { onLoad } from '@dcloudio/uni-app';

import TencentCloudChat from '@tencentcloud/chat';
const privateAgree = ref(false);
const inputValue = ref('');
=======
import { ref } from "vue";
import { useStore } from "@/store"; // 导入 Pinia store
import { genTestUserSig } from "../../TUIKit/debug";
import { TUITranslateService } from "@tencentcloud/chat-uikit-engine";
import { isPC, isH5, isApp } from "../../TUIKit/utils/env";
import { loginChat } from "../../loginChat";
import { loginUser } from "@/utils/api";
import { onLoad } from "@dcloudio/uni-app";
const privateAgree = ref(false);
const inputValue = ref("");
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
const statusBarHeight = ref();
onLoad(async () => {
  statusBarHeight.value = getApp().globalData.top;

<<<<<<< HEAD
  if (uni.getStorageSync('token') && uni.getStorageSync('isLoggedIn')) {
    const userId = uni.getStorageSync('user_id'); // 获取用户 ID
=======
  if (uni.getStorageSync("token") && uni.getStorageSync("isLoggedIn")) {
    const userId = uni.getStorageSync("user_id"); // 获取用户 ID
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    if (userId) {
      const options = genTestUserSig({
        SDKAppID: uni.$chat_SDKAppID,
        secretKey: uni.$chat_secretKey,
        userID: String(userId),
      });

      const loginInfo = {
        SDKAppID: uni.$chat_SDKAppID,
        userID: String(userId),
        userSig: options.userSig,
        TIMPush: uni.$TIMPush,
        pushConfig: {
          androidConfig: uni.$TIMPushConfigs,
          iOSConfig: {
<<<<<<< HEAD
            iOSBusinessID: '',
=======
            iOSBusinessID: "",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          },
        },
      };

      try {
        await login(loginInfo); // 等待登录结果
        // 登录成功后跳转到主页
        uni.switchTab({
<<<<<<< HEAD
          url: '/pages/pagesall/home',
=======
          url: "/pages/pagesall/home",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
        });
      } catch (error) {
        // 登录失败处理
        uni.showToast({
<<<<<<< HEAD
          title: '自动登录失败，请重试',
          icon: 'error',
=======
          title: "自动登录失败，请重试",
          icon: "error",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
          duration: 2000,
        });
      }
    }
  } else {
    uni.navigateTo({
<<<<<<< HEAD
      url: '/pages/login/login',
    });
  }
});
const handleScroll = (event) => {
  console.log('滚动位置：', event.target.scrollTop);
};
const handleLoginInfo = async () => {
  if (!radio.value) {
    uni.showToast({
      title: '请勾选同意协议',
      icon: 'error',
=======
      url: "/pages/login/login",
    });
  }
});

const handleLoginInfo = async () => {
  if (!radio.value) {
    uni.showToast({
      title: "请勾选同意协议",
      icon: "error",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      duration: 2000,
    });
    return;
  }

  if (!account.value) {
    uni.showToast({
<<<<<<< HEAD
      title: '请输入账号',
      icon: 'error',
=======
      title: "请输入账号",
      icon: "error",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      duration: 2000,
    });
    return;
  }

  if (!password.value) {
    uni.showToast({
<<<<<<< HEAD
      title: '请输入密码',
      icon: 'error',
=======
      title: "请输入密码",
      icon: "error",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      duration: 2000,
    });
    return;
  }
  const store = useStore(); // 获取 Pinia store
  const response = await loginUser({
    mobile: account.value,
    password: password.value,
  });
  console.log(response);
  if (response.code === 1) {
    uni.showToast({
      title: response.msg,
<<<<<<< HEAD
      icon: 'success',
=======
      icon: "success",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    });

    const { token } = response.data.userinfo;

    store.setUserinfo(response.data.userinfo);
    store.setToken(token);
<<<<<<< HEAD
    uni.setStorageSync('token', token); // 将 token 存储在 localStorage
    uni.switchTab({ url: '/pages/pagesall/home' });
=======
    uni.setStorageSync("token", token); // 将 token 存储在 localStorage
    uni.switchTab({ url: "/pages/pagesall/home" });
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    // uni.navigateTo({
    //   url: "/pages/home/home",
    // });
    // return;
  } else {
    uni.showToast({
      title: response.msg,
<<<<<<< HEAD
      icon: 'error',
=======
      icon: "error",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      duration: 2000,
    });
  }
  // console.log(response.data.userinfo);
<<<<<<< HEAD
  const { user_id, nickname, avatar } = response.data.userinfo;
  console.log(user_id, nickname, avatar);
  uni.setStorageSync('user_id', user_id);
  uni.setStorageSync('nickname', nickname);
  uni.setStorageSync('avatar', avatar);
=======
  const { user_id } = response.data.userinfo;
  console.log(user_id);
  uni.setStorageSync("user_id", user_id);
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  tengXun();
};

const tengXun = () => {
  const options = genTestUserSig({
    SDKAppID: uni.$chat_SDKAppID,
    secretKey: uni.$chat_secretKey,
<<<<<<< HEAD
    userID: String(uni.getStorageSync('user_id')),
  });
  const loginInfo = {
    SDKAppID: uni.$chat_SDKAppID,
    userID: String(String(uni.getStorageSync('user_id'))), // 确保使用正确的user_id,
    userSig: options.userSig,
    NickName: uni.getStorageSync('nickname'),
    Image: uni.getStorageSync('avatar'),
    useUploadPlugin: true,
=======
    userID: String(uni.getStorageSync("user_id")),
  });
  const loginInfo = {
    SDKAppID: uni.$chat_SDKAppID,
    userID: String(String(uni.getStorageSync("user_id"))), // 确保使用正确的user_id,
    userSig: options.userSig,
    // useUploadPlugin: true,
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
    // framework: `vue${vueVersion}`,
    TIMPush: uni.$TIMPush, // register TencentCloud-TIMPush
    pushConfig: {
      androidConfig: uni.$TIMPushConfigs, // Android timpush-configs.json
      iOSConfig: {
<<<<<<< HEAD
        iOSBusinessID: '', // iOS Certificate ID
=======
        iOSBusinessID: "", // iOS Certificate ID
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      },
    },
  };
  login(loginInfo);
};

<<<<<<< HEAD
// 修改个人标配资料

const login = (loginInfo: any) => {
  return loginChat(loginInfo) // 返回 Promise
    .then((res) => {
      console.log(res, '+++++++');
      TUIUserService.updateMyProfile({
        nick: uni.getStorageSync('nickname'),
        avatar: uni.getStorageSync('avatar'),
      });
      uni.setStorageSync('isLoggedIn', true);
      uni.setStorageSync('loginInfo', JSON.stringify(loginInfo));
    })
    .catch((error) => {
      uni.showToast({
        title: TUITranslateService.t('Login.登录失败'),
        icon: 'none',
=======
const login = (loginInfo: any) => {
  return loginChat(loginInfo) // 返回 Promise
    .then(() => {
      uni.setStorageSync("isLoggedIn", true);
      uni.setStorageSync("loginInfo", JSON.stringify(loginInfo));
    })
    .catch((error) => {
      uni.showToast({
        title: TUITranslateService.t("Login.登录失败"),
        icon: "none",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      });
      throw error; // 抛出错误，以便在外部处理
    });
};
// export { tengXun, login };
<<<<<<< HEAD
const account = ref('');
const password = ref('');
=======
const account = ref("");
const password = ref("");
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
const radio = ref(false);
const store = useStore();

const capitalizeFirstLetter = (string) => {
<<<<<<< HEAD
  if (!string) return ''; // 检查输入是否有效
=======
  if (!string) return ""; // 检查输入是否有效
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
  return string.charAt(0).toUpperCase() + string.slice(1); // 首字母大写
};

const parsePolicyContent = (content, title) => {
<<<<<<< HEAD
  console.log(content);

  if (!content) {
    uni.showToast({
      title: `${title}内容为空，请稍后重试`,
      icon: 'error',
=======
  if (!content) {
    uni.showToast({
      title: `${title}内容为空，请稍后重试`,
      icon: "error",
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
      duration: 2000,
    });
    return;
  }

<<<<<<< HEAD
  // 用正则表达式检查内容是否包含 HTML 标签
  const hasHtmlTags = /<\/?[a-z][\s\S]*>/i.test(content);

  if (!hasHtmlTags) {
    // 如果没有 HTML 标签，直接显示内容
    uni.showModal({
      title: title,
      content: content, // 直接传入内容
      showCancel: false,
    });
  } else {
    // 如果有 HTML 标签，进行解析处理
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const paragraphs = Array.from(doc.getElementsByTagName('p'))
      .map((p) => p.textContent)
      .join('\n');

    uni.showModal({
      title: title,
      content: paragraphs,
      showCancel: false,
    });
  }
};

const handlePolicyClick = async (type) => {
  const titleMap = {
    privacy: '隐私政策',
    user: '用户协议',
  };

  const title = titleMap[type]; // 使用映射表获取标题
  if (!title) {
    uni.showToast({
      title: '无效的协议类型，请重试',
      icon: 'error',
      duration: 2000,
    });
    return;
  }

  try {
    let params = {
      type: type,
    };
    let res = await fetchUserAgreement(params);
    parsePolicyContent(res.data.content, title); // 使用可选链避免错误
  } catch (error) {
    console.error(`获取${type}失败:`, error);
    uni.showToast({
      title: `获取${title}失败，请重试`,
      icon: 'error',
      duration: 2000,
    });
  }
};

const retPass = async () => {
  await uni.navigateTo({ url: '/pages/login/ratpass' });
};

const regiSter = () => {
  uni.navigateTo({ url: '/pages/login/register' });
=======
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
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
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
<<<<<<< HEAD
</script>

<style scoped>
body {
  overflow: hidden;
}
=======

// const getlogin = async () => {
//   if (!radio.value) {
//     uni.showToast({
//       title: "请勾选同意协议",
//       icon: "error",
//       duration: 2000,
//     });
//     return;
//   }

//   if (!account.value) {
//     uni.showToast({
//       title: "请输入账号",
//       icon: "error",
//       duration: 2000,
//     });
//     return;
//   }

//   if (!password.value) {
//     uni.showToast({
//       title: "请输入密码",
//       icon: "error",
//       duration: 2000,
//     });
//     return;
//   }

//   try {
//     const response = await store.login({
//       mobile: account.value,
//       password: password.value,
//     });

//     const { user_id } = response;
//     // console.log(user_id);
//     const options = genTestUserSig({
//       SDKAppID: uni.$chat_SDKAppID,
//       secretKey: uni.$chat_secretKey,
//       userID: String(user_id),
//     });
//     const loginInfo = {
//       SDKAppID: uni.$chat_SDKAppID,
//       userID: inputValue.value,
//       userSig: options.userSig,
//       // useUploadPlugin: true,
//       // framework: `vue${vueVersion}`,
//       TIMPush: uni.$TIMPush, // register TencentCloud-TIMPush
//       pushConfig: {
//         androidConfig: uni.$TIMPushConfigs, // Android timpush-configs.json
//         iOSConfig: {
//           iOSBusinessID: "", // iOS Certificate ID
//         },
//       },
//     };
//     loginChat(loginInfo).catch(() => {
//       uni.showToast({
//         title: TUITranslateService.t("Login.登录失败"),
//         icon: "none",
//       });
//     });
//     console.log(options, "-+++++++-");
//     // 假设后端返回的响应对象中包含 msg 字段
//     uni.showToast({
//       title: response.msg || "登录成功", // 使用后端返回的 msg
//       icon: "success",
//       duration: 2000,
//       success: () => {
//         // handleLoginInfo(options)
//       },
//     });
//     console.log(1111, "-+++++++-");
//     setTimeout(() => {
//       uni.switchTab({ url: "/pages/pagesall/home" });
//     }, 1500);
//   } catch (error) {
//     uni.showToast({
//       title: error.msg || "登录失败，请重试", // 使用后端返回的 msg
//       icon: "error",
//       duration: 2000,
//     });
//   }
// };
</script>

<style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
<<<<<<< HEAD
  min-height: 100vh;
=======
  height: 100vh;
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
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
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 90eb7b15125f34a3b3df696701d5a8ae1b9e2f74
