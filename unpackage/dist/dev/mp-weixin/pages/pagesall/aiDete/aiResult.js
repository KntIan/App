"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      stu_List: [{
        name: "刘琪琦",
        id: "1008601"
      }],
      score_List: [
        {
          title: "重心",
          score: 5
        },
        {
          title: "位置",
          score: 3
        },
        {
          title: "形态",
          score: 2
        },
        {
          title: "笔画",
          score: 4
        },
        {
          title: "大小",
          score: 5
        }
      ]
    };
  },
  methods: {
    res_goback() {
      common_vendor.index.navigateBack();
    }
  }
};
if (!Array) {
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  _easycom_uni_rate2();
}
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
if (!Math) {
  _easycom_uni_rate();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.res_goback && $options.res_goback(...args)),
    b: common_vendor.f($data.stu_List, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.id),
        c: index
      };
    }),
    c: common_vendor.f($data.score_List, (item, index, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: "5c4af828-0-" + i0,
        c: common_vendor.p({
          readonly: true,
          size: "20",
          value: item.score
        }),
        d: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
