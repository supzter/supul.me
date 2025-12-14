# Supul's Portfolio

A modern, fast portfolio website built with **Astro 5.0**, **TypeScript**, and **Tailwind CSS 4**. Automatically deployed to GitHub Pages.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:4321)
npm run dev

# Build for production (includes TypeScript checking)
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages deployment
├── public/                   # Static assets (images, fonts, favicon)
├── src/
│   ├── components/          # Reusable Astro components
│   │   └── ProjectCard.astro
│   ├── layouts/             # Page layouts
│   │   ├── Layout.astro     # Standard page layout with nav
│   │   └── HomeLayout.astro # Hero-focused home layout
│   ├── pages/               # File-based routing
│   │   └── index.astro      # Home page (/)
│   └── styles/
│       └── global.css       # Tailwind imports & custom theme
├── astro.config.mjs         # Astro configuration
├── package.json
└── tsconfig.json            # TypeScript configuration (strict mode)
```

## 🛠️ Common Tasks

### Adding a New Page
Create a new `.astro` file in `src/pages/`:
```bash
# Creates route at /about
touch src/pages/about.astro
```

### Adding a New Project
Edit `src/pages/index.astro` and add a new `<ProjectCard>` component in the projects section:
```astro
<ProjectCard 
  title="New Project"
  description="Project description here"
  tags={["React", "TypeScript"]}
  link="https://project-url.com"
  github="https://github.com/user/repo"
/>
```

### Customizing Colors
Edit theme colors in `src/styles/global.css`:
```css
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
}
```

### Updating Personal Info
- **Name/Title**: Edit hero section in `src/pages/index.astro`
- **About**: Edit about section in `src/pages/index.astro`
- **Links**: Update contact section with your GitHub, LinkedIn, email
- **Navigation**: Edit `src/layouts/Layout.astro`

## 🚢 Deployment

### GitHub Pages (Automatic)
This site deploys automatically via GitHub Actions when you push to `main` or `master` branch.

**Setup steps:**
1. Go to repository Settings → Pages
2. Under "Build and deployment" → Source, select **GitHub Actions**
3. Push to your repository - deployment starts automatically
4. Your site will be live at `https://rajiteh.github.io/supul-portfolio`

**Configuration:**
- Deployment workflow: `.github/workflows/deploy.yml`
- Site URL configured in `astro.config.mjs`

### Manual Build
```bash
npm run build
# Output in ./dist/ directory
```

## 🤖 For Coding Agents

When working on this codebase:

**Tech Stack:**
- Framework: Astro 5.0 (static site generator)
- Styling: Tailwind CSS 4 (CSS-based config via `@theme` directive)
- Language: TypeScript (strict mode)
- Deployment: GitHub Pages via Actions

**Key Files:**
- `src/pages/index.astro` - Main portfolio page (hero, projects, about, contact)
- `src/layouts/Layout.astro` - Standard layout with navigation
- `src/layouts/HomeLayout.astro` - Home page layout (gradient background)
- `src/components/ProjectCard.astro` - Project display component
- `astro.config.mjs` - Astro + Tailwind configuration

**Conventions:**
- Astro components use `.astro` extension
- TypeScript frontmatter between `---` delimiters
- Props defined via `interface Props` in frontmatter
- Tailwind classes for styling (no separate CSS modules)
- Dark mode via `dark:` Tailwind variants

**Making Changes:**
- Pages are auto-routed based on `src/pages/` structure
- Components are typed with TypeScript interfaces
- Build includes type checking (`astro check`)
- Hot reload enabled in dev mode

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS 4 Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
