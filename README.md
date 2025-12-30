# Zen Scroll

A minimalist web application designed to provide a calming, distraction-free scrolling experience. Built with modern React technologies and featuring beautiful UI components with smooth animations.

## ✨ Features

- **Minimalist Design**: Clean, distraction-free interface focused on visual comfort
- **Smooth Animations**: Fluid transitions and micro-interactions using Framer Motion
- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- **Beautiful UI Components**: Powered by Radix UI and Tailwind CSS
- **Theme Support**: Light theme with carefully crafted color palette
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Progressive Web App**: PWA-ready with mobile app capabilities

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Framer Motion** - Smooth animations
- **Wouter** - Lightweight routing
- **React Hook Form** - Form handling with Zod validation

### Backend
- **Express** - Simple Node.js server
- **TypeScript** - End-to-end type safety

### Development Tools
- **PNPM** - Fast, disk space efficient package manager
- **Prettier** - Code formatting
- **ESLint** - Code linting
- **Vitest** - Unit testing framework

## 📁 Project Structure

```
web-manus-zen-scroll/
├── client/                 # React frontend application
│   ├── public/            # Static assets
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── contexts/      # React contexts
│       ├── pages/         # Page components
│       └── main.tsx       # Application entry point
├── server/                # Express backend
│   └── index.ts          # Server entry point
├── shared/               # Shared types and utilities
├── patches/              # Package patches
└── docs/                 # Documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PNPM package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RajanthaR/web-manus-zen-scroll.git
cd web-manus-zen-scroll
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### Build for Production

1. Build the application:
```bash
pnpm build
```

2. Start the production server:
```bash
pnpm start
```

## 📜 Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier

## 🎨 Design Philosophy

Zen Scroll follows a minimalist design philosophy focused on:

1. **Visual Calm** - Soft colors, gentle animations, and clean layouts
2. **Reduced Cognitive Load** - Removing unnecessary elements and distractions
3. **Fluid Interactions** - Smooth, natural-feeling animations and transitions
4. **Accessibility** - Ensuring the app is usable by everyone

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

Copyright © 2025 Rajantha R Ambegala. All rights reserved.

This project is privately owned and all rights are reserved by the author.

## 👤 Author

**Rajantha R Ambegala**
- GitHub: [@RajanthaR](https://github.com/RajanthaR/)
- Email: rajantha.rc@gmail.com

## 📝 Additional Notes

- The project uses patched dependencies for optimal performance
- Environment variables should be placed in the root directory
- The application supports PWA features for mobile installation
