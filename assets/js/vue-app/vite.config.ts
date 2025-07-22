import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: path.resolve("./", "src/lib.js"),
      name: "FHIR Snapshot",
      cssFileName: "style",
      formats: ["es", "umd"],
      fileName(format, entryAlias) {
        // add the 'js' extension for compatibility with any webserver:
        // "Strict MIME type checking is enforced for module scripts per HTML spec"
        return `${entryAlias}.${format}.js`;
      },
    },
    rollupOptions: {
      // external: ["vue"], // important: this must be commented! vue needs to be included
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  server: {
    watch: {
      usePolling: false,
    },
    // https: true,
    proxy: {
      "/redcap": {
        target: "http://redcap.test/",
        ws: false,
        changeOrigin: true,
        rewrite: (path) => path.replace("^/redcap", ""),
      },
      "/api": {
        target: "http://redcap.test/API_PROXY/index.php",
        changeOrigin: true,
        ws: false,
        rewrite: (path) => path.replace("^/api", ""),
      },
    },
  },
});
