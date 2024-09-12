"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchQuery: "",
      hotCities: ["北京", "上海", "广州", "深圳", "西安", "郑州", "重庆", "武汉"],
      allCities: [
        {
          name: "阿坝",
          pinyin: "A"
        },
        {
          name: "阿城",
          pinyin: "A"
        },
        {
          name: "阿克苏",
          pinyin: "A"
        },
        {
          name: "阿拉善盟",
          pinyin: "A"
        },
        {
          name: "阿勒泰",
          pinyin: "A"
        },
        {
          name: "阿里",
          pinyin: "A"
        },
        {
          name: "北京市",
          pinyin: "B"
        },
        {
          name: "上海市",
          pinyin: "S"
        },
        {
          name: "广州市",
          pinyin: "G"
        },
        {
          name: "深圳市",
          pinyin: "S"
        },
        {
          name: "西安市",
          pinyin: "X"
        },
        {
          name: "郑州市",
          pinyin: "Z"
        }
        // 更多城市...
      ],
      filteredCities: []
    };
  },
  mounted() {
    this.filteredCities = this.allCities;
  },
  methods: {
    filterCities() {
      this.filteredCities = this.allCities.filter(
        (city) => city.name.includes(this.searchQuery)
      );
    },
    goToCityDetail(city) {
      const pages = getCurrentPages();
      const prevPage = pages[pages.length - 2];
      prevPage.updateSelectedCity(city);
      common_vendor.index.switchTab({
        url: "/pages/pagesall/oper"
      });
    }
  },
  computed: {
    sortedCities() {
      const grouped = {};
      this.filteredCities.forEach((city) => {
        const firstLetter = city.pinyin;
        if (!grouped[firstLetter]) {
          grouped[firstLetter] = [];
        }
        grouped[firstLetter].push(city);
      });
      return grouped;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o([($event) => $data.searchQuery = $event.detail.value, (...args) => $options.filterCities && $options.filterCities(...args)]),
    b: $data.searchQuery,
    c: common_vendor.f($data.hotCities, (city, index, i0) => {
      return {
        a: common_vendor.t(city),
        b: index,
        c: common_vendor.o(($event) => $options.goToCityDetail(city), index)
      };
    }),
    d: common_vendor.f($options.sortedCities, (cities, letter, i0) => {
      return {
        a: common_vendor.t(letter),
        b: common_vendor.f(cities, (city, index, i1) => {
          return {
            a: common_vendor.t(city.name),
            b: common_vendor.o(($event) => $options.goToCityDetail(city.name), index),
            c: index
          };
        }),
        c: letter
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-506f7517"]]);
wx.createPage(MiniProgramPage);
