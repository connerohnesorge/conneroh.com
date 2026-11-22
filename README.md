# conneroh.com

Personal site of Conner Ohnesorge. Static [Astro](https://astro.build) build served from a Cloudflare Worker (static assets only).

The previous Go/templ site lives on the `legacy-go` branch.

## Develop

Requires Node.js 22.18 or later (the `cf` CLI does not run on Bun).

```sh
npm ci
npm run dev        # http://localhost:4321
npm run build      # writes dist/
```

## Content

| What | Where |
|---|---|
| Areas of work (the `groups:` list) | `src/content/groups.yaml` |
| Projects shown in each group's panel | `src/content/projects/*.md` |
| Experience table | `src/content/experience.yaml` |
| Posts | `src/content/posts/*.md` |

A project joins one or more groups through its frontmatter:

```yaml
---
title: gohard
repo: https://github.com/connerohnesorge/gohard
groups: [go, fpga]   # must match ids in groups.yaml, or the build fails
lang: Go
stars: 12            # optional
featured: true       # false hides it without deleting the file
order: 1             # position within the group's panel
---
One-line description shown in the panel.
```

The build fails if a group has no featured projects.

## Deploy

`main` is protected: every change goes through a pull request, and the `build` check (type check, `astro build`, `cf deploy --dry-run`) must pass before it can merge. Admins are included.

- Pull requests from this repo deploy a preview to `https://pr-<number>.preview.conneroh.com` and comment the URL on the PR. Closing the PR deletes the preview. Fork pull requests only build and dry-run.
- Merging to `main` deploys production to the `conneroh-com` Worker on `conneroh.com` and `www`.

The workflow needs two repository secrets: `CLOUDFLARE_API_TOKEN` (Workers Scripts edit, Account Settings read, and Workers Routes, Zone read, and DNS edit on the `conneroh.com` zone) and `CLOUDFLARE_ACCOUNT_ID`.

Manual deploy (skips the pull request gate): `npm run build && npx cf deploy dist`.
