# 🚀 Quick Reference - Vercel Deployment

## GitHub Push (Choose ONE method)

### Method 1: Personal Access Token (Recommended)
```powershell
cd "c:\Users\DELL\Documents\Eye Doctors website"
git config --global credential.helper wincred
git push origin main
# Enter username: YOUR_GITHUB_USERNAME
# Enter password: YOUR_GITHUB_TOKEN (not password!)
```

### Method 2: SSH Key
```powershell
git remote set-url origin git@github.com:Jahswill002/The-Eye-Doctors.git
git push origin main
```

### Method 3: GitHub CLI
```powershell
gh auth login
git push origin main
```

---

## Vercel Deployment Links

| Environment | URL |
|-------------|-----|
| GitHub Repo | https://github.com/Jahswill002/The-Eye-Doctors |
| Vercel Dashboard | https://vercel.com/dashboard |
| Frontend App | https://the-eye-doctors.vercel.app |
| Backend API | https://the-eye-doctors-api.vercel.app |

---

## Key Files for Deployment

| File | Purpose |
|------|---------|
| `DEPLOYMENT_READY.md` | Full deployment status & checklist |
| `VERCEL_DEPLOYMENT.md` | Step-by-step deployment guide |
| `GITHUB_AUTH_SETUP.md` | GitHub authentication methods |
| `GITHUB_AUTH_SETUP.md` | Git setup troubleshooting |
| `backend/api/*.js` | Vercel serverless functions |
| `.github/workflows/ci-cd.yml` | Automated deployment pipeline |
| `frontend/.env.example` | Frontend environment variables |
| `backend/.env.example` | Backend environment variables |

---

## Environment Variables

### Frontend
```
VITE_API_URL=https://the-eye-doctors-api.vercel.app/api
```

### Backend (All Required)
```
NODE_ENV=production
DB_HOST=
DB_PORT=5432
DB_NAME=eye_doctors
DB_USER=postgres
DB_PASSWORD=
JWT_SECRET=
FRONTEND_URL=https://the-eye-doctors.vercel.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
```

---

## GitHub Actions Secrets

| Secret | Source |
|--------|--------|
| `VERCEL_TOKEN` | https://vercel.com/account/tokens |
| `VERCEL_ORG_ID` | Vercel team settings |
| `VERCEL_PROJECT_ID_FRONTEND` | Frontend project settings |
| `VERCEL_PROJECT_ID_BACKEND` | Backend project settings |

---

## API Endpoints (Production)

```
GET  /api/health          - Server status
POST /api/appointments    - Submit appointment
GET  /api/appointments    - Get appointments (auth required)
POST /api/contact         - Submit contact message
```

---

## Deployment Steps Overview

```
1. Push to GitHub (5 min)
   ↓
2. Create Vercel Projects (5 min)
   ↓
3. Set Environment Variables (5 min)
   ↓
4. Add CI/CD Secrets (5 min)
   ↓
5. First Deployment (Auto) (2 min)
   ↓
6. Setup Database (10 min)
   ↓
7. Test APIs (5 min)
   ↓
✅ LIVE!
```

---

## Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Git push fails | Use personal access token or SSH key |
| Vercel build fails | Check environment variables are set |
| API returns 404 | Verify backend API URL in frontend .env |
| CORS errors | Check FRONTEND_URL in backend .env |
| Forms don't submit | Check API endpoints in browser console |

---

## Project Links

- **Repository**: https://github.com/Jahswill002/The-Eye-Doctors
- **Vercel Team**: https://vercel.com/dashboard
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Express Docs**: https://expressjs.com
- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev

---

## Important Reminders

✅ Code is committed locally  
✅ Vercel configuration is complete  
✅ API integration is ready  
✅ CI/CD pipeline is configured  
✅ Environment examples are provided  

⏳ Next: Push to GitHub  
⏳ Then: Create Vercel projects  
⏳ Then: Configure & Deploy  

---

**Current Status**: Ready for `git push` 🚀

*Need help? See the full guides in the documentation files!*
