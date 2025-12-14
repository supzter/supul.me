# Context Artifact

## Project Overview
Built a personal portfolio website for Supul using Astro 5.0 with TypeScript and Tailwind CSS 4. The site showcases design work, professional experience, and project case studies.

## Tech Stack
- **Framework**: Astro 5.0 (static site generation)
- **Styling**: Tailwind CSS 4 (CSS-based configuration via `@theme` directive)
- **Language**: TypeScript (strict mode)
- **Fonts**: Google Fonts - Outfit (headings, weights 600/700/800), Inter (body, weights 400/500/600/700)
- **Deployment**: GitHub Pages via GitHub Actions workflow

## Design System
- **Primary Color**: `#50A684` (green)
- **Color Variations**: `#4A9A7A` (dark green), `#5BB28E` (light green), `#E8F5F1` (light accent)
- **Typography**: Outfit for headings/bold text, Inter for body copy
- **Key Pattern**: Green gradient headers/footers using `bg-gradient-to-r from-[#4A9A7A] via-[#50A684] to-[#5BB28E]`

## Architecture Patterns

### Layouts
1. **HomeLayout.astro** - Homepage with navigation and gradient footer
2. **Layout.astro** - Standard page layout (basic structure)
3. **PortfolioDetail.astro** - Reusable layout for case study pages with props (title, subtitle, description, heroImage), green gradient hero with optional side-by-side image, navigation, content slot, matching footer

### Pages
1. **index.astro** - Homepage with Hero, My Story (3 hats worn), My Work (3 projects), What I Bring sections
2. **solar-offset.astro** - Mobile app case study with comprehensive sections (hero, overview, problem space, design iterations, technical analysis, final prototype)
3. **etf-dashboard.astro** - Dashboard showcase with data visualization sections
4. **scotiabank.astro** - Enterprise projects list (NDA-restricted, no visuals, text-focused)

## Content Patterns

### Portfolio Detail Pages
- **Hero Section**: Green gradient background with title and optional hero image (can be side-by-side for Solar Offset or centered for others)
- **Quick Overview**: Single-column table-like layout (Solar Offset) or 2-column grid with project metadata (What/Target/Interesting/Year)
- **Introduction**: Text explanation of project context
- **Content Sections**: Multiple sections with alternating text-left/image-right or full-width layouts
- **CTA Footer**: Green gradient section with "Curious to connect?" call-to-action

### Homepage Projects
All three project cards link to their detail pages:
- Solar Offset → `/solar-offset`
- ETF Dashboard → `/etf-dashboard`
- Scotiabank Projects → `/scotiabank`

## Implementation Approach
1. Started with mockup analysis (homepage mockup provided, then 3 portfolio page mockups)
2. Implemented pixel-perfect homepage matching design specifications
3. Iteratively refined spacing, colors, backgrounds, fonts based on visual comparison
4. Created reusable PortfolioDetail layout to DRY up portfolio pages
5. Implemented all three portfolio pages following consistent pattern
6. Linked everything together with proper navigation
7. Updated Solar Offset page to match mockup precisely:
   - Hero: phone image and heading on same line
   - Quick Overview: table-like single-column layout with border separators
   - Problem Space: 2 images (empathy mapping, user needs discovery)
   - Design Iteration: single comprehensive wireframe image
   - Final Prototype: mobile screens with gradient backgrounds
8. Replaced all placeholder images with actual project assets across all portfolio pages

## Asset Management
- Images stored in `/public` folder organized by project:
  - `/public/solar-offset/` - Mobile app screenshots, empathy mapping, design iterations, technical diagrams
  - `/public/etf/` - Dashboard screenshots, charts, tables
  - `/public/scotia/` - Scotiabank logo
- All placeholder images replaced with actual project assets
- Homepage images: character.png, mobile-app.png, dashboard.png, enterprise.png

## Key Design Decisions
- Removed decorative borders/shadows/backgrounds to match clean mockup aesthetic
- Increased spacing systematically (py-20→py-24) for breathing room
- Applied gradient pattern consistently across all CTAs and footers
- Used semantic HTML structure with proper heading hierarchy
- Mobile-responsive grid layouts (md:grid-cols-2, md:grid-cols-3)

## Development Workflow
- Dev server runs at `localhost:4321`
- Visual verification done via Playwright browser tools
- Multi-file edits performed efficiently with `multi_replace_string_in_file`
- Incremental refinement based on mockup comparison
