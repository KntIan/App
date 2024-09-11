"use strict";
const common_vendor = require("../../common/vendor.js");
const timeline = () => "../../components/chenbin-timeline/timeLine.js";
const timelineItem = () => "../../components/chenbin-timeline/timelineItem.js";
const _sfc_main = {
  components: {
    timeline,
    timelineItem
  },
  data() {
    return {
      infolist: [
        {
          title: "硬币书法“三点水”书写的意义",
          teach: "王老师",
          classroom: "文苑3楼102",
          start: "10:00",
          end: "10:30",
          color: "#5791F2"
        },
        // 确保每个对象都有 title 属性
        {
          title: "另一个课程名称",
          teach: "李老师",
          classroom: "文苑3楼103",
          start: "11:00",
          end: "11:30",
          color: "#5791F2"
        }
      ],
      ti_tea_room_list: [
        {
          title: "硬币书法“三点水”书写的意义",
          teach: "王老师",
          classroom: "文苑3楼102",
          start: "10:00",
          end: "10:30",
          status: "作业已完成",
          color: "#666666"
        },
        // 确保每个对象都有 title 属性
        {
          title: "硬币书法“三点水”书写的意义",
          teach: "张老师",
          classroom: "文苑3楼103",
          start: "11:00",
          end: "11:30",
          status: "写作业",
          color: "#5791F2"
        },
        // 确保每个对象都有 title 属性
        {
          title: "硬币书法“三点水”书写的意义",
          teach: "张老师",
          classroom: "文苑3楼103",
          start: "11:00",
          end: "11:30",
          status: "写作业",
          color: "#5791F2"
        },
        // 确保每个对象都有 title 属性
        {
          title: "硬币书法“三点水”书写的意义",
          teach: "张老师",
          classroom: "文苑3楼103",
          start: "11:00",
          end: "11:30",
          status: "写作业",
          color: "#5791F2"
        },
        // 确保每个对象都有 title 属性
        {
          title: "硬币书法“三点水”书写的意义",
          teach: "张老师",
          classroom: "文苑3楼103",
          start: "11:00",
          end: "11:30",
          status: "写作业",
          color: "#5791F2"
        },
        // 确保每个对象都有 title 属性
        {
          title: "硬币书法“三点水”书写的意义",
          teach: "张老师",
          classroom: "文苑3楼103",
          start: "11:00",
          end: "11:30",
          status: "写作业",
          color: "#5791F2"
        }
      ],
      scrollTop: 0,
      old: {
        scrollTop: 0
      }
    };
  },
  methods: {
    goback() {
      common_vendor.index.navigateBack();
    },
    scroll(e) {
      console.log(e);
      this.old.scrollTop = e.detail.scrollTop;
    },
    btn_study() {
      common_vendor.index.navigateTo({
        url: "/pages/pagesall/course/go_learn"
      });
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
    a: common_vendor.f($data.infolist, (item, index, i0) => {
      return {
        a: common_vendor.t(item.teach),
        b: common_vendor.t(item.classroom),
        c: common_vendor.t(item.start),
        d: common_vendor.t(item.end),
        e: "8540410e-1-" + i0 + ",8540410e-0",
        f: common_vendor.p({
          leftTime: item.title,
          color: "#5791F2"
        }),
        g: index
      };
    }),
    b: common_vendor.f($data.ti_tea_room_list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.teach),
        b: common_vendor.t(item.classroom),
        c: common_vendor.t(item.start),
        d: common_vendor.t(item.end),
        e: common_vendor.t(item.status),
        f: item.color,
        g: common_vendor.o((...args) => $options.btn_study && $options.btn_study(...args), index),
        h: "8540410e-3-" + i0 + ",8540410e-2",
        i: common_vendor.p({
          leftTime: item.title,
          color: item.color
        }),
        j: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
