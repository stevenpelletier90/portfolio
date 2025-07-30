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

### Component Organization

- **Main Components**:
  - `Header` - Fixed transparent header with Steven Pelletier branding and navigation pills
  - `Footer` - Site footer (hidden on project pages)
  - `App` - Main routing component with React Router setup
  - `Home` - Main portfolio page with all sections and sliding animations
  - `Project` - Individual project detail page component
  - `ProjectCard` - Reusable project card component for the work section
- **Button Library** (`src/components/Button.tsx`):
  - `StatusButton` - Green expandable dot button for "Available for Work" status
  - `GreetingButton` - Button with wave emoji for friendly interactions
  - `CTAButton` - Call-to-action button with rotating arrow animation
- **Data**:
  - `src/data/projects.ts` - TypeScript interface and project data (4 sample projects)

### Styling

- Component-specific CSS files in `src/styles/`
- Global styles in `src/index.css`
- **Font Awesome** - Installed for icons (`@fortawesome/fontawesome-free`)
- No CSS framework - custom CSS implementation

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

## Important Notes

- Do what has been asked; nothing more, nothing less.
- NEVER create files unless they're absolutely necessary for achieving your goal.
- ALWAYS prefer editing an existing file to creating a new one.
- NEVER proactively create documentation files (\*.md) or README files unless explicitly requested.
