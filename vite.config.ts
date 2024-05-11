import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === "production") {
    return {
      plugins: [react(), tsconfigPaths()],
    };
  }
  return {
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 443,
      host: "0.0.0.0",
      hmr: {
        host: "team.local",
        port: 443,
      },
      https: {
        cert: readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), "./https-cert.pem")),
        key: readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), "./https-key.pem")),
      },
    },
    publicDir: "./public",
  };
});
