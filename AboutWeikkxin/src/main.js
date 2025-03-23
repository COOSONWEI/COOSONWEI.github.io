import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

// 导入全局样式
import './styles/variables.css' // 全局变量和主题
import './styles/common.css'    // 全局通用样式
import './styles/index.css'     // 其他样式
import './styles/icon/iconfont.css' // 图标字体

const app = createApp(App)
app.use(router)

app.mount('#app')
