## Plan: Set up Astro + TypeScript + Tailwind portfolio site

Build a modern static portfolio site using Astro 5.0 with TypeScript and Tailwind CSS 4, configured for GitHub Pages deployment. This stack provides excellent developer experience with minimal complexity—no complex JavaScript, component-based architecture, and automated deployment.

### Steps

1. **Initialize Astro project** with TypeScript using `npm create astro@latest` in `/home/rajiteh/dev/supul-portfolio`, selecting the "Empty" template and strict TypeScript configuration

2. **Configure Tailwind CSS 4** by running `npx astro add tailwind`, creating [`src/styles/global.css`](src/styles/global.css) with `@import "tailwindcss"`, and importing it in the base layout

3. **Set up project structure** with [`src/layouts/Layout.astro`](src/layouts/Layout.astro) for standard pages, [`src/layouts/HomeLayout.astro`](src/layouts/HomeLayout.astro) for home page, and [`src/components/`](src/components/) for reusable components like navigation and project cards

4. **Configure GitHub Pages deployment** by updating [`astro.config.mjs`](astro.config.mjs) with your `site` URL and `base` path, then creating [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) using the official `withastro/action@v5`

5. **Create initial pages** in [`src/pages/`](src/pages/) including [`index.astro`](src/pages/index.astro) (home) and project showcase pages, each importing the appropriate layout and defining typed props

6. **Enable GitHub Pages** in repository settings with source set to "GitHub Actions", then push to trigger automatic deployment

### Further Considerations

1. **Base path configuration**: If deploying to `username.github.io/repo-name`, set `base: '/repo-name'` in `astro.config.mjs`. If deploying to `username.github.io` (user site), omit the `base` property.

2. **Tailwind customization**: Tailwind 4 uses CSS-based configuration instead of `tailwind.config.js`. Add custom theme values via CSS variables in `global.css` using `@theme` directive.

3. **Type checking**: Add `"astro check && astro build"` to your build script in `package.json` to catch TypeScript errors before deployment.
