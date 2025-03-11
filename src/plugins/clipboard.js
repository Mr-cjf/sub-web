// plugins/clipboard.js
import VueClipboard from 'vue3-clipboard'; // 使用默认导入

export default {
  install(app) {
    app.use(VueClipboard); // 直接调用插件的 use 方法
  }
};