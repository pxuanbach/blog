# Implementation Plan: Personal Projects section on Home

## Overview
Add a `Personal Projects` section to the Home page. The section displays a list of project cards defined by a data list. Each item includes: name, story, image/logo, and URL.

## Current state
- Home route is provided by `@site/src/components/Home/index.tsx` (registered by `plugins/blog-plugin.js`).
- There is an existing `PersonalProjects` component at `src/components/PersonalProjects/index.tsx` (identified in repo), but its behavior needs to be confirmed or implemented to consume a data source.

## Desired end state
- A reusable data file `src/data/personal-projects.ts` (or `.json`) exporting an array of project objects.
- `src/components/PersonalProjects/index.tsx` reads that data (or receives it via props) and renders a responsive card grid with project name, short story, image, and link.
- `src/components/Home/index.tsx` includes the `PersonalProjects` section, optionally passing data or letting the component import it directly.
- Minimal styling included via `src/css/custom.css` or component-level CSS module.

## Data Model
TypeScript interface (suggested):

```ts
export interface PersonalProject {
  id: string; // unique key
  name: string;
  story: string; // short description (1-3 sentences)
  image: string; // relative path under static/img or external URL
  url: string; // external or internal URL
}
```

Sample data (`src/data/personal-projects.ts`):

```ts
import type { PersonalProject } from '../types';

const projects: PersonalProject[] = [
  {
    id: 'proj-1',
    name: 'TinyTasker',
    story: 'A minimal task runner to automate repetitive local tasks.',
    image: '/img/projects/tinytasker.png',
    url: 'https://github.com/youruser/tinytasker',
  },
  // more items
];

export default projects;
```

## Implementation Phases

1) Add data model + sample data
- File: `src/data/personal-projects.ts`
- Add `src/types/index.d.ts` or `src/types/personal-project.ts` for interface if using TS.

2) Implement/confirm `PersonalProjects` component
- File: `src/components/PersonalProjects/index.tsx`
- Behavior: accept `projects: PersonalProject[]` prop (preferred) or import default data. Render a responsive grid of cards; each card shows image (lazy), name, story (truncate after ~160 chars), and link button.
- Accessibility: images have alt text; links open in new tab when external.

Example render snippet:

```tsx
function PersonalProjects({ projects }: { projects: PersonalProject[] }) {
  return (
    <section className="personal-projects">
      <h2>Personal Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.id} className="card">
            <img src={p.image} alt={`${p.name} logo`} />
            <h3>{p.name}</h3>
            <p>{p.story}</p>
            <a href={p.url} className="btn">View</a>
          </article>
        ))}
      </div>
    </section>
  );
}
```

3) Integrate in `Home`
- File: `src/components/Home/index.tsx`
- Import `PersonalProjects` and `projects` data and render the section.

4) Styling
- Add minimal styles to `src/css/custom.css` or a css module near the component.

5) Test locally
- Commands (run locally):

```bash
# install
npm install
# dev server
npm start
# build
npm run build
```

## Success Criteria
- Automated:
  - `npm run build` completes without errors.
  - Type-check passes: `npm run typecheck` (if TS used).
- Manual:
  - Home displays `Personal Projects` with at least 2 sample cards.
  - Images load correctly and links navigate to target.
  - Layout responsive on mobile and desktop.

## Files to change / add
- Add: `src/data/personal-projects.ts`
- Add (if needed): `src/types/personal-project.ts` or `src/types/index.d.ts`
- Update: `src/components/PersonalProjects/index.tsx` (create or modify)
- Update: `src/components/Home/index.tsx` (import and render)
- Update: `src/css/custom.css` (styling)

## Estimation
- Small: 1–2 dev-hours to implement data + component + integration + styling

## Open questions / decisions
- Prefer component to accept props (recommended) or import data internally? (I recommend props for testability.)
- Where should project images live? I recommend `static/img/projects/` so they resolve to `/img/projects/...` in production.
- Do you want a modal/detail page per project or a simple external link? (out of scope; can be added later)

## Next steps I can perform for you
1. Create `src/data/personal-projects.ts` with 3 example items. (confirm)
2. Implement `src/components/PersonalProjects/index.tsx` and basic styles. (confirm)
3. Patch `src/components/Home/index.tsx` to render it. (confirm)

---

Prepared by: GitHub Copilot
Date: 2026-03-04
