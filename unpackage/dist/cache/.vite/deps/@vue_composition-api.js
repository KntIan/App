import {
  __commonJS
} from "./chunk-BQWMX7FD.js";

// vite:cjs-external-facade:vue
import * as m from "vue";
var require_vue = __commonJS({
  "vite:cjs-external-facade:vue"(exports, module) {
    module.exports = m;
  }
});

// ../../../Project Folder/ZXHand/ZXHandwritting_APP_uniapp/node_modules/@vue/composition-api/dist/vue-composition-api.mjs
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i = 0;
  if (m2)
    return m2.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i = m2.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m2 = i["return"]))
        m2.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function warn$1(message) {
  var _a;
  warn(message, (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
}
var activeEffectScope;
var effectScopeStack = [];
var EffectScopeImpl = (
  /** @class */
  function() {
    function EffectScopeImpl2(vm) {
      this.active = true;
      this.effects = [];
      this.cleanups = [];
      this.vm = vm;
    }
    EffectScopeImpl2.prototype.run = function(fn) {
      if (this.active) {
        try {
          this.on();
          return fn();
        } finally {
          this.off();
        }
      } else if (true) {
        warn$1("cannot run an inactive effect scope.");
      }
      return;
    };
    EffectScopeImpl2.prototype.on = function() {
      if (this.active) {
        effectScopeStack.push(this);
        activeEffectScope = this;
      }
    };
    EffectScopeImpl2.prototype.off = function() {
      if (this.active) {
        effectScopeStack.pop();
        activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
      }
    };
    EffectScopeImpl2.prototype.stop = function() {
      if (this.active) {
        this.vm.$destroy();
        this.effects.forEach(function(e) {
          return e.stop();
        });
        this.cleanups.forEach(function(cleanup) {
          return cleanup();
        });
        this.active = false;
      }
    };
    return EffectScopeImpl2;
  }()
);
var EffectScope = (
  /** @class */
  function(_super) {
    __extends(EffectScope2, _super);
    function EffectScope2(detached) {
      if (detached === void 0) {
        detached = false;
      }
      var _this = this;
      var vm = void 0;
      withCurrentInstanceTrackingDisabled(function() {
        vm = defineComponentInstance(getVueConstructor());
      });
      _this = _super.call(this, vm) || this;
      if (!detached) {
        recordEffectScope(_this);
      }
      return _this;
    }
    return EffectScope2;
  }(EffectScopeImpl)
);
function recordEffectScope(effect, scope) {
  var _a;
  scope = scope || activeEffectScope;
  if (scope && scope.active) {
    scope.effects.push(effect);
    return;
  }
  var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
  vm && vm.$on("hook:destroyed", function() {
    return effect.stop();
  });
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function getCurrentScope() {
  return activeEffectScope;
}
function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  } else if (true) {
    warn$1("onScopeDispose() is called when there is no active effect scope to be associated with.");
  }
}
function getCurrentScopeVM() {
  var _a, _b;
  return ((_a = getCurrentScope()) === null || _a === void 0 ? void 0 : _a.vm) || ((_b = getCurrentInstance()) === null || _b === void 0 ? void 0 : _b.proxy);
}
function bindCurrentScopeToVM(vm) {
  if (!vm.scope) {
    var scope_1 = new EffectScopeImpl(vm.proxy);
    vm.scope = scope_1;
    vm.proxy.$on("hook:destroyed", function() {
      return scope_1.stop();
    });
  }
  return vm.scope;
}
var vueDependency = void 0;
try {
  requiredVue = require_vue();
  if (requiredVue && isVue(requiredVue)) {
    vueDependency = requiredVue;
  } else if (requiredVue && "default" in requiredVue && isVue(requiredVue.default)) {
    vueDependency = requiredVue.default;
  }
} catch (_a) {
}
var requiredVue;
var vueConstructor = null;
var currentInstance = null;
var currentInstanceTracking = true;
var PluginInstalledFlag = "__composition_api_installed__";
function isVue(obj) {
  return obj && isFunction(obj) && obj.name === "Vue";
}
function isVueRegistered(Vue) {
  return vueConstructor && hasOwn(Vue, PluginInstalledFlag);
}
function getVueConstructor() {
  if (true) {
    assert(vueConstructor, "must call Vue.use(VueCompositionAPI) before using any function.");
  }
  return vueConstructor;
}
function getRegisteredVueOrDefault() {
  var constructor = vueConstructor || vueDependency;
  if (true) {
    assert(constructor, "No vue dependency found.");
  }
  return constructor;
}
function setVueConstructor(Vue) {
  if (vueConstructor && Vue.__proto__ !== vueConstructor.__proto__) {
    warn("[vue-composition-api] another instance of Vue installed");
  }
  vueConstructor = Vue;
  Object.defineProperty(Vue, PluginInstalledFlag, {
    configurable: true,
    writable: true,
    value: true
  });
}
function withCurrentInstanceTrackingDisabled(fn) {
  var prev = currentInstanceTracking;
  currentInstanceTracking = false;
  try {
    fn();
  } finally {
    currentInstanceTracking = prev;
  }
}
function setCurrentInstance(instance) {
  if (!currentInstanceTracking)
    return;
  var prev = currentInstance;
  prev === null || prev === void 0 ? void 0 : prev.scope.off();
  currentInstance = instance;
  currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope.on();
}
function getCurrentInstance() {
  return currentInstance;
}
var instanceMapCache = /* @__PURE__ */ new WeakMap();
function toVue3ComponentInstance(vm) {
  if (instanceMapCache.has(vm)) {
    return instanceMapCache.get(vm);
  }
  var instance = {
    proxy: vm,
    update: vm.$forceUpdate,
    type: vm.$options,
    uid: vm._uid,
    // $emit is defined on prototype and it expected to be bound
    emit: vm.$emit.bind(vm),
    parent: null,
    root: null
    // to be immediately set
  };
  bindCurrentScopeToVM(instance);
  var instanceProps = [
    "data",
    "props",
    "attrs",
    "refs",
    "vnode",
    "slots"
  ];
  instanceProps.forEach(function(prop) {
    proxy(instance, prop, {
      get: function() {
        return vm["$".concat(prop)];
      }
    });
  });
  proxy(instance, "isMounted", {
    get: function() {
      return vm._isMounted;
    }
  });
  proxy(instance, "isUnmounted", {
    get: function() {
      return vm._isDestroyed;
    }
  });
  proxy(instance, "isDeactivated", {
    get: function() {
      return vm._inactive;
    }
  });
  proxy(instance, "emitted", {
    get: function() {
      return vm._events;
    }
  });
  instanceMapCache.set(vm, instance);
  if (vm.$parent) {
    instance.parent = toVue3ComponentInstance(vm.$parent);
  }
  if (vm.$root) {
    instance.root = toVue3ComponentInstance(vm.$root);
  }
  return instance;
}
var toString = function(x) {
  return Object.prototype.toString.call(x);
};
function isNative(Ctor) {
  return typeof Ctor === "function" && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== "undefined" && isNative(Symbol) && typeof Reflect !== "undefined" && isNative(Reflect.ownKeys);
var noopFn = function(_) {
  return _;
};
function proxy(target, key, _a) {
  var get2 = _a.get, set2 = _a.set;
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get: get2 || noopFn,
    set: set2 || noopFn
  });
}
function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
function hasOwn(obj, key) {
  return Object.hasOwnProperty.call(obj, key);
}
function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vue-composition-api] ".concat(msg));
  }
}
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || // $flow-disable-line
  typeof value === "symbol" || typeof value === "boolean";
}
function isArray(x) {
  return Array.isArray(x);
}
var objectToString = Object.prototype.toString;
var toTypeString = function(value) {
  return objectToString.call(value);
};
var isMap = function(val) {
  return toTypeString(val) === "[object Map]";
};
var isSet = function(val) {
  return toTypeString(val) === "[object Set]";
};
var MAX_VALID_ARRAY_LENGTH = 4294967295;
function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val) && n <= MAX_VALID_ARRAY_LENGTH;
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(x) {
  return toString(x) === "[object Object]";
}
function isFunction(x) {
  return typeof x === "function";
}
function isUndef(v) {
  return v === void 0 || v === null;
}
function warn(msg, vm) {
  var Vue = getRegisteredVueOrDefault();
  if (!Vue || !Vue.util)
    console.warn("[vue-composition-api] ".concat(msg));
  else
    Vue.util.warn(msg, vm);
}
function logError(err, vm, info) {
  if (true) {
    warn("Error in ".concat(info, ': "').concat(err.toString(), '"'), vm);
  }
  if (typeof window !== "undefined" && typeof console !== "undefined") {
    console.error(err);
  } else {
    throw err;
  }
}
function isSame(value1, value2) {
  if (value1 === value2) {
    return value1 !== 0 || 1 / value1 === 1 / value2;
  } else {
    return value1 !== value1 && value2 !== value2;
  }
}
function getCurrentInstanceForFn(hook, target) {
  target = target || getCurrentInstance();
  if (!target) {
    warn("".concat(hook, " is called when there is no active component instance to be ") + "associated with. Lifecycle injection APIs can only be used during execution of setup().");
  }
  return target;
}
function defineComponentInstance(Ctor, options) {
  if (options === void 0) {
    options = {};
  }
  var silent = Ctor.config.silent;
  Ctor.config.silent = true;
  var vm = new Ctor(options);
  Ctor.config.silent = silent;
  return vm;
}
function isComponentInstance(obj) {
  var Vue = getVueConstructor();
  return Vue && obj instanceof Vue;
}
function createSlotProxy(vm, slotName) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (!vm.$scopedSlots[slotName]) {
      if (true)
        return warn("slots.".concat(slotName, '() got called outside of the "render()" scope'), vm);
      return;
    }
    return vm.$scopedSlots[slotName].apply(vm, args);
  };
}
function resolveSlots(slots, normalSlots) {
  var res;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    return slots._normalized;
  } else {
    res = {};
    for (var key in slots) {
      if (slots[key] && key[0] !== "$") {
        res[key] = true;
      }
    }
  }
  for (var key in normalSlots) {
    if (!(key in res)) {
      res[key] = true;
    }
  }
  return res;
}
var vueInternalClasses;
var getVueInternalClasses = function() {
  if (!vueInternalClasses) {
    var vm = defineComponentInstance(getVueConstructor(), {
      computed: {
        value: function() {
          return 0;
        }
      }
    });
    var Watcher = vm._computedWatchers.value.constructor;
    var Dep = vm._data.__ob__.dep.constructor;
    vueInternalClasses = {
      Watcher,
      Dep
    };
    vm.$destroy();
  }
  return vueInternalClasses;
};
function createSymbol(name) {
  return hasSymbol ? Symbol.for(name) : name;
}
var WatcherPreFlushQueueKey = createSymbol("composition-api.preFlushQueue");
var WatcherPostFlushQueueKey = createSymbol("composition-api.postFlushQueue");
var RefKey = "composition-api.refKey";
var accessModifiedSet = /* @__PURE__ */ new WeakMap();
var rawSet = /* @__PURE__ */ new WeakMap();
var readonlySet = /* @__PURE__ */ new WeakMap();
function set$1(target, key, val) {
  var Vue = getVueConstructor();
  var _a = Vue.util, warn2 = _a.warn, defineReactive = _a.defineReactive;
  if (isUndef(target) || isPrimitive(target)) {
    warn2("Cannot set reactive property on undefined, null, or primitive value: ".concat(target));
  }
  var ob = target.__ob__;
  function ssrMockReactivity() {
    if (ob && isObject(val) && !hasOwn(val, "__ob__")) {
      mockReactivityDeep(val);
    }
  }
  if (isArray(target)) {
    if (isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      ssrMockReactivity();
      return val;
    } else if (key === "length" && val !== target.length) {
      target.length = val;
      ob === null || ob === void 0 ? void 0 : ob.dep.notify();
      return val;
    }
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    ssrMockReactivity();
    return val;
  }
  if (target._isVue || ob && ob.vmCount) {
    warn2("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option.");
    return val;
  }
  if (!ob) {
    target[key] = val;
    return val;
  }
  defineReactive(ob.value, key, val);
  defineAccessControl(target, key, val);
  ssrMockReactivity();
  ob.dep.notify();
  return val;
}
var _isForceTrigger = false;
function isForceTrigger() {
  return _isForceTrigger;
}
function setForceTrigger(v) {
  _isForceTrigger = v;
}
var RefImpl = (
  /** @class */
  /* @__PURE__ */ function() {
    function RefImpl2(_a) {
      var get2 = _a.get, set2 = _a.set;
      proxy(this, "value", {
        get: get2,
        set: set2
      });
    }
    return RefImpl2;
  }()
);
function createRef(options, isReadonly2, isComputed) {
  if (isReadonly2 === void 0) {
    isReadonly2 = false;
  }
  if (isComputed === void 0) {
    isComputed = false;
  }
  var r = new RefImpl(options);
  if (isComputed)
    r.effect = true;
  var sealed = Object.seal(r);
  if (isReadonly2)
    readonlySet.set(sealed, true);
  return sealed;
}
function ref(raw) {
  var _a;
  if (isRef(raw)) {
    return raw;
  }
  var value = reactive((_a = {}, _a[RefKey] = raw, _a));
  return createRef({
    get: function() {
      return value[RefKey];
    },
    set: function(v) {
      return value[RefKey] = v;
    }
  });
}
function isRef(value) {
  return value instanceof RefImpl;
}
function unref(ref2) {
  return isRef(ref2) ? ref2.value : ref2;
}
function toRefs(obj) {
  if (!isReactive(obj)) {
    warn("toRefs() expects a reactive object but received a plain one.");
  }
  if (!isPlainObject(obj))
    return obj;
  var ret = {};
  for (var key in obj) {
    ret[key] = toRef(obj, key);
  }
  return ret;
}
function customRef(factory) {
  var version2 = ref(0);
  return createRef(factory(function() {
    return void version2.value;
  }, function() {
    ++version2.value;
  }));
}
function toRef(object, key) {
  if (!(key in object))
    set$1(object, key, void 0);
  var v = object[key];
  if (isRef(v))
    return v;
  return createRef({
    get: function() {
      return object[key];
    },
    set: function(v2) {
      return object[key] = v2;
    }
  });
}
function shallowRef(raw) {
  var _a;
  if (isRef(raw)) {
    return raw;
  }
  var value = shallowReactive((_a = {}, _a[RefKey] = raw, _a));
  return createRef({
    get: function() {
      return value[RefKey];
    },
    set: function(v) {
      return value[RefKey] = v;
    }
  });
}
function triggerRef(value) {
  if (!isRef(value))
    return;
  setForceTrigger(true);
  value.value = value.value;
  setForceTrigger(false);
}
function proxyRefs(objectWithRefs) {
  var _a, e_1, _b;
  if (isReactive(objectWithRefs)) {
    return objectWithRefs;
  }
  var value = reactive((_a = {}, _a[RefKey] = objectWithRefs, _a));
  def(value, RefKey, value[RefKey], false);
  var _loop_1 = function(key2) {
    proxy(value, key2, {
      get: function() {
        if (isRef(value[RefKey][key2])) {
          return value[RefKey][key2].value;
        }
        return value[RefKey][key2];
      },
      set: function(v) {
        if (isRef(value[RefKey][key2])) {
          return value[RefKey][key2].value = unref(v);
        }
        value[RefKey][key2] = unref(v);
      }
    });
  };
  try {
    for (var _c = __values(Object.keys(objectWithRefs)), _d = _c.next(); !_d.done; _d = _c.next()) {
      var key = _d.value;
      _loop_1(key);
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_d && !_d.done && (_b = _c.return))
        _b.call(_c);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return value;
}
var SKIPFLAG = "__v_skip";
function isRaw(obj) {
  var _a;
  return Boolean(obj && hasOwn(obj, "__ob__") && typeof obj.__ob__ === "object" && ((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a[SKIPFLAG]));
}
function isReactive(obj) {
  var _a;
  return Boolean(obj && hasOwn(obj, "__ob__") && typeof obj.__ob__ === "object" && !((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a[SKIPFLAG]));
}
function setupAccessControl(target) {
  if (!isPlainObject(target) || isRaw(target) || isArray(target) || isRef(target) || isComponentInstance(target) || accessModifiedSet.has(target))
    return;
  accessModifiedSet.set(target, true);
  var keys = Object.keys(target);
  for (var i = 0; i < keys.length; i++) {
    defineAccessControl(target, keys[i]);
  }
}
function defineAccessControl(target, key, val) {
  if (key === "__ob__")
    return;
  if (isRaw(target[key]))
    return;
  var getter;
  var setter;
  var property = Object.getOwnPropertyDescriptor(target, key);
  if (property) {
    if (property.configurable === false) {
      return;
    }
    getter = property.get;
    setter = property.set;
    if ((!getter || setter) && arguments.length === 2) {
      val = target[key];
    }
  }
  setupAccessControl(val);
  proxy(target, key, {
    get: function getterHandler() {
      var value = getter ? getter.call(target) : val;
      if (key !== RefKey && isRef(value)) {
        return value.value;
      } else {
        return value;
      }
    },
    set: function setterHandler(newVal) {
      if (getter && !setter)
        return;
      if (key !== RefKey && isRef(val) && !isRef(newVal)) {
        val.value = newVal;
      } else if (setter) {
        setter.call(target, newVal);
        val = newVal;
      } else {
        val = newVal;
      }
      setupAccessControl(newVal);
    }
  });
}
function observe(obj) {
  var Vue = getRegisteredVueOrDefault();
  var observed;
  if (Vue.observable) {
    observed = Vue.observable(obj);
  } else {
    var vm = defineComponentInstance(Vue, {
      data: {
        $$state: obj
      }
    });
    observed = vm._data.$$state;
  }
  if (!hasOwn(observed, "__ob__")) {
    mockReactivityDeep(observed);
  }
  return observed;
}
function mockReactivityDeep(obj, seen) {
  var e_1, _a;
  if (seen === void 0) {
    seen = /* @__PURE__ */ new Set();
  }
  if (seen.has(obj) || hasOwn(obj, "__ob__") || !Object.isExtensible(obj))
    return;
  def(obj, "__ob__", mockObserver(obj));
  seen.add(obj);
  try {
    for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var value = obj[key];
      if (!(isPlainObject(value) || isArray(value)) || isRaw(value) || !Object.isExtensible(value)) {
        continue;
      }
      mockReactivityDeep(value, seen);
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return))
        _a.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
}
function mockObserver(value) {
  if (value === void 0) {
    value = {};
  }
  return {
    value,
    dep: {
      notify: noopFn,
      depend: noopFn,
      addSub: noopFn,
      removeSub: noopFn
    }
  };
}
function createObserver() {
  return observe({}).__ob__;
}
function shallowReactive(obj) {
  var e_2, _a;
  if (!isObject(obj)) {
    if (true) {
      warn('"shallowReactive()" must be called on an object.');
    }
    return obj;
  }
  if (!(isPlainObject(obj) || isArray(obj)) || isRaw(obj) || !Object.isExtensible(obj)) {
    return obj;
  }
  var observed = observe(isArray(obj) ? [] : {});
  var ob = observed.__ob__;
  var _loop_1 = function(key2) {
    var val = obj[key2];
    var getter;
    var setter;
    var property = Object.getOwnPropertyDescriptor(obj, key2);
    if (property) {
      if (property.configurable === false) {
        return "continue";
      }
      getter = property.get;
      setter = property.set;
    }
    proxy(observed, key2, {
      get: function getterHandler() {
        var _a2;
        (_a2 = ob.dep) === null || _a2 === void 0 ? void 0 : _a2.depend();
        return val;
      },
      set: function setterHandler(newVal) {
        var _a2;
        if (getter && !setter)
          return;
        if (!isForceTrigger() && val === newVal)
          return;
        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }
        (_a2 = ob.dep) === null || _a2 === void 0 ? void 0 : _a2.notify();
      }
    });
  };
  try {
    for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      _loop_1(key);
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return))
        _a.call(_b);
    } finally {
      if (e_2)
        throw e_2.error;
    }
  }
  return observed;
}
function reactive(obj) {
  if (!isObject(obj)) {
    if (true) {
      warn('"reactive()" must be called on an object.');
    }
    return obj;
  }
  if (!(isPlainObject(obj) || isArray(obj)) || isRaw(obj) || !Object.isExtensible(obj)) {
    return obj;
  }
  var observed = observe(obj);
  setupAccessControl(observed);
  return observed;
}
function markRaw(obj) {
  if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj)) {
    return obj;
  }
  var ob = createObserver();
  ob[SKIPFLAG] = true;
  def(obj, "__ob__", ob);
  rawSet.set(obj, true);
  return obj;
}
function toRaw(observed) {
  var _a;
  if (isRaw(observed) || !Object.isExtensible(observed)) {
    return observed;
  }
  return ((_a = observed === null || observed === void 0 ? void 0 : observed.__ob__) === null || _a === void 0 ? void 0 : _a.value) || observed;
}
function isReadonly(obj) {
  return readonlySet.has(obj);
}
function readonly(target) {
  if (!isObject(target)) {
    warn("value cannot be made reactive: ".concat(String(target)));
  } else {
    readonlySet.set(target, true);
  }
  return target;
}
function shallowReadonly(obj) {
  var e_1, _a;
  if (!isObject(obj)) {
    if (true) {
      warn("value cannot be made reactive: ".concat(String(obj)));
    }
    return obj;
  }
  if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj) && !isRef(obj)) {
    return obj;
  }
  var readonlyObj = isRef(obj) ? new RefImpl({}) : isReactive(obj) ? observe({}) : {};
  var source = reactive({});
  var ob = source.__ob__;
  var _loop_1 = function(key2) {
    var val = obj[key2];
    var getter;
    var property = Object.getOwnPropertyDescriptor(obj, key2);
    if (property) {
      if (property.configurable === false && !isRef(obj)) {
        return "continue";
      }
      getter = property.get;
    }
    proxy(readonlyObj, key2, {
      get: function getterHandler() {
        var value = getter ? getter.call(obj) : val;
        ob.dep.depend();
        return value;
      },
      set: function(v) {
        if (true) {
          warn('Set operation on key "'.concat(key2, '" failed: target is readonly.'));
        }
      }
    });
  };
  try {
    for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      _loop_1(key);
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return))
        _a.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  readonlySet.set(readonlyObj, true);
  return readonlyObj;
}
function del(target, key) {
  var Vue = getVueConstructor();
  var warn2 = Vue.util.warn;
  if (isUndef(target) || isPrimitive(target)) {
    warn2("Cannot delete reactive property on undefined, null, or primitive value: ".concat(target));
  }
  if (isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }
  var ob = target.__ob__;
  if (target._isVue || ob && ob.vmCount) {
    warn2("Avoid deleting properties on a Vue instance or its root $data - just set it to null.");
    return;
  }
  if (!hasOwn(target, key)) {
    return;
  }
  delete target[key];
  if (!ob) {
    return;
  }
  ob.dep.notify();
}
var genName = function(name) {
  return "on".concat(name[0].toUpperCase() + name.slice(1));
};
function createLifeCycle(lifeCyclehook) {
  return function(callback, target) {
    var instance = getCurrentInstanceForFn(genName(lifeCyclehook), target);
    return instance && injectHookOption(getVueConstructor(), instance, lifeCyclehook, callback);
  };
}
function injectHookOption(Vue, instance, hook, val) {
  var options = instance.proxy.$options;
  var mergeFn = Vue.config.optionMergeStrategies[hook];
  var wrappedHook = wrapHookCall(instance, val);
  options[hook] = mergeFn(options[hook], wrappedHook);
  return wrappedHook;
}
function wrapHookCall(instance, fn) {
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var prev = getCurrentInstance();
    setCurrentInstance(instance);
    try {
      return fn.apply(void 0, __spreadArray([], __read(args), false));
    } finally {
      setCurrentInstance(prev);
    }
  };
}
var onBeforeMount = createLifeCycle("beforeMount");
var onMounted = createLifeCycle("mounted");
var onBeforeUpdate = createLifeCycle("beforeUpdate");
var onUpdated = createLifeCycle("updated");
var onBeforeUnmount = createLifeCycle("beforeDestroy");
var onUnmounted = createLifeCycle("destroyed");
var onErrorCaptured = createLifeCycle("errorCaptured");
var onActivated = createLifeCycle("activated");
var onDeactivated = createLifeCycle("deactivated");
var onServerPrefetch = createLifeCycle("serverPrefetch");
var fallbackVM;
function flushPreQueue() {
  flushQueue(this, WatcherPreFlushQueueKey);
}
function flushPostQueue() {
  flushQueue(this, WatcherPostFlushQueueKey);
}
function hasWatchEnv(vm) {
  return vm[WatcherPreFlushQueueKey] !== void 0;
}
function installWatchEnv(vm) {
  vm[WatcherPreFlushQueueKey] = [];
  vm[WatcherPostFlushQueueKey] = [];
  vm.$on("hook:beforeUpdate", flushPreQueue);
  vm.$on("hook:updated", flushPostQueue);
}
function getWatcherOption(options) {
  return __assign({
    immediate: false,
    deep: false,
    flush: "pre"
  }, options);
}
function getWatchEffectOption(options) {
  return __assign({
    flush: "pre"
  }, options);
}
function getWatcherVM() {
  var vm = getCurrentScopeVM();
  if (!vm) {
    if (!fallbackVM) {
      fallbackVM = defineComponentInstance(getVueConstructor());
    }
    vm = fallbackVM;
  } else if (!hasWatchEnv(vm)) {
    installWatchEnv(vm);
  }
  return vm;
}
function flushQueue(vm, key) {
  var queue = vm[key];
  for (var index = 0; index < queue.length; index++) {
    queue[index]();
  }
  queue.length = 0;
}
function queueFlushJob(vm, fn, mode) {
  var fallbackFlush = function() {
    vm.$nextTick(function() {
      if (vm[WatcherPreFlushQueueKey].length) {
        flushQueue(vm, WatcherPreFlushQueueKey);
      }
      if (vm[WatcherPostFlushQueueKey].length) {
        flushQueue(vm, WatcherPostFlushQueueKey);
      }
    });
  };
  switch (mode) {
    case "pre":
      fallbackFlush();
      vm[WatcherPreFlushQueueKey].push(fn);
      break;
    case "post":
      fallbackFlush();
      vm[WatcherPostFlushQueueKey].push(fn);
      break;
    default:
      assert(false, 'flush must be one of ["post", "pre", "sync"], but got '.concat(mode));
      break;
  }
}
function createVueWatcher(vm, getter, callback, options) {
  var index = vm._watchers.length;
  vm.$watch(getter, callback, {
    immediate: options.immediateInvokeCallback,
    deep: options.deep,
    lazy: options.noRun,
    sync: options.sync,
    before: options.before
  });
  return vm._watchers[index];
}
function patchWatcherTeardown(watcher, runCleanup) {
  var _teardown = watcher.teardown;
  watcher.teardown = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    _teardown.apply(watcher, args);
    runCleanup();
  };
}
function createWatcher(vm, source, cb, options) {
  var _a;
  if (!cb) {
    if (options.immediate !== void 0) {
      warn('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.');
    }
    if (options.deep !== void 0) {
      warn('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.');
    }
  }
  var flushMode = options.flush;
  var isSync = flushMode === "sync";
  var cleanup;
  var registerCleanup = function(fn) {
    cleanup = function() {
      try {
        fn();
      } catch (error) {
        logError(error, vm, "onCleanup()");
      }
    };
  };
  var runCleanup = function() {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
  };
  var createScheduler = function(fn) {
    if (isSync || /* without a current active instance, ignore pre|post mode */
    vm === fallbackVM) {
      return fn;
    }
    return function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return queueFlushJob(vm, function() {
        fn.apply(void 0, __spreadArray([], __read(args), false));
      }, flushMode);
    };
  };
  if (cb === null) {
    var running_1 = false;
    var getter_1 = function() {
      if (running_1) {
        return;
      }
      try {
        running_1 = true;
        source(registerCleanup);
      } finally {
        running_1 = false;
      }
    };
    var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
      deep: options.deep || false,
      sync: isSync,
      before: runCleanup
    });
    patchWatcherTeardown(watcher_1, runCleanup);
    watcher_1.lazy = false;
    var originGet = watcher_1.get.bind(watcher_1);
    watcher_1.get = createScheduler(originGet);
    return function() {
      watcher_1.teardown();
    };
  }
  var deep = options.deep;
  var isMultiSource = false;
  var getter;
  if (isRef(source)) {
    getter = function() {
      return source.value;
    };
  } else if (isReactive(source)) {
    getter = function() {
      return source;
    };
    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    getter = function() {
      return source.map(function(s) {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return traverse(s);
        } else if (isFunction(s)) {
          return s();
        } else {
          warn("Invalid watch source: ".concat(JSON.stringify(s), ".\n          A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."), vm);
          return noopFn;
        }
      });
    };
  } else if (isFunction(source)) {
    getter = source;
  } else {
    getter = noopFn;
    warn("Invalid watch source: ".concat(JSON.stringify(source), ".\n      A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."), vm);
  }
  if (deep) {
    var baseGetter_1 = getter;
    getter = function() {
      return traverse(baseGetter_1());
    };
  }
  var applyCb = function(n, o) {
    if (!deep && isMultiSource && n.every(function(v, i) {
      return isSame(v, o[i]);
    }))
      return;
    runCleanup();
    return cb(n, o, registerCleanup);
  };
  var callback = createScheduler(applyCb);
  if (options.immediate) {
    var originalCallback_1 = callback;
    var shiftCallback_1 = function(n, o) {
      shiftCallback_1 = originalCallback_1;
      return applyCb(n, isArray(n) ? [] : o);
    };
    callback = function(n, o) {
      return shiftCallback_1(n, o);
    };
  }
  var stop = vm.$watch(getter, callback, {
    immediate: options.immediate,
    deep,
    sync: isSync
  });
  var watcher = vm._watchers[vm._watchers.length - 1];
  if (isReactive(watcher.value) && ((_a = watcher.value.__ob__) === null || _a === void 0 ? void 0 : _a.dep) && deep) {
    watcher.value.__ob__.dep.addSub({
      update: function() {
        watcher.run();
      }
    });
  }
  patchWatcherTeardown(watcher, runCleanup);
  return function() {
    stop();
  };
}
function watchEffect(effect, options) {
  var opts = getWatchEffectOption(options);
  var vm = getWatcherVM();
  return createWatcher(vm, effect, null, opts);
}
function watchPostEffect(effect) {
  return watchEffect(effect, { flush: "post" });
}
function watchSyncEffect(effect) {
  return watchEffect(effect, { flush: "sync" });
}
function watch(source, cb, options) {
  var callback = null;
  if (isFunction(cb)) {
    callback = cb;
  } else {
    if (true) {
      warn("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature.");
    }
    options = cb;
    callback = null;
  }
  var opts = getWatcherOption(options);
  var vm = getWatcherVM();
  return createWatcher(vm, source, callback, opts);
}
function traverse(value, seen) {
  if (seen === void 0) {
    seen = /* @__PURE__ */ new Set();
  }
  if (!isObject(value) || seen.has(value) || rawSet.has(value)) {
    return value;
  }
  seen.add(value);
  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach(function(v) {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }
  return value;
}
function computed(getterOrOptions) {
  var vm = getCurrentScopeVM();
  var getter;
  var setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  var computedSetter;
  var computedGetter;
  if (vm && !vm.$isServer) {
    var _a = getVueInternalClasses(), Watcher_1 = _a.Watcher, Dep_1 = _a.Dep;
    var watcher_1;
    computedGetter = function() {
      if (!watcher_1) {
        watcher_1 = new Watcher_1(vm, getter, noopFn, { lazy: true });
      }
      if (watcher_1.dirty) {
        watcher_1.evaluate();
      }
      if (Dep_1.target) {
        watcher_1.depend();
      }
      return watcher_1.value;
    };
    computedSetter = function(v) {
      if (!setter) {
        warn("Write operation failed: computed value is readonly.", vm);
        return;
      }
      if (setter) {
        setter(v);
      }
    };
  } else {
    var computedHost_1 = defineComponentInstance(getVueConstructor(), {
      computed: {
        $$state: {
          get: getter,
          set: setter
        }
      }
    });
    vm && vm.$on("hook:destroyed", function() {
      return computedHost_1.$destroy();
    });
    computedGetter = function() {
      return computedHost_1.$$state;
    };
    computedSetter = function(v) {
      if (!setter) {
        warn("Write operation failed: computed value is readonly.", vm);
        return;
      }
      computedHost_1.$$state = v;
    };
  }
  return createRef({
    get: computedGetter,
    set: computedSetter
  }, !setter, true);
}
var NOT_FOUND = {};
function resolveInject(provideKey, vm) {
  var source = vm;
  while (source) {
    if (source._provided && hasOwn(source._provided, provideKey)) {
      return source._provided[provideKey];
    }
    source = source.$parent;
  }
  return NOT_FOUND;
}
function provide(key, value) {
  var _a;
  var vm = (_a = getCurrentInstanceForFn("provide")) === null || _a === void 0 ? void 0 : _a.proxy;
  if (!vm)
    return;
  if (!vm._provided) {
    var provideCache_1 = {};
    proxy(vm, "_provided", {
      get: function() {
        return provideCache_1;
      },
      set: function(v) {
        return Object.assign(provideCache_1, v);
      }
    });
  }
  vm._provided[key] = value;
}
function inject(key, defaultValue, treatDefaultAsFactory) {
  var _a;
  if (treatDefaultAsFactory === void 0) {
    treatDefaultAsFactory = false;
  }
  var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
  if (!vm) {
    warn("inject() can only be used inside setup() or functional components.");
    return;
  }
  if (!key) {
    warn('injection "'.concat(String(key), '" not found.'), vm);
    return defaultValue;
  }
  var val = resolveInject(key, vm);
  if (val !== NOT_FOUND) {
    return val;
  } else if (arguments.length > 1) {
    return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue() : defaultValue;
  } else if (true) {
    warn('Injection "'.concat(String(key), '" not found.'), vm);
  }
}
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var useCssModule = function(name) {
  var _a;
  if (name === void 0) {
    name = "$style";
  }
  var instance = getCurrentInstance();
  if (!instance) {
    warn("useCssModule must be called inside setup()");
    return EMPTY_OBJ;
  }
  var mod = (_a = instance.proxy) === null || _a === void 0 ? void 0 : _a[name];
  if (!mod) {
    warn('Current instance does not have CSS module named "'.concat(name, '".'));
    return EMPTY_OBJ;
  }
  return mod;
};
var useCSSModule = useCssModule;
function createApp(rootComponent, rootProps) {
  if (rootProps === void 0) {
    rootProps = void 0;
  }
  var V = getVueConstructor();
  var mountedVM = void 0;
  var provide2 = {};
  var app = {
    config: V.config,
    use: V.use.bind(V),
    mixin: V.mixin.bind(V),
    component: V.component.bind(V),
    provide: function(key, value) {
      provide2[key] = value;
      return this;
    },
    directive: function(name, dir) {
      if (dir) {
        V.directive(name, dir);
        return app;
      } else {
        return V.directive(name);
      }
    },
    mount: function(el, hydrating) {
      if (!mountedVM) {
        mountedVM = new V(__assign(__assign({ propsData: rootProps }, rootComponent), { provide: __assign(__assign({}, provide2), rootComponent.provide) }));
        mountedVM.$mount(el, hydrating);
        return mountedVM;
      } else {
        if (true) {
          warn("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        }
        return mountedVM;
      }
    },
    unmount: function() {
      if (mountedVM) {
        mountedVM.$destroy();
        mountedVM = void 0;
      } else if (true) {
        warn("Cannot unmount an app that is not mounted.");
      }
    }
  };
  return app;
}
var nextTick = function nextTick2() {
  var _a;
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return (_a = getVueConstructor()) === null || _a === void 0 ? void 0 : _a.nextTick.apply(this, args);
};
var fallbackCreateElement;
var createElement = function createElement2() {
  var _a;
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var instance = (this === null || this === void 0 ? void 0 : this.proxy) || ((_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
  if (!instance) {
    warn("`createElement()` has been called outside of render function.");
    if (!fallbackCreateElement) {
      fallbackCreateElement = defineComponentInstance(getVueConstructor()).$createElement;
    }
    return fallbackCreateElement.apply(fallbackCreateElement, args);
  }
  return instance.$createElement.apply(instance, args);
};
function useSlots() {
  return getContext().slots;
}
function useAttrs() {
  return getContext().attrs;
}
function getContext() {
  var i = getCurrentInstance();
  if (!i) {
    warn("useContext() called without active instance.");
  }
  return i.setupContext;
}
function set(vm, key, value) {
  var state = vm.__composition_api_state__ = vm.__composition_api_state__ || {};
  state[key] = value;
}
function get(vm, key) {
  return (vm.__composition_api_state__ || {})[key];
}
var vmStateManager = {
  set,
  get
};
function asVmProperty(vm, propName, propValue) {
  var props = vm.$options.props;
  if (!(propName in vm) && !(props && hasOwn(props, propName))) {
    if (isRef(propValue)) {
      proxy(vm, propName, {
        get: function() {
          return propValue.value;
        },
        set: function(val) {
          propValue.value = val;
        }
      });
    } else {
      proxy(vm, propName, {
        get: function() {
          if (isReactive(propValue)) {
            propValue.__ob__.dep.depend();
          }
          return propValue;
        },
        set: function(val) {
          propValue = val;
        }
      });
    }
    if (true) {
      vm.$nextTick(function() {
        if (Object.keys(vm._data).indexOf(propName) !== -1) {
          return;
        }
        if (isRef(propValue)) {
          proxy(vm._data, propName, {
            get: function() {
              return propValue.value;
            },
            set: function(val) {
              propValue.value = val;
            }
          });
        } else {
          proxy(vm._data, propName, {
            get: function() {
              return propValue;
            },
            set: function(val) {
              propValue = val;
            }
          });
        }
      });
    }
  } else if (true) {
    if (props && hasOwn(props, propName)) {
      warn('The setup binding property "'.concat(propName, '" is already declared as a prop.'), vm);
    } else {
      warn('The setup binding property "'.concat(propName, '" is already declared.'), vm);
    }
  }
}
function updateTemplateRef(vm) {
  var rawBindings = vmStateManager.get(vm, "rawBindings") || {};
  if (!rawBindings || !Object.keys(rawBindings).length)
    return;
  var refs = vm.$refs;
  var oldRefKeys = vmStateManager.get(vm, "refs") || [];
  for (var index = 0; index < oldRefKeys.length; index++) {
    var key = oldRefKeys[index];
    var setupValue = rawBindings[key];
    if (!refs[key] && setupValue && isRef(setupValue)) {
      setupValue.value = null;
    }
  }
  var newKeys = Object.keys(refs);
  var validNewKeys = [];
  for (var index = 0; index < newKeys.length; index++) {
    var key = newKeys[index];
    var setupValue = rawBindings[key];
    if (refs[key] && setupValue && isRef(setupValue)) {
      setupValue.value = refs[key];
      validNewKeys.push(key);
    }
  }
  vmStateManager.set(vm, "refs", validNewKeys);
}
function afterRender(vm) {
  var stack = [vm._vnode];
  while (stack.length) {
    var vnode = stack.pop();
    if (vnode) {
      if (vnode.context)
        updateTemplateRef(vnode.context);
      if (vnode.children) {
        for (var i = 0; i < vnode.children.length; ++i) {
          stack.push(vnode.children[i]);
        }
      }
    }
  }
}
function updateVmAttrs(vm, ctx) {
  var e_1, _a;
  if (!vm) {
    return;
  }
  var attrBindings = vmStateManager.get(vm, "attrBindings");
  if (!attrBindings && !ctx) {
    return;
  }
  if (!attrBindings) {
    var observedData = reactive({});
    attrBindings = { ctx, data: observedData };
    vmStateManager.set(vm, "attrBindings", attrBindings);
    proxy(ctx, "attrs", {
      get: function() {
        return attrBindings === null || attrBindings === void 0 ? void 0 : attrBindings.data;
      },
      set: function() {
        warn("Cannot assign to '$attrs' because it is a read-only property", vm);
      }
    });
  }
  var source = vm.$attrs;
  var _loop_1 = function(attr2) {
    if (!hasOwn(attrBindings.data, attr2)) {
      proxy(attrBindings.data, attr2, {
        get: function() {
          return vm.$attrs[attr2];
        }
      });
    }
  };
  try {
    for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var attr = _c.value;
      _loop_1(attr);
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return))
        _a.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
}
function resolveScopedSlots(vm, slotsProxy) {
  var parentVNode = vm.$options._parentVnode;
  if (!parentVNode)
    return;
  var prevSlots = vmStateManager.get(vm, "slots") || [];
  var curSlots = resolveSlots(parentVNode.data.scopedSlots, vm.$slots);
  for (var index = 0; index < prevSlots.length; index++) {
    var key = prevSlots[index];
    if (!curSlots[key]) {
      delete slotsProxy[key];
    }
  }
  var slotNames = Object.keys(curSlots);
  for (var index = 0; index < slotNames.length; index++) {
    var key = slotNames[index];
    if (!slotsProxy[key]) {
      slotsProxy[key] = createSlotProxy(vm, key);
    }
  }
  vmStateManager.set(vm, "slots", slotNames);
}
function activateCurrentInstance(instance, fn, onError) {
  var preVm = getCurrentInstance();
  setCurrentInstance(instance);
  try {
    return fn(instance);
  } catch (err) {
    if (onError) {
      onError(err);
    } else {
      throw err;
    }
  } finally {
    setCurrentInstance(preVm);
  }
}
function mixin(Vue) {
  Vue.mixin({
    beforeCreate: functionApiInit,
    mounted: function() {
      afterRender(this);
    },
    beforeUpdate: function() {
      updateVmAttrs(this);
    },
    updated: function() {
      afterRender(this);
    }
  });
  function functionApiInit() {
    var vm = this;
    var $options = vm.$options;
    var setup = $options.setup, render = $options.render;
    if (render) {
      $options.render = function() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return activateCurrentInstance(toVue3ComponentInstance(vm), function() {
          return render.apply(_this, args);
        });
      };
    }
    if (!setup) {
      return;
    }
    if (!isFunction(setup)) {
      if (true) {
        warn('The "setup" option should be a function that returns a object in component definitions.', vm);
      }
      return;
    }
    var data = $options.data;
    $options.data = function wrappedData() {
      initSetup(vm, vm.$props);
      return isFunction(data) ? data.call(vm, vm) : data || {};
    };
  }
  function initSetup(vm, props) {
    if (props === void 0) {
      props = {};
    }
    var setup = vm.$options.setup;
    var ctx = createSetupContext(vm);
    var instance = toVue3ComponentInstance(vm);
    instance.setupContext = ctx;
    def(props, "__ob__", createObserver());
    resolveScopedSlots(vm, ctx.slots);
    var binding;
    activateCurrentInstance(instance, function() {
      binding = setup(props, ctx);
    });
    if (!binding)
      return;
    if (isFunction(binding)) {
      var bindingFunc_1 = binding;
      vm.$options.render = function() {
        resolveScopedSlots(vm, ctx.slots);
        return activateCurrentInstance(instance, function() {
          return bindingFunc_1();
        });
      };
      return;
    } else if (isObject(binding)) {
      if (isReactive(binding)) {
        binding = toRefs(binding);
      }
      vmStateManager.set(vm, "rawBindings", binding);
      var bindingObj_1 = binding;
      Object.keys(bindingObj_1).forEach(function(name) {
        var bindingValue = bindingObj_1[name];
        if (!isRef(bindingValue)) {
          if (!isReactive(bindingValue)) {
            if (isFunction(bindingValue)) {
              var copy_1 = bindingValue;
              bindingValue = bindingValue.bind(vm);
              Object.keys(copy_1).forEach(function(ele) {
                bindingValue[ele] = copy_1[ele];
              });
            } else if (!isObject(bindingValue)) {
              bindingValue = ref(bindingValue);
            } else if (hasReactiveArrayChild(bindingValue)) {
              customReactive(bindingValue);
            }
          } else if (isArray(bindingValue)) {
            bindingValue = ref(bindingValue);
          }
        }
        asVmProperty(vm, name, bindingValue);
      });
      return;
    }
    if (true) {
      assert(false, '"setup" must return a "Object" or a "Function", got "'.concat(Object.prototype.toString.call(binding).slice(8, -1), '"'));
    }
  }
  function customReactive(target, seen) {
    if (seen === void 0) {
      seen = /* @__PURE__ */ new Set();
    }
    if (seen.has(target))
      return;
    if (!isPlainObject(target) || isRef(target) || isReactive(target) || isRaw(target))
      return;
    var Vue2 = getVueConstructor();
    var defineReactive = Vue2.util.defineReactive;
    Object.keys(target).forEach(function(k) {
      var val = target[k];
      defineReactive(target, k, val);
      if (val) {
        seen.add(val);
        customReactive(val, seen);
      }
      return;
    });
  }
  function hasReactiveArrayChild(target, visited) {
    if (visited === void 0) {
      visited = /* @__PURE__ */ new Map();
    }
    if (visited.has(target)) {
      return visited.get(target);
    }
    visited.set(target, false);
    if (isArray(target) && isReactive(target)) {
      visited.set(target, true);
      return true;
    }
    if (!isPlainObject(target) || isRaw(target) || isRef(target)) {
      return false;
    }
    return Object.keys(target).some(function(x) {
      return hasReactiveArrayChild(target[x], visited);
    });
  }
  function createSetupContext(vm) {
    var ctx = { slots: {} };
    var propsPlain = [
      "root",
      "parent",
      "refs",
      "listeners",
      "isServer",
      "ssrContext"
    ];
    var methodReturnVoid = ["emit"];
    propsPlain.forEach(function(key) {
      var srcKey = "$".concat(key);
      proxy(ctx, key, {
        get: function() {
          return vm[srcKey];
        },
        set: function() {
          warn("Cannot assign to '".concat(key, "' because it is a read-only property"), vm);
        }
      });
    });
    updateVmAttrs(vm, ctx);
    methodReturnVoid.forEach(function(key) {
      var srcKey = "$".concat(key);
      proxy(ctx, key, {
        get: function() {
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var fn = vm[srcKey];
            fn.apply(vm, args);
          };
        }
      });
    });
    if (false) {
      ctx._vm = vm;
    }
    return ctx;
  }
}
function mergeData(from, to) {
  if (!from)
    return to;
  if (!to)
    return from;
  var key;
  var toVal;
  var fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    if (key === "__ob__")
      continue;
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      to[key] = fromVal;
    } else if (toVal !== fromVal && isPlainObject(toVal) && !isRef(toVal) && isPlainObject(fromVal) && !isRef(fromVal)) {
      mergeData(fromVal, toVal);
    }
  }
  return to;
}
function install(Vue) {
  if (isVueRegistered(Vue)) {
    if (true) {
      warn("[vue-composition-api] already installed. Vue.use(VueCompositionAPI) should be called only once.");
    }
    return;
  }
  if (true) {
    if (Vue.version) {
      if (Vue.version[0] !== "2" || Vue.version[1] !== ".") {
        warn("[vue-composition-api] only works with Vue 2, v".concat(Vue.version, " found."));
      }
    } else {
      warn("[vue-composition-api] no Vue version found");
    }
  }
  Vue.config.optionMergeStrategies.setup = function(parent, child) {
    return function mergedSetupFn(props, context) {
      return mergeData(isFunction(parent) ? parent(props, context) || {} : void 0, isFunction(child) ? child(props, context) || {} : void 0);
    };
  };
  setVueConstructor(Vue);
  mixin(Vue);
}
var Plugin = {
  install: function(Vue) {
    return install(Vue);
  }
};
function defineComponent(options) {
  return options;
}
function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = { loader: source };
  }
  var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout, _b = source.suspensible, suspensible = _b === void 0 ? false : _b, userOnError = source.onError;
  if (suspensible) {
    warn("The suspensiblbe option for async components is not supported in Vue2. It is ignored.");
  }
  var pendingRequest = null;
  var retries = 0;
  var retry = function() {
    retries++;
    pendingRequest = null;
    return load();
  };
  var load = function() {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch(function(err) {
      err = err instanceof Error ? err : new Error(String(err));
      if (userOnError) {
        return new Promise(function(resolve, reject) {
          var userRetry = function() {
            return resolve(retry());
          };
          var userFail = function() {
            return reject(err);
          };
          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(function(comp) {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }
      if (!comp) {
        warn("Async component loader resolved to undefined. If you are using retry(), make sure to return its return value.");
      }
      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === "Module")) {
        comp = comp.default;
      }
      if (comp && !isObject(comp) && !isFunction(comp)) {
        throw new Error("Invalid async component load result: ".concat(comp));
      }
      return comp;
    }));
  };
  return function() {
    var component = load();
    return {
      component,
      delay,
      timeout,
      error: errorComponent,
      loading: loadingComponent
    };
  };
}
var version = "1.7.2";
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Plugin);
}
export {
  EffectScope,
  computed,
  createApp,
  createRef,
  customRef,
  Plugin as default,
  defineAsyncComponent,
  defineComponent,
  del,
  effectScope,
  getCurrentInstance,
  getCurrentScope,
  createElement as h,
  inject,
  isRaw,
  isReactive,
  isReadonly,
  isRef,
  markRaw,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onErrorCaptured,
  onMounted,
  onScopeDispose,
  onServerPrefetch,
  onUnmounted,
  onUpdated,
  provide,
  proxyRefs,
  reactive,
  readonly,
  ref,
  set$1 as set,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toRaw,
  toRef,
  toRefs,
  triggerRef,
  unref,
  useAttrs,
  useCSSModule,
  useCssModule,
  useSlots,
  version,
  warn$1 as warn,
  watch,
  watchEffect,
  watchPostEffect,
  watchSyncEffect
};
//# sourceMappingURL=@vue_composition-api.js.map
