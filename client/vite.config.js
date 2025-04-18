import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ""); // ini sekarang valid

  return {
    build: {
      outDir: "prod",
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3500,
    },
    plugins: [react()],

    // Kalau mau expose env ke define
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});
