# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Docusaurus 3.x, React 18, TypeScript, MDX, Framer Motion, react-icons

## Users

Mixed technical audience spanning entry-level to senior engineers. Primary reader is a developer who:
- Wants to learn new technologies and patterns
- Values practical, actionable content over theory
- Often scans for relevant solutions before reading deeply
- May arrive from search, social links, or direct navigation

## Product Purpose

Immersed in Code is a personal technical blog that documents real engineering work — deployment strategies, framework guides, tooling, and architecture patterns. It serves as both a learning journal and a reference library for the author and readers alike.

## Positioning

A practitioner's voice, not a content farm. Posts come from direct experience shipping things, not synthesizing documentation. The author writes what they wished existed when they were stuck.

## Operating Context

- Blog posts are the core content unit, organized by numbered series
- Tags and recent posts drive discoverability within the site
- Technical accuracy and code correctness are non-negotiable
- Posts are published on an irregular cadence tied to real work done
- No comments or community features — reader engagement happens elsewhere

## Capabilities and Constraints

- Static site generation with MDX for rich content
- Custom homepage surfacing recent posts and popular tags
- Docker-based deployment with blue-green strategy
- No e-commerce, authentication, or user-generated content
- Google Analytics configured for traffic insights

## Brand Commitments

- Author identity: Bach Pham (pxuanbach)
- Site identity: Immersed in Code
- No external brand guidelines — full creative latitude
- Existing technical content must be preserved and accessible

## Evidence on Hand

- 20+ blog posts covering FastAPI series, Docker/deployment, and tooling
- Custom React components: Home, RecentBlogItems, Timeline, TopTagItems
- Author timeline data in `src/data/timeline.ts`
- Custom Prism theme: jettwave (light/dark)

## Product Principles

1. **Craft over volume** — fewer, more complete posts than frequent shallow ones
2. **Code that works** — all examples are tested and production-proven
3. **Reader's time respected** — clear structure, honest estimates, no filler
4. **Personality in the prose** — this is one person's voice, not a publication

## Accessibility & Inclusion

Standard web accessibility (WCAG 2.1 AA target). Code readability is paramount — syntax highlighting, copyable snippets, and clear formatting.
