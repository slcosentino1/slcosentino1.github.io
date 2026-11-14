# Sebastian Cosentino — Portfolio

Single-page React + TypeScript portfolio built with Vite. Includes responsive sections for selected projects, professional experience, technical expertise, education and contact, plus the downloadable PDF résumé.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publish with GitHub Pages

1. Create a repository named **`slcosentino1.github.io`** under the GitHub account `slcosentino1`. This exact name is required for your personal user site.
2. Keep `base: '/'` in `vite.config.ts`; that is the correct Vite base for a user site at `https://slcosentino1.github.io/`.
3. Push the project contents (the files inside this folder) to the repository, with `main` as the default branch.
4. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
5. The included workflow builds the React app and deploys the generated `dist/` directory on every push to `main`.

## Before publishing

- LinkedIn: https://www.linkedin.com/in/scosentino/
- GitHub: https://github.com/slcosentino1
- Confirm the public contact details and résumé PDF are intended to be published.

## Notes

This is a React single-page application with in-page anchor navigation (not a multi-route SPA). That keeps it compatible with GitHub Pages without a custom 404 fallback or rewrite rules. The Vite `base` is `/`, as required for a user site.
