import type { UserConfig, ConfigEnv } from "vite";
import path from "path";

import vue from "@vitejs/plugin-vue";

const resolve = (dir: string) => path.join(__dirname, dir);

export default ({ command, mode }: ConfigEnv): UserConfig => {
    const root = process.cwd();

    const isBuild = command === "build";

    return {
        base: "./",
        root,
        plugins: [vue()],
        optimizeDeps: {
            // 预加载
            include: ["element-plus/lib/locale/lang/zh-cn"]
        },
        resolve: {
            alias: {
                "~/": `${path.resolve(__dirname, "src")}/`,
                "@": resolve("src")
            }
        },
        server: {
            host: "0.0.0.0",
            port: 4000, // 服务端口号
            open: true // 服务启动时是否自动打开浏览器
        },
        build: {
            reportCompressedSize: false,
            chunkSizeWarningLimit: 2000,
            rollupOptions: {
                // 静态资源分类打包
                output: {
                    chunkFileNames: "static/js/[name]-[hash].js",
                    entryFileNames: "static/js/[name]-[hash].js",
                    assetFileNames: "static/[ext]/[name]-[hash].[ext]"
                }
            }
        },
        define: {
            // 解决打包报错
            __INTLIFY_PROD_DEVTOOLS__: JSON.stringify(false)
        }
    };
};
