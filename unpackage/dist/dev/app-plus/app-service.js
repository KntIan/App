if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  var _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$x = {
    data() {
      return {
        constants: {}
      };
    },
    onLoad() {
      setTimeout(() => {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      }, 3e3);
    },
    methods: {}
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "box1" }, [
        vue.createElementVNode("image", {
          class: "image_2",
          referrerpolicy: "no-referrer",
          src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4253829e1a377894ca42c94d7edf9cdfd758b5bf890e937604ce7635bfc36c30"
        }),
        vue.createElementVNode("text", { class: "text-group_2" }, "练习书法 习得一手好字")
      ]),
      vue.createElementVNode("view", { class: "box2" }, [
        vue.createElementVNode("view", { class: "box_2 flex-col" }),
        vue.createElementVNode("text", { class: "text2" }, "泽熙书画")
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/index/index.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const _sfc_main$w = {
    name: "Login",
    data() {
      return {
        constants: {},
        admin: "",
        pass: "",
        adminlist: {},
        radio: false
      };
    },
    onLoad() {
    },
    methods: {
      async retPass() {
        await uni.navigateTo({
          url: "/pages/login/ratpass"
        });
      },
      regiSter() {
        uni.navigateTo({
          url: "/pages/login/register"
        });
      },
      radiogrp(event) {
        formatAppLog("log", "at pages/login/login.vue:60", event);
        this.radio = event.detail.value;
        formatAppLog("log", "at pages/login/login.vue:62", this.radio[0]);
      },
      getadmin(event) {
        formatAppLog("log", "at pages/login/login.vue:65", event.detail.value);
        this.admin = event.detail.value;
      },
      getpass(event) {
        formatAppLog("log", "at pages/login/login.vue:69", event.detail.value);
        this.pass = event.detail.value;
      },
      async getlogin() {
        this.adminlist = {
          admin: this.admin,
          pass: this.pass
        };
        if (this.radio == false) {
          uni.showToast({
            title: "请勾选同意协议",
            icon: "error",
            // 其他值：'none', 'loading'
            duration: 2e3
            // 提示持续时间，单位为毫秒
          });
        } else if (this.radio[0] == "true") {
          formatAppLog("log", "at pages/login/login.vue:84", "111");
          uni.showToast({
            title: "登录成功",
            icon: "success",
            // 其他值：'none', 'loading'
            duration: 2e3
            // 提示持续时间，单位为毫秒
          });
          setTimeout(() => {
            uni.switchTab({
              url: "/pages/pagesall/home"
            });
          }, 1500);
        }
        formatAppLog("log", "at pages/login/login.vue:97", this.adminlist);
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "textlogin" }, [
          vue.createElementVNode("text", null, "登录/注册")
        ]),
        vue.createElementVNode(
          "input",
          {
            type: "text",
            placeholder: "账号",
            class: "input",
            onInput: _cache[0] || (_cache[0] = (...args) => $options.getadmin && $options.getadmin(...args))
          },
          null,
          32
          /* NEED_HYDRATION */
        ),
        vue.createElementVNode(
          "input",
          {
            type: "password",
            placeholder: "密码",
            class: "input",
            onInput: _cache[1] || (_cache[1] = (...args) => $options.getpass && $options.getpass(...args))
          },
          null,
          32
          /* NEED_HYDRATION */
        ),
        vue.createElementVNode("button", {
          class: "login-button",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.getlogin && $options.getlogin(...args))
        }, "登录"),
        vue.createElementVNode("view", { class: "links" }, [
          vue.createElementVNode("text", {
            class: "link",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.retPass && $options.retPass(...args))
          }, "找回密码"),
          vue.createElementVNode("text", {
            class: "link",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.regiSter && $options.regiSter(...args))
          }, "注册")
        ])
      ]),
      vue.createElementVNode("view", { class: "footer" }, [
        vue.createElementVNode(
          "checkbox-group",
          {
            onChange: _cache[5] || (_cache[5] = (...args) => $options.radiogrp && $options.radiogrp(...args))
          },
          [
            vue.createElementVNode("label", { class: "radio" }, [
              vue.createElementVNode("checkbox", {
                value: "true",
                activeBorderColor: "#000",
                activeBackgroundColor: "#fff",
                iconColor: "#000",
                style: { "transform": "scale(0.5)" }
              }),
              vue.createTextVNode(" 点击登录，即表示同意《隐私政策》和《服务条款》 ")
            ])
          ],
          32
          /* NEED_HYDRATION */
        ),
        vue.createElementVNode("text")
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/login/login.vue"]]);
  const _sfc_main$v = {
    name: "Login",
    data() {
      return {
        constants: {},
        account: "",
        password1: "",
        password2: "",
        code: ""
      };
    },
    onLoad() {
    },
    methods: {
      async retPass() {
        await uni.navigateTo({
          url: "/pages/login/ratpass"
        });
      },
      getaccount(event) {
        this.account = event.detail.value;
        formatAppLog("log", "at pages/login/ratpass.vue:49", this.account.length);
      },
      getpassword1(event) {
        this.password1 = event.detail.value;
      },
      getpassword2(event) {
        this.password2 = event.detail.value;
      },
      getaCode(event) {
        this.code = event.detail.value;
      },
      getIpcode() {
        if (this.account != "" && this.account && this.account.length == 11) {
          uni.showToast({
            title: "获取成功",
            icon: "success",
            // 其他值：'none', 'loading'
            duration: 2e3
            // 提示持续时间，单位为毫秒
          });
        } else {
          uni.showToast({
            title: "请检查手机号是否正确",
            icon: "error",
            // 其他值：'none', 'loading'
            duration: 2e3
            // 提示持续时间，单位为毫秒
          });
        }
      },
      getratlogin() {
        formatAppLog("log", "at pages/login/ratpass.vue:77", this.account, this.password1, this.password2, this.code);
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "textlogin" }, [
          vue.createElementVNode("text", null, "找回密码")
        ]),
        vue.createElementVNode(
          "input",
          {
            type: "text",
            placeholder: "请输入手机号",
            class: "input",
            onInput: _cache[0] || (_cache[0] = (...args) => $options.getaccount && $options.getaccount(...args))
          },
          null,
          32
          /* NEED_HYDRATION */
        ),
        vue.createElementVNode(
          "input",
          {
            type: "password",
            placeholder: "请确认密码",
            class: "input",
            onInput: _cache[1] || (_cache[1] = (...args) => $options.getpassword1 && $options.getpassword1(...args))
          },
          null,
          32
          /* NEED_HYDRATION */
        ),
        vue.createElementVNode(
          "input",
          {
            type: "password",
            placeholder: "请在此确认密码",
            class: "input",
            onInput: _cache[2] || (_cache[2] = (...args) => $options.getpassword2 && $options.getpassword2(...args))
          },
          null,
          32
          /* NEED_HYDRATION */
        ),
        vue.createElementVNode("view", { class: "button1" }, [
          vue.createElementVNode(
            "input",
            {
              type: "text",
              placeholder: "请输入验证码",
              class: "input button2",
              onInput: _cache[3] || (_cache[3] = (...args) => $options.getaCode && $options.getaCode(...args))
            },
            null,
            32
            /* NEED_HYDRATION */
          ),
          vue.createElementVNode("button", {
            class: "button3",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.getIpcode && $options.getIpcode(...args))
          }, "获取")
        ]),
        vue.createElementVNode("button", {
          class: "login-button",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.getratlogin && $options.getratlogin(...args))
        }, "完成")
      ]),
      vue.createElementVNode("view", { class: "footer" })
    ]);
  }
  const PagesLoginRatpass = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/login/ratpass.vue"]]);
  const mpMixin = {};
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    amount,
    array,
    carNo,
    chinese,
    code,
    contains,
    date,
    dateISO,
    digits,
    email,
    empty,
    enOrNum,
    func,
    idCard,
    image,
    jsonString,
    landline,
    letter,
    mobile,
    number,
    object,
    promise,
    range: range$1,
    rangeLength,
    regExp,
    string,
    url,
    video
  }, Symbol.toStringTag, { value: "Module" }));
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/uv-ui-tools/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times$1(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times$1);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times$1(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times$1(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times$1(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = ((_b) => (_b = ((_a) => (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ? ((_d) => (_d = ((_c) => (_c = uni == null ? void 0 : uni.$uv) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (cache.has(obj))
      return cache.get(obj);
    let clone;
    if (obj instanceof Date) {
      clone = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
      clone = new RegExp(obj);
    } else if (obj instanceof Map) {
      clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
    } else if (obj instanceof Set) {
      clone = new Set(Array.from(obj, (value) => deepClone(value, cache)));
    } else if (Array.isArray(obj)) {
      clone = obj.map((value) => deepClone(value, cache));
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
      clone = Object.create(Object.getPrototypeOf(obj));
      cache.set(obj, clone);
      for (const [key, value] of Object.entries(obj)) {
        clone[key] = deepClone(value, cache);
      }
    } else {
      clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
      return target;
    const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      const sourceValue = source[prop];
      const targetValue = merged[prop];
      if (sourceValue instanceof Date) {
        merged[prop] = new Date(sourceValue);
      } else if (sourceValue instanceof RegExp) {
        merged[prop] = new RegExp(sourceValue);
      } else if (sourceValue instanceof Map) {
        merged[prop] = new Map(sourceValue);
      } else if (sourceValue instanceof Set) {
        merged[prop] = new Set(sourceValue);
      } else if (typeof sourceValue === "object" && sourceValue !== null) {
        merged[prop] = deepMerge(targetValue, sourceValue);
      } else {
        merged[prop] = sourceValue;
      }
    }
    return merged;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uv-ui-tools/libs/function/index.js:250", `uvui提示：${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
      date2 = new Date(dateTime.replace(/-/g, "/"));
    } else {
      date2 = new Date(dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "uv-form-item");
    const form = $parent.call(instance, "uv-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    var _a;
    const pages2 = getCurrentPages();
    const route2 = (_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route;
    return `/${route2 ? route2 : ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function getHistoryPage(back = 0) {
    const pages2 = getCurrentPages();
    const len = pages2.length;
    return pages2[len - 1 + back];
  }
  function setConfig({
    props: props2 = {},
    config = {},
    color = {},
    zIndex = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$uv;
    uni.$uv.config = deepMerge2(uni.$uv.config, config);
    uni.$uv.props = deepMerge2(uni.$uv.props, props2);
    uni.$uv.color = deepMerge2(uni.$uv.color, color);
    uni.$uv.zIndex = deepMerge2(uni.$uv.zIndex, zIndex);
  }
  const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    formValidate,
    getDuration,
    getHistoryPage,
    getProperty,
    getPx,
    guid,
    os,
    padZero,
    page,
    pages,
    priceFormat,
    queryParams,
    random,
    randomArray,
    range,
    setConfig,
    setProperty,
    sleep,
    sys,
    timeFormat,
    timeFrom,
    toast,
    trim,
    type2icon
  }, Symbol.toStringTag, { value: "Module" }));
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false,
        // 是否需要拦截
        events: {}
        // 页面间通信接口，用于监听被打开页面发送到当前页面的数据。hbuilderx 2.8.9+ 开始支持。
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === "string") {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = "navigateTo";
      } else {
        mergeConfig = deepMerge(this.config, options);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig.url === page())
        return;
      if (params.intercept) {
        mergeConfig.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = deepMerge(this.config, mergeConfig);
      if (typeof mergeConfig.intercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          mergeConfig.intercept(mergeConfig, resolve);
        });
        isNext && this.openPage(mergeConfig);
      } else {
        this.openPage(mergeConfig);
      }
    }
    // 执行路由跳转
    openPage(config) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration,
        events
      } = config;
      if (config.type == "navigateTo" || config.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration,
          events
        });
      }
      if (config.type == "redirectTo" || config.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config.type == "switchTab" || config.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config.type == "reLaunch" || config.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config.type == "navigateBack" || config.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  const mixin = {
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$uv.getRect = this.$uvGetRect;
    },
    created() {
      this.$uv.getRect = this.$uvGetRect;
    },
    computed: {
      $uv() {
        var _a, _b;
        return {
          ...index,
          test,
          route,
          debounce,
          throttle,
          unit: (_b = (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config) == null ? void 0 : _b.unit
        };
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `uv-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uvGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = this.$uv.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uvOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    },
    // 兼容vue3
    unmounted() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  const props$6 = {
    props: {
      // 是否展示工具条
      show: {
        type: Boolean,
        default: true
      },
      // 是否显示下边框
      showBorder: {
        type: Boolean,
        default: false
      },
      // 取消按钮的文字
      cancelText: {
        type: String,
        default: "取消"
      },
      // 确认按钮的文字
      confirmText: {
        type: String,
        default: "确认"
      },
      // 取消按钮的颜色
      cancelColor: {
        type: String,
        default: "#909193"
      },
      // 确认按钮的颜色
      confirmColor: {
        type: String,
        default: "#3c9cff"
      },
      // 标题文字
      title: {
        type: String,
        default: ""
      },
      ...(_f = (_e = uni.$uv) == null ? void 0 : _e.props) == null ? void 0 : _f.toolbar
    }
  };
  const _sfc_main$u = {
    name: "uv-toolbar",
    emits: ["confirm", "cancel"],
    mixins: [mpMixin, mixin, props$6],
    methods: {
      // 点击取消按钮
      cancel() {
        this.$emit("cancel");
      },
      // 点击确定按钮
      confirm() {
        this.$emit("confirm");
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uv-toolbar", { "uv-border-bottom": _ctx.showBorder }]),
        onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => _ctx.noop && _ctx.noop(...args), ["stop", "prevent"]))
      },
      [
        vue.createElementVNode("view", {
          class: "uv-toolbar__cancel__wrapper",
          "hover-class": "uv-hover-class"
        }, [
          vue.createElementVNode(
            "text",
            {
              class: "uv-toolbar__wrapper__cancel",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.cancel && $options.cancel(...args)),
              style: vue.normalizeStyle({
                color: _ctx.cancelColor
              })
            },
            vue.toDisplayString(_ctx.cancelText),
            5
            /* TEXT, STYLE */
          )
        ]),
        _ctx.title ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: "uv-toolbar__title uv-line-1"
          },
          vue.toDisplayString(_ctx.title),
          1
          /* TEXT */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", {
          class: "uv-toolbar__confirm__wrapper",
          "hover-class": "uv-hover-class"
        }, [
          vue.createElementVNode(
            "text",
            {
              class: "uv-toolbar__wrapper__confirm",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
              style: vue.normalizeStyle({
                color: _ctx.confirmColor
              })
            },
            vue.toDisplayString(_ctx.confirmText),
            5
            /* TEXT, STYLE */
          )
        ])
      ],
      34
      /* CLASS, NEED_HYDRATION */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-298cf9e4"], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/uni_modules/uv-toolbar/components/uv-toolbar/uv-toolbar.vue"]]);
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
      if (i === 0)
        hex = rgbToHex(startColor);
      if (i === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  const props$5 = {
    props: {
      // 是否显示组件
      show: {
        type: Boolean,
        default: true
      },
      // 颜色
      color: {
        type: String,
        default: "#909193"
      },
      // 提示文字颜色
      textColor: {
        type: String,
        default: "#909193"
      },
      // 文字和图标是否垂直排列
      vertical: {
        type: Boolean,
        default: false
      },
      // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
      mode: {
        type: String,
        default: "spinner"
      },
      // 图标大小，单位默认px
      size: {
        type: [String, Number],
        default: 24
      },
      // 文字大小
      textSize: {
        type: [String, Number],
        default: 15
      },
      // 文字样式
      textStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      // 文字内容
      text: {
        type: [String, Number],
        default: ""
      },
      // 动画模式 https://www.runoob.com/cssref/css3-pr-animation-timing-function.html
      timingFunction: {
        type: String,
        default: "linear"
      },
      // 动画执行周期时间
      duration: {
        type: [String, Number],
        default: 1200
      },
      // mode=circle时的暗边颜色
      inactiveColor: {
        type: String,
        default: ""
      },
      ...(_h = (_g = uni.$uv) == null ? void 0 : _g.props) == null ? void 0 : _h.loadingIcon
    }
  };
  const _sfc_main$t = {
    name: "uv-loading-icon",
    mixins: [mpMixin, mixin, props$5],
    data() {
      return {
        // Array.form可以通过一个伪数组对象创建指定长度的数组
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        array12: Array.from({
          length: 12
        }),
        // 这里需要设置默认值为360，否则在安卓nvue上，会延迟一个duration周期后才执行
        // 在iOS nvue上，则会一开始默认执行两个周期的动画
        aniAngel: 360,
        // 动画旋转角度
        webviewHide: false,
        // 监听webview的状态，如果隐藏了页面，则停止动画，以免性能消耗
        loading: false
        // 是否运行中，针对nvue使用
      };
    },
    computed: {
      // 当为circle类型时，给其另外三边设置一个更轻一些的颜色
      // 之所以需要这么做的原因是，比如父组件传了color为红色，那么需要另外的三个边为浅红色
      // 而不能是固定的某一个其他颜色(因为这个固定的颜色可能浅蓝，导致效果没有那么细腻良好)
      otherBorderColor() {
        const lightColor = colorGradient(this.color, "#ffffff", 100)[80];
        if (this.mode === "circle") {
          return this.inactiveColor ? this.inactiveColor : lightColor;
        } else {
          return "transparent";
        }
      }
    },
    watch: {
      show(n) {
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        setTimeout(() => {
          this.show && this.addEventListenerToWebview();
        }, 20);
      },
      // 监听webview的显示与隐藏
      addEventListenerToWebview() {
        const pages2 = getCurrentPages();
        const page2 = pages2[pages2.length - 1];
        const currentWebview = page2.$getAppWebview();
        currentWebview.addEventListener("hide", () => {
          this.webviewHide = true;
        });
        currentWebview.addEventListener("show", () => {
          this.webviewHide = false;
        });
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uv-loading-icon", [_ctx.vertical && "uv-loading-icon--vertical"]]),
        style: vue.normalizeStyle([_ctx.$uv.addStyle(_ctx.customStyle)])
      },
      [
        !$data.webviewHide ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: vue.normalizeClass(["uv-loading-icon__spinner", [`uv-loading-icon__spinner--${_ctx.mode}`]]),
            ref: "ani",
            style: vue.normalizeStyle({
              color: _ctx.color,
              width: _ctx.$uv.addUnit(_ctx.size),
              height: _ctx.$uv.addUnit(_ctx.size),
              borderTopColor: _ctx.color,
              borderBottomColor: $options.otherBorderColor,
              borderLeftColor: $options.otherBorderColor,
              borderRightColor: $options.otherBorderColor,
              "animation-duration": `${_ctx.duration}ms`,
              "animation-timing-function": _ctx.mode === "semicircle" || _ctx.mode === "circle" ? _ctx.timingFunction : ""
            })
          },
          [
            _ctx.mode === "spinner" ? (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              vue.renderList($data.array12, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  key: index2,
                  class: "uv-loading-icon__dot"
                });
              }),
              128
              /* KEYED_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        _ctx.text ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 1,
            class: "uv-loading-icon__text",
            style: vue.normalizeStyle([{
              fontSize: _ctx.$uv.addUnit(_ctx.textSize),
              color: _ctx.textColor
            }, _ctx.$uv.addStyle(_ctx.textStyle)])
          },
          vue.toDisplayString(_ctx.text),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-29b619ea"], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/uni_modules/uv-loading-icon/components/uv-loading-icon/uv-loading-icon.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$s = {
    name: "uv-transition",
    mixins: [mpMixin, mixin],
    emits: ["click", "change"],
    props: {
      // 是否展示组件
      show: {
        type: Boolean,
        default: false
      },
      // 使用的动画模式
      mode: {
        type: [Array, String, null],
        default() {
          return "fade";
        }
      },
      // 动画的执行时间，单位ms
      duration: {
        type: [String, Number],
        default: 300
      },
      // 使用的动画过渡函数
      timingFunction: {
        type: String,
        default: "ease-out"
      },
      customClass: {
        type: String,
        default: ""
      },
      // nvue模式下 是否直接显示，在uv-list等cell下面使用就需要设置
      cellChild: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 初始化动画条件
      transformStyles() {
        const style = {
          transform: this.transform,
          opacity: this.opacity,
          ...this.$uv.addStyle(this.customStyle),
          "transition-duration": `${this.duration / 1e3}s`
        };
        return this.$uv.addStyle(style, "string");
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: this.timingFunction,
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uv-transition/components/uv-transition/uv-transition.vue:166", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过渡动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.mode === "string") {
          buildStyle(type, this.mode);
        } else {
          this.mode.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.mode === "string") {
          buildTranfrom(type, this.mode);
        } else {
          this.mode.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/uni_modules/uv-transition/components/uv-transition/uv-transition.vue"]]);
  const props$4 = {
    props: {
      // 是否显示遮罩
      show: {
        type: Boolean,
        default: false
      },
      // 层级z-index
      zIndex: {
        type: [String, Number],
        default: 10070
      },
      // 遮罩的过渡时间，单位为ms
      duration: {
        type: [String, Number],
        default: 300
      },
      // 不透明度值，当做rgba的第四个参数
      opacity: {
        type: [String, Number],
        default: 0.5
      },
      ...(_j = (_i = uni.$uv) == null ? void 0 : _i.props) == null ? void 0 : _j.overlay
    }
  };
  const _sfc_main$r = {
    name: "uv-overlay",
    emits: ["click"],
    mixins: [mpMixin, mixin, props$4],
    watch: {
      show(newVal) {
      }
    },
    computed: {
      overlayStyle() {
        const style = {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: this.zIndex,
          bottom: 0,
          "background-color": `rgba(0, 0, 0, ${this.opacity})`
        };
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      }
    },
    methods: {
      clickHandler() {
        this.$emit("click");
      },
      clear() {
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_transition = resolveEasycom(vue.resolveDynamicComponent("uv-transition"), __easycom_4);
    return vue.openBlock(), vue.createBlock(_component_uv_transition, {
      show: _ctx.show,
      mode: "fade",
      "custom-class": "uv-overlay",
      duration: _ctx.duration,
      "custom-style": $options.overlayStyle,
      onClick: $options.clickHandler,
      onTouchmove: vue.withModifiers($options.clear, ["stop", "prevent"])
    }, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "duration", "custom-style", "onClick", "onTouchmove"]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__scopeId", "data-v-7303e1aa"], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/uni_modules/uv-overlay/components/uv-overlay/uv-overlay.vue"]]);
  const props$3 = {
    props: {
      bgColor: {
        type: String,
        default: "transparent"
      }
    }
  };
  const _sfc_main$q = {
    name: "uv-status-bar",
    mixins: [mpMixin, mixin, props$3],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = this.$uv.addUnit(this.$uv.sys().statusBarHeight, "px");
        if (this.bgColor) {
          if (this.bgColor.indexOf("gradient") > -1) {
            style.backgroundImage = this.bgColor;
          } else {
            style.background = this.bgColor;
          }
        }
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle([$options.style]),
        class: "uv-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-f5bd6f5a"], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/uni_modules/uv-status-bar/components/uv-status-bar/uv-status-bar.vue"]]);
  const _sfc_main$p = {
    name: "uv-safe-bottom",
    mixins: [mpMixin, mixin],
    data() {
      return {
        safeAreaBottomHeight: 0,
        isNvue: false
      };
    },
    computed: {
      style() {
        const style = {};
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      }
    },
    mounted() {
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uv-safe-bottom", [!$data.isNvue && "uv-safe-area-inset-bottom"]]),
        style: vue.normalizeStyle([$options.style])
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-560f16b2"], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/uni_modules/uv-safe-bottom/components/uv-safe-bottom/uv-safe-bottom.vue"]]);
  const icons = {
    "uvicon-level": "e68f",
    "uvicon-checkbox-mark": "e659",
    "uvicon-folder": "e694",
    "uvicon-movie": "e67c",
    "uvicon-star-fill": "e61e",
    "uvicon-star": "e618",
    "uvicon-phone-fill": "e6ac",
    "uvicon-phone": "e6ba",
    "uvicon-apple-fill": "e635",
    "uvicon-backspace": "e64d",
    "uvicon-attach": "e640",
    "uvicon-empty-data": "e671",
    "uvicon-empty-address": "e68a",
    "uvicon-empty-favor": "e662",
    "uvicon-empty-car": "e657",
    "uvicon-empty-order": "e66b",
    "uvicon-empty-list": "e672",
    "uvicon-empty-search": "e677",
    "uvicon-empty-permission": "e67d",
    "uvicon-empty-news": "e67e",
    "uvicon-empty-history": "e685",
    "uvicon-empty-coupon": "e69b",
    "uvicon-empty-page": "e60e",
    "uvicon-empty-wifi-off": "e6cc",
    "uvicon-reload": "e627",
    "uvicon-order": "e695",
    "uvicon-server-man": "e601",
    "uvicon-search": "e632",
    "uvicon-more-dot-fill": "e66f",
    "uvicon-scan": "e631",
    "uvicon-map": "e665",
    "uvicon-map-fill": "e6a8",
    "uvicon-tags": "e621",
    "uvicon-tags-fill": "e613",
    "uvicon-eye": "e664",
    "uvicon-eye-fill": "e697",
    "uvicon-eye-off": "e69c",
    "uvicon-eye-off-outline": "e688",
    "uvicon-mic": "e66d",
    "uvicon-mic-off": "e691",
    "uvicon-calendar": "e65c",
    "uvicon-trash": "e623",
    "uvicon-trash-fill": "e6ce",
    "uvicon-play-left": "e6bf",
    "uvicon-play-right": "e6b3",
    "uvicon-minus": "e614",
    "uvicon-plus": "e625",
    "uvicon-info-circle": "e69f",
    "uvicon-info-circle-fill": "e6a7",
    "uvicon-question-circle": "e622",
    "uvicon-question-circle-fill": "e6bc",
    "uvicon-close": "e65a",
    "uvicon-checkmark": "e64a",
    "uvicon-checkmark-circle": "e643",
    "uvicon-checkmark-circle-fill": "e668",
    "uvicon-setting": "e602",
    "uvicon-setting-fill": "e6d0",
    "uvicon-heart": "e6a2",
    "uvicon-heart-fill": "e68b",
    "uvicon-camera": "e642",
    "uvicon-camera-fill": "e650",
    "uvicon-more-circle": "e69e",
    "uvicon-more-circle-fill": "e684",
    "uvicon-chat": "e656",
    "uvicon-chat-fill": "e63f",
    "uvicon-bag": "e647",
    "uvicon-error-circle": "e66e",
    "uvicon-error-circle-fill": "e655",
    "uvicon-close-circle": "e64e",
    "uvicon-close-circle-fill": "e666",
    "uvicon-share": "e629",
    "uvicon-share-fill": "e6bb",
    "uvicon-share-square": "e6c4",
    "uvicon-shopping-cart": "e6cb",
    "uvicon-shopping-cart-fill": "e630",
    "uvicon-bell": "e651",
    "uvicon-bell-fill": "e604",
    "uvicon-list": "e690",
    "uvicon-list-dot": "e6a9",
    "uvicon-zhifubao-circle-fill": "e617",
    "uvicon-weixin-circle-fill": "e6cd",
    "uvicon-weixin-fill": "e620",
    "uvicon-qq-fill": "e608",
    "uvicon-qq-circle-fill": "e6b9",
    "uvicon-moments-circel-fill": "e6c2",
    "uvicon-moments": "e6a0",
    "uvicon-car": "e64f",
    "uvicon-car-fill": "e648",
    "uvicon-warning-fill": "e6c7",
    "uvicon-warning": "e6c1",
    "uvicon-clock-fill": "e64b",
    "uvicon-clock": "e66c",
    "uvicon-edit-pen": "e65d",
    "uvicon-edit-pen-fill": "e679",
    "uvicon-email": "e673",
    "uvicon-email-fill": "e683",
    "uvicon-minus-circle": "e6a5",
    "uvicon-plus-circle": "e603",
    "uvicon-plus-circle-fill": "e611",
    "uvicon-file-text": "e687",
    "uvicon-file-text-fill": "e67f",
    "uvicon-pushpin": "e6d1",
    "uvicon-pushpin-fill": "e6b6",
    "uvicon-grid": "e68c",
    "uvicon-grid-fill": "e698",
    "uvicon-play-circle": "e6af",
    "uvicon-play-circle-fill": "e62a",
    "uvicon-pause-circle-fill": "e60c",
    "uvicon-pause": "e61c",
    "uvicon-pause-circle": "e696",
    "uvicon-gift-fill": "e6b0",
    "uvicon-gift": "e680",
    "uvicon-kefu-ermai": "e660",
    "uvicon-server-fill": "e610",
    "uvicon-coupon-fill": "e64c",
    "uvicon-coupon": "e65f",
    "uvicon-integral": "e693",
    "uvicon-integral-fill": "e6b1",
    "uvicon-home-fill": "e68e",
    "uvicon-home": "e67b",
    "uvicon-account": "e63a",
    "uvicon-account-fill": "e653",
    "uvicon-thumb-down-fill": "e628",
    "uvicon-thumb-down": "e60a",
    "uvicon-thumb-up": "e612",
    "uvicon-thumb-up-fill": "e62c",
    "uvicon-lock-fill": "e6a6",
    "uvicon-lock-open": "e68d",
    "uvicon-lock-opened-fill": "e6a1",
    "uvicon-lock": "e69d",
    "uvicon-red-packet": "e6c3",
    "uvicon-photo-fill": "e6b4",
    "uvicon-photo": "e60d",
    "uvicon-volume-off-fill": "e6c8",
    "uvicon-volume-off": "e6bd",
    "uvicon-volume-fill": "e624",
    "uvicon-volume": "e605",
    "uvicon-download": "e670",
    "uvicon-arrow-up-fill": "e636",
    "uvicon-arrow-down-fill": "e638",
    "uvicon-play-left-fill": "e6ae",
    "uvicon-play-right-fill": "e6ad",
    "uvicon-arrow-downward": "e634",
    "uvicon-arrow-leftward": "e63b",
    "uvicon-arrow-rightward": "e644",
    "uvicon-arrow-upward": "e641",
    "uvicon-arrow-down": "e63e",
    "uvicon-arrow-right": "e63c",
    "uvicon-arrow-left": "e646",
    "uvicon-arrow-up": "e633",
    "uvicon-skip-back-left": "e6c5",
    "uvicon-skip-forward-right": "e61f",
    "uvicon-arrow-left-double": "e637",
    "uvicon-man": "e675",
    "uvicon-woman": "e626",
    "uvicon-en": "e6b8",
    "uvicon-twitte": "e607",
    "uvicon-twitter-circle-fill": "e6cf"
  };
  const props$2 = {
    props: {
      // 图标类名
      name: {
        type: String,
        default: ""
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: "#606266"
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: "16px"
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: false
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: null
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: ""
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: "uvicon"
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: ""
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: "right"
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: "15px"
      },
      // label的颜色
      labelColor: {
        type: String,
        default: "#606266"
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: "3px"
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: "aspectFit"
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: ""
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: ""
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: 0
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: false
      },
      ...(_l = (_k = uni.$uv) == null ? void 0 : _k.props) == null ? void 0 : _l.icon
    }
  };
  const _sfc_main$o = {
    name: "uv-icon",
    emits: ["click"],
    mixins: [mpMixin, mixin, props$2],
    data() {
      return {
        colorType: [
          "primary",
          "success",
          "info",
          "error",
          "warning"
        ]
      };
    },
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix);
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && this.colorType.includes(this.color))
          classes.push("uv-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: this.$uv.addUnit(this.size),
          lineHeight: this.$uv.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: this.$uv.addUnit(this.top)
        };
        if (this.color && !this.colorType.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        const isBase64 = this.name.indexOf("data:") > -1 && this.name.indexOf("base64") > -1;
        return this.name.indexOf("/") !== -1 || isBase64;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? this.$uv.addUnit(this.width) : this.$uv.addUnit(this.size);
        style.height = this.height ? this.$uv.addUnit(this.height) : this.$uv.addUnit(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        const code2 = icons["uvicon-" + this.name];
        return code2 ? unescape(`%u${code2}`) : ["uvicon"].indexOf(this.customPrefix) > -1 ? this.name : "";
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uv-icon", ["uv-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "uv-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: vue.normalizeStyle([$options.imgStyle, _ctx.$uv.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: vue.normalizeClass(["uv-icon__icon", $options.uClasses]),
          style: vue.normalizeStyle([$options.iconStyle, _ctx.$uv.addStyle(_ctx.customStyle)]),
          "hover-class": _ctx.hoverClass
        }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
        _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 2,
            class: "uv-icon__label",
            style: vue.normalizeStyle({
              color: _ctx.labelColor,
              fontSize: _ctx.$uv.addUnit(_ctx.labelSize),
              marginLeft: _ctx.labelPos == "right" ? _ctx.$uv.addUnit(_ctx.space) : 0,
              marginTop: _ctx.labelPos == "bottom" ? _ctx.$uv.addUnit(_ctx.space) : 0,
              marginRight: _ctx.labelPos == "left" ? _ctx.$uv.addUnit(_ctx.space) : 0,
              marginBottom: _ctx.labelPos == "top" ? _ctx.$uv.addUnit(_ctx.space) : 0
            })
          },
          vue.toDisplayString(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-b7a6dd5d"], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/uni_modules/uv-icon/components/uv-icon/uv-icon.vue"]]);
  const _sfc_main$n = {
    name: "uv-popup",
    components: {},
    mixins: [mpMixin, mixin],
    emits: ["change", "maskClick"],
    props: {
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      mode: {
        type: String,
        default: "center"
      },
      // 动画时长，单位ms
      duration: {
        type: [String, Number],
        default: 300
      },
      // 层级
      zIndex: {
        type: [String, Number],
        default: 10075
      },
      bgColor: {
        type: String,
        default: "#ffffff"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      // 是否显示遮罩
      overlay: {
        type: Boolean,
        default: true
      },
      // 点击遮罩是否关闭弹窗
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      // 遮罩的透明度，0-1之间
      overlayOpacity: {
        type: [Number, String],
        default: 0.4
      },
      // 自定义遮罩的样式
      overlayStyle: {
        type: [Object, String],
        default: ""
      },
      // 是否为iPhoneX留出底部安全距离
      safeAreaInsetBottom: {
        type: Boolean,
        default: true
      },
      // 是否留出顶部安全距离（状态栏高度）
      safeAreaInsetTop: {
        type: Boolean,
        default: false
      },
      // 是否显示关闭图标
      closeable: {
        type: Boolean,
        default: false
      },
      // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
      closeIconPos: {
        type: String,
        default: "top-right"
      },
      // mode=center，也即中部弹出时，是否使用缩放模式
      zoom: {
        type: Boolean,
        default: true
      },
      round: {
        type: [Number, String],
        default: 0
      },
      ...(_n = (_m = uni.$uv) == null ? void 0 : _m.props) == null ? void 0 : _n.popup
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.mode]](true);
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        transitionStyle: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupClass: this.isDesktop ? "fixforpc-top" : "top",
        direction: ""
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.bgColor === "" || this.bgColor === "none" || this.$uv.getPx(this.round) > 0) {
          return "transparent";
        }
        return this.bgColor;
      },
      contentStyle() {
        const style = {};
        if (this.bgColor) {
          style.backgroundColor = this.bg;
        }
        if (this.round) {
          const value = this.$uv.addUnit(this.round);
          const mode = this.direction ? this.direction : this.mode;
          style.backgroundColor = this.bgColor;
          if (mode === "top") {
            style.borderBottomLeftRadius = value;
            style.borderBottomRightRadius = value;
          } else if (mode === "bottom") {
            style.borderTopLeftRadius = value;
            style.borderTopRightRadius = value;
          } else if (mode === "center") {
            style.borderRadius = value;
          }
        }
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      }
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      this.messageChild = null;
      this.clearPropagation = false;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.mode;
        } else {
          this.direction = direction;
        }
        if (!this.config[direction]) {
          return this.$uv.error(`缺少类型：${direction}`);
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.mode
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.closeOnClickOverlay)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupClass = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transitionStyle = {
          position: "fixed",
          zIndex: this.zIndex,
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.mode === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupClass = "bottom";
        this.ani = ["slide-bottom"];
        this.transitionStyle = {
          position: "fixed",
          zIndex: this.zIndex,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupClass = "center";
        this.ani = this.zoom ? ["zoom-in", "fade"] : ["fade"];
        this.transitionStyle = {
          position: "fixed",
          zIndex: this.zIndex,
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupClass = "left";
        this.ani = ["slide-left"];
        this.transitionStyle = {
          position: "fixed",
          zIndex: this.zIndex,
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupClass = "right";
        this.ani = ["slide-right"];
        this.transitionStyle = {
          position: "fixed",
          zIndex: this.zIndex,
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_overlay = resolveEasycom(vue.resolveDynamicComponent("uv-overlay"), __easycom_0$2);
    const _component_uv_status_bar = resolveEasycom(vue.resolveDynamicComponent("uv-status-bar"), __easycom_1);
    const _component_uv_safe_bottom = resolveEasycom(vue.resolveDynamicComponent("uv-safe-bottom"), __easycom_2$1);
    const _component_uv_icon = resolveEasycom(vue.resolveDynamicComponent("uv-icon"), __easycom_3);
    const _component_uv_transition = resolveEasycom(vue.resolveDynamicComponent("uv-transition"), __easycom_4);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uv-popup", [$data.popupClass, $options.isDesktop ? "fixforpc-z-index" : ""]]),
        style: vue.normalizeStyle([{ zIndex: $props.zIndex }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[2] || (_cache[2] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            vue.createCommentVNode(" 遮罩层 "),
            $data.maskShow && $props.overlay ? (vue.openBlock(), vue.createBlock(_component_uv_overlay, {
              key: "1",
              show: $data.showTrans,
              duration: $props.duration,
              "custom-style": $props.overlayStyle,
              opacity: $props.overlayOpacity,
              zIndex: $props.zIndex,
              onClick: $options.onTap
            }, null, 8, ["show", "duration", "custom-style", "opacity", "zIndex", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uv_transition, {
              key: "2",
              mode: $data.ani,
              name: "content",
              "custom-style": $data.transitionStyle,
              duration: $props.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uv-popup__content", [$data.popupClass]]),
                    style: vue.normalizeStyle([$options.contentStyle]),
                    onClick: _cache[1] || (_cache[1] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    $props.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_uv_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
                    $props.safeAreaInsetBottom ? (vue.openBlock(), vue.createBlock(_component_uv_safe_bottom, { key: 1 })) : vue.createCommentVNode("v-if", true),
                    $props.closeable ? (vue.openBlock(), vue.createElementBlock(
                      "view",
                      {
                        key: 2,
                        onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.close && $options.close(...args), ["stop"])),
                        class: vue.normalizeClass(["uv-popup__content__close", ["uv-popup__content__close--" + $props.closeIconPos]]),
                        "hover-class": "uv-popup__content__close--hover",
                        "hover-stay-time": "150"
                      },
                      [
                        vue.createVNode(_component_uv_icon, {
                          name: "close",
                          color: "#909399",
                          size: "18",
                          bold: ""
                        })
                      ],
                      2
                      /* CLASS */
                    )) : vue.createCommentVNode("v-if", true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode", "custom-style", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      6
      /* CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-01a3ad6e"], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/uni_modules/uv-popup/components/uv-popup/uv-popup.vue"]]);
  const props$1 = {
    props: {
      // 是否展示顶部的操作栏
      showToolbar: {
        type: Boolean,
        default: true
      },
      // 顶部标题
      title: {
        type: String,
        default: ""
      },
      // 弹窗圆角
      round: {
        type: [String, Number],
        default: 0
      },
      // 对象数组，设置每一列的数据
      columns: {
        type: Array,
        default: () => []
      },
      // 是否显示加载中状态
      loading: {
        type: Boolean,
        default: false
      },
      // 各列中，单个选项的高度
      itemHeight: {
        type: [String, Number],
        default: 44
      },
      // 取消按钮的文字
      cancelText: {
        type: String,
        default: "取消"
      },
      // 确认按钮的文字
      confirmText: {
        type: String,
        default: "确定"
      },
      // 取消按钮的颜色
      cancelColor: {
        type: String,
        default: "#909193"
      },
      // 确认按钮的颜色
      confirmColor: {
        type: String,
        default: "#3c9cff"
      },
      // 文字颜色
      color: {
        type: String,
        default: ""
      },
      // 选中文字的颜色
      activeColor: {
        type: String,
        default: ""
      },
      // 每列中可见选项的数量
      visibleItemCount: {
        type: [String, Number],
        default: 5
      },
      // 选项对象中，需要展示的属性键名
      keyName: {
        type: String,
        default: "text"
      },
      // 是否允许点击遮罩关闭选择器
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      // 是否允许点击确认关闭选择器
      closeOnClickConfirm: {
        type: Boolean,
        default: true
      },
      // 各列的默认索引
      defaultIndex: {
        type: Array,
        default: () => []
      },
      // 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
      immediateChange: {
        type: Boolean,
        default: true
      },
      ...(_p = (_o = uni.$uv) == null ? void 0 : _o.props) == null ? void 0 : _p.picker
    }
  };
  const _sfc_main$m = {
    name: "uv-picker",
    emits: ["confirm", "cancel", "close", "change"],
    mixins: [mpMixin, mixin, props$1],
    computed: {
      // 为了解决支付宝不生效
      textStyle() {
        return (index2, index1) => {
          const style = {};
          style.display = "block";
          if (this.color) {
            style.color = this.color;
          }
          if (this.activeColor && index1 === this.innerIndex[index2]) {
            style.color = this.activeColor;
          }
          return style;
        };
      }
    },
    data() {
      return {
        // 上一次选择的列索引
        lastIndex: [],
        // 索引值 ，对应picker-view的value
        innerIndex: [],
        // 各列的值
        innerColumns: [],
        // 上一次的变化列索引
        columnIndex: 0
      };
    },
    watch: {
      // 监听默认索引的变化，重新设置对应的值
      defaultIndex: {
        immediate: true,
        handler(n) {
          this.setIndexs(n, true);
        }
      },
      // 监听columns参数的变化
      columns: {
        deep: true,
        immediate: true,
        handler(n) {
          this.setColumns(n);
        }
      }
    },
    methods: {
      open() {
        this.$refs.pickerPopup.open();
      },
      close() {
        this.$refs.pickerPopup.close();
      },
      popupChange(e) {
        if (!e.show)
          this.$emit("close");
      },
      // 获取item需要显示的文字，判别为对象还是文本
      getItemText(item) {
        if (this.$uv.test.object(item)) {
          return item[this.keyName];
        } else {
          return item;
        }
      },
      // 点击工具栏的取消按钮
      cancel() {
        this.$emit("cancel");
        this.close();
      },
      // 点击工具栏的确定按钮
      confirm() {
        this.$emit("confirm", this.$uv.deepClone({
          indexs: this.innerIndex,
          value: this.innerColumns.map((item, index2) => item[this.innerIndex[index2]]),
          values: this.innerColumns
        }));
        if (this.closeOnClickConfirm) {
          this.close();
        }
      },
      // 选择器某一列的数据发生变化时触发
      changeHandler(e) {
        const {
          value
        } = e.detail;
        let index2 = 0, columnIndex = 0;
        for (let i = 0; i < value.length; i++) {
          let item = value[i];
          if (item !== (this.lastIndex[i] || 0)) {
            columnIndex = i;
            index2 = item;
            break;
          }
        }
        this.columnIndex = columnIndex;
        const values = this.innerColumns;
        this.setLastIndex(value);
        this.setIndexs(value);
        this.$emit("change", {
          value: this.innerColumns.map((item, index3) => item[value[index3]]),
          index: index2,
          indexs: value,
          // values为当前变化列的数组内容
          values,
          columnIndex
        });
      },
      // 设置index索引，此方法可被外部调用设置
      setIndexs(index2, setLastIndex) {
        this.innerIndex = this.$uv.deepClone(index2);
        if (setLastIndex) {
          this.setLastIndex(index2);
        }
      },
      // 记录上一次的各列索引位置
      setLastIndex(index2) {
        this.lastIndex = this.$uv.deepClone(index2);
      },
      // 设置对应列选项的所有值
      setColumnValues(columnIndex, values) {
        this.innerColumns.splice(columnIndex, 1, values);
        let tmpIndex = this.$uv.deepClone(this.innerIndex);
        for (let i = 0; i < this.innerColumns.length; i++) {
          if (i > this.columnIndex) {
            tmpIndex[i] = 0;
          }
        }
        this.setIndexs(tmpIndex);
      },
      // 获取对应列的所有选项
      getColumnValues(columnIndex) {
        (async () => {
          await this.$uv.sleep();
        })();
        return this.innerColumns[columnIndex];
      },
      // 设置整体各列的columns的值
      setColumns(columns) {
        this.innerColumns = this.$uv.deepClone(columns);
        if (this.innerIndex.length === 0) {
          this.innerIndex = new Array(columns.length).fill(0);
        }
      },
      // 获取各列选中值对应的索引
      getIndexs() {
        return this.innerIndex;
      },
      // 获取各列选中的值
      getValues() {
        (async () => {
          await this.$uv.sleep();
        })();
        return this.innerColumns.map((item, index2) => item[this.innerIndex[index2]]);
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_toolbar = resolveEasycom(vue.resolveDynamicComponent("uv-toolbar"), __easycom_0$3);
    const _component_uv_loading_icon = resolveEasycom(vue.resolveDynamicComponent("uv-loading-icon"), __easycom_1$1);
    const _component_uv_popup = resolveEasycom(vue.resolveDynamicComponent("uv-popup"), __easycom_2);
    return vue.openBlock(), vue.createBlock(_component_uv_popup, {
      ref: "pickerPopup",
      mode: "bottom",
      round: _ctx.round,
      "close-on-click-overlay": _ctx.closeOnClickOverlay,
      onChange: $options.popupChange
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "uv-picker" }, [
          _ctx.showToolbar ? (vue.openBlock(), vue.createBlock(_component_uv_toolbar, {
            key: 0,
            cancelColor: _ctx.cancelColor,
            confirmColor: _ctx.confirmColor,
            cancelText: _ctx.cancelText,
            confirmText: _ctx.confirmText,
            title: _ctx.title,
            onCancel: $options.cancel,
            onConfirm: $options.confirm
          }, null, 8, ["cancelColor", "confirmColor", "cancelText", "confirmText", "title", "onCancel", "onConfirm"])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("picker-view", {
            class: "uv-picker__view",
            indicatorStyle: `height: ${_ctx.$uv.addUnit(_ctx.itemHeight)}`,
            value: $data.innerIndex,
            immediateChange: _ctx.immediateChange,
            style: vue.normalizeStyle({
              height: `${_ctx.$uv.addUnit(_ctx.visibleItemCount * _ctx.itemHeight)}`
            }),
            onChange: _cache[0] || (_cache[0] = (...args) => $options.changeHandler && $options.changeHandler(...args))
          }, [
            vue.createCommentVNode(" @pickend在这里为了解决抖音等滚到底不触发change兼容性问题 "),
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.innerColumns, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("picker-view-column", {
                  key: index2,
                  class: "uv-picker__view__column"
                }, [
                  _ctx.$uv.test.array(item) ? (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    { key: 0 },
                    vue.renderList(item, (item1, index1) => {
                      return vue.openBlock(), vue.createElementBlock(
                        "text",
                        {
                          class: "uv-picker__view__column__item uv-line-1",
                          key: index1,
                          style: vue.normalizeStyle([{
                            height: _ctx.$uv.addUnit(_ctx.itemHeight),
                            lineHeight: _ctx.$uv.addUnit(_ctx.itemHeight),
                            fontWeight: index1 === $data.innerIndex[index2] ? "bold" : "normal"
                          }, $options.textStyle(index2, index1)])
                        },
                        vue.toDisplayString($options.getItemText(item1)),
                        5
                        /* TEXT, STYLE */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )) : vue.createCommentVNode("v-if", true)
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ], 44, ["indicatorStyle", "value", "immediateChange"]),
          _ctx.loading ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "uv-picker--loading"
          }, [
            vue.createVNode(_component_uv_loading_icon, { mode: "circle" })
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["round", "close-on-click-overlay", "onChange"]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-f74a1703"], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/uni_modules/uv-picker/components/uv-picker/uv-picker.vue"]]);
  const props = {
    props: {
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      // 是否打开组件
      show: {
        type: Boolean,
        default: false
      },
      // 是否展示顶部的操作栏
      showToolbar: {
        type: Boolean,
        default: true
      },
      // 顶部标题
      title: {
        type: String,
        default: ""
      },
      // 展示格式，mode=date为日期选择，mode=time为时间选择，mode=year-month为年月选择，mode=datetime为日期时间选择
      mode: {
        type: String,
        default: "datetime"
      },
      // 可选的最大时间
      maxDate: {
        type: Number,
        // 最大默认值为后10年
        default: new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1).getTime()
      },
      // 可选的最小时间
      minDate: {
        type: Number,
        // 最小默认值为前10年
        default: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime()
      },
      // 可选的最小小时，仅mode=time有效
      minHour: {
        type: Number,
        default: 0
      },
      // 可选的最大小时，仅mode=time有效
      maxHour: {
        type: Number,
        default: 23
      },
      // 可选的最小分钟，仅mode=time有效
      minMinute: {
        type: Number,
        default: 0
      },
      // 可选的最大分钟，仅mode=time有效
      maxMinute: {
        type: Number,
        default: 59
      },
      // 选项过滤函数
      filter: {
        type: [Function, null],
        default: null
      },
      // 选项格式化函数
      formatter: {
        type: [Function, null],
        default: null
      },
      // 是否显示加载中状态
      loading: {
        type: Boolean,
        default: false
      },
      // 各列中，单个选项的高度
      itemHeight: {
        type: [String, Number],
        default: 44
      },
      // 取消按钮的文字
      cancelText: {
        type: String,
        default: "取消"
      },
      // 确认按钮的文字
      confirmText: {
        type: String,
        default: "确认"
      },
      // 取消按钮的颜色
      cancelColor: {
        type: String,
        default: "#909193"
      },
      // 确认按钮的颜色
      confirmColor: {
        type: String,
        default: "#3c9cff"
      },
      // 每列中可见选项的数量
      visibleItemCount: {
        type: [String, Number],
        default: 5
      },
      // 是否允许点击遮罩关闭选择器
      closeOnClickOverlay: {
        type: Boolean,
        default: true
      },
      // 是否允许点击确认关闭选择器
      closeOnClickConfirm: {
        type: Boolean,
        default: true
      },
      // 是否清空上次选择内容
      clearDate: {
        type: Boolean,
        default: false
      },
      // 圆角
      round: {
        type: [String, Number],
        default: 0
      },
      ...(_r = (_q = uni.$uv) == null ? void 0 : _q.props) == null ? void 0 : _r.datetimePicker
    }
  };
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var require_dayjs_min = __commonJS({
    "uvuidayjs"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
      }(exports, function() {
        var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
          var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
          return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
        } }, m = function(t2, e2, n2) {
          var r2 = String(t2);
          return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
        }, v = { s: m, z: function(t2) {
          var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
          return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
        }, m: function t2(e2, n2) {
          if (e2.date() < n2.date())
            return -t2(n2, e2);
          var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
          return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
        }, a: function(t2) {
          return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
        }, p: function(t2) {
          return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t2) {
          return void 0 === t2;
        } }, g = "en", D = {};
        D[g] = M;
        var p = function(t2) {
          return t2 instanceof _;
        }, S = function t2(e2, n2, r2) {
          var i2;
          if (!e2)
            return g;
          if ("string" == typeof e2) {
            var s2 = e2.toLowerCase();
            D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
            var u2 = e2.split("-");
            if (!i2 && u2.length > 1)
              return t2(u2[0]);
          } else {
            var a2 = e2.name;
            D[a2] = e2, i2 = a2;
          }
          return !r2 && i2 && (g = i2), i2 || !r2 && g;
        }, w = function(t2, e2) {
          if (p(t2))
            return t2.clone();
          var n2 = "object" == typeof e2 ? e2 : {};
          return n2.date = t2, n2.args = arguments, new _(n2);
        }, O = v;
        O.l = S, O.i = p, O.w = function(t2, e2) {
          return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
        };
        var _ = function() {
          function M2(t2) {
            this.$L = S(t2.locale, null, true), this.parse(t2);
          }
          var m2 = M2.prototype;
          return m2.parse = function(t2) {
            this.$d = function(t3) {
              var e2 = t3.date, n2 = t3.utc;
              if (null === e2)
                return /* @__PURE__ */ new Date(NaN);
              if (O.u(e2))
                return /* @__PURE__ */ new Date();
              if (e2 instanceof Date)
                return new Date(e2);
              if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                var r2 = e2.match($);
                if (r2) {
                  var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                }
              }
              return new Date(e2);
            }(t2), this.$x = t2.x || {}, this.init();
          }, m2.init = function() {
            var t2 = this.$d;
            this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
          }, m2.$utils = function() {
            return O;
          }, m2.isValid = function() {
            return !(this.$d.toString() === l);
          }, m2.isSame = function(t2, e2) {
            var n2 = w(t2);
            return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
          }, m2.isAfter = function(t2, e2) {
            return w(t2) < this.startOf(e2);
          }, m2.isBefore = function(t2, e2) {
            return this.endOf(e2) < w(t2);
          }, m2.$g = function(t2, e2, n2) {
            return O.u(t2) ? this[e2] : this.set(n2, t2);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t2, e2) {
            var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), l2 = function(t3, e3) {
              var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
              return r2 ? i2 : i2.endOf(a);
            }, $2 = function(t3, e3) {
              return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
            }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
            switch (h2) {
              case c:
                return r2 ? l2(1, 0) : l2(31, 11);
              case f:
                return r2 ? l2(1, M3) : l2(0, M3 + 1);
              case o:
                var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return $2(v2 + "Hours", 0);
              case u:
                return $2(v2 + "Minutes", 1);
              case s:
                return $2(v2 + "Seconds", 2);
              case i:
                return $2(v2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t2) {
            return this.startOf(t2, false);
          }, m2.$set = function(t2, e2) {
            var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
            if (o2 === f || o2 === c) {
              var y2 = this.clone().set(d, 1);
              y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
            } else
              l2 && this.$d[l2]($2);
            return this.init(), this;
          }, m2.set = function(t2, e2) {
            return this.clone().$set(t2, e2);
          }, m2.get = function(t2) {
            return this[O.p(t2)]();
          }, m2.add = function(r2, h2) {
            var d2, l2 = this;
            r2 = Number(r2);
            var $2 = O.p(h2), y2 = function(t2) {
              var e2 = w(l2);
              return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
            };
            if ($2 === f)
              return this.set(f, this.$M + r2);
            if ($2 === c)
              return this.set(c, this.$y + r2);
            if ($2 === a)
              return y2(1);
            if ($2 === o)
              return y2(7);
            var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
            return O.w(m3, this);
          }, m2.subtract = function(t2, e2) {
            return this.add(-1 * t2, e2);
          }, m2.format = function(t2) {
            var e2 = this, n2 = this.$locale();
            if (!this.isValid())
              return n2.invalidDate || l;
            var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
              return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
            }, c2 = function(t3) {
              return O.s(s2 % 12 || 12, t3, "0");
            }, d2 = n2.meridiem || function(t3, e3, n3) {
              var r3 = t3 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
            return r2.replace(y, function(t3, e3) {
              return e3 || $2[t3] || i2.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, l2) {
            var $2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, v2 = this - M3, g2 = O.m(this, M3);
            return g2 = ($2 = {}, $2[c] = g2 / 12, $2[f] = g2, $2[h] = g2 / 3, $2[o] = (v2 - m3) / 6048e5, $2[a] = (v2 - m3) / 864e5, $2[u] = v2 / n, $2[s] = v2 / e, $2[i] = v2 / t, $2)[y2] || v2, l2 ? g2 : O.a(g2);
          }, m2.daysInMonth = function() {
            return this.endOf(f).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t2, e2) {
            if (!t2)
              return this.$L;
            var n2 = this.clone(), r2 = S(t2, e2, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return O.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        }(), T = _.prototype;
        return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
          T[t2[1]] = function(e2) {
            return this.$g(e2, t2[0], t2[1]);
          };
        }), w.extend = function(t2, e2) {
          return t2.$i || (t2(e2, _, w), t2.$i = true), w;
        }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
          return w(1e3 * t2);
        }, w.en = D[g], w.Ls = D, w.p = {}, w;
      });
    }
  });
  const dayjs = require_dayjs_min();
  function times(n, iteratee) {
    let index2 = -1;
    const result = Array(n < 0 ? 0 : n);
    while (++index2 < n) {
      result[index2] = iteratee(index2);
    }
    return result;
  }
  const _sfc_main$l = {
    name: "uv-datetime-picker",
    emits: ["close", "cancel", "confirm", "input", "change", "update:modelValue"],
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        columns: [],
        innerDefaultIndex: [],
        innerFormatter: (type, value) => value
      };
    },
    watch: {
      propsChange() {
        this.$uv.sleep(100).then((res) => {
          this.init();
        });
      }
    },
    computed: {
      // 如果以下这些变量发生了变化，意味着需要重新初始化各列的值
      propsChange() {
        const propsValue = this.value || this.modelValue;
        return [this.mode, this.maxDate, this.minDate, this.minHour, this.maxHour, this.minMinute, this.maxMinute, this.filter, propsValue];
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getValue();
        this.updateColumnValue(this.innerValue);
      },
      getValue() {
        const propsValue = this.value || this.modelValue;
        this.innerValue = this.correctValue(propsValue);
      },
      // 在微信小程序中，不支持将函数当做props参数，故只能通过ref形式调用
      setFormatter(e) {
        this.innerFormatter = e;
      },
      open() {
        this.$refs.picker.open();
        setTimeout(() => {
          this.getValue();
          this.updateColumnValue(this.innerValue);
        }, 10);
      },
      close() {
        this.$emit("close");
      },
      // 点击工具栏的取消按钮
      cancel() {
        this.$emit("cancel");
      },
      // 点击工具栏的确定按钮
      confirm() {
        this.$emit("confirm", {
          value: this.innerValue,
          mode: this.mode
        });
        if (!this.clearDate) {
          this.$emit("input", this.innerValue);
          this.$emit("update:modelValue", this.innerValue);
        }
      },
      //用正则截取输出值,当出现多组数字时,抛出错误
      intercept(e, type) {
        let judge = e.match(/\d+/g);
        if (judge.length > 1) {
          this.$uv.error("请勿在过滤或格式化函数时添加数字");
          return 0;
        } else if (type && judge[0].length == 4) {
          return judge[0];
        } else if (judge[0].length > 2) {
          this.$uv.error("请勿在过滤或格式化函数时添加数字");
          return 0;
        } else {
          return judge[0];
        }
      },
      // 列发生变化时触发
      change(e) {
        const { indexs, values } = e;
        let selectValue = "";
        if (this.mode === "time") {
          selectValue = `${this.intercept(values[0][indexs[0]])}:${this.intercept(values[1][indexs[1]])}`;
        } else if (this.mode === "year") {
          const year = parseInt(this.intercept(values[0][indexs[0]], "year"));
          selectValue = Number(new Date(year, 0));
        } else {
          const year = parseInt(this.intercept(values[0][indexs[0]], "year"));
          const month = parseInt(this.intercept(values[1][indexs[1]]));
          let date2 = parseInt(values[2] ? this.intercept(values[2][indexs[2]]) : 1);
          let hour = 0, minute = 0;
          const maxDate = dayjs(`${year}-${month}`).daysInMonth();
          if (this.mode === "year-month") {
            date2 = 1;
          }
          date2 = Math.min(maxDate, date2);
          if (this.mode === "datetime") {
            hour = parseInt(this.intercept(values[3][indexs[3]]));
            minute = parseInt(this.intercept(values[4][indexs[4]]));
          }
          selectValue = Number(new Date(year, month - 1, date2, hour, minute));
        }
        selectValue = this.correctValue(selectValue);
        this.innerValue = selectValue;
        this.updateColumnValue(selectValue);
        this.$emit("change", {
          value: selectValue,
          mode: this.mode
        });
      },
      // 更新各列的值，进行补0、格式化等操作
      updateColumnValue(value) {
        this.innerValue = value;
        this.updateColumns();
        this.updateIndexs(value);
      },
      // 更新索引
      updateIndexs(value) {
        let values = [];
        const formatter = this.formatter || this.innerFormatter;
        if (this.mode === "time") {
          const timeArr = value.split(":");
          values = [formatter("hour", timeArr[0]), formatter("minute", timeArr[1])];
        } else {
          values = [
            formatter("year", `${dayjs(value).year()}`),
            // 月份补0
            formatter("month", this.$uv.padZero(dayjs(value).month() + 1))
          ];
          if (this.mode === "date") {
            values.push(formatter("day", this.$uv.padZero(dayjs(value).date())));
          }
          if (this.mode === "datetime") {
            values.push(formatter("day", this.$uv.padZero(dayjs(value).date())), formatter("hour", this.$uv.padZero(dayjs(value).hour())), formatter("minute", this.$uv.padZero(dayjs(value).minute())));
          }
        }
        const indexs = this.columns.map((column, index2) => {
          return Math.max(0, column.findIndex((item) => item === values[index2]));
        });
        this.$nextTick(() => {
          this.$uv.sleep(100).then((res) => {
            this.$refs.picker.setIndexs(indexs, true);
          });
        });
      },
      // 更新各列的值
      updateColumns() {
        const formatter = this.formatter || this.innerFormatter;
        const results = this.getOriginColumns().map((column) => column.values.map((value) => formatter(column.type, value)));
        this.columns = results;
      },
      getOriginColumns() {
        const results = this.getRanges().map(({ type, range: range2 }) => {
          let values = times(range2[1] - range2[0] + 1, (index2) => {
            let value = range2[0] + index2;
            value = type === "year" ? `${value}` : this.$uv.padZero(value);
            return value;
          });
          if (this.filter) {
            values = this.filter(type, values);
          }
          return { type, values };
        });
        return results;
      },
      // 通过最大值和最小值生成数组
      generateArray(start, end) {
        return Array.from(new Array(end + 1).keys()).slice(start);
      },
      // 得出合法的时间
      correctValue(value) {
        const isDateMode = this.mode !== "time";
        if (isDateMode && !this.$uv.test.date(value)) {
          value = this.minDate;
        } else if (!isDateMode && !value) {
          value = `${this.$uv.padZero(this.minHour)}:${this.$uv.padZero(this.minMinute)}`;
        }
        if (!isDateMode) {
          if (String(value).indexOf(":") === -1)
            return this.$uv.error("时间错误，请传递如12:24的格式");
          let [hour, minute] = value.split(":");
          hour = this.$uv.padZero(this.$uv.range(this.minHour, this.maxHour, Number(hour)));
          minute = this.$uv.padZero(this.$uv.range(this.minMinute, this.maxMinute, Number(minute)));
          return `${hour}:${minute}`;
        } else {
          value = dayjs(value).isBefore(dayjs(this.minDate)) ? this.minDate : value;
          value = dayjs(value).isAfter(dayjs(this.maxDate)) ? this.maxDate : value;
          return value;
        }
      },
      // 获取每列的最大和最小值
      getRanges() {
        if (this.mode === "time") {
          return [{
            type: "hour",
            range: [this.minHour, this.maxHour]
          }, {
            type: "minute",
            range: [this.minMinute, this.maxMinute]
          }];
        }
        const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = this.getBoundary("max", this.innerValue);
        const { minYear, minDate, minMonth, minHour, minMinute } = this.getBoundary("min", this.innerValue);
        const result = [{
          type: "year",
          range: [minYear, maxYear]
        }, {
          type: "month",
          range: [minMonth, maxMonth]
        }, {
          type: "day",
          range: [minDate, maxDate]
        }, {
          type: "hour",
          range: [minHour, maxHour]
        }, {
          type: "minute",
          range: [minMinute, maxMinute]
        }];
        if (this.mode === "date")
          result.splice(3, 2);
        if (this.mode === "year-month")
          result.splice(2, 3);
        if (this.mode === "year")
          result.splice(1, 4);
        return result;
      },
      // 根据minDate、maxDate、minHour、maxHour等边界值，判断各列的开始和结束边界值
      getBoundary(type, innerValue) {
        const value = new Date(innerValue);
        const boundary = new Date(this[`${type}Date`]);
        const year = dayjs(boundary).year();
        let month = 1;
        let date2 = 1;
        let hour = 0;
        let minute = 0;
        if (type === "max") {
          month = 12;
          date2 = dayjs(value).daysInMonth();
          hour = 23;
          minute = 59;
        }
        if (dayjs(value).year() === year) {
          month = dayjs(boundary).month() + 1;
          if (dayjs(value).month() + 1 === month) {
            date2 = dayjs(boundary).date();
            if (dayjs(value).date() === date2) {
              hour = dayjs(boundary).hour();
              if (dayjs(value).hour() === hour) {
                minute = dayjs(boundary).minute();
              }
            }
          }
        }
        return {
          [`${type}Year`]: year,
          [`${type}Month`]: month,
          [`${type}Date`]: date2,
          [`${type}Hour`]: hour,
          [`${type}Minute`]: minute
        };
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_picker = resolveEasycom(vue.resolveDynamicComponent("uv-picker"), __easycom_0$1);
    return vue.openBlock(), vue.createBlock(_component_uv_picker, {
      ref: "picker",
      closeOnClickOverlay: _ctx.closeOnClickOverlay,
      closeOnClickConfirm: _ctx.closeOnClickConfirm,
      columns: $data.columns,
      title: _ctx.title,
      itemHeight: _ctx.itemHeight,
      showToolbar: _ctx.showToolbar,
      visibleItemCount: _ctx.visibleItemCount,
      defaultIndex: $data.innerDefaultIndex,
      cancelText: _ctx.cancelText,
      confirmText: _ctx.confirmText,
      cancelColor: _ctx.cancelColor,
      confirmColor: _ctx.confirmColor,
      round: _ctx.round,
      onClose: $options.close,
      onCancel: $options.cancel,
      onConfirm: $options.confirm,
      onChange: $options.change
    }, null, 8, ["closeOnClickOverlay", "closeOnClickConfirm", "columns", "title", "itemHeight", "showToolbar", "visibleItemCount", "defaultIndex", "cancelText", "confirmText", "cancelColor", "confirmColor", "round", "onClose", "onCancel", "onConfirm", "onChange"]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/uni_modules/uv-datetime-picker/components/uv-datetime-picker/uv-datetime-picker.vue"]]);
  const _sfc_main$k = {
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
        await uni.navigateTo({
          url: "/pages/login/ratpass"
        });
      },
      open() {
        this.$refs.datetimePicker.open();
        formatAppLog("log", "at pages/login/register.vue:130", this.$refs.datetimePicker);
      },
      getname(event) {
        this.name = event.detail.value;
        formatAppLog("log", "at pages/login/register.vue:134", this.name);
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
        formatAppLog("log", "at pages/login/register.vue:160", this.refelist);
      },
      giftPickerChange: function(e, giftArray) {
        formatAppLog("log", "at pages/login/register.vue:163", "picker发送选择改变，携带值为", e.detail.value);
        let index2 = e.detail.value;
        this.giftindex = index2;
        this.giftmoren = giftArray[index2].gift;
      },
      roun() {
        formatAppLog("log", "at pages/login/register.vue:169", this.seen, this.loun);
        if (this.seen == false) {
          this.seen = true;
          this.loun = true;
        }
        this.gender = "男";
        formatAppLog("log", "at pages/login/register.vue:175", this.seen, this.loun);
      },
      soun() {
        formatAppLog("log", "at pages/login/register.vue:179", this.seen, this.loun);
        if (this.loun == true) {
          this.seen = false;
          this.loun = false;
        }
        this.gender = "女";
        formatAppLog("log", "at pages/login/register.vue:185", this.seen, this.loun);
      },
      bindMultiPickerColumnChange: function(e) {
        formatAppLog("log", "at pages/login/register.vue:189", "修改的列为：" + e.detail.column + "，值为：" + e.detail.value);
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
        let date2 = new Date(e.value);
        let y = date2.getFullYear();
        let MM = date2.getMonth() + 1;
        MM = MM < 10 ? "0" + MM : MM;
        let d = date2.getDate();
        d = d < 10 ? "0" + d : d;
        date2.getHours();
        date2.getMinutes();
        date2.getSeconds();
        let newtime = y + "-" + MM + "-" + d;
        let newtime2 = y + "." + MM + "." + d;
        this.dateYear = newtime2;
        this.newtime = newtime;
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uv-datetime-picker"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createVNode(_component_uv_datetime_picker, {
          ref: "datetimePicker",
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
          mode: "date",
          minDate: 946695809e3,
          onConfirm: $options.confirm
        }, null, 8, ["modelValue", "onConfirm"]),
        vue.createElementVNode("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "form" }, [
            vue.createElementVNode("view", { class: "textTitle" }, [
              vue.createElementVNode("view", { class: "title1" }, " 欢迎来到泽曦书画 "),
              vue.createElementVNode("view", { class: "title2" }, " 请选择性别年龄，校区班级推荐人 ")
            ]),
            vue.createElementVNode("view", { class: "textlogin" }, [
              vue.createElementVNode("view", {
                class: "img1",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.roun && $options.roun(...args))
              }, [
                $data.seen ? (vue.openBlock(), vue.createElementBlock("img", {
                  key: 0,
                  src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng37fd122e911efbf5a6c9a5907384d8c8ed78d7e5b8bc971416d09e8e914fe7a3\r\n				",
                  alt: ""
                })) : (vue.openBlock(), vue.createElementBlock("img", {
                  key: 1,
                  src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngccb17aadab169aefc90146fec8d12c387bab7ca72b9085f1b18a2a993cef6316\r\n					",
                  alt: ""
                })),
                vue.createElementVNode("view", { class: "imgtext1" }, " 男 ")
              ]),
              vue.createElementVNode("view", {
                class: "img2",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.soun && $options.soun(...args))
              }, [
                $data.loun ? (vue.openBlock(), vue.createElementBlock("img", {
                  key: 0,
                  src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc7b155ca914f20d43e6b0d5df21fd1967a8aaf33858c8ee8f6f7906c8af300ed",
                  alt: ""
                })) : (vue.openBlock(), vue.createElementBlock("img", {
                  key: 1,
                  src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngccb17aadab169aefc90146fec8d12c387bab7ca72b9085f1b18a2a993cef6316\r\n					",
                  alt: ""
                })),
                vue.createElementVNode("view", { class: "imgtext1" }, " 女 ")
              ])
            ]),
            vue.createElementVNode("view", { class: "title" }, "姓名"),
            vue.createElementVNode(
              "input",
              {
                type: "text",
                placeholder: "输入姓名",
                class: "input",
                onInput: _cache[3] || (_cache[3] = (...args) => $options.getname && $options.getname(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("view", { class: "title" }, "年龄"),
            vue.createElementVNode(
              "input",
              {
                type: "number",
                placeholder: "例如:12",
                class: "input",
                onInput: _cache[4] || (_cache[4] = (...args) => $options.getold && $options.getold(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("view", { class: "title" }, "出生年月日"),
            vue.createElementVNode("view", {
              class: "image-text_1 flex-row justify-between input",
              onClick: _cache[5] || (_cache[5] = (...args) => $options.open && $options.open(...args))
            }, [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($data.dateYear),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "title" }, "校区"),
            vue.createElementVNode("view", { class: "input" }, [
              vue.createElementVNode("picker", {
                onChange: _cache[6] || (_cache[6] = ($event) => $options.giftPickerChange($event, $data.giftArray)),
                value: _ctx.index,
                range: $data.giftArray,
                "range-key": "gift"
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "uni-input text-group_2" },
                  vue.toDisplayString($data.giftmoren),
                  1
                  /* TEXT */
                )
              ], 40, ["value", "range"])
            ]),
            vue.createElementVNode("view", { class: "title" }, "班级"),
            vue.createElementVNode("view", { class: "uni-list-cell-db input" }, [
              vue.createElementVNode("picker", {
                mode: "multiSelector",
                onColumnchange: _cache[7] || (_cache[7] = (...args) => $options.bindMultiPickerColumnChange && $options.bindMultiPickerColumnChange(...args)),
                value: $data.multiIndex,
                range: $data.multiArray
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "uni-input" },
                  vue.toDisplayString($data.multiArray[1][$data.multiIndex[1]]),
                  1
                  /* TEXT */
                )
              ], 40, ["value", "range"])
            ]),
            vue.createElementVNode("view", { class: "title" }, "推荐人"),
            vue.createElementVNode(
              "input",
              {
                type: "text",
                placeholder: "输入推荐人",
                class: "input",
                onInput: _cache[8] || (_cache[8] = (...args) => $options.getrefe && $options.getrefe(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("view", { class: "title" }, "手机号"),
            vue.createElementVNode(
              "input",
              {
                type: "text",
                placeholder: "输入手机号",
                class: "input",
                onInput: _cache[9] || (_cache[9] = (...args) => $options.getiphone && $options.getiphone(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("view", { class: "title" }, "密码"),
            vue.createElementVNode(
              "input",
              {
                type: "text",
                placeholder: "输入密码",
                class: "input",
                onInput: _cache[10] || (_cache[10] = (...args) => $options.getregpass && $options.getregpass(...args))
              },
              null,
              32
              /* NEED_HYDRATION */
            ),
            vue.createElementVNode("button", {
              class: "login-button",
              onClick: _cache[11] || (_cache[11] = (...args) => $options.getlogin && $options.getlogin(...args))
            }, "完成")
          ]),
          vue.createElementVNode("view", { class: "footer" })
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesLoginRegister = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/login/register.vue"]]);
  const _sfc_main$j = {
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
        this.listdata.forEach((e, index2) => {
          let now = /* @__PURE__ */ new Date();
          let end = new Date(e.end);
          let timeDiff = end - now;
          if (timeDiff > 0) {
            let totalSeconds = Math.floor(timeDiff / 1e3);
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor(totalSeconds % 3600 / 60);
            let seconds = totalSeconds % 60;
            this.listdata[index2].hours = this.formatTime(hours);
            this.listdata[index2].minutes = this.formatTime(minutes);
            this.listdata[index2].seconds = this.formatTime(seconds);
          } else {
            this.listdata[index2].hours = "00";
            this.listdata[index2].minutes = "00";
            this.listdata[index2].seconds = "00";
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
        formatAppLog("log", "at pages/pagesall/home.vue:350", "扫上了");
        uni.scanCode({
          success: function(res) {
            formatAppLog("log", "at pages/pagesall/home.vue:354", "条码类型：" + res.scanType);
            formatAppLog("log", "at pages/pagesall/home.vue:355", "条码内容：" + res.result);
          }
        });
      },
      btnsearch() {
        uni.navigateTo({
          url: "/pages/pagesall/home/search"
        });
      },
      btnmess() {
        uni.navigateTo({
          url: "/pages/pagesall/home/message"
        });
      },
      btnsignup() {
        uni.navigateTo({
          url: "/pages/pagesall/home/signUp"
        });
      },
      swiper_click() {
        uni.navigateTo({
          url: "/pages/pagesall/home/game"
        });
      },
      linshi() {
        uni.navigateTo({
          url: "/pages/pagesall/home/chat"
        });
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "homePage" }, [
      vue.createElementVNode("view", { class: "titleHome" }, [
        vue.createElementVNode("view", { class: "nameId" }, [
          vue.createElementVNode("view", { class: "head" }, [
            vue.createElementVNode("img", {
              src: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/dc222dae1c45493a96cd7da35e8a1a38_mergeImage.png",
              alt: ""
            })
          ]),
          vue.createElementVNode("view", { class: "name" }, [
            vue.createElementVNode("text", { class: "textname" }, "刘易阳"),
            vue.createElementVNode("text", { class: "textid" }, "ID:000000")
          ]),
          vue.createElementVNode("view", { class: "classID" }, " 书法一班 ")
        ]),
        vue.createElementVNode("view", { class: "buttonImg" }, [
          vue.createElementVNode("view", {
            class: "btnimg1",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.btnscan && $options.btnscan(...args))
          }, [
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5e1b57899cb5b9cd47a8d4e301f4f736efd47c45ca7713a43d00721e94370714",
              alt: ""
            })
          ]),
          vue.createElementVNode("view", {
            class: "btnimg2",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.btnsearch && $options.btnsearch(...args))
          }, [
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng1bc2ffa456b6fda7ad06eee0d2a6f3efd0c7b823b9eeef0c186995bff9b22e4e",
              alt: ""
            })
          ]),
          vue.createElementVNode("view", {
            class: "btnimg3",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.btnmess && $options.btnmess(...args))
          }, [
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfb5a4b958665280ae8b1c0018d674845333615a9dc10f846fe95ad308c868f08",
              alt: ""
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "posit" }, [
        vue.createElementVNode("img", {
          src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5b0a65fd47f768b4c8f59ba6e2c415f9fe8dd593587d9ad6bbcd9f647066dc01",
          alt: ""
        }),
        vue.createElementVNode("text", { class: "postext" }, "湛江市-霞山区-京广路校区")
      ]),
      vue.createElementVNode("swiper", {
        class: "swiper-container",
        "indicator-dots": "true",
        autoplay: "true",
        interval: "3000",
        circular: "true",
        "indicator-color": "#ddd",
        "indicator-active-color": "#333"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.images, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index2 }, [
              vue.createElementVNode("image", {
                src: item,
                class: "swiper-image",
                onClick: _cache[3] || (_cache[3] = (...args) => $options.swiper_click && $options.swiper_click(...args))
              }, null, 8, ["src"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "showbox" }, [
        vue.createElementVNode("view", { class: "showimg" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/18d1eafb43df40dd8a2c22c0b95e5326_mergeImage.png",
            alt: "",
            class: "showimg1"
          })
        ]),
        vue.createElementVNode("view", { class: "showtext" }, [
          vue.createElementVNode("text", { class: "text-content" }, " 鲁迅先生说：“唯有民魂是值得宝贵的，唯有让它发扬起来，中国才能进步！”泽熙书法进行书法教育，正是要使学生从中体验民族的精神与魂魄，引导他们热爱祖国及其文化。研学是换种方式带孩子们去体会中国深厚的文化底蕴研学是换种方式带孩子们去体会中国深厚的文化底蕴研学是换种方式带孩子们去体会中国深厚的文化底蕴")
        ])
      ]),
      vue.createElementVNode("view", { class: "works" }, [
        vue.createElementVNode("text", { class: "worktext" }, "优秀作品"),
        (vue.openBlock(), vue.createElementBlock("view", {
          class: "worksImgs",
          key: _ctx.index
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.zuopinimglist, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "worksimgbox",
                key: index2
              }, [
                vue.createElementVNode("img", {
                  src: item.img,
                  alt: ""
                }, null, 8, ["src"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]))
      ]),
      vue.createElementVNode("view", {
        class: "students",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.linshi && $options.linshi(...args))
      }, [
        vue.createElementVNode("text", { class: "stutext" }, "学员风采"),
        vue.createElementVNode("view", { class: "stusImgs" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.arrimglist, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "stuimgbox",
                key: index2
              }, [
                vue.createElementVNode("img", {
                  src: item.img,
                  alt: ""
                }, null, 8, ["src"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createCommentVNode(" 活动 "),
      vue.createElementVNode("view", { class: "actiClass" }, [
        vue.createElementVNode("view", { class: "actText" }, [
          vue.createElementVNode("text", null, "活动课"),
          vue.createElementVNode("text", { style: { "font-size": "24rpx", "color": "#666666" } }, "更多")
        ]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.listdata, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "actitme",
              key: index2
            }, [
              vue.createElementVNode("view", { class: "linetext" }),
              vue.createElementVNode(
                "view",
                { class: "linetext1" },
                vue.toDisplayString(item.online),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "techerImg" }, [
                vue.createElementVNode("img", {
                  src: item.techerimg,
                  alt: ""
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "listindex" }, [
                vue.createElementVNode(
                  "view",
                  { class: "actitmeText1" },
                  vue.toDisplayString(item.biaoti),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "actitmeText2" },
                  vue.toDisplayString(item.laoshi),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "actitmeText3" },
                  " 开课时间:" + vue.toDisplayString(item.star) + "- " + vue.toDisplayString(item.end),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "actImg" }, [
                  vue.createElementVNode("img", {
                    src: item.hearimg,
                    alt: ""
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "actTeacher" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(item.teachername),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("text", { style: { "font-size": "20rpx", "margin-top": "10rpx" } }, "授课")
                  ]),
                  vue.createElementVNode("view", { class: "acttime" }, [
                    vue.createElementVNode("text", { style: { "font-size": "24rpx" } }, "距结束还剩:"),
                    vue.createElementVNode("view", { class: "timetextbox" }, [
                      vue.createElementVNode(
                        "text",
                        { style: { "font-size": "20rpx", "padding": "3rpx 5rpx 3rpx 5rpx", "border-radius": "5rpx" } },
                        vue.toDisplayString(item.hours),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("text", { style: { "font-size": "20rpx", "background-color": "#fff", "color": "#F53C38" } }, ":"),
                      vue.createElementVNode(
                        "text",
                        { style: { "font-size": "20rpx", "padding": "3rpx 5rpx 3rpx 5rpx", "border-radius": "5rpx" } },
                        vue.toDisplayString(item.minutes),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("text", { style: { "font-size": "20rpx", "background-color": "#fff", "color": "#F53C38" } }, ":"),
                      vue.createElementVNode(
                        "text",
                        { style: { "font-size": "20rpx", "padding": "3rpx 5rpx 3rpx 5rpx", "border-radius": "5rpx" } },
                        vue.toDisplayString(item.seconds),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "endbaoming" }, [
                  vue.createElementVNode("view", { class: "peopers" }, [
                    vue.createElementVNode("img", {
                      src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge82cb54448fe7b82f1100cbe1494f08248762c97952c5f2a8f4b9a26a743a00a",
                      alt: ""
                    }),
                    vue.createElementVNode(
                      "view",
                      {
                        class: "peotext",
                        style: { "font-size": "20rpx" }
                      },
                      vue.toDisplayString(item.pers) + "人报名 ",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "imgbox" }, [
                      vue.createElementVNode("img", {
                        src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3",
                        alt: "",
                        style: { "right": "0rpx", "z-index": "10" }
                      }),
                      vue.createElementVNode("img", {
                        src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3",
                        alt: "",
                        style: { "right": "20rpx", "z-index": "9" }
                      }),
                      vue.createElementVNode("img", {
                        src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3",
                        alt: "",
                        style: { "right": "40rpx", "z-index": "8" }
                      })
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "perbtn" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "permoney" },
                      vue.toDisplayString(item.money == "免费" ? "免费" : "￥" + item.money),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", {
                      class: "gobtn",
                      onClick: _cache[5] || (_cache[5] = (...args) => $options.btnsignup && $options.btnsignup(...args))
                    }, "立即报名")
                  ])
                ])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 资讯 "),
      vue.createElementVNode("view", { class: "infobox" }, [
        vue.createElementVNode("view", { class: "infoText" }, [
          vue.createElementVNode("text", null, "资讯"),
          vue.createElementVNode("text", { style: { "font-size": "24rpx", "color": "#666666" } }, "更多")
        ]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.infolist, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "infolistbox",
              key: index2
            }, [
              vue.createElementVNode("view", { class: "infostr" }, [
                vue.createElementVNode("view", { class: "huatibox" }, [
                  vue.createElementVNode("img", {
                    src: item.titleimg,
                    alt: ""
                  }, null, 8, ["src"]),
                  vue.createElementVNode(
                    "text",
                    { style: { "font-size": "32rpx", "font-weight": "500" } },
                    vue.toDisplayString(item.title),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "paddbox" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "titleText" },
                    vue.toDisplayString(item.content),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "huatibox" }, [
                    vue.createElementVNode("img", {
                      src: item.timeImg,
                      alt: ""
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "text",
                      { style: { "font-weight": "400", "font-size": "24rpx", "color": "#666666", "font-style": "normal" } },
                      vue.toDisplayString(item.infotime),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "huatibox" }, [
                    vue.createElementVNode("img", {
                      src: item.ressImg,
                      alt: ""
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "text",
                      { style: { "font-weight": "400", "font-size": "24rpx", "font-style": "normal" } },
                      vue.toDisplayString(item.inforess),
                      1
                      /* TEXT */
                    )
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "infoImg" }, [
                vue.createElementVNode("view", { class: "proNum" }, [
                  vue.createElementVNode(
                    "text",
                    { style: { "font-weight": "400", "font-size": "24rpx", "color": "#666666" } },
                    vue.toDisplayString(item.infoNumber),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("img", {
                    src: item.jiantouimg,
                    alt: "",
                    style: { "width": "8rpx", "height": "16rpx" }
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "proImg" }, [
                  vue.createElementVNode("img", {
                    src: item.infoImg,
                    alt: ""
                  }, null, 8, ["src"])
                ])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const PagesPagesallHome = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home.vue"]]);
  const _sfc_main$i = {
    components: {}
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "timeline" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const timeline = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-a4098a69"], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/components/chenbin-timeline/timeLine.vue"]]);
  const _sfc_main$h = {
    props: {
      leftTime: {
        default: ""
      },
      color: {
        default: ""
      },
      leftlist1: {
        default: ""
      },
      leftlist2: {
        default: ""
      },
      leftlist3: {
        default: ""
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "timelineItem" }, [
      vue.createElementVNode("view", { class: "timeItem" }, [
        vue.createElementVNode("view", { class: "line" }, [
          vue.createElementVNode(
            "view",
            {
              class: "out",
              style: vue.normalizeStyle({ background: $props.color == "" ? "" : $props.color })
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "inner",
                  style: vue.normalizeStyle({ background: $props.color == "" ? "" : $props.color })
                },
                null,
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          )
        ]),
        vue.createElementVNode("view", {
          class: "leftTime",
          style: { "font-weight": "500", "font-size": "28rpx", "color": "#000000" }
        }, [
          vue.createTextVNode(
            vue.toDisplayString($props.leftTime) + " ",
            1
            /* TEXT */
          ),
          $props.leftlist1 !== "" ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              class: "leftlist1"
            },
            vue.toDisplayString($props.leftlist1),
            1
            /* TEXT */
          )) : vue.createCommentVNode("v-if", true),
          $props.leftlist2 !== "" ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 1,
              class: "leftlist2"
            },
            vue.toDisplayString($props.leftlist2),
            1
            /* TEXT */
          )) : vue.createCommentVNode("v-if", true),
          $props.leftlist3 !== "" ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 2,
              class: "leftlist3"
            },
            vue.toDisplayString($props.leftlist3),
            1
            /* TEXT */
          )) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", {
          class: "rightContent",
          style: { "text-align": "right", "font-weight": "400", "font-size": "24rpx", "color": "#333333" }
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ])
    ]);
  }
  const timelineItem = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-48a104e6"], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/components/chenbin-timeline/timelineItem.vue"]]);
  const _sfc_main$g = {
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
        uni.navigateBack();
      },
      scroll(e) {
        formatAppLog("log", "at pages/pagesall/course.vue:160", e);
        this.old.scrollTop = e.detail.scrollTop;
      },
      btn_study() {
        uni.navigateTo({
          url: "/pages/pagesall/course/go_learn"
        });
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_timelineItem = vue.resolveComponent("timelineItem");
    const _component_timeline = vue.resolveComponent("timeline");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "code_titlebox" }, [
          vue.createElementVNode("view", { class: "code_title" }, " 课程 ")
        ]),
        vue.createElementVNode("view", { class: "game_time" }, [
          vue.createElementVNode("text", { style: { "font-weight": "500", "font-size": "36rpx", "color": "#000000" } }, "活动时间安排")
        ]),
        vue.createVNode(_component_timeline, null, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.infolist, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "line_list",
                  key: index2
                }, [
                  vue.createVNode(_component_timelineItem, {
                    class: "list_box_cour",
                    leftTime: item.title,
                    color: "#5791F2"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode(
                        "view",
                        {
                          class: "tips",
                          style: { "height": "134rpx", "font-weight": "500", "font-size": "28rpx", "color": "#000000", "margin-left": "20rpx" }
                        },
                        " 主讲：" + vue.toDisplayString(item.teach),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "class_room" }, [
                        vue.createElementVNode(
                          "view",
                          {
                            class: "",
                            style: { "font-weight": "400", "font-size": "24rpx", "color": "#000000" }
                          },
                          " 教室:" + vue.toDisplayString(item.classroom),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          {
                            class: "",
                            style: { "font-weight": "400", "font-size": "24rpx", "color": "#333333" }
                          },
                          " 时间:" + vue.toDisplayString(item.start) + "-" + vue.toDisplayString(item.end),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["leftTime"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createElementVNode("view", { class: "game_time" }, [
          vue.createElementVNode("text", { style: { "font-weight": "500", "font-size": "36rpx", "color": "#000000" } }, "近期课程")
        ]),
        vue.createVNode(_component_timeline, null, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.ti_tea_room_list, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "line_list",
                  key: index2
                }, [
                  vue.createVNode(_component_timelineItem, {
                    class: "list_box_cour",
                    leftTime: item.title,
                    color: item.color,
                    style: { "font-weight": "600", "font-size": "28rpx", "color": "#000000" }
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode(
                        "view",
                        {
                          class: "tips",
                          style: { "height": "154rpx", "font-weight": "500", "font-size": "28rpx", "color": "#000000" }
                        },
                        " 主讲：" + vue.toDisplayString(item.teach),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "class_room" }, [
                        vue.createElementVNode(
                          "view",
                          {
                            class: "",
                            style: { "font-weight": "400", "color": "#000000" }
                          },
                          " 教室:" + vue.toDisplayString(item.classroom),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "view",
                          {
                            class: "",
                            style: { "font-weight": "400", "font-size": "24rpx", "color": "#333333" }
                          },
                          " 时间:" + vue.toDisplayString(item.start) + "-" + vue.toDisplayString(item.end),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode(
                        "view",
                        {
                          class: "list_btn",
                          style: vue.normalizeStyle({ backgroundColor: item.color }),
                          onClick: _cache[0] || (_cache[0] = (...args) => $options.btn_study && $options.btn_study(...args))
                        },
                        vue.toDisplayString(item.status),
                        5
                        /* TEXT, STYLE */
                      )
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["leftTime", "color"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createElementVNode("view", { class: "infobox" })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesPagesallCourse = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/course.vue"]]);
  const _sfc_main$f = {
    data() {
      return {};
    },
    methods: {
      go_AI() {
        formatAppLog("log", "at pages/pagesall/aiDete.vue:89", "111");
        uni.navigateTo({
          url: "/pages/pagesall/aiDete/aiResult"
        });
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "ai—_box" }, [
      vue.createElementVNode("view", { class: "ai_img" }),
      vue.createElementVNode("view", { class: "ai_title" }, " 书法AI测评 "),
      vue.createElementVNode("view", { class: "photo_box" }, [
        vue.createElementVNode("view", { class: "left_top" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8841afb2ed9b814c547bbb1d87bb42508771ef6fea67f1f4b54dae3061027a9c",
            alt: ""
          })
        ]),
        vue.createElementVNode("view", { class: "right_top" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge94653dbe7f9bbbbe93f73e44c1dc68ccd17c869bf40e27cee8834315c37bd77",
            alt: ""
          })
        ]),
        vue.createElementVNode("view", { class: "right_bottom" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb3b3f03ebc6279ecc80d4ea63aa70fe3cf9aea5a8a49c7a1abe68f3e7fda82ac",
            alt: ""
          })
        ]),
        vue.createElementVNode("view", { class: "left_bottom" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngff2bda36ded4b2b18a74c5ae9c8f5cc1c354864c822489c9660cfd7d2d26bc3e",
            alt: ""
          })
        ]),
        vue.createElementVNode("view", {
          class: "photo_box2",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.go_AI && $options.go_AI(...args))
        }, [
          vue.createElementVNode("view", { class: "photo_box3" }, [
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3ed3fe30d1cf29e35208039bd47fd79c2b4a0a89c3f20565393574a04704475a",
              alt: ""
            }),
            vue.createElementVNode("view", { class: "photo_text" }, " 拍照测评 ")
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "note1" }, [
        vue.createElementVNode("img", {
          src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd665ec6e5f12213bcd360b46d2b0e39afe260a29e58b814a897a8c56e2b291fc",
          alt: ""
        }),
        vue.createElementVNode("view", { class: "note1_text notes" }, " 仅支持正版彩色专用纸 ")
      ]),
      vue.createElementVNode("view", { class: "note2" }, [
        vue.createElementVNode("img", {
          src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd665ec6e5f12213bcd360b46d2b0e39afe260a29e58b814a897a8c56e2b291fc",
          alt: ""
        }),
        vue.createElementVNode("view", { class: "note2_text notes" }, " 测评标准为楷体GB2312 ")
      ]),
      vue.createElementVNode("view", { class: "note3" }, [
        vue.createElementVNode("img", {
          src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8c5744b96f88c80e5403734a5a78cf3dc9beb68961ada322baeb0a797518ad0e",
          alt: ""
        }),
        vue.createElementVNode("view", { class: "note3_text notes" }, " 使用说明 ")
      ]),
      vue.createElementVNode("view", { class: "ai_img2" }, [
        vue.createElementVNode("img", {
          src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdeab91cfdc22be815401b6cf4c05f5c507c5beef4251a3c40a67f1b0b244f034",
          alt: ""
        })
      ]),
      vue.createElementVNode("view", { class: "ai_img3" }, [
        vue.createElementVNode("img", {
          src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng913231901558ba50ba495eadedc97feb7ada633e54b7add3aee7edfe0fa09cea",
          alt: ""
        })
      ])
    ]);
  }
  const PagesPagesallAiDete = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/aiDete.vue"]]);
  const _sfc_main$e = {};
  function _sfc_render$d(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, " 我是活动 ");
  }
  const PagesPagesallOper = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/oper.vue"]]);
  const _sfc_main$d = {};
  function _sfc_render$c(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "" }, " 我的 ");
  }
  const PagesPagesallMypage = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/mypage.vue"]]);
  const _sfc_main$c = {
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
          end: "2024.8.18",
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
        this.listdata.forEach((e, index2) => {
          let now = /* @__PURE__ */ new Date();
          let end = new Date(e.end);
          let timeDiff = end - now;
          if (timeDiff > 0) {
            let totalSeconds = Math.floor(timeDiff / 1e3);
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor(totalSeconds % 3600 / 60);
            let seconds = totalSeconds % 60;
            this.listdata[index2].hours = this.formatTime(hours);
            this.listdata[index2].minutes = this.formatTime(minutes);
            this.listdata[index2].seconds = this.formatTime(seconds);
          } else {
            this.listdata[index2].hours = "00";
            this.listdata[index2].minutes = "00";
            this.listdata[index2].seconds = "00";
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
      btnsignup() {
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "homePage" }, [
      vue.createElementVNode("swiper", {
        class: "swiper-container",
        "indicator-dots": "true",
        autoplay: "true",
        interval: "3000",
        circular: "true",
        "indicator-color": "#ddd",
        "indicator-active-color": "#333"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.images, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index2 }, [
              vue.createElementVNode("image", {
                src: item,
                class: "swiper-image"
              }, null, 8, ["src"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 活动 "),
      vue.createElementVNode("view", { class: "actiClass" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.listdata, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "act_itme",
              key: index2
            }, [
              vue.createElementVNode("view", { class: "techer_Img" }, [
                vue.createElementVNode("img", {
                  src: item.techerimg,
                  alt: ""
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("view", { class: "list_index" }, [
                vue.createElementVNode(
                  "view",
                  { class: "actitme_Text1" },
                  vue.toDisplayString(item.biaoti),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "planumber" }, [
                  vue.createTextVNode(" 计划人数: "),
                  vue.createElementVNode(
                    "text",
                    { style: { "font-weight": "600", "font-size": "24rpx", "color": "#000000" } },
                    vue.toDisplayString(item.planum) + "人",
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "quenumber" }, [
                  vue.createTextVNode(" 排队人数: "),
                  vue.createElementVNode(
                    "text",
                    { style: { "font-weight": "600", "font-size": "24rpx", "color": "#000000" } },
                    vue.toDisplayString(item.quenum) + "人",
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode("view", { class: "act_Img" }, [
                  vue.createElementVNode("img", {
                    src: item.hearimg,
                    alt: ""
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "act_Teacher" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(item.teachername),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("text", { style: { "font-size": "20rpx", "margin-top": "10rpx" } }, "授课")
                  ]),
                  vue.createElementVNode("view", { class: "act_time" }, [
                    vue.createElementVNode("text", { style: { "font-size": "24rpx" } }, "距结束还剩:"),
                    vue.createElementVNode("view", { class: "time_textbox" }, [
                      vue.createElementVNode(
                        "text",
                        { style: { "font-size": "20rpx", "padding": "3rpx 5rpx 3rpx 5rpx", "border-radius": "5rpx" } },
                        vue.toDisplayString(item.hours),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("text", { style: { "font-size": "20rpx", "background-color": "#fff", "color": "#F53C38" } }, ":"),
                      vue.createElementVNode(
                        "text",
                        { style: { "font-size": "20rpx", "padding": "3rpx 5rpx 3rpx 5rpx", "border-radius": "5rpx" } },
                        vue.toDisplayString(item.minutes),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("text", { style: { "font-size": "20rpx", "background-color": "#fff", "color": "#F53C38" } }, ":"),
                      vue.createElementVNode(
                        "text",
                        { style: { "font-size": "20rpx", "padding": "3rpx 5rpx 3rpx 5rpx", "border-radius": "5rpx" } },
                        vue.toDisplayString(item.seconds),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "end_baoming" }, [
                  vue.createElementVNode("view", { class: "peo_pers" }, [
                    vue.createElementVNode("img", {
                      src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge82cb54448fe7b82f1100cbe1494f08248762c97952c5f2a8f4b9a26a743a00a",
                      alt: ""
                    }),
                    vue.createElementVNode(
                      "view",
                      {
                        class: "peo_text",
                        style: { "font-size": "20rpx" }
                      },
                      vue.toDisplayString(item.pers) + "人报名 ",
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "img_box" }, [
                      vue.createElementVNode("img", {
                        src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3",
                        alt: "",
                        style: { "right": "0rpx", "z-index": "10" }
                      }),
                      vue.createElementVNode("img", {
                        src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3",
                        alt: "",
                        style: { "right": "20rpx", "z-index": "9" }
                      }),
                      vue.createElementVNode("img", {
                        src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngb33626162c6feb0cfbfc3ecc65f5a824faff5d15d83256f67b86eb157c53ada3",
                        alt: "",
                        style: { "right": "40rpx", "z-index": "8" }
                      })
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "perbtn" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "permoney" },
                      vue.toDisplayString(item.money == "免费" ? "免费" : "￥" + item.money),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", {
                      class: "gobtn",
                      onClick: _cache[0] || (_cache[0] = (...args) => $options.btnsignup && $options.btnsignup(...args))
                    }, "立即报名")
                  ])
                ])
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "eventDetails" }, [
        vue.createElementVNode("view", { class: "detaTitle" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng771a065a39e551cb80b0755732dcaf20cc3ae52e9d4ee72c3e9f6c9d414f07cb",
            alt: ""
          }),
          vue.createElementVNode("text", { class: "detaText" }, "活动详情")
        ]),
        vue.createElementVNode("view", { class: "detaxiangqing" }, " 书法比赛将在2024年7月15号开始本次举办的活动地点是湛江市麻章区东风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内， 本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区。 ")
      ])
    ]);
  }
  const PagesPagesallHomeSignUp = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home/signUp.vue"]]);
  const _sfc_main$b = {
    data() {
      return {};
    },
    onLoad() {
    },
    methods: {
      goback() {
        uni.navigateBack();
      },
      mycode() {
        uni.navigateTo({
          url: "/pages/pagesall/home/mycode"
        });
      },
      messgoback() {
        uni.navigateTo({
          url: "/pages/pagesall/home/adverMess"
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "mess_Title" }, [
          vue.createElementVNode("view", {
            class: "messImg",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goback && $options.goback(...args))
          }, [
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94",
              alt: ""
            })
          ]),
          vue.createElementVNode("view", { class: "title_text" }, " 消息 "),
          vue.createElementVNode("view", { class: "title_img" }, [
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng321758fb81a047a63eed79ffbd8a9de39b6d95d0adc9749329922655c760bb3a",
              alt: "",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.mycode && $options.mycode(...args))
            }),
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5e1b57899cb5b9cd47a8d4e301f4f736efd47c45ca7713a43d00721e94370714",
              alt: ""
            }),
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng60de4c6690251e592eeb3edf5e89b8b74e18a9d17717d9949db1edcb3fcd23bd",
              alt: ""
            })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "messbox",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.messgoback && $options.messgoback(...args))
        }, [
          vue.createElementVNode("view", { class: "messbox2" }, [
            vue.createElementVNode("view", { class: "messbox_img" }, [
              vue.createElementVNode("img", {
                src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd6279aab531ef9632e4b587c47bd1b290e34249129eb3b24c940e727cb528bd0",
                alt: ""
              })
            ]),
            vue.createElementVNode("view", { class: "messinter" }, [
              vue.createElementVNode("view", { class: "inter_text1" }, " 公告消息 "),
              vue.createElementVNode("view", { class: "inter_text2" }, " 书法比赛将在2024年7月15号开始… ")
            ])
          ]),
          vue.createElementVNode("text", { class: "inter_text3" }, "6-15")
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesPagesallHomeMessage = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home/message.vue"]]);
  const _sfc_main$a = {
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
        formatAppLog("log", "at pages/pagesall/home/search.vue:62", event.detail.value);
        this.input_text = event.detail.value;
        if (this.input_text == "") {
          this.btnyes = true;
        } else if (this.input_text != "") {
          this.btnyes = false;
        }
      },
      add_friend() {
        uni.navigateTo({
          url: "/pages/pagesall/home/add_friend"
        });
      },
      cancel_lation() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "btnbox" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0ac4c131284679fa0f7412d62e239e026e1af50accd921fa8c94da8d9d529b26",
            alt: "",
            class: "btns_img"
          }),
          vue.createElementVNode(
            "input",
            {
              type: "text",
              placeholder: "请输入搜索ID",
              class: "input1",
              prefix: "search",
              onInput: _cache[0] || (_cache[0] = (...args) => $options.input_search && $options.input_search(...args))
            },
            null,
            32
            /* NEED_HYDRATION */
          ),
          $data.btnyes ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.cancel_lation && $options.cancel_lation(...args))
          }, [
            vue.createElementVNode("text", { class: "btn" }, "取消")
          ])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: ""
          }, [
            vue.createElementVNode("text", { class: "btn" }, "搜索")
          ]))
        ]),
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.friends_List, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "friends",
              key: index2
            }, [
              vue.createElementVNode("view", {
                class: "friendsbox",
                onClick: _cache[3] || (_cache[3] = (...args) => _ctx.friendsgoback && _ctx.friendsgoback(...args))
              }, [
                vue.createElementVNode("view", { class: "friendsbox2" }, [
                  vue.createElementVNode("view", { class: "friendsbox_img" }, [
                    vue.createElementVNode("img", {
                      src: item.head,
                      alt: ""
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode("view", { class: "friendsinter" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "friends_text1" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "view",
                      { class: "friends_text2" },
                      " ID:" + vue.toDisplayString(item.id),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode("text", {
                  class: "friends_text3",
                  onClick: _cache[2] || (_cache[2] = (...args) => $options.add_friend && $options.add_friend(...args))
                }, "添加好友")
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesPagesallHomeSearch = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home/search.vue"]]);
  const _sfc_main$9 = {};
  function _sfc_render$8(_ctx, _cache) {
    return " 我是扫一扫 ";
  }
  const PagesPagesallHomeSacnpage = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home/sacnpage.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {};
    },
    onLoad() {
    },
    methods: {
      goback() {
        uni.navigateBack();
      },
      mycode() {
        uni.navigateTo({
          url: "/pages/pagesall/home/mycode"
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "codepage" }, [
      vue.createElementVNode("view", { class: "code_titlebox" }, [
        vue.createElementVNode("view", {
          class: "messImg",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goback && $options.goback(...args))
        }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge1553c1d8d43568ee582b54f1deab731573c8804790b09e299c2e73eda1cfa68",
            alt: ""
          })
        ]),
        vue.createElementVNode("view", { class: "code_title" }, " 分享二维码 ")
      ]),
      vue.createElementVNode("view", { class: "code_codebox" }, [
        vue.createElementVNode("view", { class: "code_img" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcd993bafb56f0fa9ca43f6a3a3f5885980722e955fcc6ed400fa9b64a364b72e",
            alt: ""
          })
        ]),
        vue.createElementVNode("view", { class: "code_titileimg" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/a1f75ab65caa4ac6afc5909f8472ecba_mergeImage.png",
            alt: ""
          }),
          vue.createElementVNode("view", { class: "code_name" }, [
            vue.createElementVNode("view", { style: { "font-weight": "500", "font-size": "28rpx", "color": "#000000" } }, "刘易阳的二维码"),
            vue.createElementVNode("view", { style: { "font-weight": "400", "font-size": "16rpx", "color": "#666666", "margin-top": "10rpx" } }, "分享给老师们加个好友吧 ")
          ])
        ]),
        vue.createElementVNode("view", { class: "code_codeimg" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngdec58e091c33964c716ceeb24df93a33629b032a848ee6ada66281e68aeaa069",
            alt: ""
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "code_baocun" }, [
        vue.createElementVNode("img", {
          src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga09d8270200e68c37da10c6fc926c63f90e314b103034a125a42216d2610bbbf",
          alt: ""
        }),
        vue.createElementVNode("text", null, "保存到手机")
      ])
    ]);
  }
  const PagesPagesallHomeMycode = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home/mycode.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        messList: [
          {
            month: "7-12",
            hour: "20:04",
            title: "快来参加书法协会的比赛吧",
            content: "书法比赛将在2024年7月15号开始本次举办的活动地点是湛江市麻章区东风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古"
          },
          {
            month: "7-12",
            hour: "20:04",
            title: "快来参加书法协会的比赛吧",
            content: "书法比赛将在2024年7月15号开始本次举办的活动地点是湛江市麻章区东风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古"
          }
        ]
      };
    },
    onLoad() {
    },
    methods: {
      goback() {
        uni.navigateBack();
      },
      adverbtn(event, index2) {
        formatAppLog("log", "at pages/pagesall/home/adverMess.vue:77", event, index2);
        uni.navigateTo({
          url: "/pages/pagesall/home/adver_detail"
        });
      },
      mycode() {
        uni.navigateTo({
          url: "/pages/pagesall/home/mycode"
        });
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "codepage" }, [
      vue.createElementVNode("view", { class: "code_titlebox" }, [
        vue.createElementVNode("view", {
          class: "messImg",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goback && $options.goback(...args))
        }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94",
            alt: ""
          })
        ]),
        vue.createElementVNode("view", { class: "code_title" }, " 公告消息 ")
      ]),
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($data.messList, (item, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "adverbox",
            key: index2
          }, [
            vue.createElementVNode("view", { class: "adver_time" }, [
              vue.createElementVNode("view", {
                class: "adver_hour",
                style: { "text-align": "center", "font-weight": "400", "font-size": "20rpx", "color": "#000000", "margin": "28rpx 0 28rpx 0" }
              }, [
                vue.createElementVNode(
                  "text",
                  null,
                  vue.toDisplayString(item.month),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "text",
                  { style: { "margin-left": "20rpx" } },
                  vue.toDisplayString(item.hour),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "adver_content" }, [
                vue.createElementVNode(
                  "view",
                  { class: "adver_text1" },
                  vue.toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "adver_text2" },
                  vue.toDisplayString(item.content),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "line" }, [
                  vue.createElementVNode("img", {
                    src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng754b004becd9b25a8ebdc9d2cb98f423d3fa6fdf022dd0a97d950d38fe548f62",
                    alt: ""
                  })
                ]),
                vue.createElementVNode("view", {
                  class: "adver_btn",
                  onClick: ($event) => $options.adverbtn(_ctx.event, index2)
                }, " 查看详情 ", 8, ["onClick"])
              ])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const PagesPagesallHomeAdverMess = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home/adverMess.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        campus: "田园路分校公告信息",
        hour: "7-14",
        mours: "20:33",
        detail: "书法比赛将在2024年7月15号开始本次举办的活动地点是湛江市麻章区东风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来自河南、浙江、广东、山西、湖南、湖北、内蒙古风路一校区内，本次参赛的活动人数为3980人分别来。"
      };
    },
    onLoad() {
    },
    methods: {
      goback() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "code_page" }, [
      vue.createElementVNode("view", { class: "code_titlebox" }, [
        vue.createElementVNode("view", {
          class: "messImg",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goback && $options.goback(...args))
        }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94",
            alt: ""
          })
        ]),
        vue.createElementVNode(
          "view",
          { class: "code_title" },
          vue.toDisplayString($data.campus),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "detail_title" }, [
        vue.createElementVNode("text", { style: { "font-weight": "500", "font-size": "32rpx", "color": "#000000" } }, "快来参加书法协会的比赛吧"),
        vue.createElementVNode("view", { class: "detail_time" }, [
          vue.createElementVNode(
            "view",
            { class: "time_1" },
            vue.toDisplayString($data.hour),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "time_2" },
            vue.toDisplayString($data.mours),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode(
        "view",
        { class: "detail_box" },
        vue.toDisplayString($data.detail),
        1
        /* TEXT */
      )
    ]);
  }
  const PagesPagesallHomeAdverDetail = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home/adver_detail.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        friend_heard: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/26483a4d5dc54c63ae2af524e81ebb4d_mergeImage.png",
        friend_name: "张老师",
        friend_id: "1232222"
      };
    },
    onLoad() {
    },
    methods: {
      fri_goback() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", {
          class: "friend_goback",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.fri_goback && $options.fri_goback(...args))
        }, [
          vue.createElementVNode("img", {
            src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94",
            alt: ""
          })
        ]),
        vue.createElementVNode("view", { class: "friend_name" }, [
          vue.createElementVNode("img", {
            src: $data.friend_heard,
            alt: ""
          }, null, 8, ["src"]),
          vue.createElementVNode(
            "view",
            {
              class: "fri_text1",
              style: { "margin-top": "8rpx" }
            },
            vue.toDisplayString($data.friend_name),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            {
              class: "fri_text2",
              style: { "margin-top": "8rpx" }
            },
            " ID:" + vue.toDisplayString($data.friend_id),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "test_verify" }, [
          vue.createElementVNode("view", { class: "verify_text" }, " 验证信息: "),
          vue.createElementVNode("view", { class: "verify_input" }, [
            vue.createElementVNode("input", {
              type: "text",
              placeholder: "书法一班刘易阳"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "centerbox" }, [
          vue.createElementVNode("view", { class: "friend_btn" }, [
            vue.createElementVNode("text", { style: { "font-weight": "500", "font-size": "28rpx", "color": "#FFFFFF" } }, "添加好友")
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesPagesallHomeAddFriend = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home/add_friend.vue"]]);
  const _sfc_main$4 = {
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
        uni.navigateBack();
      },
      scroll: function(e) {
        formatAppLog("log", "at pages/pagesall/home/game.vue:180", e);
        this.old.scrollTop = e.detail.scrollTop;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_timelineItem = vue.resolveComponent("timelineItem");
    const _component_timeline = vue.resolveComponent("timeline");
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "code_titlebox" }, [
          vue.createElementVNode("view", {
            class: "messImg",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goback && $options.goback(...args))
          }, [
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94",
              alt: ""
            })
          ]),
          vue.createElementVNode("view", { class: "code_title" }, " 赛事比赛 ")
        ]),
        vue.createElementVNode("view", { class: "swibox" }, [
          vue.createElementVNode("swiper", {
            class: "swiper-container",
            "indicator-dots": "true",
            autoplay: "true",
            interval: "3000",
            circular: "true",
            "indicator-color": "#ddd",
            "indicator-active-color": "#333"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.images, (item, index2) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index2 }, [
                  vue.createElementVNode("image", {
                    src: item,
                    class: "swiper-image",
                    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.swiper_click && _ctx.swiper_click(...args))
                  }, null, 8, ["src"])
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        vue.createElementVNode("view", { class: "game_time" }, [
          vue.createElementVNode("text", { style: { "font-weight": "500", "font-size": "36rpx", "color": "#000000" } }, "活动时间安排")
        ]),
        vue.createVNode(_component_timeline, null, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_timelineItem, {
              leftTime: "开幕式",
              color: "#84F257"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "tips" }, "2024.08.01——2024.08.02")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_timelineItem, {
              leftTime: "初赛",
              color: "#84F257"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "tips" }, "2024.08.01——2024.08.02")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_timelineItem, {
              leftTime: "楷书组复赛",
              leftlist1: "楷书组复赛",
              leftlist2: "楷书组复赛",
              color: "#F25757"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "tips" }, "2024.08.01——2024.08.02")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_timelineItem, {
              leftTime: "楷书组复赛",
              leftlist1: "楷书组复赛",
              leftlist2: "楷书组复赛",
              color: "#F25757"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "tips" }, "2024.08.01——2024.08.02")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createVNode(_component_timelineItem, {
              leftTime: "颁奖晚会",
              color: "#5791F2"
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "tips" }, "2024.08.01——2024.08.02")
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createElementVNode("view", { class: "infobox" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.infolist, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "infolistbox",
                key: index2
              }, [
                vue.createElementVNode("view", { class: "infostr" }, [
                  vue.createElementVNode("view", { class: "huatibox" }, [
                    vue.createElementVNode("img", {
                      src: item.titleimg,
                      alt: ""
                    }, null, 8, ["src"]),
                    vue.createElementVNode(
                      "text",
                      { style: { "font-size": "32rpx", "font-weight": "500" } },
                      vue.toDisplayString(item.title),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "paddbox" }, [
                    vue.createElementVNode(
                      "view",
                      { class: "titleText" },
                      vue.toDisplayString(item.content),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("view", { class: "huatibox" }, [
                      vue.createElementVNode("img", {
                        src: item.timeImg,
                        alt: ""
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "text",
                        { style: { "font-weight": "400", "font-size": "24rpx", "color": "#666666", "font-style": "normal", "margin-left": "10rpx" } },
                        vue.toDisplayString(item.infotime),
                        1
                        /* TEXT */
                      )
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "infoImg" }, [
                  vue.createElementVNode("view", { class: "proImg" }, [
                    vue.createElementVNode("img", {
                      src: item.infoImg,
                      alt: ""
                    }, null, 8, ["src"])
                  ])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "event_site" }, [
          vue.createElementVNode("view", { class: "site_title" }, " 活动现场 "),
          vue.createElementVNode("view", null, [
            vue.createElementVNode(
              "scroll-view",
              {
                class: "scroll-view_H",
                "scroll-x": "true",
                onScroll: _cache[2] || (_cache[2] = (...args) => $options.scroll && $options.scroll(...args)),
                "scroll-left": "120",
                "show-scrollbar": "true"
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.site_imgList, (item, index2) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      id: "demo1",
                      class: "scroll-view-item_H uni-bg-red",
                      key: index2
                    }, [
                      vue.createElementVNode("img", {
                        src: item.site_img,
                        alt: ""
                      }, null, 8, ["src"]),
                      vue.createElementVNode(
                        "view",
                        { class: "img_text" },
                        vue.toDisplayString(item.title),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              32
              /* NEED_HYDRATION */
            )
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesPagesallHomeGame = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home/game.vue"]]);
  const _imports_0 = "/static/img/advio.png";
  const _imports_1 = "/static/img/Frame.png";
  const _sfc_main$3 = {
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
        formatAppLog("log", "at pages/pagesall/home/chat.vue:156", "1111");
        this.scrollToBottom();
        this.poalast();
        this.getHeight(".chat_box");
      },
      formatDate(value) {
        if (typeof value == "undefined") {
          return "";
        } else {
          let date2 = new Date(value);
          let now = /* @__PURE__ */ new Date();
          let y = date2.getFullYear();
          let MM = date2.getMonth() + 1;
          MM = MM < 10 ? "0" + MM : MM;
          let d = date2.getDate();
          d = d < 10 ? "0" + d : d;
          let h = date2.getHours();
          h = h < 10 ? "0" + h : h;
          let m = date2.getMinutes();
          m = m < 10 ? "0" + m : m;
          date2.getSeconds();
          if (now.getDate() - d == 1 && now - date2 < 1728e5) {
            return "昨天" + h + ":" + m;
          } else if (now - date2 < 864e5) {
            return h + ":" + m;
          } else if (now - date2 >= 864e5 && now - date2 < 31536e6) {
            return MM + "-" + d + " " + h + ":" + m;
          } else if (now - date2 >= 31536e6) {
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
        formatAppLog("log", "at pages/pagesall/home/chat.vue:211", e);
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
          formatAppLog("log", "at pages/pagesall/home/chat.vue:238", this.change);
          this.change = false;
          formatAppLog("log", "at pages/pagesall/home/chat.vue:240", this.change);
        } else if (this.change == false) {
          this.change = true;
        }
      },
      inputchange() {
        if (this.change == true) {
          formatAppLog("log", "at pages/pagesall/home/chat.vue:247", this.change);
          this.change = false;
          formatAppLog("log", "at pages/pagesall/home/chat.vue:249", this.change);
        } else if (this.change == false) {
          this.change = true;
        }
      },
      handleTouchStart() {
        formatAppLog("log", "at pages/pagesall/home/chat.vue:255", "1111");
        this.startTime = (/* @__PURE__ */ new Date()).getTime();
      },
      handleTouchEnd() {
        formatAppLog("log", "at pages/pagesall/home/chat.vue:259", "1111");
        if (this.startTime) {
          let endTime = (/* @__PURE__ */ new Date()).getTime();
          let duration1 = (endTime - this.startTime) / 1e3;
          let duration = Math.round(duration1);
          if (duration < 1) {
            formatAppLog("log", "at pages/pagesall/home/chat.vue:265", "时间太短了");
          } else {
            formatAppLog("log", "at pages/pagesall/home/chat.vue:267", `${duration}`);
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
        uni.navigateBack();
      }
    },
    mounted() {
      formatAppLog("log", "at pages/pagesall/home/chat.vue:292", "1111");
      this.poalast();
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "chat_box",
      "scroll-into-view": $data.poaMessgae
    }, [
      vue.createElementVNode("view", { class: "chat_title_box" }, [
        vue.createElementVNode("view", { class: "chat_title" }, [
          vue.createElementVNode("view", {
            class: "chat_title_img",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.chat_goback && $options.chat_goback(...args))
          }, [
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng427bd6433cc6e0a8e82f63b3174b2c817dc9c299bd0c4414c8d258f46cf46f94",
              alt: ""
            })
          ]),
          vue.createElementVNode("view", { class: "chat_head_img" }, [
            vue.createElementVNode("img", {
              src: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/cf805a0bbe4b4f17abb1c215c9ec2df7_mergeImage.png",
              alt: ""
            })
          ]),
          vue.createElementVNode(
            "view",
            { class: "chat_name" },
            vue.toDisplayString($data.chat_name),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode("view", { class: "chat-container" }, [
        vue.createElementVNode("scroll-view", {
          ref: "messageList",
          "scroll-y": " true",
          class: "message-list",
          "scroll-into-view": $data.poaMessgae
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.messages_stu, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: "message-item_stu"
              }, [
                index2 == 0 || item.time - $data.messages_stu[index2 - 1].time >= 3e5 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "time"
                }, [
                  vue.createElementVNode(
                    "view",
                    null,
                    vue.toDisplayString($options.formatDate(item.time)),
                    1
                    /* TEXT */
                  )
                ])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("view", {
                  class: "content1",
                  id: item.status == "l" ? "l" : "r"
                }, [
                  item.type == "img" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 0,
                    class: "text"
                  }, [
                    vue.createElementVNode("img", {
                      src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng580a34d876cda0a5b37d451367934eb478865bb7b4b80bedde3f71fcaa5c8775",
                      alt: ""
                    })
                  ])) : vue.createCommentVNode("v-if", true),
                  item.type == "record" ? (vue.openBlock(), vue.createElementBlock("view", {
                    key: 1,
                    class: "advio"
                  }, [
                    vue.createElementVNode(
                      "view",
                      { class: "" },
                      vue.toDisplayString(item.text) + ' " ',
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode("img", {
                      src: _imports_0,
                      alt: ""
                    })
                  ])) : vue.createCommentVNode("v-if", true),
                  item.type == "text" ? (vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      key: 2,
                      class: "text"
                    },
                    vue.toDisplayString(item.text),
                    1
                    /* TEXT */
                  )) : vue.createCommentVNode("v-if", true),
                  vue.createElementVNode("view", {
                    class: "avatar",
                    style: { "margin-left": "20rpx" }
                  }, [
                    vue.createElementVNode("image", {
                      src: item.avatar
                    }, null, 8, ["src"])
                  ])
                ], 8, ["id"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode("view", { id: "poaMessgae" }),
          vue.createCommentVNode(" 仅用于定位到消息最后一条 ")
        ], 8, ["scroll-into-view"]),
        vue.createElementVNode("view", { class: "input-container" }, [
          vue.createElementVNode("view", { class: "chat_input" }, [
            $data.change ? (vue.openBlock(), vue.createElementBlock("img", {
              key: 0,
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8336930e00a2e304b3bd63727ff79ab21eb7c0da57bcc1da2dc88adc00ef2cbe",
              alt: "",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.input_change && $options.input_change(...args))
            })) : (vue.openBlock(), vue.createElementBlock("img", {
              key: 1,
              src: _imports_1,
              alt: "",
              srcset: "",
              onClick: _cache[2] || (_cache[2] = (...args) => $options.inputchange && $options.inputchange(...args))
            })),
            $data.change ? vue.withDirectives((vue.openBlock(), vue.createElementBlock(
              "input",
              {
                key: 2,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.inputMessage = $event),
                placeholder: "发消息...",
                onFocus: _cache[4] || (_cache[4] = (...args) => $options.scrollToBottom && $options.scrollToBottom(...args)),
                "confirm-type": "send",
                onConfirm: _cache[5] || (_cache[5] = (...args) => $options.onSend && $options.onSend(...args))
              },
              null,
              544
              /* NEED_HYDRATION, NEED_PATCH */
            )), [
              [vue.vModelText, $data.inputMessage]
            ]) : (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 3,
                class: "voice",
                onTouchstart: _cache[6] || (_cache[6] = (...args) => $options.handleTouchStart && $options.handleTouchStart(...args)),
                onTouchend: _cache[7] || (_cache[7] = (...args) => $options.handleTouchEnd && $options.handleTouchEnd(...args))
              },
              " 按住说话 ",
              32
              /* NEED_HYDRATION */
            )),
            vue.createElementVNode("img", {
              src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng59f0b59c28758e28c9970d6e3110b53be29f04b99fded460a8f2a1cd5b32d1da",
              alt: "",
              class: "btn_img"
            })
          ])
        ])
      ])
    ], 8, ["scroll-into-view"]);
  }
  const PagesPagesallHomeChat = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/home/chat.vue"]]);
  const _sfc_main$2 = {
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
        this.listdata.forEach((e, index2) => {
          let now = /* @__PURE__ */ new Date();
          let end = new Date(e.end);
          let timeDiff = end - now;
          if (timeDiff > 0) {
            let totalSeconds = Math.floor(timeDiff / 1e3);
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor(totalSeconds % 3600 / 60);
            let seconds = totalSeconds % 60;
            this.listdata[index2].hours = this.formatTime(hours);
            this.listdata[index2].minutes = this.formatTime(minutes);
            this.listdata[index2].seconds = this.formatTime(seconds);
          } else {
            this.listdata[index2].hours = "00";
            this.listdata[index2].minutes = "00";
            this.listdata[index2].seconds = "00";
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
        uni.navigateBack();
      },
      btnsignup() {
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("view", { class: "learn_title" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/abf07bd571444c73aceb1d1b20093538_mergeImage.png",
            alt: "",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.back_learn && $options.back_learn(...args))
          }),
          vue.createElementVNode("view", null, "视频学习")
        ]),
        vue.createElementVNode("video", {
          class: "learn_video",
          src: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
        }),
        vue.createElementVNode("view", { class: "learn_text" }, " 横撇斜钩教学视频 "),
        vue.createElementVNode("view", { class: "actiClass" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.listdata, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "act_itme",
                key: index2
              }, [
                vue.createElementVNode("view", { class: "list_index" }, [
                  vue.createElementVNode("view", { class: "act_Img" }, [
                    vue.createElementVNode("img", {
                      src: item.hearimg,
                      alt: ""
                    }, null, 8, ["src"]),
                    vue.createElementVNode("view", { class: "act_Teacher" }, [
                      vue.createElementVNode(
                        "text",
                        null,
                        vue.toDisplayString(item.teachername),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("text", { style: { "font-size": "20rpx", "margin-top": "10rpx" } }, "授课")
                    ]),
                    vue.createElementVNode("view", { class: "act_time" }, [
                      vue.createElementVNode("text", { style: { "font-size": "24rpx" } }, "距结束还剩:"),
                      vue.createElementVNode("view", { class: "time_textbox" }, [
                        vue.createElementVNode(
                          "text",
                          { style: { "font-size": "20rpx", "padding": "3rpx 5rpx 3rpx 5rpx", "border-radius": "5rpx" } },
                          vue.toDisplayString(item.hours),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("text", { style: { "font-size": "20rpx", "background-color": "#fff", "color": "#F53C38" } }, ":"),
                        vue.createElementVNode(
                          "text",
                          { style: { "font-size": "20rpx", "padding": "3rpx 5rpx 3rpx 5rpx", "border-radius": "5rpx" } },
                          vue.toDisplayString(item.minutes),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("text", { style: { "font-size": "20rpx", "background-color": "#fff", "color": "#F53C38" } }, ":"),
                        vue.createElementVNode(
                          "text",
                          { style: { "font-size": "20rpx", "padding": "3rpx 5rpx 3rpx 5rpx", "border-radius": "5rpx" } },
                          vue.toDisplayString(item.seconds),
                          1
                          /* TEXT */
                        )
                      ])
                    ])
                  ])
                ]),
                vue.createElementVNode("view", { class: "peo_text" }, " 已有30人学习 ")
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "input_leabox" }, [
          vue.createElementVNode("view", { class: "ipt_learn" }, [
            vue.createElementVNode("textarea", {
              type: "text",
              placeholder: "本次横撇斜钩教学视频：相关作业就是多写多练多练多写",
              class: "input_padd"
            })
          ]),
          vue.createElementVNode("view", { class: "btn_leabox" }, " 提交作业 ")
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesPagesallCourseGoLearn = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/course/go_learn.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        stu_List: [{
          name: "刘琪琦",
          id: "1008601"
        }]
      };
    },
    methods: {
      res_goback() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "res_box" }, [
      vue.createElementVNode("view", { class: "res_box2" }, [
        vue.createElementVNode("img", {
          src: "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge1553c1d8d43568ee582b54f1deab731573c8804790b09e299c2e73eda1cfa68",
          alt: "",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.res_goback && $options.res_goback(...args))
        }),
        vue.createElementVNode("view", { class: "res_text" }, " AI测评结果 ")
      ]),
      vue.createElementVNode("view", { class: "res_box3" }, [
        vue.createElementVNode("view", { class: "res_heard" }, [
          vue.createElementVNode("img", {
            src: "https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e8add875eba745c3a7751cefc8b2d793_mergeImage.png",
            alt: ""
          }),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.stu_List, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "head_text",
                key: index2
              }, [
                vue.createElementVNode(
                  "view",
                  { class: "text_1" },
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "text_2" },
                  " ID:" + vue.toDisplayString(item.id),
                  1
                  /* TEXT */
                )
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "score_box" })
      ])
    ]);
  }
  const PagesPagesallAiDeteAiResult = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/Administrator/Desktop/zexishuhua/pages/pagesall/aiDete/aiResult.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/login/ratpass", PagesLoginRatpass);
  __definePage("pages/login/register", PagesLoginRegister);
  __definePage("pages/pagesall/home", PagesPagesallHome);
  __definePage("pages/pagesall/course", PagesPagesallCourse);
  __definePage("pages/pagesall/aiDete", PagesPagesallAiDete);
  __definePage("pages/pagesall/oper", PagesPagesallOper);
  __definePage("pages/pagesall/mypage", PagesPagesallMypage);
  __definePage("pages/pagesall/home/signUp", PagesPagesallHomeSignUp);
  __definePage("pages/pagesall/home/message", PagesPagesallHomeMessage);
  __definePage("pages/pagesall/home/search", PagesPagesallHomeSearch);
  __definePage("pages/pagesall/home/sacnpage", PagesPagesallHomeSacnpage);
  __definePage("pages/pagesall/home/mycode", PagesPagesallHomeMycode);
  __definePage("pages/pagesall/home/adverMess", PagesPagesallHomeAdverMess);
  __definePage("pages/pagesall/home/adver_detail", PagesPagesallHomeAdverDetail);
  __definePage("pages/pagesall/home/add_friend", PagesPagesallHomeAddFriend);
  __definePage("pages/pagesall/home/game", PagesPagesallHomeGame);
  __definePage("pages/pagesall/home/chat", PagesPagesallHomeChat);
  __definePage("pages/pagesall/course/go_learn", PagesPagesallCourseGoLearn);
  __definePage("pages/pagesall/aiDete/aiResult", PagesPagesallAiDeteAiResult);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/Administrator/Desktop/zexishuhua/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
