import vue from '@vitejs/plugin-vue'
const path = require("path");

/**
 * @type {import('vite').UserConfig}
 */
export default {
  // 配置别名
  alias: {
    "/@/": path.resolve(__dirname, "src"),
    "/api/": path.resolve(__dirname, "src/api"),
    "/comps/": path.resolve(__dirname, "src/components"),
    "/dirs/": path.resolve(__dirname, "src/directive"),
    "/views/": path.resolve(__dirname, "src/views"),
    "/styles/": path.resolve(__dirname, "src/styles"),
    "/layout/": path.resolve(__dirname, "src/layout"),
    "/utils/": path.resolve(__dirname, "src/utils"),
  },
  plugins: [vue()]
}
