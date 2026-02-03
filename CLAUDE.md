# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Ravenlink** (Indigenous Opportunities & Contracting System) is a React-based web application facilitating Indigenous engagement and ESG reporting for infrastructure projects. The system connects three user roles: Admins, Project Proponents, and Contractors, managing job opportunities, applications, workforce tracking, and project management.

This is a Vite-based React application that was migrated from Create React App, deployed on DigitalOcean App Platform.

## Development Commands

### Local Development
```bash
npm run dev          # Start Vite dev server on port 3000
npm run build        # Build for production (runs sammy.js then vite build)
npm run preview      # Preview production build locally
npm start            # Production mode: run sammy.js + serve static files
```

### Build Process
The build has a **custom pre-build step** (`sammy.js`) that generates ASCII art branding. The output directory is `_static/` (not the default `dist/`).

### Testing
Tests use React Testing Library with Jest:
```bash
npm test             # Run all tests
```

## Architecture Overview

### User Roles & Access Control

The application implements **role-based access control** with three distinct user types:

1. **Admin** - Full system access, user management, analytics
2. **Project Proponent** - Creates projects and job opportunities, manages applications
3. **Contractor** - Creates job opportunities, manages applications and workforce

**Critical**: The same user role can have different capabilities. For example, both Project Proponents AND Contractors can create jobs, but Project Proponents also manage Projects with contractor access permissions.

### Context Providers (Global State)

Two main context providers wrap the application:

1. **AuthContext** (`src/contexts/AuthContext.tsx`)
   - Manages authentication state via `localStorage` tokens (`accessToken`, `refreshToken`)
   - Provides `user`, `userProfile`, role helpers (`isAdmin`, `isProjectProponent`, `isContractor`)
   - Handles sign in/out, user session persistence
   - **Important**: Authentication is checked on mount by reading tokens from localStorage

2. **DarkModeContext** (`src/contexts/DarkModeContext.tsx`)
   - Theme switching (dark/light mode)
   - Persists preference to localStorage
   - Applies `dark` class to `document.documentElement`

### Dashboard Architecture

The application uses a **role-specific dashboard pattern**. Each role has a dedicated dashboard component:

- `AdminDashboard.tsx` - 6 tabs: Users, Projects, Opportunities, Applications, Workforce, Analytics
- `ProjectProponentDashboard.tsx` - 4 tabs: Projects, Opportunities, Applications, Workforce
- `ContractorDashboard.tsx` - 3 tabs: Opportunities, Applications, Workforce

**Key Pattern**: Dashboards use **modular tab components** from `src/components/interfaces/`:
- `UsersTab.tsx`
- `ProjectsTab.tsx`
- `OpportunitiesTab.tsx`
- `ApplicationsTab.tsx`
- `WorkforceTab.tsx`
- `AnalyticsTab.tsx`

This separation allows tabs to be reused across different dashboards with different permissions.

### Data Model Hierarchy

```
Projects (created by Project Proponents)
  └─> Jobs/Opportunities (linked to projects, created by Proponents or Contractors)
      └─> Applications (submitted by users)
          └─> Workforce Members (hired applicants)
```

**Access Control Layers**:
- **Projects**: Can have `visibility_mode` of `all_contractors` or `selected_contractors`
  - Project Proponents can grant/revoke contractor access via `project_contractor_access` table
- **Jobs**: Can also have contractor-specific access controls
  - Managed via `job_contractor_access` table

### API Layer

**Missing from this codebase**: The API implementation is referenced but not present. Components import from `../../lib/api` but this directory doesn't exist in the source.

The API pattern used throughout:
```typescript
const { data, error } = await apiModule.method()
if (error) {
  // Handle error using handleAPIError(error)
}
// Use data
```

All API calls return `{ data, error }` tuples. The `handleAPIError()` function is imported but not implemented in this repo.

### Theme System

Centralized theming in `src/config/theme.ts`:
- **Brand Colors**: Raven-derived palette (Gold `#F8B818`, Forest Green `#607828`, Deep Blue `#184878`, Orange `#F09800`)
- Tailwind CSS custom classes use these colors via CSS variables
- The theme supports both light and dark modes with separate color definitions

**Important**: When adding UI elements, reference `theme.colors` for consistency. Custom Tailwind classes like `bg-brand-primary`, `text-brand-primary`, `bg-brand-primary-hover` are used throughout.

### Modal Pattern

The application uses a **compound modal pattern** with modals defined inline within dashboard components:
- Job creation/edit modals
- Application detail modals
- Hire modals (convert application to workforce member)
- Project access management modals

Modals are controlled by boolean state flags (`showJobModal`, `showHireModal`, etc.) and render conditionally.

### Excel Export Feature

Multiple dashboards include Excel export functionality using `xlsx` library:
- Export applications to `.xlsx` with full field mapping
- Export includes data transformation (dates, booleans to Yes/No, etc.)
- Auto-sizing columns based on content length

## Component Organization

```
src/
├── components/
│   ├── dashboards/           # Role-specific dashboards
│   │   ├── AdminDashboard.tsx
│   │   ├── ContractorDashboard.tsx
│   │   └── ProjectProponentDashboard.tsx
│   ├── interfaces/           # Reusable tab components
│   │   ├── UsersTab.tsx
│   │   ├── ProjectsTab.tsx
│   │   ├── OpportunitiesTab.tsx
│   │   ├── ApplicationsTab.tsx
│   │   ├── WorkforceTab.tsx
│   │   └── AnalyticsTab.tsx
│   ├── landing/              # Marketing pages (v1)
│   ├── landing_v2/           # Marketing pages (v2 - newer)
│   ├── Header.tsx            # App navigation
│   ├── Footer.tsx
│   ├── LandingPage.tsx
│   ├── AboutPage.tsx
│   ├── JobListings.tsx       # Public job board
│   ├── JobCard.tsx
│   ├── JobDetailModal.tsx
│   ├── ApplicationModal.tsx  # Job application form
│   └── LoginModal.tsx
├── contexts/
│   ├── AuthContext.tsx       # Authentication & user state
│   └── DarkModeContext.tsx   # Theme state
└── config/
    └── theme.ts              # Centralized theme configuration
```

## Important Implementation Details

### Authentication Flow
1. User logs in → tokens stored in `localStorage`
2. On page load, `AuthContext` checks for valid token
3. If token exists, fetches current user + profile
4. Invalid/expired tokens are cleared automatically
5. Role-based routing happens in main App component

### Application to Workforce Pipeline
When hiring an applicant:
1. Application status updates to "hired"
2. New `WorkforceMember` record created with link to original application
3. Can assign to a job (may differ from job they applied to)
4. Can assign to a project and location
5. Track readiness level, skills assessment, employee number

### Project-Job Linking
- Jobs can be linked to multiple projects via `project_ids` array
- This creates a many-to-many relationship through a join table
- Project Proponents can view all jobs linked to their projects
- Contractors with project access can see and manage linked jobs

## File Type Convention

The codebase **mixes `.jsx`, `.js`, `.tsx`, and `.ts` files**:
- New components with TypeScript use `.tsx`
- Legacy/simple components use `.jsx`
- Configuration files use `.js`
- Context providers and newer features use `.tsx` with TypeScript types

When adding new files, prefer TypeScript (`.tsx` for components, `.ts` for utilities).

## Custom Build Configuration

### Vite Config (`vite.config.js`)
- Output directory: `_static` (not `dist`)
- Dev server: port 3000
- Uses `@vitejs/plugin-react`

### Pre-build Script (`sammy.js`)
Generates ASCII art branding displayed in console. This runs before both dev and production builds.

### DigitalOcean Deployment
- Configured via `.do/app.yaml`
- Deployed from `main` branch
- Auto-deploy on push enabled
- Build command: `npm run build` (which includes sammy.js)
- Uses the `serve` package for static file serving

## State Management Pattern

No global state management library (Redux, Zustand, etc.) is used. State management follows this pattern:

1. **Local component state** for UI interactions (modals, form inputs)
2. **Context providers** for global concerns (auth, theme)
3. **Prop drilling** for dashboard → tab component communication
4. **Data fetching** happens in dashboard components, passed down as props

Each dashboard loads all its data on mount with `Promise.all()` for parallel fetching.

## Styling Approach

- **Tailwind CSS** for all styling
- **No CSS modules** or styled-components
- Dark mode handled via Tailwind's `dark:` variant
- Brand colors defined in `theme.ts` and mapped to Tailwind custom classes
- Responsive design with Tailwind breakpoints (`sm:`, `md:`, `lg:`)

## Indigenous Engagement Features

This application has specialized fields for Indigenous participation tracking:
- Self-identification as Indigenous
- Band affiliation
- Indigenous community contact information
- Interest in community monitor roles
- Tracking Indigenous participation for ESG reporting

When working with application or workforce data, be mindful of these sensitive fields and their reporting implications.
