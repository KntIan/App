import App from './App'
import VueCompositionAPI from '@vue/composition-api'
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import { createPinia } from 'pinia'

import { createUnistorage } from './uni_modules/pinia-plugin-unistorage'

Vue.use(VueCompositionAPI) // 在这里挂载 VueCompositionAPI
Vue.config.productionTip = false
App.mpType = 'app'

// 创建 Pinia 实例
const pinia = createPinia()

// 持久化
pinia.use(createUnistorage())
const app = new Vue({
  ...App,
  pinia, // 在这里将 Pinia 注入到 Vue 实例
})

// 获取全局数据
const globalData = getApp().globalData
console.log('全局数据:', globalData.top)

// 将 top 值挂载到 app 实例上
app.$top = globalData.top // 挂载 top 到 app 实例

// 将 top 值应用到 #app 节点的样式中
const appNode = document.getElementById('app')
if (appNode) {
  appNode.style.paddingTop = `${app.$top}px` // 设置 #app 的 padding-top 为 top 的值
}

// 打印挂载后的值
console.log('挂载到 app 上的 top 值:', app.$top)

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
