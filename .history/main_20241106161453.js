import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import { createPinia } from 'pinia' // 导入 Pinia

import { createUnistorage } from './uni_modules/pinia-plugin-unistorage'

Vue.config.productionTip = false
App.mpType = 'app'

// 创建 Pinia 实例
const pinia = createPinia()
// 状态管理
const store = Pinia.createPinia()
// 持久化
store.use(createUnistorage())
const app = new Vue({
  ...App,
  pinia, // 在这里将 Pinia 注入到 Vue 实例
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia' // 导入 Pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 导入持久化插件
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia() // 创建 Pinia 实例
  pinia.use(piniaPluginPersistedstate) // 使用持久化插件
  app.use(pinia) // 在这里将 Pinia 注入到 Vue 应用
  return {
    app,
  }
}
// #endif
