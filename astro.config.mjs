import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://conneroh.com",
  output: "static",
  trailingSlash: "ignore",
  build: { format: "directory" },
  markdown: { shikiConfig: { theme: "css-variables" } },
});
