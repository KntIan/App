"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      items: ["线上活动", "线下活动"],
      current: 0,
      colorIndex: 0,
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
      }],
      listdata1: [{
        biaoti: "书法综合突破集训营(赠教学视频)",
        laoshi: " 书法综合突破集训营主导讲师刘老师经验丰富…",
        star: "2024.8.14",
        end: "2024.8.16",
        hearimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf75020ee967309de69964375963839256bf76467ffccdabe9efe77aefea8f6e1",
        techerimg: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng13a2fb02e015caf1325ed0ae70a60ac4263056e78d6de603517f5fae96ceca41",
        teachername: "李衣裳",
        pers: "2034",
        money: "免费",
        online: "线下",
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
        online: "线下",
        hours: "",
        minutes: "",
        seconds: ""
      }],
      intervalId: null,
      // 保存计时器ID
      oper_area: "郑州"
    };
  },
  onLoad() {
    this.startCountdown();
  },
  onUnload() {
    this.stopCountdown();
  },
  methods: {
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    },
    styleChange(e) {
      if (this.styleType !== e.detail.value) {
        this.styleType = e.detail.value;
      }
    },
    colorChange(e) {
      if (this.styleType !== e.detail.value) {
        console.log(e.detail.value);
        this.activeColor = e.detail.value;
      }
    },
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
          this.listdata1[index].hours = this.formatTime(hours);
          this.listdata1[index].minutes = this.formatTime(minutes);
          this.listdata1[index].seconds = this.formatTime(seconds);
        } else {
          this.listdata[index].hours = "00";
          this.listdata[index].minutes = "00";
          this.listdata[index].seconds = "00";
          this.listdata1[index].hours = "00";
          this.listdata1[index].minutes = "00";
          this.listdata1[index].seconds = "00";
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
    }
  }
};
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _component_uni_section = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_segmented_control2 + _component_uni_section)();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  _easycom_uni_segmented_control();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.oper_area),
    b: common_vendor.o($options.onClickItem),
    c: common_vendor.p({
      current: $data.current,
      values: $data.items,
      ["active-color"]: _ctx.activeColor
    }),
    d: $data.current === 0
  }, $data.current === 0 ? {} : {}, {
    e: $data.current === 1
  }, $data.current === 1 ? {} : {}, {
    f: $data.current === 0
  }, $data.current === 0 ? {
    g: common_vendor.f($data.listdata, (item, index, i0) => {
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
    }),
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
        n: common_vendor.o((...args) => _ctx.btnsignup && _ctx.btnsignup(...args), index),
        o: index
      };
    })
  } : {}, {
    i: $data.current === 1
  }, $data.current === 1 ? {
    j: common_vendor.f($data.listdata1, (item, index, i0) => {
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
    }),
    k: common_vendor.f($data.listdata1, (item, index, i0) => {
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
  } : {}, {
    l: common_vendor.p({
      title: "实心标签",
      type: "line"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
