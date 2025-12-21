# Production Deployment Guide

## Project Structure
This is a monorepo with separate frontend and backend:
- **Frontend**: `/client` - Vite + React (Deploy to Vercel)
- **Backend**: `/server` - Node.js + Express (Deploy to Render/Railway)

---

## Frontend Deployment (Vercel)

### Setup on Vercel:
1. Connect your GitHub repository
2. In Project Settings:
   - **Root Directory**: `./client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. Set environment variable:
   - Key: `VITE_API_URL`
   - Value: `https://your-backend-url.com` (your Render/Railway backend URL)

4. Deploy and get your frontend URL (e.g., `https://your-app.vercel.app`)

---

## Backend Deployment (Render or Railway)

### Setup on Render:
1. Create new Web Service
2. Connect GitHub repository
3. Configuration:
   - **Root Directory**: (leave empty, deploy from repo root)
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
4. Set environment variables:
   - `NODE_ENV`: `production`
   - `PORT`: (auto-assigned by Render)
   - `FRONTEND_URL`: `https://your-app.vercel.app`
   - `GMAIL_APP_PASSWORD`: (if using contact form)

### Setup on Railway:
1. New Project → Deploy from GitHub
2. Configure:
   - **Start Command**: `npm start`
   - Environment variables same as Render

---

## Environment Variables

### Frontend (.env.local in Vercel):
```
VITE_API_URL=https://your-backend-url.com
```

### Backend (Production):
```
NODE_ENV=production
PORT=5000 (auto-assigned)
FRONTEND_URL=https://your-app.vercel.app
GMAIL_APP_PASSWORD=your-gmail-password
DATABASE_URL=your-database-url (if using PostgreSQL)
```

---

## Local Development

Frontend only:
```bash
cd client
npm install
npm run dev
```

Full stack (if running backend locally):
```bash
npm install
npm run dev
```

Backend will serve on `http://localhost:5000`
Frontend will point to backend via `VITE_API_URL` in `.env.local`

---

## Important Notes

✅ **DO NOT deploy frontend to Vercel with `/api` folder**
- The `/api` folder was removed for cleaner deployment separation

✅ **API URL Resolution**
- Frontend automatically uses `VITE_API_URL` env var
- Falls back to relative URLs if not set (useful for same-domain deployments)
- Falls back to `http://localhost:5000` in development

✅ **CORS Enabled**
- Backend automatically allows requests from:
  - `VERCEL_URL` (Vercel deployment)
  - `FRONTEND_URL` (custom domain)
  - Localhost addresses (development)

✅ **Build Output**
- Frontend builds to: `dist/public/`
- Backend builds to: `dist/index.cjs`
