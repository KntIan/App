"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Login",
  data() {
    return {
      constants: {},
      name: "",
      old: "",
      refe: "",
      iphone: "",
      trepass: "",
      dateYear: "年/月/日",
      giftmoren: "选择校区",
      giftindex: 0,
      giftArray: [{
        "gift": "湛江市-麻章区-东风路校区"
      }, {
        "gift": "湛江市-霞山区-京广路校区"
      }, {
        "gift": "湛江市-吴川市-国基路校区"
      }, {
        "gift": "湛江市-雷州市-花园路校区"
      }, {
        "gift": "湛江市-廉江市-迎宾路校区"
      }],
      multiArray: [
        ["书法", "绘画"],
        ["书法一班", "书法二班", "书法三班", "书法四班", "书法五班", "书法六班"]
      ],
      multiIndex: [0, 0, 0],
      seen: true,
      loun: true,
      gender: "",
      refelist: {}
    };
  },
  onLoad() {
  },
  methods: {
    async retPass() {
      await common_vendor.index.navigateTo({
        url: "/pages/login/ratpass"
      });
    },
    open() {
      this.$refs.datetimePicker.open();
      console.log(this.$refs.datetimePicker);
    },
    getname(event) {
      this.name = event.detail.value;
      console.log(this.name);
    },
    getold(event) {
      this.old = event.detail.value;
    },
    getrefe(event) {
      this.refe = event.detail.value;
    },
    getiphone(event) {
      this.iphone = event.detail.value;
    },
    getregpass(event) {
      this.trepass = event.detail.value;
    },
    getlogin() {
      this.refelist = {
        gender: this.gender,
        name: this.name,
        dateYear: this.dateYear,
        giftmoren: this.giftmoren,
        multiArray: this.multiArray[1][this.multiIndex[1]],
        refe: this.refe,
        iphone: this.iphone,
        trepass: this.trepass
      };
      console.log(this.refelist);
    },
    giftPickerChange: function(e, giftArray) {
      console.log("picker发送选择改变，携带值为", e.detail.value);
      let index = e.detail.value;
      this.giftindex = index;
      this.giftmoren = giftArray[index].gift;
    },
    roun() {
      console.log(this.seen, this.loun);
      if (this.seen == false) {
        this.seen = true;
        this.loun = true;
      }
      this.gender = "男";
      console.log(this.seen, this.loun);
    },
    soun() {
      console.log(this.seen, this.loun);
      if (this.loun == true) {
        this.seen = false;
        this.loun = false;
      }
      this.gender = "女";
      console.log(this.seen, this.loun);
    },
    bindMultiPickerColumnChange: function(e) {
      console.log("修改的列为：" + e.detail.column + "，值为：" + e.detail.value);
      this.multiIndex[e.detail.column] = e.detail.value;
      switch (e.detail.column) {
        case 0:
          switch (this.multiIndex[0]) {
            case 0:
              this.multiArray[1] = ["书法一班", "书法二班", "书法三班", "书法四班", "书法五班", "书法六班"];
              break;
            case 1:
              this.multiArray[1] = ["绘画一班", "绘画二班", "绘画三班", "绘画四班", "绘画五班", "绘画六班"];
              break;
          }
          this.multiIndex.splice(1, 1, 0);
          this.multiIndex.splice(2, 1, 0);
          break;
      }
      this.$forceUpdate();
    },
    confirm(e) {
      let date = new Date(e.value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      date.getHours();
      date.getMinutes();
      date.getSeconds();
      let newtime = y + "-" + MM + "-" + d;
      let newtime2 = y + "." + MM + "." + d;
      this.dateYear = newtime2;
      this.newtime = newtime;
    }
  }
};
if (!Array) {
  const _easycom_uv_datetime_picker2 = common_vendor.resolveComponent("uv-datetime-picker");
  _easycom_uv_datetime_picker2();
}
const _easycom_uv_datetime_picker = () => "../../uni_modules/uv-datetime-picker/components/uv-datetime-picker/uv-datetime-picker.js";
if (!Math) {
  _easycom_uv_datetime_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.sr("datetimePicker", "27bfc1cd-0"),
    b: common_vendor.o($options.confirm),
    c: common_vendor.o(($event) => _ctx.value = $event),
    d: common_vendor.p({
      mode: "date",
      minDate: 946695809e3,
      modelValue: _ctx.value
    }),
    e: $data.seen
  }, $data.seen ? {} : {}, {
    f: common_vendor.o((...args) => $options.roun && $options.roun(...args)),
    g: $data.loun
  }, $data.loun ? {} : {}, {
    h: common_vendor.o((...args) => $options.soun && $options.soun(...args)),
    i: common_vendor.o((...args) => $options.getname && $options.getname(...args)),
    j: common_vendor.o((...args) => $options.getold && $options.getold(...args)),
    k: common_vendor.t($data.dateYear),
    l: common_vendor.o((...args) => $options.open && $options.open(...args)),
    m: common_vendor.t($data.giftmoren),
    n: common_vendor.o(($event) => $options.giftPickerChange($event, $data.giftArray)),
    o: _ctx.index,
    p: $data.giftArray,
    q: common_vendor.t($data.multiArray[1][$data.multiIndex[1]]),
    r: common_vendor.o((...args) => $options.bindMultiPickerColumnChange && $options.bindMultiPickerColumnChange(...args)),
    s: $data.multiIndex,
    t: $data.multiArray,
    v: common_vendor.o((...args) => $options.getrefe && $options.getrefe(...args)),
    w: common_vendor.o((...args) => $options.getiphone && $options.getiphone(...args)),
    x: common_vendor.o((...args) => $options.getregpass && $options.getregpass(...args)),
    y: common_vendor.o((...args) => $options.getlogin && $options.getlogin(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
