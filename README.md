# Erdfoo Vue.js Project

This is a Vue.js conversion of the erdfoo project. Each section has been converted into a separate Vue component.

## Project Structure

```
erdfoo/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── images/ (from assets/images/)
│   ├── components/
│   │   ├── TopHeader.vue
│   │   ├── MainHeader.vue
│   │   ├── HeroSection.vue
│   │   ├── FeaturesSection.vue
│   │   ├── ServicesSection.vue
│   │   ├── BlogSection.vue
│   │   ├── SponsorsSection.vue
│   │   └── Footer.vue
│   ├── App.vue
│   └── main.js
├── assets/ (original assets - keep for reference)
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Components

1. **TopHeader.vue** - Top header bar with country flag and verification dropdown
2. **MainHeader.vue** - Main navigation header with logo, menu, search, language selector, and login
3. **HeroSection.vue** - Hero section with Swiper carousel
4. **FeaturesSection.vue** - Features/About section with statistics
5. **ServicesSection.vue** - Services section with Swiper carousel
6. **BlogSection.vue** - News and articles section
7. **SponsorsSection.vue** - Partners/sponsors section with Swiper carousel
8. **Footer.vue** - Footer with links, social media, and tools

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technologies Used

- Vue 3 (Composition API)
- Vite
- Swiper.js for carousels
- Font Awesome for icons

## Setup Instructions



2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

## Notes

- All components use Vue 3 Composition API with `<script setup>`
- Swiper instances are properly initialized and cleaned up in lifecycle hooks
- The project uses Vite as the build tool for fast development and optimized production builds

