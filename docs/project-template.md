# Project Template

Use this template for new lab projects.

## Folder

```txt
src/pages/projects/<project-slug>/
```

## Required Files

```txt
index.astro
layout.astro
styles.css
data/
components/
```

Add `scripts/`, `lessons/`, or project-local assets only when the project needs them.

## Homepage Registration

Add the project metadata to the `projects` array in:

```txt
src/pages/index.astro
```

Every project card must link to:

```txt
/projects/<project-slug>/
```

## Isolation Checklist

- Project layout lives in the project folder.
- Project styles live in the project folder.
- Project data lives in the project folder.
- Project components live in the project folder.
- No unrelated project files are changed.
- No backend services are introduced.
- `npm run build` passes.
