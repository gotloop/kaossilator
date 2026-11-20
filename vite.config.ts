import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import stylelint from "vite-plugin-stylelint";

export default defineConfig({
  plugins: [react(), stylelint()],
  resolve: {
    alias: {
      "@gotloop/kaossillator": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
