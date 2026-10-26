# Afyra Technical Documentation

VitePress documentation for Afyra, covering the platform architecture, features, Flutter mobile application, Next.js web application, FastAPI backend, AI model, security, QA, integrations, algorithms, and developer workflows.

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm ci
npm run docs:dev
```

Open the URL printed in the terminal. This repository uses the VitePress base path `/techelle-technical-documentation/` for GitHub Pages.

## Validate and build

```bash
npm run docs:build
npm run docs:preview
```

The generated site is written to `docs/.vitepress/dist/`. Do not edit generated build files.

## Documentation structure

```text
docs/
├── index.md
├── features/index.md
├── architecture/{sad,ssad,data-models}.md
├── frontend-mobile/{index,ui-designs}.md
├── frontend-web/{index,ui-designs}.md
├── backend/index.md
├── ai/index.md
├── design-and-brand-guidelines/index.md
├── security/index.md
├── qa/index.md
├── integrations/index.md
├── code-standards/index.md
├── platform/{index,pooling,matching,pricing}.md
├── developer-guide/index.md
├── public/images/
└── .vitepress/{config.ts,theme/}
```

## Editing pages

- Edit Markdown in `docs/`.
- Edit sidebar, logo, site base path, and search in `docs/.vitepress/config.ts`.
- Edit site styling in `docs/.vitepress/theme/style.css`.
- Put images under `docs/public/images/` and reference them as `/images/<name>`.
- Mobile UI screenshots belong in `docs/public/images/mobile/`.
- Web UI screenshots belong in `docs/public/images/web/`.
- The cream logo is selected automatically in dark mode by the VitePress theme configuration.

## UI Screenshots

Mobile screenshots are stored in `docs/public/images/mobile/`.

Web screenshots are stored in `docs/public/images/web/`.

To add a screenshot:

1. Add the image to the appropriate folder.
2. Reference it in the corresponding `ui-designs.md` page.
3. Run `npm run docs:build` to verify the documentation.

## Deployment

The VitePress base path is configured for `https://<account>.github.io/techelle-technical-documentation/`. If deploying at a different URL, update `base` in `docs/.vitepress/config.ts`.

## API reference

[Hosted Afyra Swagger API](https://afyra-def6d466c54b.herokuapp.com/docs)
