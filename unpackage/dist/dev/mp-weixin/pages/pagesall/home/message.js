"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  onLoad() {
  },
  methods: {
    goback() {
      common_vendor.index.navigateBack();
    },
    mycode() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/home/mycode"
      });
    },
    messgoback() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/home/adverMess"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goback && $options.goback(...args)),
    b: common_vendor.o((...args) => $options.mycode && $options.mycode(...args)),
    c: common_vendor.o((...args) => $options.messgoback && $options.messgoback(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
