# The Eye Doctors Website

A modern, responsive website for The Eye Doctors ophthalmology clinic in Lagos, Nigeria. Built with React, Tailwind CSS, Node.js, and PostgreSQL.

## 📋 Project Overview

This is a complete rebuild of The Eye Doctors website using modern web technologies. The site features:

- **5 Main Pages**: Home, About Us, Services, Book an Appointment, Contact
- **Responsive Design**: Mobile-first approach with full mobile, tablet, and desktop support
- **Interactive Components**: Animated counters, scroll reveal animations, smooth transitions
- **Trust-Focused Design**: Visual language emphasizing expertise and warmth
- **Accessibility**: WCAG 2.1 compliant with proper semantic HTML and keyboard navigation

## 🎨 Design System

### Brand Colors
- **Navy** (#0B2545): Primary color for headings and authority
- **Teal** (#1D6A72): Secondary color for accents and CTAs
- **Amber** (#D4870B): Accent color for primary CTAs and highlights

### Typography
- **Headings**: DM Serif Display - Editorial authority and credibility
- **Body**: DM Sans - Highly legible, optimized for mobile and low-res screens

### Spacing & Grid
- Base unit: 8px (all spacing is multiples of 8)
- Max content width: 1200px with 24px gutter on mobile
- Section vertical padding: 96px (desktop) / 64px (mobile)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- PostgreSQL 12+ (for backend)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:3000` with Vite HMR enabled.

### Backend Setup

```bash
cd backend
npm install

# Create .env file
cp .env.example .env

# Update .env with your database credentials
npm run dev
```

The backend will run on `http://localhost:5000`.

## 📁 Project Structure

```
Eye Doctors website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx           # Sticky navigation header
│   │   │   └── Footer.jsx           # Global footer
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Homepage with 7 sections
│   │   │   ├── About.jsx            # About Us page
│   │   │   ├── Services.jsx         # Services listing
│   │   │   ├── Booking.jsx          # Appointment booking form
│   │   │   └── Contact.jsx          # Contact & locations
│   │   ├── hooks/
│   │   │   ├── useCountUp.js        # Animated counter hook
│   │   │   └── useScrollReveal.js   # Scroll reveal hook
│   │   ├── App.jsx                  # Main app component with routing
│   │   ├── index.css                # Global styles
│   │   └── main.jsx                 # Vite entry point
│   ├── tailwind.config.js           # Custom Tailwind theme
│   ├── vite.config.js               # Vite configuration
│   ├── postcss.config.js            # PostCSS configuration
│   ├── index.html                   # HTML template with Google Fonts
│   └── package.json                 # Frontend dependencies
│
├── backend/
│   ├── server.js                    # Express server entry point
│   ├── package.json                 # Backend dependencies
│   ├── .env.example                 # Environment variables template
│   └── .gitignore
│
└── TED_WebsiteDesignSpec.docx       # Design specification document
```

## 🏗️ Architecture

### Frontend (React + Tailwind)
- **Framework**: React 18 with React Router for SPA routing
- **Styling**: Tailwind CSS with custom color theme
- **UI Components**: Lucide React for consistent iconography
- **Animations**: CSS animations via Tailwind classes
- **State Management**: React hooks (useState, useEffect)

### Backend (Node.js + PostgreSQL)
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL for data persistence
- **Authentication**: JWT (to be implemented)
- **Email**: Nodemailer for notifications (to be implemented)

## 📄 Pages Overview

### 1. Home Page
**Purpose**: Convert skeptical patients to bookings

**Sections**:
1. Hero - Full viewport hero with CTA
2. Trust Bar - Animated statistics counters
3. Services Overview - 4-card service grid
4. Why Choose Us - 2-column layout with image
5. Patient Testimonials - 3-card testimonials
6. Branch Locator - 5-branch preview
7. WhatsApp CTA - Full-width CTA banner

### 2. About Us Page
**Purpose**: Build deep trust through storytelling

**Sections**:
1. Page Hero
2. Our Story - 2-column narrative
3. Our Values - 3+ column card grid (6 values)
4. Our Team - Doctor cards with photos and bios

### 3. Services Page
**Purpose**: Help patients self-identify their needs

**Content**:
- Main services (comprehensive, detailed descriptions)
- Additional services (grid of secondary services)
- CTA to book appointment

### 4. Book an Appointment Page
**Purpose**: Convert with minimal friction

**Features**:
- Multi-field form with validation
- Service selection dropdown
- Location and time preferences
- Success/error states
- Right sidebar with trust indicators
- Direct contact information

### 5. Contact Page
**Purpose**: Make it easy to reach the clinic

**Content**:
- All 5 branch locations with details
- Maps integration (to be implemented)
- Alternative contact methods (phone, email, WhatsApp)
- Social media links

## ✨ Key Features

### Animations
- **Page Load**: Fade-up animation on hero text (600ms ease-out)
- **Scroll Reveal**: Sections fade up as they enter viewport (threshold: 0.15)
- **Counter Animation**: Stats count from 0 when scrolled into view (1800ms easeOut)
- **Button Hover**: Background lightens, shadow elevates, slight scale
- **Motion**: Respects `prefers-reduced-motion` for accessibility

### Interactive Elements
- **Sticky Header**: Becomes solid navy when scrolled past hero
- **Mobile Menu**: Hamburger drawer menu on smaller screens
- **Form Validation**: Real-time validation feedback
- **WhatsApp Float**: Pulsing indicator animation

### Responsive Design
- **Mobile**: Optimized for 375px+ screens
- **Tablet**: Smooth experience on 768px+ screens
- **Desktop**: Full features on 1024px+ screens
- **Large Screens**: Content capped at 1200px max-width

## 🔧 Tailwind Custom Config

```javascript
// Custom colors
colors: {
  navy: '#0B2545',
  teal: '#1D6A72',
  amber: '#D4870B',
  'surface-off-white': '#F8F9FA',
  // ... more colors
}

// Custom fonts
fontFamily: {
  serif: ['DM Serif Display', 'serif'],
  sans: ['DM Sans', 'sans-serif'],
}

// Custom animations
animation: {
  'fade-up': 'fadeUp 0.6s ease-out',
  'scroll-reveal': 'scrollReveal 0.8s ease-out',
}
```

## ♿ Accessibility

All pages follow WCAG 2.1 guidelines:
- ✓ Semantic HTML structure
- ✓ Meaningful image alt text
- ✓ Form labels properly associated
- ✓ Color contrast ≥ 4.5:1 for body text
- ✓ Visible focus states on interactive elements
- ✓ Keyboard navigable dropdowns and menus
- ✓ Reduced motion support

## 🔐 Environment Variables

### Frontend
Create `.frontend/.env.local`:
```
VITE_API_URL=http://localhost:5000/api
```

### Backend
Create `backend/.env`:
```
PORT=5000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=5432
DB_NAME=eye_doctors
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
```

## 📦 Dependencies

### Frontend
- react@18.2.0
- react-dom@18.2.0
- react-router-dom@6.20.0
- lucide-react@0.292.0
- tailwindcss@3.3.0

### Backend
- express@4.18.2
- cors@2.8.5
- pg@8.11.3
- bcrypt@5.1.1
- jsonwebtoken@9.1.1
- nodemailer@6.9.7

## 🚢 Deployment

### Frontend
1. Build: `npm run build`
2. Output: `dist/` folder
3. Deploy to Vercel, Netlify, or any static host

### Backend
1. Set production environment variables
2. Run: `npm start`
3. Deploy to Heroku, Railway, or cloud platform

## 📝 Development Notes

### Component Naming
- Page components: Pascal case in `pages/` folder
- Reusable components: Pascal case in `components/` folder
- Hooks: camelCase starting with `use` in `hooks/` folder

### Styling Approach
- Utility-first with Tailwind CSS
- Custom colors defined in tailwind.config.js
- Animations via keyframes in config
- No custom CSS files except index.css (global resets)

### Image Placeholders
All images use Unsplash stock photos with specific search terms documented in design spec.
Replace with actual clinic images for production.

## 🤝 Contributing

1. Follow the established file structure
2. Use Tailwind classes for styling
3. Ensure components are responsive
4. Add proper alt text to images
5. Test on mobile, tablet, and desktop

## 📞 Support

For questions about the design or implementation, refer to:
- `TED_WebsiteDesignSpec.docx` - Complete design specification
- Component documentation in JSDoc comments
- Design system tokens in `tailwind.config.js`

## 📄 License

All rights reserved © The Eye Doctors 2025

---

**Built with React + Tailwind | Designed for Trust and Clarity**
