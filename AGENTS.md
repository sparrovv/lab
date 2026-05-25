# Repository Instructions

This repository is an AI-assisted lab for independent static projects. Optimize every change for low-friction delivery:

```txt
prompt -> PR -> merge -> deployed public page
```

## Stack

- Astro
- TypeScript
- Markdown / MDX when useful
- pnpm
- GitHub Pages
- GitHub Actions deployment
- Static-first pages
- Client-side interactivity only when needed
- No backend by default

## Commands

Use pnpm only.

```bash
pnpm install
pnpm run dev
pnpm run build
```

Every PR must pass:

```bash
pnpm run build
```

Do not add npm, Yarn, or Bun lockfiles.

## Core Architecture

One project equals one folder:

```txt
src/pages/projects/<project-slug>/
```

Every project must be fully self-contained. Project-specific files stay inside that project folder:

- `index.astro`
- project layout files
- `styles.css`
- data
- markdown / MDX
- scripts
- assets
- project-local components

Do not move project-specific logic into shared folders.

## Shared Code

Shared code is allowed only when it is genuinely generic and useful across projects.

Allowed shared locations:

```txt
src/components/
src/lib/
```

Keep shared code minimal. Avoid coupling projects together.

## Homepage

The homepage at `/` must show a gallery of projects.

When adding a new project, also add its metadata to the homepage project list in:

```txt
src/pages/index.astro
```

Project links must use:

```txt
/projects/<project-slug>/
```

Respect the GitHub Pages base path by using `import.meta.env.BASE_URL` for internal links in Astro files.

## Astro Routing Caveat

Astro treats `.astro` files under `src/pages` as public routes.

The current requested structure includes project-local `layout.astro` files under `src/pages/projects/<slug>/`, so those files are routable. If avoiding those public layout routes becomes important, rename them to `_layout.astro` or move them outside `src/pages` while preserving project isolation.

Do not introduce additional routable helper `.astro` files under `src/pages` unless they are intended public pages.

## Project Isolation Rules

- Modify only the project folder relevant to the task.
- Do not modify unrelated projects.
- Keep data, styles, scripts, components, and assets local to the project unless they are truly generic.
- Prefer static implementations.
- Avoid backend services.
- Keep dependencies minimal.
- Preserve independent deployment capability.

## Deployment

Deployment uses GitHub Actions and GitHub Pages.

After merge to `main`:

```txt
merge -> pnpm build -> deploy -> public GitHub Pages URL
```

Expected public URL:

```txt
https://sparrovv.github.io/lab/
```

The Astro config must continue to support the `/lab` base path.

## Best Practices For Agents

- Read the relevant project folder before changing it.
- Prefer existing patterns over new abstractions.
- Keep edits small and scoped.
- Add new dependencies only when they clearly reduce complexity or are necessary.
- Use static Astro, TypeScript, CSS, and browser APIs before reaching for React.
- Use React only for genuinely stateful or complex interactive UI.
- Validate with `pnpm run build` before finishing code changes.
- Do not commit generated directories such as `dist/`, `.astro/`, or `node_modules/`.
- If a task changes deployment, package management, routing, or homepage registration, update this file or `docs/codex-instructions.md` if the rules changed.

