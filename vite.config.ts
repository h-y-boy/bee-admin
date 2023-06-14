import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//按需引入element
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//eslint配置
import eslintPlugin from 'vite-plugin-eslint' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    // 增加下面的配置项,这样在运行时就能检查eslint规范
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    })
  ],
  resolve:{
    alias:{
      '@':`${path.resolve(__dirname,'src')}`
    }
  }
})
