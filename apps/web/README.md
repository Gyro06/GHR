Cloudflare Pages deployment

This folder is the static frontend root. To configure Cloudflare Pages (dashboard):

- Framework preset: None (Static site)
- Build command: `npm run pages:build` (or leave empty)
- Build output directory: `apps/web`

If you use `npm run pages:build`, it runs the root script `pages:build` which invokes `apps/web` build only, avoiding workspace-wide builds.
