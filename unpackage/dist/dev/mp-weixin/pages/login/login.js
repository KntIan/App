"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Login",
  data() {
    return {
      constants: {},
      admin: "",
      pass: "",
      adminlist: {},
      radio: false
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
    regiSter() {
      common_vendor.index.navigateTo({
        url: "/pages/login/register"
      });
    },
    radiogrp(event) {
      console.log(event);
      this.radio = event.detail.value;
      console.log(this.radio[0]);
    },
    getadmin(event) {
      console.log(event.detail.value);
      this.admin = event.detail.value;
    },
    getpass(event) {
      console.log(event.detail.value);
      this.pass = event.detail.value;
    },
    async getlogin() {
      this.adminlist = {
        admin: this.admin,
        pass: this.pass
      };
      if (this.radio == false) {
        common_vendor.index.showToast({
          title: "请勾选同意协议",
          icon: "error",
          // 其他值：'none', 'loading'
          duration: 2e3
          // 提示持续时间，单位为毫秒
        });
      } else if (this.radio[0] == "true") {
        console.log("111");
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "success",
          // 其他值：'none', 'loading'
          duration: 2e3
          // 提示持续时间，单位为毫秒
        });
        setTimeout(() => {
          common_vendor.index.switchTab({
            url: "/pages/pagesall/home"
          });
        }, 1500);
      }
      console.log(this.adminlist);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.getadmin && $options.getadmin(...args)),
    b: common_vendor.o((...args) => $options.getpass && $options.getpass(...args)),
    c: common_vendor.o((...args) => $options.getlogin && $options.getlogin(...args)),
    d: common_vendor.o((...args) => $options.retPass && $options.retPass(...args)),
    e: common_vendor.o((...args) => $options.regiSter && $options.regiSter(...args)),
    f: common_vendor.o((...args) => $options.radiogrp && $options.radiogrp(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
