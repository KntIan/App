"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/login.js";
  "./pages/login/ratpass.js";
  "./pages/login/register.js";
  "./pages/pagesall/home.js";
  "./pages/pagesall/course.js";
  "./pages/pagesall/aiDete.js";
  "./pages/pagesall/oper.js";
  "./pages/pagesall/mypage.js";
  "./pages/pagesall/home/signUp.js";
  "./pages/pagesall/home/message.js";
  "./pages/pagesall/home/search.js";
  "./pages/pagesall/home/sacnpage.js";
  "./pages/pagesall/home/mycode.js";
  "./pages/pagesall/home/adverMess.js";
  "./pages/pagesall/home/adver_detail.js";
  "./pages/pagesall/home/add_friend.js";
  "./pages/pagesall/home/game.js";
  "./pages/pagesall/home/chat.js";
  "./pages/pagesall/course/go_learn.js";
  "./pages/pagesall/aiDete/aiResult.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
