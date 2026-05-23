# AIHLPR Website — Handoff Bundle

A clean, self-contained snapshot of the working AIHLPR site, ready to hand to engineering.

## Folder layout

```
handoff/
├── Home.html                                    Landing page
├── _principles.md                               Brand + copy + UI rules (READ FIRST)
├── README.md                                    You are here
│
├── capabilities/
│   ├── ai-applications-and-platforms.html       Capability — AI Products & Platforms
│   ├── ai-workflow-infrastructure.html          Capability — AI Workflows & Operations
│   ├── enterprise-ai.html                       Capability — Enterprise AI
│   └── prototype-to-production.html             Capability — Prototype to Production
│
├── work/
│   ├── asset-workflow-engine.html               Case study
│   ├── ai-modeling-assistant.html               Case study
│   └── careeros.html                            Case study
│
└── assets/
    ├── aihlpr-logo*.png                         Logo lockups
    ├── aihlpr-hero-spec.json                    Hero spec
    └── clients/                                 Client logos shown on the home strip
```

## Page brand colors

Each capability page carries one accent colour, applied page-wide via `:root { --c: <hex>; }`:

| Page                                  | Accent    |
|---------------------------------------|-----------|
| `ai-applications-and-platforms.html`  | `#3478E5` |
| `ai-workflow-infrastructure.html`     | `#9B59B6` |
| `enterprise-ai.html`                  | `#CC418C` |
| `prototype-to-production.html`        | `#5794EA` |

The home page uses the shared system; each capability cap-strip card pulls the page's accent.

## Where the pages link to each other

- `Home.html` → all 4 capability pages (via `capabilities/...`)
- `Home.html` → 3 case studies (via `work/...`)
- Each capability page → `../AIHLPR Home.html` for the home link.
  **Note:** the current home file is named `Home.html`. Either rename to
  `AIHLPR Home.html` to match the existing links, or update all
  capability pages' `<a href>`s to point at `../Home.html`.

## Notable patterns engineering should know

- **Scroll-pinned panels** — used on:
  - `capabilities/ai-applications-and-platforms.html` (Section 2: "AI applications, shaped to the work")
  - `capabilities/enterprise-ai.html` (Generative AI section)
  Each is a copy column on the left and a sticky stage on the right; the
  active diagram swaps as a panel crosses viewport mid.

- **Flow spine** — vertical hairline in the left gutter of
  `capabilities/ai-workflow-infrastructure.html`. Connects every section's
  label-mono dot top to bottom; purple progress fills as you scroll.

- **Editorial table** — non-boxed table layout in
  `capabilities/enterprise-ai.html` ("Fits the systems already running"). One
  hub-and-spoke SVG above the table for visual lift.

## What was deliberately left out

- `archive/`, `export/`, `uploads/` — historical versions and source material
- `work-section/` — earlier exploration of a different work-section layout
- `capabilities/enterprise-ai-systems.html`, `operational-ai-systems.html`,
  `ai-applications-and-platforms-v1.html` — deprecated capability drafts
- `home-v2-hero.js`, `tweaks-panel.jsx`, `debug-*.png` — unused in current build

If engineering needs any of those, they're still in the source project.

## Read `_principles.md` first

It captures the editorial and visual contract every page follows:
no em dashes, no negative tone, no "built" copy, no AI-slop animation,
crisp diagram lines, one accent per page, etc. Stick to it on future changes.
