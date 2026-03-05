---
date: 2026-03-05T10:00:00Z
researcher: GitHub Copilot
git_commit: unknown
branch: unknown
repository: blog
topic: "[My Journey] section on Home page"
tags: [research, codebase, home-page, journey-timeline, react, css-modules]
status: complete
last_updated: 2026-03-05
last_updated_by: GitHub Copilot
---

# Research: [My Journey] section on Home page

**Date**: 2025-03-05
**Researcher**: GitHub Copilot
**Git Commit**: unknown
**Branch**: unknown
**Repository**: blog

## Research Question
How to implement a "My Journey" timeline section on the blog home page using the provided `TimelineComponent.tsx` as a blueprint?

## Summary
The goal was to integrate a professional timeline into the Docusaurus-based home page. This required adapting a Tailwind CSS component to the project's existing CSS-in-JS and CSS Modules architecture, installing necessary animation and icon dependencies, and populating it with verified CV data.

## Detailed Findings

### Component Architecture
A new component `JourneyTimeline` was created at [src/components/Timeline/index.tsx](src/components/Timeline/index.tsx). Unlike the initial blueprint which used Tailwind, this implementation uses:
- **CSS Modules**: [src/components/Timeline/index.module.css](src/components/Timeline/index.module.css) for local scoping.
- **Docusaurus Tokens**: Uses `--ifm-*` CSS variables to support built-in light/dark mode switching automatically.
- **Framer Motion**: Handles reveal animations (`whileInView`) and expansion logic for the achievements sub-list.

### Data Management
Timeline content is decoupled from the UI:
- [src/data/timeline.ts](src/data/timeline.ts) exports a `timelineData` array representing the author's actual career path.
- This allows for easy content updates without modifying rendering logic.

### CV Integration
The timeline data was derived from a provided CV ([data.txt](data.txt)):
- **Work**: Software Engineer and Intern at TiSoHa Software Solution (07/2022 - Present).
- **Education**: Bachelor of Software Engineering at UIT - VNU HCM (GPA 8.33).
- **Project**: Immersed in Code Blog (Docusaurus + Docker + VPS).

## Code References
- [src/components/Timeline/index.tsx](src/components/Timeline/index.tsx:1-120) - Main rendering logic.
- [src/data/timeline.ts](src/data/timeline.ts:1-70) - Career data and TypeScript interfaces.
- [src/components/Home/index.tsx](src/components/Home/index.tsx:55) - Insertion point in the homepage layout.

## Architecture Documentation
- **Responsive Pattern**: Centered line with alternating cards on desktop; single-column left-aligned layout on mobile (breakpoint 768px).
- **Theming**: Integrated with Docusaurus `Layout` component using CSS modules.
- **Dependencies**: Added `framer-motion` and `react-icons` to `package.json`.

## Historical Context (from ./github/researchs/)
- No related prior research found for timeline implementation in this project.

## Related Research
- `.github/plans/2026-03-04-implement-personal-projects-section.md` - Mentions similar expansion of home page components.

## Open Questions
- None at this time.
