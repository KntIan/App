"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      images: [
        "/static/img/swiper1.png",
        "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdadd194d15ae0a321cf1b69b42b82fbdb401e127f68d9e091f73b2ef2c6682a6",
        "/static/img/swiper1.png"
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
        star: "2024.8.14",
        end: "2024.8.17",
        hearimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1",
        techerimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41",
        teachername: "李衣裳",
        pers: "2034",
        money: "450",
        online: "线下",
        hours: "",
        minutes: "",
        seconds: ""
      }],
      infolist: [
        {
          title: "坚持练习书法的一百个理由",
          content: "书写的意义每次都能在写作上发挥显现出巨大意义.....",
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
          content: "书写的意义每次都能在写作上发挥显现出巨大意义.....",
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
      arrimglist: [
        {
          img: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng05cc75d9c87f62ad3515d7a66dd8b0fba6c85a095217f09047b2f7af42ce6ec1"
        },
        {
          img: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng05cc75d9c87f62ad3515d7a66dd8b0fba6c85a095217f09047b2f7af42ce6ec1"
        },
        {
          img: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng05cc75d9c87f62ad3515d7a66dd8b0fba6c85a095217f09047b2f7af42ce6ec1"
        }
      ],
      zuopinimglist: [
        {
          img: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4534fc44d266409c80c73af9125bb05b_mergeImage.png"
        },
        {
          img: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4534fc44d266409c80c73af9125bb05b_mergeImage.png"
        },
        {
          img: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/4534fc44d266409c80c73af9125bb05b_mergeImage.png"
        }
      ],
      intervalId: null
      // 保存计时器ID
    };
  },
  onLoad() {
    this.startCountdown();
  },
  onUnload() {
    this.stopCountdown();
  },
  methods: {
    formatTime(value) {
      return value.toString().padStart(2, "0");
    },
    updateCountdown() {
      this.listdata.forEach((e, index) => {
        let now = /* @__PURE__ */ new Date();
        let end = new Date(e.end);
        let timeDiff = end - now;
        if (timeDiff > 0) {
          let totalSeconds = Math.floor(timeDiff / 1e3);
          let hours = Math.floor(totalSeconds / 3600);
          let minutes = Math.floor(totalSeconds % 3600 / 60);
          let seconds = totalSeconds % 60;
          this.listdata[index].hours = this.formatTime(hours);
          this.listdata[index].minutes = this.formatTime(minutes);
          this.listdata[index].seconds = this.formatTime(seconds);
        } else {
          this.listdata[index].hours = "00";
          this.listdata[index].minutes = "00";
          this.listdata[index].seconds = "00";
        }
      });
    },
    startCountdown() {
      this.updateCountdown();
      this.intervalId = setInterval(this.updateCountdown, 1e3);
    },
    stopCountdown() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    btnscan() {
      console.log("扫上了");
      common_vendor.index.scanCode({
        success: function(res) {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
        }
      });
    },
    btnsearch() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/home/search"
      });
    },
    btnmess() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/home/message"
      });
    },
    btnsignup() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/home/signUp"
      });
    },
    swiper_click() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/home/game"
      });
    },
    linshi() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/home/chat"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.btnscan && $options.btnscan(...args)),
    b: common_vendor.o((...args) => $options.btnsearch && $options.btnsearch(...args)),
    c: common_vendor.o((...args) => $options.btnmess && $options.btnmess(...args)),
    d: common_vendor.f($data.images, (item, index, i0) => {
      return {
        a: item,
        b: common_vendor.o((...args) => $options.swiper_click && $options.swiper_click(...args), index),
        c: index
      };
    }),
    e: common_vendor.f($data.zuopinimglist, (item, index, i0) => {
      return {
        a: item.img,
        b: index
      };
    }),
    f: common_vendor.f($data.arrimglist, (item, index, i0) => {
      return {
        a: item.img,
        b: index
      };
    }),
    g: common_vendor.o((...args) => $options.linshi && $options.linshi(...args)),
    h: common_vendor.f($data.listdata, (item, index, i0) => {
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
        n: common_vendor.o((...args) => $options.btnsignup && $options.btnsignup(...args), index),
        o: index
      };
    }),
    i: common_vendor.f($data.infolist, (item, index, i0) => {
      return {
        a: item.titleimg,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.content),
        d: item.timeImg,
        e: common_vendor.t(item.infotime),
        f: item.ressImg,
        g: common_vendor.t(item.inforess),
        h: common_vendor.t(item.infoNumber),
        i: item.jiantouimg,
        j: item.infoImg,
        k: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
