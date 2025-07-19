
# Vite Static Site Scaffold

This scaffold was generated as a template for migrating your cleaned static website to a Vite-powered build system. Replace the placeholder files with your actual HTML, CSS, JavaScript, and static assets.

## Getting Started

```bash
npm install # Install Vite
npm run dev # Start local dev server with HMR
npm run build # Generate production build
npm run preview # Preview the production build locally
```

Place static assets such as images or fonts inside the `public/` folder. They will be copied verbatim to the `dist/` output directory.

Source files should live under `src/`:
- `src/scripts/` for modular JavaScript (ES6 modules)
- `src/styles/` for CSS (or pre-processors)
- `src/components/` for reusable UI fragments (optional)

The root `index.html` is treated as the entry point by Vite. If you have multiple pages, replicate additional HTML files at the project root or configure `rollupOptions.input` in `vite.config.js` accordingly.

Make sure to maintain the same visual UI/design by preserving your original markup and styles.
