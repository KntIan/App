import "./chunk-BQWMX7FD.js";

// ../../../Project Folder/ZXHand/ZXHandwritting_APP_uniapp/node_modules/@tencentcloud/universal-api/index.js
var e = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync && Boolean(wx.getSystemInfoSync().fontSizeSetting);
var t = "undefined" != typeof uni && "undefined" == typeof window;
var n = e || t;
var o = "undefined" != typeof uni;
var r = ("undefined" != typeof uni || "undefined" != typeof window) && !n;
var i = e ? wx : o ? uni : "undefined" != typeof window ? window : {};
var c = r && window && window.navigator && window.navigator.userAgent || "";
var s = /Android/i.test(c);
var l = /(?:Windows Phone)/.test(c);
var u = /(?:SymbianOS)/.test(c);
var d = r && ("ontouchstart" in window || navigator.maxTouchPoints > 0) && function() {
  if (r)
    return !!/Tablet|Pad/i.test(c) || (window.matchMedia("(orientation: portrait)").matches ? window.innerWidth >= 768 && window.innerHeight >= 1024 : window.innerWidth >= 1024 && window.innerHeight >= 768);
  return false;
}();
var f = /iPhone/i.test(c) || /iPod/i.test(c);
var a = e;
var w = s || l || u || f || d;
var g = r && !w;
var m = t && !e;
function h() {
  let e2 = "";
  return g ? e2 = "pc" : w ? e2 = "h5" : a ? e2 = "wechat" : m && (e2 = "app"), e2;
}
function p(t2) {
  const { count: n2 = 1, sourceType: r2 = ["album"], mediaType: c2, dom: s2 } = t2;
  return new Promise((t3, l2) => {
    o ? e && i.chooseMedia ? i.chooseMedia({ count: n2, sourceType: r2, mediaType: c2, success: (e2) => {
      t3({ files: e2 });
    }, error: (e2) => {
      l2(e2);
    } }) : i.chooseVideo({ count: n2, sourceType: r2, success: (e2) => {
      t3({ files: e2 });
    }, error: (e2) => {
      l2(e2);
    } }) : ((null == s2 ? void 0 : s2.click) && s2.click(), s2.value = "", null == s2 || s2.addEventListener("change", (e2) => {
      var n3;
      (null === (n3 = e2.target.files) || void 0 === n3 ? void 0 : n3.length) <= 0 || t3({ files: e2.target.files[0] });
    }, false));
  });
}
function y(e2) {
  return p(Object.assign({ mediaType: ["image"] }, e2));
}
function S(e2) {
  return p(Object.assign({ mediaType: ["video"] }, e2));
}
var v = /* @__PURE__ */ new Map();
function E(e2, t2) {
  v.set(e2, t2);
}
function b(e2, t2) {
  if (!e2)
    return Promise.reject(new Error(`getBoundingClientRect get error selector ${typeof e2}.`));
  if (window || document) {
    const t3 = "object" == typeof e2 ? e2 : document.querySelector(e2);
    if (!t3)
      return Promise.reject(new Error(`getBoundingClientRect can't find ${e2} dom.`));
    const n2 = t3.getBoundingClientRect();
    return Promise.resolve({ id: t3.id, top: n2.top, left: n2.left, right: n2.right, bottom: n2.bottom, width: n2.width, height: n2.height, x: n2.x, y: n2.y });
  }
  if (o) {
    if (!t2)
      return Promise.reject(new Error("getBoundingClientRect need instanceName in params."));
    const n2 = uni.createSelectorQuery().in(v.get(t2));
    return new Promise((t3, o2) => {
      n2.select(e2).boundingClientRect((e3) => {
        e3 && t3(e3);
      }).exec(), setTimeout(() => o2(new Error(`getBoundingClientRect ${e2} timeout.`)), 500);
    });
  }
  return Promise.reject(new Error("getBoundingClientRect occur error"));
}
function P(e2) {
  if (o)
    throw new Error("getBoundingClientRectSync can not use in uni-app.");
  if (window || document) {
    const t2 = "object" == typeof e2 ? e2 : document.querySelector(e2);
    if (!t2)
      throw new Error(`getBoundingClientRectSync can't find ${e2} dom.`);
    const n2 = t2.getBoundingClientRect();
    return { id: t2.id, top: n2.top, left: n2.left, right: n2.right, bottom: n2.bottom, width: n2.width, height: n2.height, x: n2.x, y: n2.y };
  }
  throw new Error("getBoundingClientRectSync occur error.");
}
function T(e2, t2) {
  if (!e2)
    return Promise.reject(new Error(`getScrollInfo get error selector ${typeof e2}.`));
  if (!o && window) {
    const t3 = "object" == typeof e2 ? e2 : document.querySelector(e2);
    return t3 ? Promise.resolve({ id: t3.id, scrollTop: t3.scrollTop, scrollLeft: t3.scrollLeft, scrollWidth: t3.scrollWidth, scrollHeight: t3.scrollHeight }) : Promise.reject(new Error(`getScrollInfo can't find ${e2} dom.`));
  }
  if (o) {
    if (!t2)
      return Promise.reject(new Error("getScrollInfo need instanceName in params."));
    const n2 = uni.createSelectorQuery().in(v.get(t2));
    return new Promise((t3, o2) => {
      n2.select(e2).scrollOffset((e3) => {
        e3 && t3(e3);
      }).exec(), setTimeout(() => o2(new Error(`getScrollInfo ${e2} timeout.`)), 500);
    });
  }
  return Promise.reject(new Error("getScrollInfo occur error"));
}
function j(e2) {
  if (o)
    throw new Error("getScrollInfoSync can not use in uni-app.");
  if (!o && window) {
    const t2 = "object" == typeof e2 ? e2 : document.querySelector(e2);
    if (!t2)
      throw new Error(`getScrollInfoSync can't find ${e2} dom.`);
    return { id: t2.id, scrollTop: t2.scrollTop, scrollLeft: t2.scrollLeft, scrollWidth: t2.scrollWidth, scrollHeight: t2.scrollHeight };
  }
  throw new Error("getScrollInfoSync() occur error.");
}
function L(e2, t2) {
  if (o) {
    if (!t2)
      return Promise.reject(new Error("getFields need instanceName in params."));
    const n2 = uni.createSelectorQuery().in(v.get(t2));
    return new Promise((t3, o2) => {
      n2.select(e2).fields({ rect: true, size: true, scrollOffset: true }, (e3) => {
        e3 && t3(e3);
      }).exec(), setTimeout(() => o2(new Error(`get ${e2} fields timeout.`)), 500);
    });
  }
  return Promise.reject(new Error("getFields occur error"));
}
var C = class _C {
  constructor() {
    if (_C.instance)
      return _C.instance;
    _C.instance = this, this.eventCallback = null, this.listener = null, this.button = 0, this.init();
  }
  init() {
    r && (this.eventCallback = (e2) => {
      this.listener && this.listener(e2);
    }, document.addEventListener("mousedown", this.eventCallback));
  }
  listen(e2) {
    if (r) {
      const { domRefs: t2, ignoreDomRefs: n2, handler: o2, button: r2 = 0 } = e2;
      this.button = r2, this.listener = (e3) => {
        const r3 = Array.isArray(n2) ? n2 : [n2];
        for (const t3 of r3)
          if (t3 && t3.contains(e3.target))
            return;
        const i2 = Array.isArray(t2) ? t2 : [t2];
        for (const t3 of i2)
          if (t3 && t3.contains(e3.target) && this.button === e3.button)
            return;
        o2(e3), this.remove();
      };
    }
  }
  remove() {
    this.listener = null, this.button = -1;
  }
};
function I(e2) {
  const { element: t2, onLongPress: n2, options: o2 = {} } = e2;
  if (!t2 || !n2)
    throw new Error("addLongPressEventListener missing arguments");
  const { duration: r2 = 800, eventDelegation: i2 } = o2;
  let c2;
  function s2() {
    clearTimeout(c2), u2();
  }
  function l2() {
    clearTimeout(c2), u2();
  }
  function u2() {
    t2.removeEventListener("pointerup", s2), t2.removeEventListener("pointermove", l2);
  }
  t2.addEventListener("pointerdown", (e3) => {
    const o3 = e3.target, u3 = (null == i2 ? void 0 : i2.subSelector) ? o3.closest(i2.subSelector) || void 0 : o3, d2 = e3.currentTarget;
    c2 = setTimeout(() => n2(e3, u3, d2), r2), t2.addEventListener("pointerup", s2), t2.addEventListener("pointermove", l2);
  });
}
console.log("UniversalAPI.VERSION:2.3.2");
var R = new C();
export {
  i as TUIGlobal,
  I as addLongPressListener,
  y as chooseImage,
  S as chooseVideo,
  b as getBoundingClientRect,
  P as getBoundingClientRectSync,
  L as getFields,
  h as getPlatform,
  T as getScrollInfo,
  j as getScrollInfoSync,
  f as isIOS,
  R as outsideClick,
  E as setInstanceMapping
};
//# sourceMappingURL=@tencentcloud_universal-api.js.map
