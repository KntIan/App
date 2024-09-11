"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      friend_heard: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/26483a4d5dc54c63ae2af524e81ebb4d_mergeImage.png",
      friend_name: "张老师",
      friend_id: "1232222"
    };
  },
  onLoad() {
  },
  methods: {
    fri_goback() {
      common_vendor.index.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.fri_goback && $options.fri_goback(...args)),
    b: $data.friend_heard,
    c: common_vendor.t($data.friend_name),
    d: common_vendor.t($data.friend_id)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
