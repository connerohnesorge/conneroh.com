import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [mdx()],
  site: "https://conneroh.com",
  output: "static",
  trailingSlash: "ignore",
  build: { format: "directory" },
  markdown: { shikiConfig: { theme: "css-variables" } },
});
