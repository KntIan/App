"use strict";
const common_vendor = require("../../../common/vendor.js");
const timeline = () => "../../../components/chenbin-timeline/timeLine.js";
const timelineItem = () => "../../../components/chenbin-timeline/timelineItem.js";
const _sfc_main = {
  components: {
    timeline,
    timelineItem
  },
  data() {
    return {
      images: [
        "/static/img/swiper1.png",
        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdadd194d15ae0a321cf1b69b42b82fbdb401e127f68d9e091f73b2ef2c6682a6",
        "/static/img/swiper1.png"
      ],
      infolist: [
        {
          title: "坚持练习书法的一百个理由",
          content: "书法比赛将在2024年7月15号开始本次举办自河南、浙江、广东、山西、湖南...",
          titleimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng73002970eb6951969634d1ac818f9fbd983ad92340d21cf601ab0d495647806c",
          timeImg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9124bf95026b34308d6bd993d7c3774578aa0f9fdf293cc08d4cb043bc1ba5a8",
          ressImg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01",
          infotime: "2024-06-14",
          inforess: "湛江市-麻章区-东风路校区",
          infoNumber: "10万人已观看",
          infoImg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775",
          jiantouimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6deab9d71966dbbdc8297bb42543232fd5ab80e8f1b6e7650f9a66310b4f656e"
        },
        {
          title: "坚持练习书法的五百个理由",
          content: "书法比赛将在2024年7月15号开始本次举办自河南、浙江、广东、山西、湖南...",
          titleimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng73002970eb6951969634d1ac818f9fbd983ad92340d21cf601ab0d495647806c",
          timeImg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9124bf95026b34308d6bd993d7c3774578aa0f9fdf293cc08d4cb043bc1ba5a8",
          ressImg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01",
          infotime: "2024-06-23",
          inforess: "湛江市-丰台区-城景路校区",
          infoNumber: "10万人已观看",
          infoImg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775",
          jiantouimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6deab9d71966dbbdc8297bb42543232fd5ab80e8f1b6e7650f9a66310b4f656e"
        }
      ],
      site_imgList: [
        {
          site_img: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/52c3b49276f64677810162df6b253e1c_mergeImage.png",
          title: "书法家张子豪现场观看指导"
        },
        {
          site_img: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/52c3b49276f64677810162df6b253e1c_mergeImage.png",
          title: "书法家张子豪现场观看指导"
        },
        {
          site_img: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/52c3b49276f64677810162df6b253e1c_mergeImage.png",
          title: "书法家张子豪现场观看指导"
        }
      ],
      scrollTop: 0,
      old: {
        scrollTop: 0
      }
    };
  },
  onLoad() {
  },
  methods: {
    goback() {
      common_vendor.index.navigateBack();
    },
    scroll: function(e) {
      console.log(e);
      this.old.scrollTop = e.detail.scrollTop;
    }
  }
};
if (!Array) {
  const _component_timelineItem = common_vendor.resolveComponent("timelineItem");
  const _component_timeline = common_vendor.resolveComponent("timeline");
  (_component_timelineItem + _component_timeline)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goback && $options.goback(...args)),
    b: common_vendor.f($data.images, (item, index, i0) => {
      return {
        a: item,
        b: common_vendor.o((...args) => _ctx.swiper_click && _ctx.swiper_click(...args), index),
        c: index
      };
    }),
    c: common_vendor.p({
      leftTime: "开幕式",
      color: "#84F257"
    }),
    d: common_vendor.p({
      leftTime: "初赛",
      color: "#84F257"
    }),
    e: common_vendor.p({
      leftTime: "楷书组复赛",
      leftlist1: "楷书组复赛",
      leftlist2: "楷书组复赛",
      color: "#F25757"
    }),
    f: common_vendor.p({
      leftTime: "楷书组复赛",
      leftlist1: "楷书组复赛",
      leftlist2: "楷书组复赛",
      color: "#F25757"
    }),
    g: common_vendor.p({
      leftTime: "颁奖晚会",
      color: "#5791F2"
    }),
    h: common_vendor.f($data.infolist, (item, index, i0) => {
      return {
        a: item.titleimg,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.content),
        d: item.timeImg,
        e: common_vendor.t(item.infotime),
        f: item.infoImg,
        g: index
      };
    }),
    i: common_vendor.f($data.site_imgList, (item, index, i0) => {
      return {
        a: item.site_img,
        b: common_vendor.t(item.title),
        c: index
      };
    }),
    j: common_vendor.o((...args) => $options.scroll && $options.scroll(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
