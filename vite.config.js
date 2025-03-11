import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  optimizeDeps: {
    include: [
      'vue',
      'vue-router'
    ]
  },
  plugins: [
    vue(),
    vueDevTools(),
    // SVG 图标处理 (替代原来的 svg-sprite-loader)
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[name]'
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        navigateFallback: '/',
        navigateFallbackDenylist: [/\/api\//]
      }
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true // 保持原有 LESS 配置
      }
    }
  },
  resolve: {
    alias: {
      // 正确配置 @ 别名指向 src 目录
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
