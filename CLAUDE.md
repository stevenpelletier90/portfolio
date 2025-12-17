# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Steven Pelletier's portfolio website built with React, TypeScript, and Vite.

## Development Commands

- `npm run dev` - Start the development server (Vite) at http://localhost:5173
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check for issues
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted correctly
- `npm run typecheck` - Run TypeScript type checking

## Architecture Overview

### Tech Stack

- **React 19** with TypeScript
- **Vite** for bundling and dev server
- **ESLint** with TypeScript support
- **Prettier** for code formatting
- **React Router** - Used for individual project pages (/project/:id)

### Current Structure

- **Entry Point**: `src/main.tsx` - React app with BrowserRouter
- **Routing Structure**:
  - `/` - Home page with all sections and smooth scrolling
    - `#home` - Hero/landing section
    - `#work` - Work/Portfolio section with project cards
    - `#about` - About section
    - `#resume` - Resume section
    - `#connect` - Connect/Contact section
  - `/project/:id` - Individual project detail pages

### Component Loading Flow

**Understanding how everything connects:**

```
1. main.tsx (Entry Point)
   └─ Loads: index.css, React, BrowserRouter
   └─ Renders: <App />

2. App.tsx (Router & Layout)
   └─ Always renders: <Header />
   └─ Routes to pages based on URL:
      • "/" → <Home />
      • "/project/:id" → <Project />
      • "*" → <NotFound />
   └─ Conditionally renders: <Footer /> (only on homepage)

3. Home.tsx (Main Page - Section Container)
   └─ Renders sections in this exact order:
      1. <HeroSection />         (Landing with name/title)
      2. <AboutSection />        (About me + images)
      3. <TechMarquee />         (Scrolling tech logos)
      4. <ServicesSection />     (What I do + skills)
      5. <SkillsSection />       (Stats/numbers)
      6. <WorkSection />         (Project showcase)
      7. <TestimonialsSection /> (Client testimonials)
```

**Component Categories:**

**Layout Components** (always visible):
- `Header.tsx` - Navigation bar (uses Logo.tsx, Navigation.tsx, Button.tsx)
- `Footer.tsx` - Footer with links (only on homepage)

**Page Components** (routes):
- `Home.tsx` - Main portfolio page (composes all sections)
- `Project.tsx` - Individual project detail pages
- `NotFound.tsx` - 404 error page

**Section Components** (used in Home.tsx):
- `HeroSection.tsx` - Hero/landing with name
- `AboutSection.tsx` - About section with bio
- `TechMarquee.tsx` - Animated tech stack showcase
- `ServicesSection.tsx` - Services and skills listing
- `SkillsSection.tsx` - Stats with numbers
- `WorkSection.tsx` - Portfolio projects grid
- `TestimonialsSection.tsx` - Client testimonials

**Reusable Components**:
- `Button.tsx` - StatusButton, CTAButton, DarkButton, LightButton
- `ProjectCard.tsx` - Individual project cards
- `CountUp.tsx` - Number animation utility
- `Logo.tsx` - Site logo component
- `Navigation.tsx` - Navigation links

**Data**:
- `src/data/projects.ts` - Project metadata and content

### How to Edit Sections

**Want to change section order?**
→ Edit `Home.tsx` lines 35-48 - just reorder the components

**Want to edit a specific section's content?**
→ Open the corresponding section file (e.g., `AboutSection.tsx`)

**Want to change header/footer?**
→ `Header.tsx` or `Footer.tsx` - they're separate files

**Want to style something?**
→ All styles are in `src/styles.css` with clear comment headers

### Styling Architecture

**Two-file CSS system** for simplicity and maintainability:

- **`src/index.css`** - Global foundation only:
  - Font declarations (@font-face)
  - CSS resets (margin, padding, box-sizing)
  - Base body styles (font-family, background, colors)
  - Minimal typography defaults (NO color declarations on h1-h6, p tags)
  - Base button/input resets
  - Font Awesome import

- **`src/styles.css`** - All component styles in one file:
  - Header, Footer, Buttons
  - All sections (Hero, About, Services, Skills, Work, Testimonials)
  - Project pages and cards
  - Not Found page
  - Animations and responsive styles
  - Well-organized with comment headers for each section

**CSS Philosophy:**
- Global styles are RESETS and BASE styles only, not design decisions
- Each component defines its own colors, typography, and hover states
- No overly broad selectors that cause specificity conflicts
- Components are self-contained to avoid cascade issues
- **Font Awesome** - Installed for icons (`@fortawesome/fontawesome-free`)
- No CSS framework - custom CSS implementation

**Modularity Options** (if needed in the future):
- Current setup (2 files) is optimal for portfolio size
- Could split into modular files if project grows:
  - `src/styles/header.css` - Header component styles
  - `src/styles/footer.css` - Footer component styles
  - `src/styles/buttons.css` - Button library
  - `src/styles/sections.css` - All page sections
  - `src/styles/projects.css` - Project pages
- For now, single `styles.css` keeps things simple and searchable
- All styles in one file = easy Ctrl+F searching, no import confusion

### TypeScript Configuration

- Strict mode enabled
- All source files converted to TypeScript (.tsx/.ts)
- Type checking available via `npm run typecheck`

## Recent Changes

- Converted entire project from JavaScript to TypeScript
- Removed theme toggle functionality
- Removed Skills component
- Removed image gallery and loader components
- Changed from multi-page to single-page portfolio with sections
- Removed React Router - now uses smooth scroll navigation
- Updated navigation with Work, About, Resume, Connect as section anchors
- Added Steven Pelletier as the site owner name
- Fixed tsconfig.node.json to support both .js and .ts vite config files
- **Added sliding section animations** - Sections slide up from bottom as user scrolls
- **Transparent header** - Removed glass background effect, kept navigation pills
- **Font Awesome integration** - Added icon support for buttons and UI elements
- **Enhanced button library** - Added StatusButton with expandable dot animation and CTAButton with rotating arrow
- **React Router implementation** - Added routing for individual project pages with dynamic URLs
- **Project showcase system** - Created ProjectCard components and detailed project pages
- **CSS Architecture Refactor** - Consolidated from 4 files to 2 files:
  - Removed confusing components/sections/projects distinction
  - Combined all component styles into single `styles.css`
  - Cleaned up overly broad global styles that caused specificity conflicts
  - Removed global `a:hover { opacity: 0.8 }` that conflicted with component-specific hovers
  - Each component now defines its own hover states cleanly
- **Optimized section heights** - Removed forced `min-height: 100vh` from About, Work, and Testimonials sections
- **Fixed text contrast issues** - Changed white text to black on light backgrounds (Services, Testimonials sections)

## UI Components Details

### StatusButton (Green "Available for Work" Button)

Located in header, this button features:

- **Default state**: Small green dot (#74ff8b) with pulsing animation and "Available for Work" text
- **Hover state**: Dot expands to fill button with tinted background (rgba(116, 255, 139, 0.2)) and green border
- **Smooth morphing animation** using CSS transitions and transforms
- Positioned in header navigation area

### CTAButton (Call-to-Action with Arrow)

Used for primary actions like "My Work" button:

- **Default state**: Arrow rotated -45° (pointing up-right diagonally)
- **Hover state**: Arrow rotates to 0° (straight right) and moves 3px to the right
- **Styling**: Inverted colors on hover (transparent background, colored text)
- **No vertical movement** - button stays in place, only arrow animates

### Section Animations

- **Sliding effect**: Sections start 50px below and slide up as they come into view
- **Sticky positioning**: Each section sticks to top while scrolling
- **Layered z-index**: Sections stack on top of each other (hero: 1, work: 2, about: 3, etc.)
- **Smooth transitions**: 0.4s cubic-bezier easing for natural movement

### Project System

- **Project Cards**: Hover effects with image scaling and overlay "View Project" button
- **Dynamic Routing**: Each project accessible via `/project/{id}` URL structure
- **Project Pages**: Full-featured layouts with hero images, tech stacks, live/GitHub links, and image galleries
- **Navigation**: Back button returns to home page work section
- **Data Structure**: Projects defined in `src/data/projects.ts` with comprehensive metadata

## Quick Editing Reference

**Common editing tasks and which file to open:**

| What You Want to Change | File to Edit | Line Numbers |
|------------------------|--------------|--------------|
| Section order on homepage | `Home.tsx` | Lines 35-48 |
| Hero text (name/title) | `HeroSection.tsx` | Throughout |
| About me content | `AboutSection.tsx` | Throughout |
| Services/skills list | `ServicesSection.tsx` | Throughout |
| Stats numbers | `SkillsSection.tsx` | Throughout |
| Projects displayed | `src/data/projects.ts` | Throughout |
| Header navigation | `Header.tsx` or `Navigation.tsx` | Throughout |
| Footer links/content | `Footer.tsx` | Throughout |
| Any styling | `src/styles.css` | Search for section name |
| Colors/fonts | `src/index.css` | Lines 12-26 (fonts), 39-60 (body) |

**Pro tip:** Use Ctrl+F in your editor to search for specific text across files.

## Important Notes

- Do what has been asked; nothing more, nothing less.
- NEVER create files unless they're absolutely necessary for achieving your goal.
- ALWAYS prefer editing an existing file to creating a new one.
- NEVER proactively create documentation files (\*.md) or README files unless explicitly requested.
