"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Login",
  data() {
    return {
      constants: {},
      account: "",
      password1: "",
      password2: "",
      code: ""
    };
  },
  onLoad() {
  },
  methods: {
    async retPass() {
      await common_vendor.index.navigateTo({
        url: "/pages/login/ratpass"
      });
    },
    getaccount(event) {
      this.account = event.detail.value;
      console.log(this.account.length);
    },
    getpassword1(event) {
      this.password1 = event.detail.value;
    },
    getpassword2(event) {
      this.password2 = event.detail.value;
    },
    getaCode(event) {
      this.code = event.detail.value;
    },
    getIpcode() {
      if (this.account != "" && this.account && this.account.length == 11) {
        common_vendor.index.showToast({
          title: "获取成功",
          icon: "success",
          // 其他值：'none', 'loading'
          duration: 2e3
          // 提示持续时间，单位为毫秒
        });
      } else {
        common_vendor.index.showToast({
          title: "请检查手机号是否正确",
          icon: "error",
          // 其他值：'none', 'loading'
          duration: 2e3
          // 提示持续时间，单位为毫秒
        });
      }
    },
    getratlogin() {
      console.log(this.account, this.password1, this.password2, this.code);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.getaccount && $options.getaccount(...args)),
    b: common_vendor.o((...args) => $options.getpassword1 && $options.getpassword1(...args)),
    c: common_vendor.o((...args) => $options.getpassword2 && $options.getpassword2(...args)),
    d: common_vendor.o((...args) => $options.getaCode && $options.getaCode(...args)),
    e: common_vendor.o((...args) => $options.getIpcode && $options.getIpcode(...args)),
    f: common_vendor.o((...args) => $options.getratlogin && $options.getratlogin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
