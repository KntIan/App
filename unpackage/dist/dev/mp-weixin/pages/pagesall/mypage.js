"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      features: [
        {
          title: "我的作业",
          icon: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8bb39204cd1021a9c46b914bbbb9c3e73701f20ce4d3f9222e7e789bf098318c"
        },
        {
          title: "班级课程",
          icon: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngbdc2c57dd377010638afe4dc2455b724b93bf06ec187cdbd2aaf6af838cb69d5"
        },
        {
          title: "班级群",
          icon: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5544801ab25c34d5e7209d492faea679de0319d7015fffd9cb1e0a7477b5cb2e"
        },
        {
          title: "我的老师",
          icon: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3d84fa78ccfd67801bd43ee36227301b41b1697aad797f0eb08a3aef64b98851"
        },
        {
          title: "历史测评",
          icon: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5d69adc096f5890222c21a764e7b00bb87d2ad431f5caef5548cbf7b75ed9fb5"
        }
        // 更多功能...
      ],
      homework: [
        {
          title: "书法练习第一课",
          image: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4f12d9b5c7ee4468ae4a232563300604_mergeImage.png",
          from: "来自刘老师",
          status: "未完成"
        },
        {
          title: "书法练习第二课",
          image: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4f12d9b5c7ee4468ae4a232563300604_mergeImage.png",
          status: "未完成",
          from: "来自刘老师"
        }
      ],
      listdata: [{
        biaoti: "书法综合突破集训营(赠教学视频)",
        laoshi: " 书法综合突破集训营主导讲师刘老师经验丰富…",
        star: "2024.8.14",
        end: "2024.8.16",
        hearimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1",
        techerimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41",
        teachername: "李衣裳",
        pers: "2034",
        money: "免费",
        online: "线上",
        hours: "",
        minutes: "",
        seconds: ""
      }, {
        biaoti: "书法综合突破集训营(赠教学视频)",
        laoshi: " 书法综合突破集训营主导讲师刘老师经验丰富…",
        star: "2024.8.26",
        end: "2024.8.27",
        hearimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1",
        techerimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41",
        teachername: "李衣裳",
        pers: "2034",
        money: "450",
        online: "线上",
        hours: "",
        minutes: "",
        seconds: ""
      }]
    };
  },
  methods: {
    setInfo() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/PersonalData/PersonalData"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.setInfo && $options.setInfo(...args)),
    b: common_vendor.f($data.features, (feature, k0, i0) => {
      return {
        a: feature.icon,
        b: common_vendor.t(feature.title),
        c: feature.title
      };
    }),
    c: common_vendor.f($data.homework, (task, k0, i0) => {
      return {
        a: task.image,
        b: common_vendor.t(task.title),
        c: common_vendor.t(task.from),
        d: common_vendor.t(task.status),
        e: task.title
      };
    }),
    d: common_vendor.f($data.listdata, (item, index, i0) => {
      return {
        a: common_vendor.t(item.online),
        b: item.techerimg,
        c: common_vendor.t(item.biaoti),
        d: common_vendor.t(item.laoshi),
        e: common_vendor.t(item.star),
        f: common_vendor.t(item.end),
        g: item.hearimg,
        h: common_vendor.t(item.teachername),
        i: common_vendor.t(item.hours),
        j: common_vendor.t(item.minutes),
        k: common_vendor.t(item.seconds),
        l: common_vendor.t(item.pers),
        m: common_vendor.t(item.money == "免费" ? "免费" : "￥" + item.money),
        n: common_vendor.o((...args) => _ctx.btnsignup && _ctx.btnsignup(...args), index),
        o: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
