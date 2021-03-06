import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'dayjs/locale/ja'
import locale from 'element-plus/lib/locale/lang/ja'
import './styles/element-variables.scss'

createApp(App).use(ElementPlus, { locale }).mount('#app')
