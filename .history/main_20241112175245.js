import App from './App'
import VueCompositionAPI from '@vue/composition-api'
import { createPinia } from 'pinia'
const pinia = createPinia()
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
// import { createPinia } from 'pinia' // 导入 Pinia

import { createUnistorage } from './uni_modules/pinia-plugin-unistorage'

Vue.use(VueCompositionAPI) // 在这里挂载 VueCompositionAPI
Vue.config.productionTip = false
App.mpType = 'app'

// 创建 Pinia 实例
// const pinia = createPinia()

// 持久化
pinia.use(createUnistorage())
const app = new Vue({
  ...App,
  pinia, // 在这里将 Pinia 注入到 Vue 实例
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import { createPinia } from 'pinia' // 导入 Pinia
import { createUnistorage } from './uni_modules/pinia-plugin-unistorage'
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia() // 创建 Pinia 实例
  // 持久化
  pinia.use(createUnistorage())
  app.use(pinia) // 在这里将 Pinia 注入到 Vue 应用
  return {
    app,
  }
}
// #endif
