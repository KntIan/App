"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      messList: [
        {
          month: "7-12",
          hour: "20:04",
          title: "快来参加书法协会的比赛吧",
          content: "书法比赛将在2024年7月15号开始本次举办的活动地点是湛江市麻章区东风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古"
        },
        {
          month: "7-12",
          hour: "20:04",
          title: "快来参加书法协会的比赛吧",
          content: "书法比赛将在2024年7月15号开始本次举办的活动地点是湛江市麻章区东风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    goback() {
      common_vendor.index.navigateBack();
    },
    adverbtn(event, index) {
      console.log(event, index);
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/home/adver_detail"
      });
    },
    mycode() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/home/mycode"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goback && $options.goback(...args)),
    b: common_vendor.f($data.messList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.month),
        b: common_vendor.t(item.hour),
        c: common_vendor.t(item.title),
        d: common_vendor.t(item.content),
        e: common_vendor.o(($event) => $options.adverbtn(_ctx.event, index), index),
        f: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
