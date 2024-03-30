import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";
import jotaiDebugLabel from "jotai/babel/plugin-debug-label";
import jotaiReactRefresh from "jotai/babel/plugin-react-refresh";

export default defineConfig({
  plugins: [
    react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
    eslint(),
    stylelint(),
  ],
});
