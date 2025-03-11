// src/plugins/axios.js
import axios from 'axios';

// Vue 3 插件格式：导出带 install 方法的对象
export default {
  install(app) { // app 是 Vue 3 的应用实例
    axios.defaults.timeout = 5000;
    // 通过 app.config.globalProperties 挂载全局属性
    app.config.globalProperties.$axios = axios;
  }
};
