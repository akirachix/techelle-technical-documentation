# Téchelle Technical Documentation

Technical documentation for **Afyra**, the TechElle platform that connects farmers who have crop residues to sell with animal feed manufacturers. It covers the mobile app used by farmers and drivers, the web dashboard used by manufacturers and admins, the API that connects them, and the pricing, matching, pooling and AI grading rules.

The site is built with [VitePress](https://vitepress.dev).

## Contents

| Page | What it covers |
| ---- | -------------- |
| Overview | What Afyra is, who it is for, and its scope |
| Architecture | How the apps, API, database and outside services fit together |
| Backend / API | The FastAPI service, data model, endpoints and business rules |
| Pricing, Matching & Pooling | Price ranges, matching requests to listings and pooling nearby farmers |
| Mobile App | The Flutter app for farmers, host farmers and drivers, including offline use |
| Web Dashboard | The PWA for feed manufacturers and admins |
| Security | Sign-in, roles, record-level access, data protection and the activity log |
| AI Grading | How residue photos are graded |
| Integrations | SMS Leopard, Tamia Feeds reference prices and Google Maps |
| Deployment | Hosting, environments, scheduled jobs and releases |
| Design & Guidelines | Colours, type, components, accessibility and writing rules |
| Developer Guide | Setting up and running Afyra locally |
| Documentation Guide | How these docs are organised and written |

## Getting started

### Prerequisites

- Node.js 18 or newer (`node -v` to check)
- npm

### Install and run

```bash
git clone https://github.com/akirachix/techelle-technical-documentation.git
cd techelle-technical-documentation
npm install
npm run docs:dev
```

Open http://localhost:5173. The page reloads each time you save a file.

### Commands

| Command | What it does |
| ------- | ------------ |
| `npm run docs:dev` | Starts the local preview |
| `npm run docs:build` | Builds the static site into `docs/.vitepress/dist` |
| `npm run docs:preview` | Serves the built site for a final check |

## Project structure

```
techelle-technical-documentation/
├── package.json
└── docs/
    ├── .vitepress/
    │   ├── config.ts          # Site title, top menu, sidebar, search, footer
    │   └── theme/
    │       ├── index.ts       # Loads the default theme, Afyra styles and the page status label
    │       ├── PageStatus.vue # Shows each page's status (Planned, Draft, In review, Complete)
    │       └── style.css      # Afyra colours, fonts and home page layout
    ├── public/                # Afyra logo (green and cream), tab icons and illustrations (served from /)
    ├── index.md               # Home page
    └── *.md                   # One file per page
```

Each Markdown file in `docs/` becomes a page: `docs/security.md` is served at `/security`.

## Writing documentation

### Edit a page

1. Open the page in `docs/`, for example `docs/overview.md`.
2. Write under the `# Title`, using `##` for sections and `###` for sub-sections.
3. Check it in the browser with `npm run docs:dev`.
4. Change `status` in the page header as you go (see below).

### Add a page

1. Create `docs/your-page.md` with this header:

   ```md
   ---
   title: Your Page
   description: One sentence describing the page.
   status: planned
   ---

   # Your Page
   ```

2. Add it to the sidebar in `docs/.vitepress/config.ts`:

   ```ts
   { text: 'Your Page', link: '/your-page' },
   ```

### Page status

Set `status` in each page's header. It shows as a label at the top of the page, so the team can see progress:

| Status | Label | Meaning |
| ------ | ----- | ------- |
| `planned` | Planned | Title only, not started |
| `draft` | Draft | Being written |
| `review` | In review | Ready for a teammate to check |
| `complete` | Complete | Reviewed and up to date |

### Writing rules

- Describe what the code does today, not what is planned.
- Number sections (`## 1.`, `### 1.1`) so they are easy to refer to.
- Use a table when comparing more than three things.
- Name source files in backticks, such as `afyra/services/pooling.py`, so readers can find the code.
- List environment variable names only. Never commit secrets or real values.
- Use the product's words: farmer, host farmer, manufacturer, driver, listing, request, collection point, pool.
- Put images in `docs/public/` and reference them as `/image-name.png`.
- Write each fact in one place and link to it from other pages.

## Design

The look follows the Afyra product design in Figma (*Product design_Techelle*):

| Token | Colour | Used for |
| ----- | ------ | -------- |
| Forest | `#0d4f3b` | Headings, buttons, links, the dark band |
| Gold | `#eac04c` | Highlights, active markers, focus outline |
| Cream | `#fffbeb` | Page background |
| Mint | `#ddf6dd` | Icon tiles, footer |

The site has a light and a dark mode (the switch is in the top bar; it starts with the reader's system setting). Dark mode uses deep green with cream text and gold links.

| File in `docs/public/` | Used for |
| ---------------------- | -------- |
| `afyra-logo.png` | The Afyra wordmark in the top bar, light mode |
| `afyra-logo-cream.png` | The cream wordmark, dark mode |
| `afyra-favicon.png`, `afyra-icon.png` | Browser tab and phone home-screen icon (the leafy "a") |
| `afyra-hero.svg` | Home page illustration |

The fonts are Inter (text) and JetBrains Mono (code), loaded from Google Fonts. All colours live as variables at the top of `docs/.vitepress/theme/style.css` (light) and in its `.dark` block (dark), so change them there, not in individual rules.

## Contributing

1. Create a branch: `git checkout -b docs/<page-name>`
2. Write or update the page.
3. Run `npm run docs:build` to make sure the site builds. It fails on broken links.
4. Commit, push and open a pull request for review.

## Related repositories

| Repository | Description |
| ---------- | ----------- |
| `techelle-backend` | FastAPI service, database, pricing, matching and grading |
| Web dashboard | PWA for manufacturers and admins |
| Mobile app | Flutter app for farmers and drivers |