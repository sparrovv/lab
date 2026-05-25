# Lab

A permanent AI-assisted laboratory of independent experiments, lessons, analyses, and tools.

The repository is optimized for low-friction delivery:

```txt
prompt -> PR -> merge -> deployed public page
```

## Stack

- Astro
- TypeScript
- Markdown / MDX where useful
- GitHub Pages
- GitHub Actions deployment
- Static-first architecture
- Client-side interactivity when needed
- Optional React only when necessary

## Architecture

Each project is a fully self-contained mini-site under:

```txt
src/pages/projects/<project-slug>/
```

Project-specific layouts, styles, data, markdown, scripts, assets, and components stay inside that folder. Shared code is intentionally minimal and must be generic.

## Commands

```bash
pnpm install
pnpm run dev
pnpm run build
```

## Deployment

Merges to `main` build and deploy automatically through GitHub Actions to GitHub Pages.

Expected URL:

```txt
https://<github-user>.github.io/lab/
```
