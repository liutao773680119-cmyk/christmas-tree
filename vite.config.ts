import { defineConfig } from 'vite'
// 其他不需要动...

export default defineConfig({
  // 👇 加上这一行！这是关键！
  // 告诉代码：别去根目录找，去 christmas-tree 这个目录下找
  base: '/christmas-tree/', 

  plugins: [
    // ... 原有的插件配置不用动
  ],
})
