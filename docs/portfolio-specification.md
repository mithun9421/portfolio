# Portfolio Specification
## Staff Frontend Engineer — Privacy & Platform Engineering

---

# Part I: Information Architecture

## Site Map

```
/                           → Landing (Quiet Authority)
/philosophy                 → Engineering Philosophy
/work                       → Selected Work Index
/work/[slug]               → Individual Project Deep-Dives
/leadership                 → Leadership & Influence
/resume                     → Printable Resume View
/about                      → Human Context
/contact                    → Contact
```

## Navigation Model

Primary navigation is minimal—five items maximum. The site reads more like a monograph than a web application.

```
[Philosophy]  [Work]  [Leadership]  [About]  [Contact]
```

Resume is accessible via a subtle link in the footer and About page, not primary navigation.

---

# Part II: Design System — "Quiet Precision"

## Design Philosophy

This design system rejects the decorative patterns of typical developer portfolios. It draws from:

- **Architectural drawing conventions** — precise lines, deliberate whitespace, annotation as decoration
- **Academic publishing** — typography carries meaning, not ornamentation
- **Industrial design catalogs** — objects presented with respect, not salesmanship

The system is named **Quiet Precision** because:
1. Every element earns its place through function
2. Restraint is the primary aesthetic decision
3. Precision in spacing, typography, and motion communicates competence

## Core Principles

### 1. Typography Does the Work
No reliance on color, icons, or imagery to establish hierarchy. Type size, weight, and spacing alone must communicate structure.

### 2. Space as Meaning
Whitespace is not "empty"—it is structure. Generous margins signal confidence. Tight spacing signals relationship.

### 3. Motion as Communication
Animation exists only to:
- Reveal sequence (what comes first)
- Signal state change (something happened)
- Guide attention (look here now)

Never for delight alone.

### 4. Two Modes, Two Moods
Light and dark modes are not inversions. They are two considered designs that share structure but differ in emotional register:
- **Light**: Clarity, openness, documentation feel
- **Dark**: Focus, depth, late-night reading feel

---

# Part III: Typography System

## Font Selection

### Primary: Inter Variable
- **Rationale**: Designed for screens, excellent at small sizes, large x-height, clear numerals
- **Usage**: Body text, navigation, metadata

### Display: Instrument Serif (or Newsreader)
- **Rationale**: Elegant contrast to Inter, editorial quality, restraint without coldness
- **Usage**: Page titles, pull quotes, emphasis

### Monospace: JetBrains Mono
- **Rationale**: Excellent legibility, distinguishes from body, signals "technical context"
- **Usage**: Code references, technical terms, data labels

## Type Scale

Based on a 1.25 ratio (Major Third) with a 16px base:

```
--text-xs:    0.64rem   (10.24px)  — Metadata, timestamps
--text-sm:    0.8rem    (12.8px)   — Captions, secondary info
--text-base:  1rem      (16px)     — Body text
--text-lg:    1.25rem   (20px)     — Lead paragraphs
--text-xl:    1.563rem  (25px)     — Section headers
--text-2xl:   1.953rem  (31.25px)  — Page subtitles
--text-3xl:   2.441rem  (39px)     — Page titles
--text-4xl:   3.052rem  (48.8px)   — Landing statement
--text-5xl:   3.815rem  (61px)     — Display (used sparingly)
```

## Line Heights

```
--leading-tight:   1.2    — Headlines
--leading-snug:    1.35   — Subheadings
--leading-normal:  1.6    — Body text
--leading-relaxed: 1.75   — Long-form reading
```

## Font Weights

```
--font-normal:   400   — Body text
--font-medium:   500   — Emphasis, navigation
--font-semibold: 600   — Subheadings
--font-bold:     700   — Headlines (use sparingly)
```

---

# Part IV: Color System

## Philosophy

Colors are functional, not decorative. The palette is deliberately narrow to avoid distraction.

## Light Mode

```css
/* Surfaces */
--surface-primary:    #FAFAFA    /* Page background */
--surface-secondary:  #F5F5F5    /* Elevated sections */
--surface-tertiary:   #EBEBEB    /* Cards, callouts */

/* Text */
--text-primary:       #1A1A1A    /* Headlines, body */
--text-secondary:     #525252    /* Secondary info */
--text-tertiary:      #8A8A8A    /* Metadata, hints */

/* Borders */
--border-subtle:      #E5E5E5    /* Dividers */
--border-default:     #D4D4D4    /* Component borders */

/* Accent (used extremely sparingly) */
--accent-primary:     #1A4D2E    /* Deep green — growth, systems */
--accent-muted:       #2D5A3D    /* Hover states */
```

## Dark Mode

```css
/* Surfaces */
--surface-primary:    #0A0A0A    /* Page background */
--surface-secondary:  #141414    /* Elevated sections */
--surface-tertiary:   #1F1F1F    /* Cards, callouts */

/* Text */
--text-primary:       #EDEDED    /* Headlines, body */
--text-secondary:     #A3A3A3    /* Secondary info */
--text-tertiary:      #6B6B6B    /* Metadata, hints */

/* Borders */
--border-subtle:      #262626    /* Dividers */
--border-default:     #363636    /* Component borders */

/* Accent */
--accent-primary:     #4ADE80    /* Soft green — visible on dark */
--accent-muted:       #22C55E    /* Hover states */
```

## Semantic Colors

```css
/* System states — used only when necessary */
--state-info:         #3B82F6
--state-success:      #22C55E
--state-warning:      #F59E0B
--state-error:        #EF4444
```

---

# Part V: Spacing System

## Base Unit

All spacing derives from an 8px base unit.

```css
--space-1:   0.25rem   (4px)
--space-2:   0.5rem    (8px)
--space-3:   0.75rem   (12px)
--space-4:   1rem      (16px)
--space-5:   1.25rem   (20px)
--space-6:   1.5rem    (24px)
--space-8:   2rem      (32px)
--space-10:  2.5rem    (40px)
--space-12:  3rem      (48px)
--space-16:  4rem      (64px)
--space-20:  5rem      (80px)
--space-24:  6rem      (96px)
--space-32:  8rem      (128px)
```

## Page Margins

```css
/* Mobile */
--page-margin-mobile:  var(--space-6)   /* 24px */

/* Tablet */
--page-margin-tablet:  var(--space-12)  /* 48px */

/* Desktop */
--page-margin-desktop: var(--space-24)  /* 96px */
```

## Content Width

```css
--content-max-width:   680px    /* Optimal reading width */
--content-wide:        960px    /* Work showcases */
--content-full:        1200px   /* Maximum container */
```

---

# Part VI: Motion System

## Philosophy

Motion in this system is **architectural**, not playful. It follows these principles:

1. **Purposeful**: Every animation answers "why does this move?"
2. **Quiet**: Animations are felt, not noticed
3. **Consistent**: Same duration/easing for same intent
4. **Performant**: Only transform/opacity, never layout properties

## Timing Functions

```css
/* Primary — confident, measured */
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);

/* Secondary — subtle, natural */
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Enter — gentle arrival */
--ease-enter: cubic-bezier(0, 0, 0.2, 1);

/* Exit — deliberate departure */
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
```

## Durations

```css
--duration-instant:  75ms    /* Micro-interactions */
--duration-fast:     150ms   /* Hover states */
--duration-normal:   300ms   /* Standard transitions */
--duration-slow:     500ms   /* Page transitions */
--duration-slower:   800ms   /* Reveals, staggers */
```

## Animation Patterns

### 1. Fade Up Reveal
**Purpose**: Content entering viewport
**Properties**: opacity 0→1, translateY 20px→0
**Duration**: --duration-slow
**Easing**: --ease-out-expo

### 2. Staggered Text Reveal
**Purpose**: Headlines, establishing hierarchy
**Properties**: opacity, translateY per line/word
**Stagger**: 50ms between elements
**Duration**: --duration-normal per element

### 3. Subtle Hover Lift
**Purpose**: Interactive elements
**Properties**: translateY -2px, subtle shadow
**Duration**: --duration-fast
**Easing**: --ease-out-quad

### 4. Border Draw
**Purpose**: Section dividers, emphasis
**Properties**: scaleX 0→1
**Duration**: --duration-slow
**Easing**: --ease-out-expo

### 5. Opacity Breath
**Purpose**: Scroll-linked ambient motion
**Properties**: opacity 0.5→1 based on scroll position
**Note**: Never hijack scroll, only observe

## Reduced Motion

All animations respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# Part VII: Component Taxonomy

Each component exists for a specific reason. No generic "Card" or "Button" components.

## Layout Components

### `<PageShell>`
**Purpose**: Consistent page structure, handles theme, scroll restoration
**Contains**: Header, main content area, footer

### `<ContentContainer>`
**Purpose**: Constrain content to readable width
**Variants**: `default` (680px), `wide` (960px), `full` (1200px)

### `<Section>`
**Purpose**: Semantic page sections with consistent spacing
**Props**: `spacing?: 'tight' | 'normal' | 'generous'`

### `<ArchitecturalDivider>`
**Purpose**: Visual separation between major sections
**Behavior**: Animates in (border draw) when in viewport
**Note**: Not a horizontal rule—a deliberate pause

## Typography Components

### `<PageTitle>`
**Purpose**: Single H1 per page, animated reveal
**Font**: Instrument Serif, --text-4xl
**Animation**: Staggered word reveal

### `<SectionHeading>`
**Purpose**: H2 elements, establishes section
**Font**: Inter, --text-xl, --font-semibold

### `<LeadParagraph>`
**Purpose**: Opening paragraph of sections
**Font**: Inter, --text-lg, --leading-relaxed
**Color**: --text-secondary

### `<BodyText>`
**Purpose**: Standard paragraphs
**Font**: Inter, --text-base, --leading-normal

### `<PullQuote>`
**Purpose**: Key statements, philosophy excerpts
**Font**: Instrument Serif, --text-2xl
**Treatment**: Subtle left border, generous margin

### `<InlineCode>`
**Purpose**: Technical terms, variable names
**Font**: JetBrains Mono, --text-sm
**Treatment**: Subtle background

## Interactive Components

### `<NavigationLink>`
**Purpose**: Primary navigation items
**Behavior**: Underline draws on hover
**State**: Current page indicated by persistent underline

### `<TextLink>`
**Purpose**: Inline links within body text
**Behavior**: Underline, subtle color shift on hover

### `<ProjectLink>`
**Purpose**: Links to project deep-dives
**Treatment**: Title + brief context, entire area clickable
**Animation**: Subtle lift on hover

## Content Components

### `<ProjectCard>`
**Purpose**: Work index page entries
**Contains**: Title, one-line context, abstracted domain tag
**Animation**: Fade up on scroll, hover lift

### `<PhilosophyBlock>`
**Purpose**: Engineering philosophy statements
**Contains**: Short heading, 2-3 sentence explanation
**Treatment**: Generous whitespace, no border

### `<TimelineEntry>`
**Purpose**: Career/education milestones in resume view
**Note**: NOT a vertical timeline—horizontal entries with clear dates

### `<AchievementNote>`
**Purpose**: Subtle callouts for awards/recognition
**Treatment**: Muted, not boastful—factual statement only

### `<SkillContext>`
**Purpose**: Technology mentioned in context, not as a list
**Font**: JetBrains Mono for tech names
**Treatment**: Appears within prose, never as badge/tag

## Animated Components

### `<RevealOnScroll>`
**Purpose**: Wrapper for scroll-triggered animations
**Behavior**: Fade up when element enters viewport
**Props**: `delay?: number`, `threshold?: number`

### `<StaggerChildren>`
**Purpose**: Animate children in sequence
**Behavior**: Each child animates with stagger delay
**Props**: `staggerDelay?: number`

### `<TextReveal>`
**Purpose**: Animated text entrance for headlines
**Behavior**: Words/lines reveal in sequence
**Mode**: `word` | `line`

### `<ScrollProgress>`
**Purpose**: Subtle page progress indicator
**Treatment**: Thin line at top of viewport
**Note**: Optional, disabled by default

## Utility Components

### `<ThemeToggle>`
**Purpose**: Switch between light/dark modes
**Behavior**: Icon morphs between sun/moon
**Placement**: Header, subtle

### `<SkipLink>`
**Purpose**: Accessibility skip navigation
**Behavior**: Visible on focus only

### `<MetaTags>`
**Purpose**: SEO and social sharing metadata
**Implementation**: Server component

---

# Part VIII: Next.js App Router Structure

```
app/
├── layout.tsx                 # Root layout, theme provider, fonts
├── page.tsx                   # Landing page
├── globals.css                # CSS variables, resets
├── philosophy/
│   └── page.tsx              # Engineering Philosophy
├── work/
│   ├── page.tsx              # Work index
│   └── [slug]/
│       └── page.tsx          # Individual project pages
├── leadership/
│   └── page.tsx              # Leadership & Influence
├── resume/
│   └── page.tsx              # Printable resume view
├── about/
│   └── page.tsx              # About page
├── contact/
│   └── page.tsx              # Contact page
└── not-found.tsx             # Custom 404

components/
├── layout/
│   ├── PageShell.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ContentContainer.tsx
│   └── Section.tsx
├── typography/
│   ├── PageTitle.tsx
│   ├── SectionHeading.tsx
│   ├── LeadParagraph.tsx
│   ├── BodyText.tsx
│   ├── PullQuote.tsx
│   └── InlineCode.tsx
├── navigation/
│   ├── NavigationLink.tsx
│   ├── TextLink.tsx
│   └── ProjectLink.tsx
├── content/
│   ├── ProjectCard.tsx
│   ├── PhilosophyBlock.tsx
│   ├── TimelineEntry.tsx
│   ├── AchievementNote.tsx
│   └── SkillContext.tsx
├── animated/
│   ├── RevealOnScroll.tsx
│   ├── StaggerChildren.tsx
│   ├── TextReveal.tsx
│   ├── BorderDraw.tsx
│   └── ScrollProgress.tsx
├── ui/
│   ├── ThemeToggle.tsx
│   ├── SkipLink.tsx
│   ├── ArchitecturalDivider.tsx
│   └── Icon.tsx
└── seo/
    └── MetaTags.tsx

lib/
├── constants.ts              # Site metadata, navigation config
├── projects.ts               # Project data (type-safe)
├── animations.ts             # Framer Motion variants
└── utils.ts                  # Utility functions

styles/
├── tokens.css                # Design tokens as CSS variables
├── typography.css            # Typography utilities
├── animations.css            # Keyframes, animation utilities
└── print.css                 # Print stylesheet for resume

types/
├── project.ts                # Project type definitions
└── navigation.ts             # Navigation type definitions

public/
├── fonts/                    # Self-hosted fonts
├── og-image.png             # Open Graph image
└── favicon.ico
```

---

# Part IX: Page-by-Page Content

## 1. Landing Page — `/`

### Content Structure

```
[Minimal header with navigation]

[Generous whitespace — 40vh]

[Framing statement — animated reveal]
"Building frontend platforms where privacy,
performance, and usability coexist."

[Subtle secondary line]
"Staff-level engineering in compliance-critical systems."

[Generous whitespace — 20vh]

[Minimal footer]
```

### Animation Sequence
1. Page loads with header visible
2. After 300ms delay, framing statement reveals word-by-word
3. Secondary line fades in 200ms after statement completes
4. Total reveal: ~1.5 seconds

### Design Notes
- No name on landing page (it's in the URL/meta)
- No tech stack lists
- No "Learn more" CTA
- Statement derived directly from resume themes: privacy platforms, performance optimization, multi-stakeholder systems

---

## 2. Engineering Philosophy — `/philosophy`

### Content Structure

```
[Page Title]
Engineering Philosophy

[Lead Paragraph]
These are the principles that guide how I approach
frontend architecture, derived from building platforms
at scale in regulated environments.

[Architectural Divider]

[Philosophy Block 1]
**Platforms Over Features**

A feature solves one problem. A platform enables others
to solve problems you haven't anticipated. My work on
unified privacy systems taught me to design foundations
that absorb change rather than resist it. Webpack Module
Federation wasn't chosen for its novelty—it was chosen
because it allowed teams to ship independently while
users experienced continuity.

[Philosophy Block 2]
**Architecture Under Ambiguity**

Compliance requirements shift. Organizational structures
evolve. Regulations differ by region. The systems I build
account for this—not through over-engineering, but through
clear boundaries and explicit trade-offs. A governance
dashboard that maps PII across systems must be correct,
but correctness means nothing if the people who need it
can't understand it.

[Philosophy Block 3]
**Performance as Respect**

A 20-second page load isn't a technical problem—it's a
statement about whether you respect your users' time.
Reducing bundle size by 70% through code splitting and
compression wasn't optimization for metrics. It was
acknowledgment that the people using these tools have
jobs to do.

[Philosophy Block 4]
**Observability as Understanding**

You cannot improve what you cannot see. Implementing
OpenTelemetry tracing and Real User Monitoring wasn't
about dashboards—it was about understanding how systems
behave under real conditions. Friction points revealed
by RUM data become opportunities for UX improvements
that matter.

[Philosophy Block 5]
**Compliance as Design Constraint**

Privacy, security, and regulatory requirements are not
obstacles to good UX—they are design constraints like
any other. The most effective solutions treat compliance
as a creative challenge, not a checkbox. Cookie management
systems that automate scanning don't just satisfy auditors—
they reduce operational burden for everyone involved.
```

### Design Notes
- Each philosophy block has generous whitespace
- No icons or decorative elements
- Technology mentions appear naturally in context
- Tone is reflective, not prescriptive

---

## 3. Selected Work Index — `/work`

### Content Structure

```
[Page Title]
Selected Work

[Lead Paragraph]
Platform and system work from privacy engineering
at scale. Details abstracted to respect confidentiality.

[Architectural Divider]

[Project Entry 1]
Unified Privacy Platform
Micro-frontend architecture serving 300+ stakeholders
→ Read more

[Project Entry 2]
Data Lifecycle System
Governance dashboards for cross-system data mapping
→ Read more

[Project Entry 3]
Compliance Automation
Cookie scanning and remediation at organizational scale
→ Read more

[Project Entry 4]
Organizational Visualization
Hierarchy mapping for ownership clarity
→ Read more

[Project Entry 5]
Consumer Privacy Center
Feedback integration reaching 100K+ global users
→ Read more

[Project Entry 6]
NGO Platform
Donation management for social impact
→ Read more
```

### Design Notes
- Entries are minimal—title and one-line context
- No tech stack badges
- No screenshots or diagrams
- Projects ordered by platform complexity, not chronology

---

## 4. Project Deep-Dive: Unified Privacy Platform — `/work/unified-privacy-platform`

### Content Structure

```
[Back link]
← Work

[Page Title]
Unified Privacy Platform

[Lead Paragraph]
A micro-frontend platform consolidating multiple privacy
applications into a seamless experience for regulatory,
audit, and operational teams.

[Architectural Divider]

[Section: Context]
**The Problem Space**

Privacy operations in a global financial services
organization involves multiple specialized applications:
data scanning, cookie management, consent workflows,
regulatory reporting. Each had evolved independently,
creating fragmented experiences for the 300+ stakeholders
who needed to work across them.

[Section: Constraints]
**Working Conditions**

Scale: Multiple applications, independent teams,
existing user bases that couldn't tolerate disruption.

Regulation: Privacy-critical systems with strict
compliance requirements.

Organization: Teams needed deployment autonomy
without sacrificing user experience coherence.

[Section: Decisions]
**Architectural Choices**

Module Federation was selected after evaluating
multiple micro-frontend approaches. The deciding
factors: runtime integration (no build-time coupling),
shared dependency management (consistent React versions),
and lazy loading patterns (performance at scale).

A dynamic role-based access system reduced backend
dependency for provisioning—stakeholders from Privacy
Officers to Cookie Owners could be onboarded without
engineering involvement.

OpenTelemetry integration and Datadog RUM implementation
provided visibility into request flows, error patterns,
and user journey friction points. This wasn't monitoring
for its own sake—it was the foundation for continuous
UX improvement.

[Section: Outcomes]
**Results**

The platform serves 300+ stakeholders across privacy
operations, regulatory compliance, and audit functions.
Teams deploy independently. Users experience a unified
interface. Observability data actively informs UX
decisions.

[Architectural Divider]

[Pull Quote]
"The best platform disappears—users accomplish their
goals without thinking about the system boundaries."
```

---

## 5. Project Deep-Dive: Data Lifecycle System — `/work/data-lifecycle-system`

### Content Structure

```
[Back link]
← Work

[Page Title]
Data Lifecycle System

[Lead Paragraph]
Comprehensive governance dashboards providing visibility
into data classification, scan progress, and cross-system
mapping across an enterprise environment.

[Architectural Divider]

[Section: Context]
**The Problem Space**

Understanding where personal data lives across multiple
systems is a foundational requirement for privacy compliance.
Without clear visibility, governance becomes guesswork.
Audit preparation becomes fire drills.

[Section: Constraints]
**Working Conditions**

Timeline: Aggressive delivery schedule spanning
multiple dependent systems.

Team: Led a 5-member UI team with varied experience levels.

Scope: Dashboards needed to present complex data
relationships to non-technical stakeholders clearly.

[Section: Decisions]
**Architectural Choices**

Governance dashboards were designed around user tasks,
not data structures. Scan progress visualization,
PII vs Sensitive PII distribution, and cross-system
mapping each required different presentation approaches.

A centralized Scan Administration module consolidated
previously scattered configuration across systems.
This wasn't just UX improvement—it was operational
risk reduction.

Performance required aggressive frontend optimization.
Lazy loading, code splitting, and Webpack compression
strategies reduced bundle size by 70% and page load
time by 20 seconds. For users accessing these tools
daily, that time compounds.

[Section: Outcomes]
**Results**

The platform provides real-time visibility into data
governance across systems. Privacy operations efficiency
improved measurably. Audit readiness shifted from
reactive to continuous.
```

---

## 6. Leadership & Influence — `/leadership`

### Content Structure

```
[Page Title]
Leadership & Influence

[Lead Paragraph]
Technical leadership as responsibility—creating
conditions for others to do their best work.

[Architectural Divider]

[Section: Team Leadership]
**Building Teams**

Led a 5-member UI team delivering a large-scale
Data Lifecycle Platform under aggressive timelines.
Leadership here meant clarity about priorities,
protection from scope creep, and ensuring every
team member understood how their work connected
to the whole.

[Section: Tech for Good]
**Community Impact**

Led "Tech for Good – 2023", coordinating delivery
of software solutions for five NGOs alongside core
project commitments. The work focused on translating
real-world operational challenges into sustainable
digital solutions—reducing manual costs, decreasing
dependence on limited manpower.

This wasn't about building impressive technology.
It was about listening to what people actually
needed and delivering tools they could maintain
after we moved on.

Community Champion Award (2023) recognized this
effort—but the recognition matters less than the
organizations continuing to use what we built.

[Section: Innovation]
**Hackathons & Exploration**

Top 20 Finalist in the Privacy & Compliance Code
AI Hackathon—exploring how machine learning might
improve compliance workflows.

Top 20 Finalist in Idea Hack, contributing UX
prototypes for Low-Power BLE-based Payment
Connectivity—thinking beyond current platforms
toward future possibilities.

[Section: Community Involvement]
**Beyond Code**

Contributed to government school improvements
through mural art initiatives. Participated in
environmental programs including tree plantation
drives. Volunteered for bicycle assembly and
distribution supporting school accessibility
for rural children.

Technical skills have broader applications than
professional work. The discipline of building
systems transfers to organizing efforts,
coordinating volunteers, delivering outcomes.
```

---

## 7. Resume View — `/resume`

### Content Structure

```
[Print-optimized layout]

[Name]
[Title: Staff Frontend Engineer]
[Location • Email • LinkedIn]

[Section: Summary]
Frontend platform engineer with experience building
privacy and compliance systems at scale. Focused on
micro-frontend architecture, governance tooling, and
observability. Led teams delivering data lifecycle
platforms serving 300+ stakeholders in regulatory
environments.

[Section: Selected Experience]

**Privacy Platform Engineering**
Led micro-frontend unification using Webpack Module
Federation, enabling independent team deployments
while maintaining unified UX for 300+ stakeholders
including Privacy Officers and Audit teams.

Implemented OpenTelemetry tracing and Datadog RUM
for end-to-end observability. Designed dynamic
role-based access management reducing backend
dependencies for user provisioning.

**Data Lifecycle Platform**
Led 5-member UI team delivering governance dashboards
for scan progress, PII classification, and cross-system
data mapping. Reduced bundle size 70% and page load
time 20 seconds through code splitting and compression
optimization.

**Compliance Automation**
Built automated cookie compliance scanning using
Puppeteer. Designed low-code orchestration platform
wireframes replacing manual scan configuration.

**Data Visualization**
Developed organizational hierarchy visualization
using D3.js for ownership mapping across teams.

**Consumer Privacy**
Integrated feedback collection into consumer privacy
settings, enabling sentiment analysis across 100K+
global user interactions.

[Section: Technical Context]
React.js • TypeScript • Webpack Module Federation •
D3.js • OpenTelemetry • Datadog RUM • Node.js •
Framer Motion

[Section: Recognition]
Spot Award – Rapid delivery of compliance tooling
Community Champion Award 2023 – Tech for Good leadership
Top 20 Finalist – Privacy & Compliance AI Hackathon
Top 20 Finalist – Idea Hack (BLE Payment UX)

[Print button / Download PDF]
```

### Design Notes
- Optimized for print/PDF export
- Single page target
- Clean typography, generous line spacing
- No decorative elements

---

## 8. About — `/about`

### Content Structure

```
[Page Title]
About

[Lead Paragraph]
The short version: I build frontend platforms for
systems where getting it wrong has real consequences.

[Architectural Divider]

[Section: Background]
Privacy engineering found me—or perhaps I found it.
There's something satisfying about building systems
that serve regulatory requirements while remaining
genuinely useful to the humans who interact with them.
Compliance doesn't have to mean compromise.

[Section: Craft]
I care about the details that compound: consistent
spacing systems, considered motion design, accessible
interfaces, performant bundles. These aren't features—
they're the difference between tools people tolerate
and tools people trust.

[Section: Beyond Work]
Community involvement matters. Leading Tech for Good
initiatives taught me that the discipline of software
development—understanding problems, building solutions,
iterating based on feedback—applies far beyond code.
Whether assembling bicycles for rural students or
coordinating NGO software projects, the patterns
are transferable.

[Section: This Site]
Built with Next.js and TypeScript. Designed from
first principles rather than existing systems.
Motion is intentional. Typography does the work.
Everything earns its place.

[Link to Resume]
View full resume →
```

---

## 9. Contact — `/contact`

### Content Structure

```
[Page Title]
Contact

[Lead Paragraph]
Available for conversations about platform engineering,
frontend architecture, and privacy-focused systems.

[Architectural Divider]

[Contact Methods]
Email: [email]
LinkedIn: [profile]
GitHub: [profile]

[Closing Note]
I read everything. Response time varies with current
commitments, but I appreciate thoughtful messages
and try to reply in kind.
```

### Design Notes
- No contact form (reduces complexity, spam)
- No "hire me" language
- Respectful, professional tone

---

# Part X: Performance Budget

## Core Web Vitals Targets

```
LCP (Largest Contentful Paint):  < 1.5s
FID (First Input Delay):         < 50ms
CLS (Cumulative Layout Shift):   < 0.05
```

## Bundle Budget

```
Initial JS:        < 100KB gzipped
Total JS:          < 200KB gzipped
CSS:               < 20KB gzipped
Fonts:             < 100KB (subset)
```

## Lighthouse Targets

```
Performance:       ≥ 95
Accessibility:     100
Best Practices:    100
SEO:               100
```

## Implementation Requirements

1. **Server Components by default** — client components only for interactivity
2. **Font subsetting** — only characters used on site
3. **Image optimization** — Next.js Image component, WebP/AVIF
4. **Route prefetching** — for navigation links
5. **Animation performance** — transform/opacity only, GPU-accelerated

---

# Part XI: Accessibility Requirements

## WCAG 2.1 AA Compliance

- All interactive elements keyboard accessible
- Focus states clearly visible
- Color contrast ratios ≥ 4.5:1 (text), ≥ 3:1 (large text)
- All animations respect `prefers-reduced-motion`
- Semantic HTML structure
- ARIA labels where semantic HTML insufficient
- Skip navigation link
- Logical heading hierarchy (single H1 per page)

## Testing Requirements

- Screen reader testing (VoiceOver, NVDA)
- Keyboard-only navigation verification
- Reduced motion mode testing
- High contrast mode verification

---

# Part XII: Technical Implementation Notes

## Theme Implementation

```typescript
// Theme context with system preference detection
// Persisted to localStorage
// No flash on page load (script in head)
```

## Animation Library

Framer Motion for:
- Scroll-triggered reveals
- Page transitions
- Interactive hover states
- Staggered animations

CSS for:
- Simple hover effects
- Loading states
- Reduced motion fallbacks

## Font Loading Strategy

```typescript
// next/font with display: swap
// Subset fonts for used characters
// Fallback font metrics matching
```

## Metadata Strategy

```typescript
// Per-page dynamic metadata
// Open Graph images
// Twitter cards
// JSON-LD structured data
```

---

# Appendix: Design Decisions Log

## Why No Portfolio Screenshots
Screenshots of internal tools violate confidentiality. Abstract descriptions demonstrate architectural thinking without exposing proprietary interfaces.

## Why No Skill Bars
Skill bars communicate nothing. "80% React" is meaningless. Context within project descriptions shows actual capability.

## Why No Timeline Resume
Vertical timelines emphasize chronology over impact. The work speaks for itself without dates as organizing principle.

## Why Minimal Color
Color draws attention. In a typography-driven design, color would compete with the content hierarchy. The accent green exists only to signal interactive elements.

## Why Self-Hosted Fonts
Google Fonts requires external requests. Self-hosting with subsetting provides better performance and privacy.

## Why No Contact Form
Forms invite spam and require backend complexity. Direct email or LinkedIn demonstrates the same openness with less friction.

---

*This specification is complete. Implementation should follow these guidelines exactly, with deviations requiring explicit justification.*
