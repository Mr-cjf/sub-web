import { createRouter, createWebHistory } from 'vue-router';

// 修改后：
const files = import.meta.glob('../views/*.vue');

const routes = Object.entries(files).map(([path, component]) => ({
  path: path.includes('Subconverter')
      ? '/'
      : `/${path.replace(/(.*\/)|(\.vue)/g, '').replace(/^\w/, c => c.toLowerCase())}`,
  name: path.replace(/(.*\/)|(\.vue)/g, '').toLowerCase(), // 统一转小写
  component: () => component()
}));

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
