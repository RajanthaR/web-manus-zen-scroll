# Deployment Guide

This guide covers how to deploy Zen Scroll to various hosting platforms.

## Build Process

### Prerequisites

- Node.js 18+ installed
- PNPM package manager installed
- All environment variables configured

### Building for Production

1. Install dependencies:
```bash
pnpm install
```

2. Set environment variables:
```bash
# Copy example environment file
cp .env.example .env
# Edit .env with your values
```

3. Build the application:
```bash
pnpm build
```

This creates:
- `dist/public/` - Frontend static files
- `dist/index.js` - Backend server bundle

## Deployment Options

### Option 1: Node.js Server

Run the built application on any Node.js hosting:

```bash
# Start production server
pnpm start
```

Default port is 3000, can be changed with PORT environment variable.

### Option 2: Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN pnpm build

# Expose port
EXPOSE 3000

# Start application
CMD ["pnpm", "start"]
```

Build and run:
```bash
docker build -t zen-scroll .
docker run -p 3000:3000 zen-scroll
```

### Option 3: Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Create `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/public"
      }
    },
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server/index.ts"
    }
  ]
}
```

3. Deploy:
```bash
vercel --prod
```

### Option 4: Netlify Deployment

For static-only deployment (no backend):

1. Build the frontend only:
```bash
vite build --outDir dist
```

2. Deploy `dist` folder to Netlify

### Option 5: Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Deploy:
```bash
railway login
railway init
railway up
```

## Environment Variables

Configure these for production:

```bash
# Analytics (optional)
VITE_ANALYTICS_ENDPOINT=https://your-analytics-domain.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id

# Server
NODE_ENV=production
PORT=3000
```

## Performance Optimization

### Before Deployment

1. Run type checking:
```bash
pnpm check
```

2. Test production build locally:
```bash
pnpm build
pnpm preview
```

3. Check bundle size:
```bash
npx vite-bundle-analyzer dist/public
```

### Caching Strategy

- Static assets have cache headers set by Vite
- Use CDN for static files in production
- Implement service worker for PWA capabilities

## Monitoring

### Health Check

Add health check endpoint:
```typescript
// server/index.ts
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});
```

### Error Tracking

Consider adding:
- Sentry for error tracking
- Umami or Plausible for analytics
- Log management service

## SSL/HTTPS

Always use HTTPS in production:
- Most hosting providers provide free SSL certificates
- Configure HSTS headers for security
- Redirect HTTP to HTTPS

## Scaling

### Horizontal Scaling

- Use load balancer for multiple instances
- Implement session store if using sessions
- Consider stateless architecture

### Database Scaling

If adding database:
- Use connection pooling
- Implement read replicas
- Consider caching layer (Redis)

## Troubleshooting

### Common Issues

1. **Build fails**: Check Node.js version and clear cache
```bash
rm -rf node_modules .pnpm-store
pnpm install
```

2. **Runtime errors**: Check environment variables
```bash
printenv | grep VITE_
```

3. **Performance issues**: Check bundle size and enable compression

### Debugging

Enable debug logs:
```bash
DEBUG=* pnpm start
```

## Rollback Strategy

Always have a rollback plan:
- Tag releases in git
- Keep previous build artifacts
- Use feature flags for new features
- Monitor deployment health

## Security Checklist

- [ ] Environment variables are set
- [ ] No sensitive data in client bundle
- [ ] HTTPS is enforced
- [ ] Security headers are configured
- [ ] Dependencies are updated
- [ ] Error messages don't leak information
