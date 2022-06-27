import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";

export default defineConfig({
  plugins: [react(), eslint(),/* stylelint()*/],
});
