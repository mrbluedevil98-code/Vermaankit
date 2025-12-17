# Freelancer Portfolio - Apple Glassmorphism Design Guidelines

## Design Approach
**Reference-Based:** Apple's glassmorphism aesthetic with inspiration from Apple's website design language, combining frosted glass effects, depth through layering, and premium animations.

## Core Design Principles
- **Depth through transparency:** Frosted glass cards floating above subtle gradient backgrounds
- **Premium feel:** Sophisticated animations that feel fluid and intentional
- **Clarity with blur:** Translucent elements that maintain readability while creating visual interest
- **Refined simplicity:** Clean layouts with purposeful whitespace

## Typography System

**Font Stack:** SF Pro Display (primary), Inter (fallback) via Google Fonts
- Hero Name: text-5xl to text-7xl, font-bold, tracking-tight
- Hero Title: text-xl to text-2xl, font-light
- Section Headings: text-4xl to text-5xl, font-semibold
- Project Titles: text-2xl, font-medium
- Body Text: text-base to text-lg, font-normal
- Captions: text-sm, font-light

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, mt-20)

**Container Strategy:**
- Max-width: max-w-7xl for main content areas
- Section padding: py-20 md:py-32 for desktop, py-12 md:py-20 for mobile
- Card padding: p-6 to p-8
- Grid gaps: gap-6 to gap-8

## Component Library

### Navigation
Fixed glassmorphic navbar with backdrop-blur-xl, subtle border, floating appearance with rounded corners. Logo left, navigation links center/right, mobile hamburger menu with smooth slide-in animation.

### Hero Section
Full-viewport (min-h-screen) centered layout featuring:
- Large glassmorphic card (backdrop-blur-2xl, border, subtle shadow)
- Professional photo with rounded corners and subtle glow
- Name, title/tagline, brief description
- Primary CTA with frosted glass button treatment
- Animated gradient background with subtle movement
- Floating geometric shapes or particles in background (purely decorative)

### Portfolio Grid
Masonry-style or even grid (3 columns desktop, 2 tablet, 1 mobile) with:
- Thumbnail images with 16:10 or 4:3 aspect ratio
- Glassmorphic overlay on hover revealing project title and category
- Smooth scale transform (1.05) on hover
- Click to open detailed project modal

### Project Modal/Lightbox
Full-screen glassmorphic overlay with:
- Large project images in carousel/gallery
- Project description, role, technologies
- Close button with smooth fade-out animation
- Backdrop blur darkening background

### About Section
Two-column layout (stacks on mobile):
- Left: Brief bio paragraph
- Right: Skills showcase with animated glassmorphic progress bars or pill tags
- Possibly small achievements/statistics in glass cards

### Contact Section
Centered glassmorphic contact form with:
- Name, email, message fields
- All inputs with frosted glass styling and focus states
- Submit button with premium animation
- Alternative: Email/social links in glass buttons

### Footer
Minimal glassmorphic strip with social links, copyright, minimal navigation

## Glassmorphism Implementation

**Glass Effect Specifications:**
- backdrop-filter: blur(20px) to blur(40px)
- background: semi-transparent with 0.1 to 0.3 opacity
- border: 1px solid with 0.2 opacity
- box-shadow: subtle, large blur radius for depth
- border-radius: rounded-2xl to rounded-3xl for cards

**Layering Strategy:**
- Background: animated gradients
- Mid-layer: larger glass panels
- Foreground: smaller glass cards and UI elements
- Create depth through varying blur intensities

## Animation Strategy

**Scroll Animations:** (Use AOS library or similar)
- Fade-in + slide-up for section entrances
- Stagger animations for portfolio grid items
- Parallax effect on background elements (subtle, 0.5 speed)

**Hover Interactions:**
- Portfolio thumbnails: scale(1.05), opacity overlay change
- Buttons: subtle glow increase, slight lift
- Navigation links: underline animation or glow

**Page Transitions:**
- Smooth modal open/close with scale + opacity
- Project navigation with fade transitions

**Micro-interactions:**
- Skill bars animate on scroll into view
- Floating background elements with slow, perpetual motion
- Form inputs: focus glow animation

**Performance:** Keep animations at 60fps, use transform and opacity only, limit simultaneous animations

## Images Section

**Hero Section:**
- Professional portrait photo (headshot or upper body)
- High resolution, professional lighting
- Placed within glassmorphic hero card
- Size: 200px-300px width, rounded-full or rounded-2xl
- Subtle glow/shadow effect around image

**Portfolio Thumbnails:**
- 12-20 project thumbnails showcasing diverse work
- High-quality mockups or screenshots
- Consistent aspect ratio across grid
- Hover reveals glassmorphic overlay

**Background:**
- Subtle animated gradient (no photo)
- Optional: abstract geometric shapes or particle effects (CSS/SVG)

## Responsive Behavior
- Mobile: Stack all multi-column layouts, reduce glass blur slightly for performance
- Tablet: 2-column portfolio grid
- Desktop: 3-column portfolio grid, full glassmorphic effects
- Maintain glass aesthetics across all breakpoints with adjusted blur values

## Accessibility
- Ensure sufficient contrast despite transparency (test with overlays)
- Focus states with visible glass-styled rings
- Keyboard navigation for all interactive elements
- Alt text for all portfolio images
- ARIA labels for modal and navigation