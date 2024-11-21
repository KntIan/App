<script lang="ts">
import { TUIChatKit } from "./TUIKit";
import { TUITranslateService } from "@tencentcloud/chat-uikit-engine";
// #ifndef MP-WEIXIN
import { locales } from "./locales";
// #endif
import TIMPushConfigs from "./timpush-configs.json";
// #ifdef APP-PLUS
// register TencentCloud-TIMPush
import { IEnterChatConfig, loginFromStorage, openChat } from "./loginChat";
import TUIChatEngine from "@tencentcloud/chat-uikit-engine";
import { getNotificationAuth } from "./utils/getNotificationAuth";
const TIMPush: any = uni.requireNativePlugin("TencentCloud-TIMPush");
console.warn(
  `TencentCloud-TIMPush: uni.requireNativePlugin ${
    TIMPush ? "success" : "fail"
  }`
);
uni.$TIMPush = TIMPush;
uni.$TIMPushConfigs = TIMPushConfigs;
const enterChatConfig: IEnterChatConfig = {
  isLoginChat: false,
  conversationID: "",
};
// register TencentCloud-TUICallKit
const TUICallKit: any = uni.requireNativePlugin("TencentCloud-TUICallKit");
console.warn(
  `TencentCloud-TUICallKit: uni.requireNativePlugin ${
    TUICallKit ? "success" : "fail"
  }`
);
uni.$TUICallKit = TUICallKit;
// #endif

// #ifdef APP-ANDROID
const notificationChannelInfo = {
  notificationChannelList: [
    {
      channelID: "tuikit", // 控制台配置 oppo 的 channelID
      channelName: "tuikit", // 自定义名称
      channelDesc: "自定义铃音", // 自定义描述
      channelSound: "private_ring", // 自定义铃音的名称且不需要后缀名
    },
  ],
};
uni.$TIMPush.createNotificationChannels(notificationChannelInfo);
// #endif

// #ifndef MP-WEIXIN
TUITranslateService.provideLanguages(locales);
TUITranslateService.useI18n();
// #endif

TUIChatKit.init();
const SDKAppID = 1600059782; // Your SDKAppID
const secretKey =
  "de59c03814fa68ec61476566140ae06fdcd9f17fe05bcb33e5162571924e6246"; // Your secretKey

uni.$chat_SDKAppID = SDKAppID;
uni.$chat_secretKey = secretKey;

function saveLoginStatus(token) {
  uni.setStorageSync("loginToken", token);
}

let isNavigating = false; // 添加一个标志位

function checkLoginStatus() {
  const token = uni.getStorageSync("token");

  // 函数用于解析 JWT
  function parseJWT(token) {
    if (!token) return null;
    // JWT 通常由三个部分组成，用 '.' 分割
    const parts = token.split(".");
    // 检查分割后的长度是否为 3，若不是则返回 null
    if (parts.length !== 3) return null;

    const payload = parts[1]; // 中间部分是 payload
    const decoded = JSON.parse(atob(payload)); // base64 解码
    return decoded;
  }

  // 获取 token 的过期时间
  const tokenData = parseJWT(token);
  const isExpired = tokenData && tokenData.exp * 1000 < Date.now(); // exp 是 Unix 时间戳，转为毫秒
  // 根据 Token 状态做导航
  if (!token || isExpired) {
    if (!isNavigating) {
      isNavigating = true; // 设置为正在导航
      // 用户未登录或 token 过期，跳转到登录页面
      uni.navigateTo({
        url: "/pages/login/login",
        success: () => {
          isNavigating = false; // 成功导航后重置标志位
        },
        fail: () => {
          isNavigating = false; // 导航失败也重置标志位
        },
      });
    }
  } else if (token && !isExpired && !isNavigating) {
    // 用户已登录且未进行导航，并且 token 未过期
    console.log("用户已登录");
    uni.switchTab({
      url: "/pages/pagesall/home",
    });
  }
}

export default {
  globalData: {
    windowHeight: 0,
    windowWidth: 0,
    screenHeight: 0,
    safeArea: 0,
    top: 0,
    safeAreaBottom: 0, //设备底部安全距离
    statusBarHeight: 0,
    pageHeight: 0,

    // platform: 0,
    tabBarHeight: 0,
    token: "",
    platform: "", //设备信息
  },
  onLaunch: function () {
    // const query = uni.createSelectorQuery();
    // console.log(query.select("#app"));
    // #ifdef APP-PLUS
    let userinfo = uni.getStorageSync("userinfo");
    //判断是否存在登录信息
    if (!userinfo.role) {
      //不存在则跳转登录页
      uni.reLaunch({
        url: "/pages/login/login",
        success: () => {
          //跳转完页面后再关闭启动页
          plus.navigator.closeSplashscreen();
        },
      });
    } else {
      //存在则关闭启动页进入首页
      plus.navigator.closeSplashscreen();
    }
    // #endif

    uni.onTabBarMidButtonTap(() => {
      uni.navigateTo({
        url: "/pages/release/release",
      });
    });
    this.getAreaSize();
    checkLoginStatus();
    // #ifdef APP-PLUS
    // 在 App.vue, 生命钩子 onLaunch 中监听
    if (typeof uni.$TIMPush === "undefined") {
      console.warn(
        "如果您使用推送功能，需集成 TIMPush 插件，使用真机运行并且自定义基座调试，请参考官网文档：https://cloud.tencent.com/document/product/269/103522"
      );
    } else {
      getNotificationAuth();
      uni.$on("uikitLogin", () => {
        enterChatConfig.isLoginChat = true;
        openChat(enterChatConfig);
      });
      uni.$TIMPush.setOfflinePushListener((data) => {
        const { notification = "" } = data?.data || {};
        if (!notification) {
          return;
        }
        const { entity } = JSON.parse(notification);
        const type =
          entity.chatType === 1
            ? TUIChatEngine.TYPES.CONV_C2C
            : TUIChatEngine.TYPES.CONV_GROUP;
        enterChatConfig.conversationID = `${type}${entity.sender}`;
        if (enterChatConfig.isLoginChat && entity.sender) {
          openChat(enterChatConfig);
        }
      });
      loginFromStorage();
    }
    // #endif
  },

  onShow: function () {
    setTimeout(() => {
      // #ifdef APP-PLUS
      plus.navigator.closeSplashscreen();
      // #endif
    }, 2000);
    // checkLoginStatus();
  },
  onHide: function () {},
  methods: {
    getAreaSize() {
      var res = uni.getSystemInfoSync();

      console.log("设备信息", res);
      this.globalData.platform = res.platform;
      console.log("手机设备", this.globalData.model);
      // 设备可使用窗口高度，不包括系统状态栏和导航栏的高度
      this.globalData.windowHeight = res.windowHeight;
      // 设备的可使用窗口宽度
      this.globalData.windowWidth = res.windowWidth;
      // 设备的屏幕高度，包括系统状态栏和导航栏的高度
      this.globalData.screenHeight = res.screenHeight;
      // 设备安全区域信息（对象，包含设备的安全区域的四个边距）
      this.globalData.safeArea = res.safeArea;
      // 设备安全区域的顶部边距
      this.globalData.top = res.safeArea.top;
      console.log("safeAreaTop", this.globalData.top);
      // 计算设备的底部安全区域的高度
      this.globalData.safeAreaBottom = res.screenHeight - res.safeArea.bottom;
      // 计算底部导航栏高度
      this.globalData.tabBarHeight =
        res.screenHeight - res.windowWidth - res.statusBarHeight;
      // 设备状态栏的高度
      this.globalData.statusBarHeight = res.statusBarHeight;
      // 设置页面的高度为可使用窗口的高度
      this.globalData.pageHeight = this.globalData.windowHeight;
      // 设备平台信息（ios android）
      this.globalData.platform = res.platform;
    },
  },
};
</script>
<style lang="scss" scoped>
/* 每个页面公共css */
uni-page-body,
html,
body,
page {
  width: 100% !important;
  /* height: 100% !important;
  overflow: hidden; */
  padding-bottom: 60rpx;
  padding-top: var(--safe-area-top);
}

@media (max-width: 768px) {
  #app {
    padding-top: 40px;
    /* 更改顶部 padding 值 */
  }
}

#app {
  padding-top: var(--safe-area-top);
  /* 使用自定义变量 */
}
</style>