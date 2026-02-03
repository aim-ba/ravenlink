import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "_static",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
});
