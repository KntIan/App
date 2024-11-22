"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      btnyes: true,
      input_text: "",
      friends_List: [
        {
          name: "王老师",
          id: "000000",
          head: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png"
        },
        {
          name: "王老师",
          id: "000000",
          head: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/19217f29299e465481d28ae91dbf317b_mergeImage.png"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    input_search(event) {
      console.log(event.detail.value);
      this.input_text = event.detail.value;
      if (this.input_text == "") {
        this.btnyes = true;
      } else if (this.input_text != "") {
        this.btnyes = false;
      }
    },
    add_friend() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/home/add_friend"
      });
    },
    cancel_lation() {
      common_vendor.index.navigateBack();
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.input_search && $options.input_search(...args)),
    b: $data.btnyes
  }, $data.btnyes ? {
    c: common_vendor.o((...args) => $options.cancel_lation && $options.cancel_lation(...args))
  } : {}, {
    d: common_vendor.f($data.friends_List, (item, index, i0) => {
      return {
        a: item.head,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.id),
        d: common_vendor.o((...args) => $options.add_friend && $options.add_friend(...args), index),
        e: common_vendor.o((...args) => _ctx.friendsgoback && _ctx.friendsgoback(...args), index),
        f: index
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
