# GymFrontEnd Project Documentation

Last updated: 2026-01-28

## 1) Project Overview
GymFrontEnd is a single-page marketing site for the "GymPro / gamma" gym management dashboard. It is built with React + Vite and styled using Tailwind CSS. The UI is composed of reusable sections that describe product pillars, key features, customer results, and a demo booking form.

## 2) Tech Stack
- React 19 (UI components and state)
- Vite 7 (dev server and build tooling)
- Tailwind CSS 4 (utility-first styling, dark mode via class selector)
- Framer Motion 11 (animations and transitions)
- Lucide React (icons)

## 3) Project Structure
- index.html: HTML shell with root div and title.
- src/main.jsx: React entry point; mounts App into #root.
- src/App.jsx: Global layout, theme toggling, and top-level composition.
- src/pages/Home.jsx: Page container; owns booking form state and in-page navigation.
- src/components/: Reusable UI sections and helpers.
- public/: Static assets (currently only vite.svg).

## 4) Entry Points and App Flow
- index.html loads src/main.jsx.
- main.jsx renders App inside React.StrictMode.
- App.jsx:
  - Manages dark/light theme using localStorage (key: theme).
  - Adds or removes the "dark" class on documentElement to enable Tailwind dark styles.
  - Renders Navbar, Home page content, Footer, and ScrollToTop.

## 5) Routing and Navigation
- The project includes react-router-dom in dependencies but does not define routes.
- Navigation is in-page only using anchors and scrollIntoView.
- Section ids used:
  - #top (hero/overview)
  - #programs (dashboard modules)
  - #why (why GymPro)
  - #book (book demo)

## 6) Styling and Theme
- Tailwind CSS is imported in src/index.css via @import "tailwindcss".
- Dark mode is configured with selector-based toggling (dark class on html).
- Many sections use gradient or pattern backgrounds through Tailwind arbitrary values.

## 7) Components and Responsibilities

### Core Layout
- src/App.jsx
  - Theme state (dark/light) with localStorage persistence.
  - Renders Navbar, Home, Footer, ScrollToTop.

- src/components/Navbar.jsx
  - Sticky top nav with desktop and mobile views.
  - Mobile menu uses framer-motion AnimatePresence.
  - Theme toggle button (Sun/Moon icons).
  - Uses in-page scroll to the #book section.

- src/components/Footer.jsx
  - Brand summary, quick links, address, contact info, and social links.
  - Year auto-updates using new Date().getFullYear().

- src/components/ScrollToTop.jsx
  - Shows a floating button after scrolling 300px.
  - Smooth scrolls to top when clicked.

### Shared UI Helpers
- src/components/CTAButton.jsx
  - Animated call-to-action button with primary and outline variants.

- src/components/SectionTitle.jsx
  - Section heading with eyebrow, title, and optional description.

- src/components/IconCard.jsx
  - Reusable card with icon, title, and description.

- src/components/MotionWrappers.jsx
  - Animation variants used across components (fadeUp, fadeIn, staggerContainer, cardVariant, pageVariant).

### Home Page Sections (src/pages/Home.jsx)
- HomeHeroSection
  - Hero banner, CTA buttons, quick highlights, and a dashboard snapshot card.

- HomeProductPillars
  - Six product pillar cards with Lucide icons.

- HomeDashboardModules
  - Summary cards for key dashboard modules.

- HomeKeyFeatures
  - Three highlighted features with animated gradient cards.

- HomeWhyGymPro
  - Four reasons to choose the product.

- HomeResults
  - Three testimonial-style cards.

- HomeBookDemo
  - Demo booking form and contact details.
  - Uses bookingForm state from Home.
  - Current form submission only logs to console (no backend integration).

## 8) State and Data Handling
- Theme state stored in localStorage and applied to html class.
- Booking form state stored in Home.jsx:
  - name, phone, email, message, agreeToContact.
- onSubmit currently prevents default and logs to console only.

## 9) Build, Dev, and Lint Scripts
- npm run dev: start Vite dev server
- npm run build: build production bundle
- npm run preview: preview production build
- npm run lint: run ESLint

## 10) Notable Content and Copy
- The product name appears as "GymPro" and "gamma" in branding.
- The home page is a marketing/landing page oriented toward gym operations teams.

## 11) Known Content/Encoding Issues
Some text contains encoding artifacts (likely from copy/paste or encoding mismatch):
- src/components/Navbar.jsx: "â–¸" in mobile menu chevron.
- src/components/Footer.jsx: "Monâ€“Fri" and "Satâ€“Sun" and "Â©".
- src/components/HomeResults.jsx: curly quotes appear as "â€œ" and "â€".
- src/components/HomeBookDemo.jsx: "goalsâ€”" in description text.

These should be replaced with normal ASCII or proper UTF-8 characters as needed.

## 12) Suggested Next Steps (Optional)
- Wire the booking form to an API or email service.
- Add routing if more pages are planned (react-router-dom is already installed).
- Replace placeholder contact details with real business info.
- Fix the encoding artifacts noted above.

## 13) File Map (Quick Reference)
- index.html
- src/main.jsx
- src/App.jsx
- src/index.css
- src/pages/Home.jsx
- src/components/CTAButton.jsx
- src/components/Footer.jsx
- src/components/HomeBookDemo.jsx
- src/components/HomeDashboardModules.jsx
- src/components/HomeHeroSection.jsx
- src/components/HomeKeyFeatures.jsx
- src/components/HomeProductPillars.jsx
- src/components/HomeResults.jsx
- src/components/HomeWhyGymPro.jsx
- src/components/IconCard.jsx
- src/components/MotionWrappers.jsx
- src/components/Navbar.jsx
- src/components/ScrollToTop.jsx
- src/components/SectionTitle.jsx
