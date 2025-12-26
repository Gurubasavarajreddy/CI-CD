import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",

    coverage: {
      provider: "v8", // fast & stable
      reporter: ["text", "html", "lcov"],
      reportsDirectory: "./coverage",

      include: ["src/**/*.{js,jsx}"],
      exclude: [
        "src/main.jsx",
        "src/setupTests.js",
        "src/**/*.test.{js,jsx}",
        "src/**/*.spec.{js,jsx}",
      ],

      thresholds: {
        lines: 70,
        functions: 70,
        branches: 60,
        statements: 70,
      },
    },
  },
});
