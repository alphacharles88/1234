# Chop Life — Food Delivery & Restaurant Web Application

A modern, production-ready, fully responsive food delivery and table reservation web application built with **React.js**, **Vite**, and **Tailwind CSS**, designed for the Nigerian food delivery ecosystem (Lagos, Abuja, and Port Harcourt).

![Chop Life Food Delivery](https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop)

## 🎯 Purpose of the Application

**Chop Life** is an end-to-end food business web application crafted to deliver a modern SaaS dining experience. Its core goals are:

1. **Effortless Meal Ordering:** Browse gourmet meals, continental dishes, and Nigerian delicacies with transparent pricing in Nigerian Naira (**₦**).
2. **Interactive Cart & Checkout:** Manage orders with live subtotal calculation, free delivery milestone tracking (orders over ₦15,000), and coupon discount support (`TASTY30`).
3. **Table Reservations:** Instant booking system for VIP lounges, chef's tables, and rooftop terraces with automated booking reference generation.
4. **Live Order Tracker:** Real-time multi-step order status tracking (Confirmed ➔ Cooking ➔ On Way ➔ Delivered) with courier details and 1-click reordering.
5. **Community Reviews:** Verified diner testimonials and an interactive review submission form.
6. **24/7 Customer Care:** Integrated WhatsApp priority chat, phone hotlines, and interactive FAQ accordion.

---

## 🚀 Key Features

- **Interactive Shopping Cart:** Real-time quantity adjustments, live subtotal updates, free delivery threshold indicator, and slide-out drawer.
- **Interactive Background:** Dynamic HTML5 canvas particle system featuring drifting food emojis with gentle cursor repulsion physics.
- **Smooth Scroll-Reveal:** Fluid entrance animations powered by the `IntersectionObserver` API.
- **Scroll-Spy Navigation:** Active sidebar links automatically highlight as the user scrolls through the page.
- **Real-time Search & Filter:** Instant dish search and cuisine category tabs (Italian, Chinese, Indian, Burgers, etc.).
- **Responsive Layout:** Sticky navigation on desktop, slide-out drawer on mobile screens.
- **Promo Code System:** Copy-to-clipboard functionality with instant coupon application.

---

## 🛠 Tech Stack & Build Environment

| Tool / Technology | Role in Project | Description |
|---|---|---|
| **Vite 8** | Build Tool & Dev Server | Ultra-fast native ES modules (ESM) bundler with near-instant Hot Module Replacement (HMR) and optimized Rollup production builds. |
| **React 19** | Frontend Framework | Functional component architecture leveraging React hooks (`useState`, `useEffect`, `useCallback`, `useRef`, `useContext`). |
| **Tailwind CSS 4** | Styling & Design System | Next-gen utility-first CSS engine using `@tailwindcss/vite`, CSS theme variables, and responsive breakpoints (`sm`, `md`, `lg`, `xl`). |
| **Lucide React** | Icon System | Clean, scalable SVG icons for navigation, UI controls, delivery statuses, and badges. |
| **Node.js & npm** | Runtime & Package Manager | Manages application dependencies, build scripts, and execution environment. |

---

## 📁 Project Structure

```
choplife/
├── public/
│   └── favicon.svg              # Brand SVG favicon
├── src/
│   ├── assets/                  # Static asset files
│   ├── components/
│   │   ├── Sidebar.jsx          # Desktop sidebar & mobile navigation drawer
│   │   ├── Header.jsx           # Top search bar, favorites, cart trigger, user profile
│   │   ├── HeroSection.jsx      # Hero banner, CTAs, 50k+ social proof, featured meal card
│   │   ├── FeatureBar.jsx       # 4-column perks (Free delivery over ₦15k, guarantee, 24/7 care)
│   │   ├── CuisineCategories.jsx# Circular cuisine cards with 1-click filter
│   │   ├── PopularDishes.jsx    # Filterable dish grid with badges, ratings & add-to-cart buttons
│   │   ├── PromoBanners.jsx     # Dual promo cards (TASTY30 discount code + Family Combos)
│   │   ├── ReservationsSection.jsx # Table booking form with reference generation
│   │   ├── OrdersSection.jsx    # Live delivery tracker, rider details & 1-click reorders
│   │   ├── ReviewsSection.jsx   # Customer ratings, verified reviews & review submission form
│   │   ├── SupportSection.jsx   # WhatsApp chat, hotline, FAQ accordion & inquiry form
│   │   ├── PartnerLogos.jsx     # Trusted partner logos (Zomato, Swiggy, Uber Eats, etc.)
│   │   ├── CartDrawer.jsx       # Slide-out cart drawer with promo code and checkout flow
│   │   ├── Footer.jsx           # Multi-column footer with quick links, contacts & newsletter
│   │   └── InteractiveBackground.jsx # HTML5 Canvas cursor-interactive floating background
│   ├── context/
│   │   └── CartContext.jsx      # React Context for global shopping cart state
│   ├── data/
│   │   └── menuData.js          # Menu dishes, cuisines, initial reviews & nav items
│   ├── hooks/
│   │   └── useScrollReveal.jsx  # IntersectionObserver hook & ScrollReveal wrapper component
│   ├── App.jsx                  # Main application composition & layout
│   ├── App.css                  # Custom keyframe animations and scrollbar rules
│   ├── index.css                # Tailwind imports, theme configuration & smooth scroll styles
│   └── main.jsx                 # Application entry point with CartProvider wrapper
├── index.html                   # HTML shell with Google Fonts Inter & viewport config
├── package.json                 # Project dependencies & build scripts
├── package-lock.json            # Deterministic dependency tree
├── vite.config.js               # Vite configuration with React & Tailwind plugins
├── eslint.config.js             # ESLint configuration
├── .gitignore                   # Ignored files (node_modules, dist, etc.)
└── README.md                    # Comprehensive documentation
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js:** version 18.0.0 or higher
- **npm:** version 9.0.0 or higher

### Development & Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (with HMR)
npm run dev

# 3. Build optimized production bundle to /dist
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🎨 Design System

- **Currency:** Nigerian Naira (**₦**)
- **Primary Color:** Vibrant Orange (`#f97316`)
- **Typography:** `Inter` (Google Fonts) with system fallbacks
- **Breakpoints:** Tailwind CSS defaults:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
