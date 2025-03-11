import { createApp } from 'vue' // 替换 Vue 2 的导入方式
import App from './App.vue'
import router from './router'

// 统一改用 import 语法 (比 require 更规范)
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import icons from '@/icons'; // 导入图标模块

const app = createApp(App) // 创建 Vue 3 应用实例
// 注册自定义 SVG 图标组件
icons(app); // 确保执行 icons 模块的注册逻辑
// 注册图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router) // 统一使用 use() 注册插件

app.use(ElementPlus)

// 自动注册所有插件（排除非插件文件）
const plugins = import.meta.glob('./plugins/*.js', { eager: true });

console.log('Loaded plugins:', plugins); // 输出所有加载的插件模块
Object.values(plugins).forEach((module) => {
    const plugin = module?.default ?? module; // 合并 module 和 module.default
    if (typeof plugin === 'function') {
        app.use(plugin); // 函数形式的插件
    } else if (plugin?.install) {
        app.use(plugin); // 对象形式的插件（带 install 方法）
    } else {
        console.error('Invalid plugin:', plugin);
    }
});

app.mount('#app') // 替换原来的 $mount 写法
