# Vercel Deployment Guide

## Quick Setup

This frontend is ready to deploy on Vercel from GitHub. Follow these steps:

### 1. Connect Repository to Vercel
- Go to [vercel.com/dashboard](https://vercel.com/dashboard)
- Click "New Project"
- Select your GitHub repository
- Click "Import"

### 2. Configure Build Settings
In the "Configure Project" screen:

**Project Name:** (auto-filled or customize)

**Framework Preset:** Vite

**Root Directory:** `./client`

**Build Command:** `npm run build`

**Output Directory:** `dist`

**Install Command:** `npm install`

### 3. Set Environment Variables
In the "Environment Variables" section, add:

```
VITE_API_URL = https://your-backend-api.com
```

Replace `https://your-backend-api.com` with your actual backend URL (e.g., Render or Railway).

### 4. Deploy
Click "Deploy" and wait for the build to complete.

Your site will be live at: `https://your-project.vercel.app`

---

## Environment Variables

### Development (`client/.env.local`)
```
VITE_API_URL=http://localhost:5000
```

### Production (Vercel)
```
VITE_API_URL=https://your-backend-url.com
```

---

## File Structure

✅ **Frontend-only package.json**: `client/package.json`
- Only includes frontend dependencies
- No backend tools (tsx, express, etc.)
- Scripts: dev, build, preview

✅ **Frontend-only Vite config**: `client/vite.config.ts`
- Outputs to `dist/` directory
- Configured for standalone deployment

✅ **Tailwind config**: `client/tailwind.config.ts`
- Scoped to client source files

✅ **PostCSS config**: `client/postcss.config.js`
- Processes styles correctly

---

## Build Information

**Frontend Build Output:**
- Location: `client/dist/`
- Size: ~2.5 MB (uncompressed with images)
- Gzipped: ~200 KB (without images)

**Build Time:** ~12 seconds

---

## Verifying Build Locally

Before deploying, test the build locally:

```bash
cd client
npm install
npm run build
npm run preview
```

The preview will show you the production build exactly as it will appear on Vercel.

---

## Important Notes

✅ **No root package.json required** for frontend build
- Vercel uses `client/package.json` only

✅ **API URLs are environment variables**
- Frontend automatically reads `VITE_API_URL` from environment
- Falls back to relative URLs if not set

✅ **All features working**
- Portfolio grid with modals
- Real-time reviews from backend
- Contact form (uses backend API)
- Dark/light theme
- Responsive design

---

## Troubleshooting

### Build fails with "content option missing"
✓ Fixed: `client/tailwind.config.ts` now properly configured

### Build outputs to wrong directory
✓ Fixed: `client/vite.config.ts` outputs to `dist/`

### Frontend can't reach backend API
- Check `VITE_API_URL` environment variable in Vercel
- Ensure backend domain is correct (e.g., `https://api.render.com`)
- Check backend CORS settings

### TypeScript errors
✓ Fixed: `client/tsconfig.json` configured with proper paths
