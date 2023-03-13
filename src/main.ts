import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun';
// 注册微应用
registerMicroApps([
  {
    name: 'subAppVue3',
    entry: '//localhost:5173',
    container: '#subAppContainerVue3',  // 和app.vue配置的节点
    activeRule: '/subAppVue3', // 访问：http://localhost:5174/subAppVue3
    props: {}
  }
]);
// 启动 qiankun
start({
    prefetch:'all', // 预加载
    sandbox: {
        experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
    },
});
// 添加全局异常捕获
addGlobalUncaughtErrorHandler((handler) => {
    console.log("异常捕获", handler);
});