# 🚀 Vercel Deployment Guide - The Eye Doctors

## Quick Start - Deploy in 5 Minutes

### Prerequisites
- GitHub repository (already set up)
- Vercel account (https://vercel.com)
- Node.js 18+ installed locally

---

## Step 1: Push to GitHub

Since you already have the repository linked, make sure all changes are committed:

```bash
cd "c:\Users\DELL\Documents\Eye Doctors website"
git add .
git commit -m "chore: add Vercel configuration and API handlers"
git push origin main
```

**Note**: If you get authentication errors, use a GitHub Personal Access Token:
- Go to https://github.com/settings/tokens
- Create token with `repo` scope
- Use token as password when prompted

---

## Step 2: Deploy Frontend to Vercel

### Option A: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project root
cd "c:\Users\DELL\Documents\Eye Doctors website"

# Deploy frontend
cd frontend
vercel --prod
```

### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click "Add New Project"
3. Import from Git → Select repository `Jahswill002/The-Eye-Doctors`
4. Framework preset: **Vite**
5. Root directory: **frontend**
6. Build command: `npm run build`
7. Output directory: `dist`
8. Environment variables:
   ```
   VITE_API_URL=https://the-eye-doctors-api.vercel.app/api
   ```
9. Click "Deploy"

---

## Step 3: Deploy Backend API to Vercel

### Option A: Using Vercel CLI

```bash
cd backend
vercel --prod
```

### Option B: Using Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click "Add New Project"
3. Import from Git → Select same repository
4. Framework preset: **Other**
5. Root directory: **backend**
6. Build command: `npm run build`
7. Output directory: `.`
8. Environment variables:
   ```
   NODE_ENV=production
   PORT=3001
   DB_HOST=your_database_host
   DB_PORT=5432
   DB_NAME=eye_doctors
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   JWT_SECRET=generate_a_random_secret_key
   FRONTEND_URL=https://the-eye-doctors.vercel.app
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASSWORD=your_app_password
   ```
9. Click "Deploy"

---

## Step 4: Configure Environment Variables

### Frontend (.env.production)

```
VITE_API_URL=https://the-eye-doctors-api.vercel.app/api
VITE_VERCEL_ENV=production
```

### Backend (Set in Vercel Dashboard)

```
NODE_ENV=production
DB_HOST=your_postgresql_host
DB_PORT=5432
DB_NAME=eye_doctors
DB_USER=postgres
DB_PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret_key_here
FRONTEND_URL=https://the-eye-doctors.vercel.app
```

---

## Step 5: Update API Endpoints

The frontend is already configured to use environment variables. API calls go to:

**Development**: `http://localhost:5000/api`  
**Production**: `https://the-eye-doctors-api.vercel.app/api`

### Available API Endpoints (Production)

- `GET /api/health` - Health check
- `POST /api/appointments` - Submit appointment request
- `GET /api/appointments` - Get appointments (admin only)
- `POST /api/contact` - Submit contact form

---

## Important Notes

### 1. **Database Setup**
- Create PostgreSQL database (use Railway, Supabase, or AWS RDS)
- Update environment variables with connection details
- Implement database migrations

### 2. **Email Configuration**
- Set up Gmail App Password or similar
- Configure Nodemailer in backend
- Create email templates

### 3. **Domain Setup**
Replace `the-eye-doctors.vercel.app` with your custom domain:
1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel: Settings → Domains
3. Add custom domain
4. Follow DNS configuration instructions

### 4. **Monitoring & Logs**
- Frontend: View in Vercel Dashboard
- Backend: Vercel → Project → Functions
- Use `vercel logs` command for detailed logs

### 5. **Cost Considerations**
- Frontend: **Free** (Vercel hobby)
- Backend: **Free** (within limits) on Vercel
- Database: **Varies** (Supabase free tier available)
- Domain: **~$12/year**

---

## Deployment Checklist

- [ ] GitHub repository linked
- [ ] All code committed and pushed
- [ ] Frontend deployed (URL: https://the-eye-doctors.vercel.app)
- [ ] Backend deployed (URL: https://the-eye-doctors-api.vercel.app)
- [ ] Environment variables configured on Vercel
- [ ] Database connected to backend
- [ ] Email notifications tested
- [ ] API endpoints tested
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Analytics configured
- [ ] Error monitoring setup (e.g., Sentry)

---

## Troubleshooting

### Frontend Build Fails
```bash
cd frontend
npm run build  # Test locally first
```

### Backend API Not Responding
```bash
vercel logs backend
# Check logs in Vercel dashboard
```

### Environment Variables Not Working
1. Verify variables in Vercel Dashboard
2. Redeploy after updating
3. Check `.env.example` for correct names

### CORS Errors
- Update `FRONTEND_URL` in backend `.env`
- Check CORS configuration in `server.js`

### Database Connection Issues
- Test connection locally first
- Verify firewall rules allow Vercel IPs
- Use IP whitelist if available

---

## Local Testing Before Deployment

```bash
# Terminal 1: Frontend
cd frontend
npm install
npm run dev

# Terminal 2: Backend
cd ../backend
npm install
npm run dev

# Frontend runs on: http://localhost:3000
# Backend runs on: http://localhost:5000
```

---

## Useful Vercel Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# View logs
vercel logs [project-name]

# List deployments
vercel list

# Rollback to previous deployment
vercel rollback
```

---

## Post-Deployment

1. **Monitor Performance**
   - Check Lighthouse scores
   - Monitor Core Web Vitals

2. **Set Up Redirects (if needed)**
   - HTTP to HTTPS
   - www to non-www

3. **Enable Security Headers**
   - Already configured in Vercel

4. **Set Up Analytics**
   - Add Google Analytics
   - Monitor user behavior

5. **Create CI/CD Pipeline**
   - Automatic deployments on git push
   - Already enabled by default

---

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Vite Deployment: https://vitejs.dev/guide/static-deploy.html
- Express on Vercel: https://vercel.com/docs/concepts/functions/serverless-functions

---

**Need help?** Visit: https://vercel.com/support
