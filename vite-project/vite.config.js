import vue from "@vitejs/plugin-vue"; // vue 通过插件形式整合到vite环境中
import { defineConfig } from "vite"; // 代码提示
import path from "path";
import { viteMockServe } from "vite-plugin-mock";

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  // 配置别名
  alias: {
    "@": path.resolve(__dirname, "src"),
    api: path.resolve(__dirname, "src/api"),
    comps: path.resolve(__dirname, "src/components"),
    dirs: path.resolve(__dirname, "src/directive"),
    views: path.resolve(__dirname, "src/views"),
     styles: path.resolve(__dirname, "src/styles"),
    layouts: path.resolve(__dirname, "src/layouts"),
    utils: path.resolve(__dirname, "src/utils"),
  },
  plugins: [vue(),viteMockServe({ supportTs: false })],
});
