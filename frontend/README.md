# Coffee Stock

A responsive Russian/English wholesale storefront for Coffee Stock in Yoshkar-Ola, Russia. Built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui (Button, Badge, Tabs, Separator). Russian is the default; the language switch updates page metadata and saves the choice in local storage when available.

## Local development

Requires Node.js 22.12+ (or Node.js 24) and npm.

```sh
cd frontend
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run preview
```

The production website is generated in `frontend/dist`.

## GitHub Pages

1. In this repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push the frontend and `.github/workflows/deploy-pages.yml` to `main`, or run the workflow manually from the Actions tab.
3. The workflow installs dependencies, runs lint and the production build, then deploys `frontend/dist`.

For the current repository the expected URL is `https://avetisyan528.github.io/coffeestock/`. This setup does not itself publish the site; the repository must have Pages enabled and the workflow must run successfully.

Vite uses `base: './'`, so asset links work under the repository path and on a custom domain. Navigation uses in-page anchors, so there are no client-side routes requiring a GitHub Pages fallback. Fonts and the hero photo are served locally; no external runtime APIs are required.

## Content and placeholders

- Edit both language dictionaries and sample products in `src/App.tsx`.
- Four catalog categories are functional. Product cards are previews with no ordering action.
- Offer buttons are intentionally disabled. There is no checkout, backend, or contact form.
- The street address and phone are visibly marked examples. The email uses the reserved `.example` domain; social links open `example.com` placeholder pages. Replace these with verified business details before launch.
- Product package illustrations are original CSS artwork. Product names and tasting notes are illustrative, not verified inventory.
- Hero photo: [coffee beans on Unsplash](https://images.unsplash.com/photo-1447933601403-0c6688de566e), stored in `public/images/coffee-roastery.jpg`.
- Fonts are bundled via the `@fontsource-variable/golos-text` and `@fontsource-variable/manrope` packages.

Add more shadcn components with `npx shadcn@latest add <component>`. Configuration is in `components.json`.
