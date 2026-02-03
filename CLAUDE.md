# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Raven** - Indigenous Opportunities & Contracting System
A React + TypeScript web application for facilitating Indigenous engagement and transparent ESG reporting for major infrastructure projects.

**Tech Stack:** React 19.2.4, TypeScript 5.9.3, Vite 7.3.1, Tailwind CSS v4.1.18, React Router v7.13.0

## Common Commands

### Development
```bash
npm run dev          # Start Vite dev server on port 3000
npm run build        # Run sammy.js (ASCII art) + production build → _static/
npm start            # Run sammy.js + serve production build from _static/ on port 3000
npm run preview      # Preview production build
```

### Notes
- `sammy.js` displays a colorful ASCII art logo before builds (do not modify)
- Build output directory is `_static/` (not the default `dist/`)
- Dev server runs on port 3000 (configured in vite.config.ts)

## Architecture

### Routing (React Router v7)
- Client-side routing via `BrowserRouter` in `App.tsx`
- Routes:
  - `/` → HomePage (landing page)
  - `/opportunities` → OpportunitiesPage (job listings)
  - `/about` → AboutPage
  - `/dashboard` → Placeholder (not implemented)
  - `*` → 404 Not Found
- All routes wrapped with sticky Header and Footer using grid layout: `grid-rows-[auto_1fr_auto] min-h-screen`

### State Management (Context API)
Two global contexts, no Redux/Zustand:

1. **AuthContext** (`src/contexts/AuthContext.tsx`)
   - User authentication state, profiles, role-based access
   - User roles: admin, project_proponent, contractor
   - Methods: signIn, signUp, signOut, refreshProfile
   - Properties: user, userProfile, loading, isAdmin, isProjectProponent, isContractor

2. **DarkModeContext** (`src/contexts/theme-toggle.tsx`)
   - Theme switching with localStorage persistence (key: `"theme"`)
   - Default: light mode
   - Toggles `dark` class on `document.documentElement`
   - Hook: `useDarkMode()`

### Component Organization
```
src/components/
├── ui/              # ShadCN primitive components (Button, Card, Dialog, etc.)
├── landing_v2/      # Current landing page sections (Hero, Features, Benefits, etc.)
├── landing/         # Legacy landing components (v1)
├── modals/          # Modal dialogs (JobDetailsModal)
└── interfaces/      # Page-specific interface components
```

**Pattern:**
- Page components (`src/pages/`) compose section components
- Section components use UI primitives + Lucide React icons
- Modals: Parent manages open/closed state, modal component handles content

### Centralized Configuration
**`src/config/theme.ts`** - Single source of truth for:
- Brand colors (gold, forest green, deep blue, orange)
- Background/text colors for light/dark modes
- Typography (system fonts)
- Branding (app name, tagline, contact info)
- Navigation menu items
- Layout constants (max-width, padding, nav height)

**When changing branding, colors, or navigation, edit this file.**

### Styling Approach
- **Tailwind CSS v4** with `@tailwindcss/vite` plugin (modern approach)
- Utility-first, no CSS modules or styled-components
- Dark mode: class-based strategy via `@custom-variant dark (&:is(.dark *))`
- Theme variables: OKLch color space defined in `src/index.css`
- Custom border radius scale: sm, md, lg, xl, 2xl, 3xl, 4xl
- Class merging: `cn()` utility function in `src/lib/utils.ts` (clsx + tailwind-merge)

### UI Component Pattern (ShadCN)
Components in `src/components/ui/` follow this pattern:
- `React.forwardRef` for ref forwarding
- Class Variance Authority (CVA) for variant definitions
- Radix UI primitives for accessibility
- `cn()` for Tailwind class composition

Example variant usage:
```typescript
<Button variant="default" size="lg">Click me</Button>
```

### Animation Pattern (Framer Motion)
- Library: Framer Motion v12.30.0
- Common pattern:
  ```typescript
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
  ```
- Use `useInView` hook for scroll-triggered animations
- Staggered animations via delay multipliers

## File Structure Patterns

### Import Strategy
- Relative imports for components: `import Header from './components/Header'`
- Absolute imports for lib/config: `import { cn } from '@/lib/utils'`
- Path alias `@/*` maps to `src/*` (configured in tsconfig.json + Vite)

### Component Files
- Naming: PascalCase for components (e.g., `HomePage.tsx`)
- camelCase for utilities (e.g., `utils.ts`)
- Functional components with hooks (no class components)
- TypeScript interfaces for all component props

### Page Exports
Pages are centralized in `src/pages/index.ts` for clean imports:
```typescript
export { default as HomePage } from './HomePage'
export { default as OpportunitiesPage } from './OpportunitiesPage'
```

## TypeScript Configuration
- Target: ES2020
- Module: ESNext
- JSX: react-jsx (automatic runtime - no need to import React)
- Strict mode: Disabled (allows loose typing)
- Path alias: `@/*` → `src/*`

## Data Management
- **No backend yet:** Job data stored as static arrays in page components
- **Future integration:** AuthContext prepared for backend API calls
- Modal content: Defined inline in component files

## Development Conventions

### Code Style
- Arrow functions for event handlers
- JSDoc-style comments in config files
- No emojis in code unless explicitly requested
- Component props destructured in function signature

### Layout Patterns
- Container max-width: `max-w-6xl` or `max-w-7xl`
- Responsive padding: `px-4 sm:px-6 lg:px-8`
- Vertical spacing: `py-12` or `py-20`
- Grid/flex for layouts, avoid absolute positioning

### Icons
- Library: Lucide React v0.563.0
- Import directly: `import { Menu, X, Search } from 'lucide-react'`
- Customize via Tailwind classes

### Links & Navigation
- Use React Router's `<Link>` component, not `<a>` tags
- Active link detection: `useLocation()` from React Router
- Logo links: Navigate to home via `<Link to="/">`

## Build Process
```
npm run build
  ↓
node sammy.js (displays ASCII art)
  ↓
vite build
  ├─ Transpile TypeScript → JavaScript
  ├─ Process JSX → React.createElement()
  ├─ Bundle with Rollup
  ├─ Process Tailwind (purge unused classes)
  └─ Output to _static/
```

## Key Dependencies
- **React 19.2.4** - UI framework
- **React DOM 19.2.4** - React renderer for web
- **React Router 7.13.0** - Client-side routing
- **Tailwind CSS 4.1.18** - Utility-first CSS with Vite plugin
- **Framer Motion 12.31.0** - Animations
- **Radix UI** - Accessible UI primitives (dialog, dropdown, tabs, etc.)
- **Lucide React 0.563.0** - Icon library
- **Class Variance Authority 0.7.1** - Component variant management
- **TypeScript 5.9.3** - Type safety
- **Vite 7.3.1** - Build tool and dev server

## Future Extension Points
- AuthContext ready for backend integration
- Dashboard route exists at `/dashboard` (placeholder)
- Multi-user roles prepared: admin, project_proponent, contractor
- Modal framework established for additional dialogs
- Both landing page versions (v1 and v2) available

## Important Notes
- Build output is `_static/`, not `dist/`
- Dev server always runs on port 3000
- Dark mode default is **light** (not dark)
- Theme changes: Edit `src/config/theme.ts`
- Job data is currently hardcoded (no database yet)
- **React 19 Update**: Project uses React 19.2.4 with automatic JSX runtime (no need to import React)
- **Tailwind v4**: Uses `@tailwindcss/vite` plugin (configured in vite.config.ts), not PostCSS plugin
