"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    leftTime: {
      default: ""
    },
    color: {
      default: ""
    },
    leftlist1: {
      default: ""
    },
    leftlist2: {
      default: ""
    },
    leftlist3: {
      default: ""
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.color == "" ? "" : $props.color,
    b: $props.color == "" ? "" : $props.color,
    c: common_vendor.t($props.leftTime),
    d: $props.leftlist1 !== ""
  }, $props.leftlist1 !== "" ? {
    e: common_vendor.t($props.leftlist1)
  } : {}, {
    f: $props.leftlist2 !== ""
  }, $props.leftlist2 !== "" ? {
    g: common_vendor.t($props.leftlist2)
  } : {}, {
    h: $props.leftlist3 !== ""
  }, $props.leftlist3 !== "" ? {
    i: common_vendor.t($props.leftlist3)
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-48a104e6"]]);
wx.createComponent(Component);
