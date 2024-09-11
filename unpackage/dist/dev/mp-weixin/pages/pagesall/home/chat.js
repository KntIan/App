"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      messages_stu: [
        {
          username: "刘易阳",
          type: "text",
          status: "l",
          avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cf805a0bbe4b4f17abb1c215c9ec2df7_mergeImage.png",
          text: "刘易阳你今天表现不错哦1111111111111111111111111111111111111111111111",
          time: 1683791638972
        },
        {
          username: "刘易阳",
          type: "text",
          status: "l",
          avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cf805a0bbe4b4f17abb1c215c9ec2df7_mergeImage.png",
          text: "刘易阳你今天表现不错哦1111111111111111111111111111111111111111111111",
          time: 1683793245623
        },
        {
          username: "刘易阳",
          type: "text",
          status: "l",
          avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cf805a0bbe4b4f17abb1c215c9ec2df7_mergeImage.png",
          text: "刘易阳你今天表现不错哦1111111111111111111111111111111111111111111111",
          time: 1683793245623
        },
        {
          username: "刘易阳",
          type: "text",
          status: "l",
          avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cf805a0bbe4b4f17abb1c215c9ec2df7_mergeImage.png",
          text: "刘易阳你今天表现不错哦",
          time: 1683793245623
        },
        {
          username: "刘易阳",
          type: "img",
          status: "r",
          avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7872400aa4644186b920b0121d6a5136_mergeImage.png",
          text: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775",
          time: 1683793245623
        },
        {
          username: "刘易阳",
          type: "text",
          status: "l",
          avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cf805a0bbe4b4f17abb1c215c9ec2df7_mergeImage.png",
          text: "刘易阳你今天表现不错哦1111111111111111111111111111111111111111111111",
          time: 1683793245623
        },
        {
          username: "刘易阳",
          type: "text",
          status: "r",
          avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7872400aa4644186b920b0121d6a5136_mergeImage.png",
          text: "刘易阳你今天表现不错哦1111111111111111111111111111111111111111111111",
          time: 1683793245623
        },
        {
          username: "刘易阳",
          type: "text",
          status: "l",
          avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cf805a0bbe4b4f17abb1c215c9ec2df7_mergeImage.png",
          text: "刘易阳你今天表现不错哦1111111111111111111111111111111111111111111111",
          time: 1683793245623
        },
        {
          username: "刘易阳",
          type: "text",
          status: "r",
          avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7872400aa4644186b920b0121d6a5136_mergeImage.png",
          text: "刘易阳你今天表现不错哦1111111111111111111111111111111111111111111111",
          time: 1683793245623
        }
        // 其他学生消息...
      ],
      inputMessage: "",
      chat_name: "书法一班刘老师",
      change: true,
      poaMessgae: "poaMessgae",
      scrollViewHeight: "",
      startTime: null,
      longPressDuration: 6e3,
      // 定义长按的阈值（毫秒）,
      show: true
    };
  },
  methods: {
    onload() {
      console.log("1111");
      this.scrollToBottom();
      this.poalast();
      this.getHeight(".chat_box");
    },
    formatDate(value) {
      if (typeof value == "undefined") {
        return "";
      } else {
        let date = new Date(value);
        let now = /* @__PURE__ */ new Date();
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? "0" + MM : MM;
        let d = date.getDate();
        d = d < 10 ? "0" + d : d;
        let h = date.getHours();
        h = h < 10 ? "0" + h : h;
        let m = date.getMinutes();
        m = m < 10 ? "0" + m : m;
        date.getSeconds();
        if (now.getDate() - d == 1 && now - date < 1728e5) {
          return "昨天" + h + ":" + m;
        } else if (now - date < 864e5) {
          return h + ":" + m;
        } else if (now - date >= 864e5 && now - date < 31536e6) {
          return MM + "-" + d + " " + h + ":" + m;
        } else if (now - date >= 31536e6) {
          return y + "-" + MM + "-" + d + " " + h + ":" + m;
        }
      }
    },
    onSend() {
      let mess = {
        text: this.inputMessage,
        status: "r",
        type: "text",
        avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7872400aa4644186b920b0121d6a5136_mergeImage.png",
        time: /* @__PURE__ */ new Date() - 0
      };
      this.sendmessage(JSON.stringify(mess));
      this.inputMessage = "";
    },
    sendmessage(e) {
      console.log(e);
      this.messages_stu.push(JSON.parse(e));
      this.scrollToBottom();
      this.poalast();
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const scrollView = this.$refs.messageList;
        if (scrollView) {
          scrollView.scrollTop = scrollView.scrollHeight;
        }
      });
    },
    poalast() {
      this.$nextTick(() => {
        this.poaMessgae = "";
        setTimeout(() => {
          this.poaMessgae = "poaMessgae";
        }, 50);
      });
    },
    input_change() {
      if (this.change == true) {
        console.log(this.change);
        this.change = false;
        console.log(this.change);
      } else if (this.change == false) {
        this.change = true;
      }
    },
    inputchange() {
      if (this.change == true) {
        console.log(this.change);
        this.change = false;
        console.log(this.change);
      } else if (this.change == false) {
        this.change = true;
      }
    },
    handleTouchStart() {
      console.log("1111");
      this.startTime = (/* @__PURE__ */ new Date()).getTime();
    },
    handleTouchEnd() {
      console.log("1111");
      if (this.startTime) {
        let endTime = (/* @__PURE__ */ new Date()).getTime();
        let duration1 = (endTime - this.startTime) / 1e3;
        let duration = Math.round(duration1);
        if (duration < 1) {
          console.log("时间太短了");
        } else {
          console.log(`${duration}`);
          let mess = {
            username: "刘易阳",
            type: "record",
            status: "r",
            // type 区分消息类型
            avatar: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/7872400aa4644186b920b0121d6a5136_mergeImage.png",
            text: duration,
            time: /* @__PURE__ */ new Date() - 0
          };
          this.messages_stu.push(mess);
          this.poalast();
        }
        this.startTime = null;
      }
    },
    chat_goback() {
      common_vendor.index.navigateBack();
    }
  },
  mounted() {
    console.log("1111");
    this.poalast();
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.chat_goback && $options.chat_goback(...args)),
    b: common_vendor.t($data.chat_name),
    c: common_vendor.f($data.messages_stu, (item, index, i0) => {
      return common_vendor.e({
        a: index == 0 || item.time - $data.messages_stu[index - 1].time >= 3e5
      }, index == 0 || item.time - $data.messages_stu[index - 1].time >= 3e5 ? {
        b: common_vendor.t($options.formatDate(item.time))
      } : {}, {
        c: item.type == "img"
      }, item.type == "img" ? {} : {}, {
        d: item.type == "record"
      }, item.type == "record" ? {
        e: common_vendor.t(item.text),
        f: common_assets._imports_0
      } : {}, {
        g: item.type == "text"
      }, item.type == "text" ? {
        h: common_vendor.t(item.text)
      } : {}, {
        i: item.avatar,
        j: item.status == "l" ? "l" : "r",
        k: index
      });
    }),
    d: $data.poaMessgae,
    e: $data.change
  }, $data.change ? {
    f: common_vendor.o((...args) => $options.input_change && $options.input_change(...args))
  } : {
    g: common_assets._imports_1,
    h: common_vendor.o((...args) => $options.inputchange && $options.inputchange(...args))
  }, {
    i: $data.change
  }, $data.change ? {
    j: common_vendor.o((...args) => $options.scrollToBottom && $options.scrollToBottom(...args)),
    k: common_vendor.o((...args) => $options.onSend && $options.onSend(...args)),
    l: $data.inputMessage,
    m: common_vendor.o(($event) => $data.inputMessage = $event.detail.value)
  } : {
    n: common_vendor.o((...args) => $options.handleTouchStart && $options.handleTouchStart(...args)),
    o: common_vendor.o((...args) => $options.handleTouchEnd && $options.handleTouchEnd(...args))
  }, {
    p: $data.poaMessgae
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
