import { defineConfig } from "cf/config";

// Assets-only Worker: `astro build` writes static files to ./dist and `cf deploy dist` uploads them.
export default defineConfig({
  accountId: "563bd103a562b5bd6cc041ad6b59d3b8",
  worker: {
    name: "conneroh-com",
    compatibilityDate: "2026-11-01",
    assets: { htmlHandling: "auto-trailing-slash", notFoundHandling: "404-page" },
    domains: [
      "conneroh.com",
      "www.conneroh.com",
      // Pull request previews: <branch>.preview.conneroh.com. Never serves production.
      { hostname: "preview.conneroh.com", production: false, previews: true },
    ],
    // No workers.dev URLs: the account subdomain is personal and CI logs are public.
    workersDev: false,
    previewUrls: false,
  },
});
