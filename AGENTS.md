# AGENTS.md

This file provides guidance to AI agents working with the Immersed in Code blog - a personal technical blog and portfolio built with Docusaurus 3.

## Project Overview

**Immersed in Code** is a personal technical blog for software engineers, featuring tutorials, field notes, and an engineering timeline. The site is built with Docusaurus 3, uses TypeScript/React, and includes a custom blog plugin.

## Commands

```bash
# Install dependencies
yarn

# Start local development server (hot reload)
yarn start

# Build for production
yarn build

# Serve the production build locally
yarn serve

# Clear Docusaurus cache
yarn clear

# TypeScript type checking
yarn typecheck

# Deploy to GitHub Pages
yarn deploy:ghpages

# Docker build
yarn build:docker

# Docker push (all tags)
yarn push:docker
```

## Architecture

### Directory Structure

```
├── blog/                    # Blog posts (Markdown/MDX)
│   ├── 00_welcome/         # Post folders with index.md
│   ├── 01_zero-downtime.../
│   └── tags.yml            # Tag definitions
├── docs/                    # Documentation pages
├── src/
│   ├── components/          # React components
│   │   ├── Home/           # Homepage component
│   │   ├── RecentBlogItems/
│   │   ├── Timeline/
│   │   └── TopTagItems/
│   ├── css/custom.css      # Global styles
│   ├── data/timeline.ts    # Career/portfolio data
│   └── pages/              # Custom pages
├── plugins/
│   └── blog-plugin.js      # Custom blog plugin (MDX blog handling)
├── static/img/             # Static assets
├── docusaurus.config.ts    # Main Docusaurus configuration
├── sidebars.ts             # Documentation sidebar
└── deploy/                  # Docker deployment configs
```

### Key Configuration

- **docusaurus.config.ts**: Site config including navbar, footer, plugins (image-zoom, lunr-search), Prism themes
- **plugins/blog-plugin.js**: Custom MDX blog processing (do not remove)
- **blog-plugin** is required for the blog to render correctly - it handles routeBasePath and MDX compilation
- Blog posts use folder structure with `index.md` containing frontmatter

### Plugins & Dependencies

- `docusaurus-plugin-image-zoom`: Zoom on markdown images
- `docusaurus-lunr-search`: Full-text search
- `@docusaurus/plugin-ideal-image`: Optimized images
- `framer-motion`: Animations
- `prism-react-renderer`: Syntax highlighting

## Patterns & Conventions

### Blog Post Structure

Blog posts use numbered folder prefixes for ordering:

```
blog/
├── 00_welcome/
│   └── index.md           # Frontmatter: title, slug, tags, authors, etc.
├── 01_zero-downtime.../
│   └── index.md
```

### Frontmatter Fields

```yaml
---
slug: /blog/post-url
title: "Post Title"
authors: [pxuanbach]
tags: [tag1, tag2]
date: 2025-01-01
---
```

### Custom Components

- `src/components/Timeline/index.tsx`: Engineering timeline (data from `src/data/timeline.ts`)
- `src/components/RecentBlogItems/`: Recent posts display
- `src/components/TopTagItems/`: Tag cloud/navigation

### Deployment

- **GitHub Pages**: Uses `gh-pages` branch, configured in `docusaurus.config.ts`
- **Docker**: Production Dockerfile with nginx for serving static build

### Important Notes

1. Do not remove or disable `plugins/blog-plugin.js` - it is essential for blog functionality
2. Blog posts in `blog/` use MDX format with React components support
3. The classic preset has `blog: false` because the custom plugin handles the blog
4. Image zoom is configured for `.markdown img` selector in the theme config
5. Google Analytics (Gtag) is configured with trackingID: G-2VH0PJCNSH
