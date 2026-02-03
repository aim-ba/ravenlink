import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        replaceAttrValues: {
          '#FFFFFF': 'currentColor',
        },
        svgoConfig: {
          plugins: [
            {
              name: 'removeViewBox',
              active: false, // Keep viewBox
            },
            {
              name: 'removeDimensions',
              active: true, // Remove width/height to allow scaling
            }
          ]
        }
      }
    }),
    tsconfigPaths(),
    tailwindcss()
  ],
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
