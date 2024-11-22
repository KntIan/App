"use strict";
const common_vendor = require("../../../common/vendor.js");
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
        star: "2024.8.22",
        end: "2024.8.24",
        hearimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1",
        techerimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775",
        teachername: "李衣裳",
        pers: "2034",
        money: "免费",
        online: "线上",
        hours: "",
        minutes: "",
        seconds: "",
        planum: "26000",
        quenum: "15999"
      }],
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
    back_learn() {
      common_vendor.index.navigateBack();
    },
    btnsignup() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.back_learn && $options.back_learn(...args)),
    b: common_vendor.f($data.listdata, (item, index, i0) => {
      return {
        a: item.hearimg,
        b: common_vendor.t(item.teachername),
        c: common_vendor.t(item.hours),
        d: common_vendor.t(item.minutes),
        e: common_vendor.t(item.seconds),
        f: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
