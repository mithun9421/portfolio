# Portfolio — Mithun Muraleedharan

A minimalist, typography-driven portfolio website built with Next.js 16, TypeScript, and Framer Motion. Designed from first principles with a focus on performance, accessibility, and intentional motion design.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?logo=framer)

## Features

- **Typography-First Design** — Instrument Serif for display, Inter for body, JetBrains Mono for code
- **Intentional Motion** — Scroll-triggered reveals, staggered text animations, subtle micro-interactions
- **Dark/Light Mode** — System preference detection with manual toggle, no flash on load
- **Fully Responsive** — Mobile-first design with tablet and desktop breakpoints
- **Print-Optimized Resume** — Dedicated resume page with print stylesheet
- **Performance Focused** — Static generation, optimized fonts, minimal client JavaScript
- **Accessible** — Semantic HTML, keyboard navigation, reduced motion support

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Fonts | Google Fonts (next/font) |
| Deployment | Vercel |

## Project Structure

```
├── app/
│   ├── page.tsx              # Landing page
│   ├── philosophy/           # Engineering philosophy
│   ├── work/                 # Project showcase
│   │   └── [slug]/          # Dynamic project pages
│   ├── leadership/           # Leadership & influence
│   ├── resume/              # Printable resume
│   ├── about/               # About page
│   ├── contact/             # Contact information
│   └── globals.css          # Design tokens & base styles
├── components/
│   ├── animated/            # RevealOnScroll, TextReveal, BorderDraw
│   ├── content/             # ProjectCard, PhilosophyBlock
│   ├── layout/              # Header, Footer
│   ├── typography/          # PageTitle, SectionHeading, BodyText
│   ├── providers/           # ThemeProvider
│   └── ui/                  # ThemeToggle
└── lib/
    └── projects.ts          # Project data
```

## Design System — "Quiet Precision"

### Philosophy

- **Typography does the work** — No reliance on color or imagery for hierarchy
- **Space as structure** — Generous whitespace signals confidence
- **Motion as communication** — Animation reveals sequence, signals state, guides attention

### Color Palette

| Mode | Surface | Foreground | Accent |
|------|---------|------------|--------|
| Light | `#fafafa` | `#1a1a1a` | `#1a4d2e` |
| Dark | `#0a0a0a` | `#ededed` | `#4ade80` |

### Animation Principles

- Purposeful, not decorative
- `cubic-bezier(0.16, 1, 0.3, 1)` for confident easing
- Respects `prefers-reduced-motion`
- GPU-accelerated (transform/opacity only)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

| What to change | File location |
|----------------|---------------|
| Contact details | `app/contact/page.tsx` |
| About content | `app/about/page.tsx` |
| Resume | `app/resume/page.tsx` |
| Projects | `lib/projects.ts` |
| Site metadata | `app/layout.tsx` |
| Design tokens | `app/globals.css` |

## Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1s
- **Cumulative Layout Shift:** < 0.05
- **Static Generation:** All pages pre-rendered

## License

MIT

---

Built by [Mithun Muraleedharan](https://linkedin.com/in/mithunmuraleedharan) · Senior Software Engineer @ PayPal
