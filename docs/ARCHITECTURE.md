# Architecture Documentation

## Overview

Zen Scroll is a modern web application built with a focus on performance, accessibility, and user experience. The architecture follows a client-server pattern with a shared type system.

## Technology Stack

### Frontend Architecture

- **React 19**: Utilizing the latest React features including concurrent rendering
- **TypeScript**: Provides end-to-end type safety
- **Vite**: Fast build tool with HMR (Hot Module Replacement)
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Low-level UI primitives for accessible components
- **Framer Motion**: Declarative animations
- **Wouter**: Lightweight routing solution

### Backend Architecture

- **Express.js**: Minimalist Node.js web framework
- **TypeScript**: Shared types with frontend for consistency

## Project Structure

```
web-manus-zen-scroll/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── ui/       # Base UI components (Radix based)
│   │   │   └── ...       # Feature components
│   │   ├── contexts/     # React contexts
│   │   ├── pages/        # Route components
│   │   ├── hooks/        # Custom hooks
│   │   ├── utils/        # Utility functions
│   │   └── main.tsx      # Entry point
│   └── index.html        # HTML template
├── server/                # Express backend
│   └── index.ts          # Server entry point
├── shared/               # Shared types and utilities
├── docs/                 # Documentation
└── patches/              # Package patches
```

## Key Architectural Decisions

### 1. Component Architecture

- **Composition over Inheritance**: Components are composed using smaller, reusable pieces
- **Props Interface**: All components have strongly typed props using TypeScript interfaces
- **State Management**: Local state with React hooks, context for global state

### 2. Styling Strategy

- **Utility-First**: Tailwind CSS for rapid development and consistency
- **Component Variants**: Using class-variance-authority for component variations
- **Theme System**: CSS custom properties for theming support

### 3. Routing

- **File-based Routing**: Using Wouter for simple, declarative routing
- **Code Splitting**: Routes are automatically code-split by Vite

### 4. Performance Optimizations

- **Lazy Loading**: Components and routes are loaded on demand
- **Tree Shaking**: Unused code is eliminated in production builds
- **Asset Optimization**: Images and assets are optimized during build

## Data Flow

1. **Client Initialization**: The React app initializes in `main.tsx`
2. **Routing**: Wouter handles URL-based routing
3. **Component Rendering**: Components render with their required data
4. **State Updates**: Local state updates trigger re-renders
5. **Server Communication**: Axios handles API requests to the Express server

## Development Workflow

1. **Development Server**: `pnpm dev` starts both Vite dev server and Express backend
2. **Type Checking**: `pnpm check` runs TypeScript compiler in check mode
3. **Building**: `pnpm build` creates optimized production build
4. **Preview**: `pnpm preview` serves production build locally

## Deployment Architecture

The application is designed to be deployed as a single unit with:
- Static frontend assets served from `dist/public`
- Node.js server running the Express backend
- Support for various hosting platforms through build configuration

## Security Considerations

- **Environment Variables**: Sensitive data stored in environment variables
- **Content Security Policy**: Configured through meta tags
- **Dependency Management**: Regular security updates through PNPM

## Accessibility Features

- **Semantic HTML**: Proper use of HTML5 semantic elements
- **ARIA Labels**: Screen reader support through Radix UI
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Proper focus handling in modals and forms

## Future Considerations

- **Service Worker**: PWA capabilities for offline usage
- **Caching Strategy**: Implement intelligent caching for performance
- **Micro-frontends**: Potential to split into smaller, independent apps
