// src/icons/index.js
import SvgIcon from '@/components/SvgIcon/index.vue';

// 导出函数，接收 app 实例并注册组件
export default function (app) {
  app.component('svg-icon', SvgIcon);
}