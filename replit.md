# Ankit Rikrevo - YouTube Thumbnail Designer Portfolio

## Overview
A modern, glassmorphism-styled portfolio website for a YouTube thumbnail designer. The site showcases professional thumbnail designs with an Apple-inspired aesthetic featuring frosted glass effects, smooth animations, and a premium feel.

## Tech Stack
- **Frontend:** React 18 with TypeScript, Vite
- **Styling:** TailwindCSS with custom glassmorphism utilities
- **Animations:** Framer Motion
- **State Management:** TanStack Query (React Query)
- **Forms:** React Hook Form with Zod validation
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Backend:** Express.js with in-memory storage
- **Icons:** Lucide React, React Icons

## Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PortfolioGrid.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and helpers
│   │   ├── pages/          # Page components
│   │   └── App.tsx         # Main app component
│   └── index.html
├── server/                 # Backend Express server
│   ├── routes.ts           # API routes
│   ├── storage.ts          # In-memory data storage
│   └── index.ts            # Server entry point
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Zod schemas and types
└── attached_assets/        # Portfolio images and assets
```

## Features
- **Hero Section:** Animated profile with availability status, stats, and CTAs
- **Portfolio Grid:** Filterable thumbnail gallery with category tabs
- **Project Modal:** Detailed view with stats (views, CTR, technologies)
- **About Section:** Skills showcase with animated progress bars
- **Contact Form:** Fully functional form with validation and backend API
- **Theme Toggle:** Light/dark mode with smooth transitions
- **Responsive Design:** Mobile-first, works on all devices
- **SEO Optimized:** Meta tags, semantic HTML, accessibility features

## API Endpoints
- `POST /api/contact` - Submit contact form message
- `GET /api/contact` - Get all contact messages (admin)

## Running the Project
The application runs on port 5000 with a single command:
```bash
npm run dev
```

## Design System
- **Colors:** Red/Orange gradient primary, neutral backgrounds
- **Typography:** Inter font family
- **Effects:** Glassmorphism with backdrop-blur, subtle shadows
- **Animations:** Fade-in on scroll, hover effects, smooth transitions

## Recent Changes
- Added functional contact form with backend API
- Implemented proper form validation with react-hook-form and Zod
- Added SEO meta tags and accessibility improvements
- Optimized images with lazy loading
- Added keyboard navigation support
- Updated social media links with proper URLs

## User Preferences
- Apple-style glassmorphism design
- Red/orange color scheme
- Premium, professional aesthetic
- Smooth animations and transitions
