import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: [">0.2%", "ie 11", "not dead"],
    }),
  ],
});
