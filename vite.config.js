// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     hmr: {
//       overlay: false,
//     },
//   },
//   assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png", "**/*.webp"],

//   build: {
//     rollupOptions: {
//       input: "./src/main.jsx",
//     },
//   },
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
    historyApiFallback: true,  // Ensure this is added for handling 404s in dev
  },
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png", "**/*.webp"],
  build: {
    rollupOptions: {
      input: "./src/main.jsx",
    },
  },
});
