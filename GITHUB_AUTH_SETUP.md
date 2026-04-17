# 🚀 GitHub & Vercel Setup Guide

## Authentication Issue with Git Push

If you're seeing authentication errors when running `git push`, you need to set up GitHub authentication. Here are the solutions:

---

## Solution 1: Use GitHub Personal Access Token (Recommended for HTTPS)

### Step 1: Create GitHub Personal Access Token
1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "The Eye Doctors Deployment"
4. Select scopes:
   - ✅ `repo` (full control of private repositories)
   - ✅ `workflow` (update GitHub Action workflows)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

### Step 2: Use Token for Git Authentication

**On Windows (PowerShell):**
```powershell
cd "c:\Users\DELL\Documents\Eye Doctors website"

# Set up Git credentials
git config --global credential.helper wincred

# Try pushing again
git push origin main
```

When prompted for password, use the Personal Access Token (not your GitHub password).

**Alternative: Use token directly in URL (one-time)**
```powershell
git push https://YOUR_USERNAME:YOUR_TOKEN@github.com/Jahswill002/The-Eye-Doctors.git main
```

---

## Solution 2: Use SSH Key (More Secure, Recommended Long-term)

### Step 1: Generate SSH Key
```powershell
# Generate new SSH key
ssh-keygen -t ed25519 -C "your_email@gmail.com"

# When prompted for file location, press Enter to use default
# When prompted for passphrase, you can press Enter (or create one for security)
```

### Step 2: Add SSH Key to GitHub
1. Go to https://github.com/settings/keys
2. Click "New SSH key"
3. Get your public key:
```powershell
# Copy SSH public key to clipboard
Get-Content "$env:USERPROFILE\.ssh\id_ed25519.pub" | Set-Clipboard
```
4. Paste it into GitHub
5. Click "Add SSH key"

### Step 3: Configure Git to Use SSH
```powershell
cd "c:\Users\DELL\Documents\Eye Doctors website"

# Change remote from HTTPS to SSH
git remote set-url origin git@github.com:Jahswill002/The-Eye-Doctors.git

# Verify it worked
git remote -v

# Now push
git push origin main
```

---

## Solution 3: GitHub CLI (Easiest)

### Step 1: Install GitHub CLI
```powershell
# Using Chocolatey (if installed)
choco install gh

# Or download from https://github.com/cli/cli/releases
```

### Step 2: Authenticate and Push
```powershell
cd "c:\Users\DELL\Documents\Eye Doctors website"

# Authenticate with GitHub
gh auth login
# Select: HTTPS
# When asked to authenticate, choose browser-based authentication

# Push changes
git push origin main
```

---

## Verify Push Was Successful

After pushing, verify on GitHub:
1. Go to https://github.com/Jahswill002/The-Eye-Doctors
2. Check the commits tab - you should see your latest commits
3. Check the `.github/workflows` folder - CI/CD file should be there

---

## Set Up Vercel Deployment Secrets

Once code is pushed to GitHub, set up Vercel secrets for automated deployment:

### In Vercel Dashboard:

**Frontend Project Settings:**
```
VITE_API_URL = https://the-eye-doctors-api.vercel.app/api
```

**Backend Project Settings:**
```
NODE_ENV = production
PORT = 3001
FRONTEND_URL = https://the-eye-doctors.vercel.app
DB_HOST = your_database_host
DB_PORT = 5432
DB_NAME = eye_doctors
DB_USER = your_db_user
DB_PASSWORD = your_secure_password
JWT_SECRET = generate_random_key_here
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = your_email@gmail.com
SMTP_PASSWORD = your_app_password
```

---

## GitHub Action Secrets (for CI/CD Pipeline)

For the `.github/workflows/ci-cd.yml` to work, add these secrets to your GitHub repository:

**Settings → Secrets and variables → Actions:**

1. `VERCEL_TOKEN` - Get from https://vercel.com/account/tokens
2. `VERCEL_ORG_ID` - Get from Vercel project settings
3. `VERCEL_PROJECT_ID_FRONTEND` - Frontend project ID
4. `VERCEL_PROJECT_ID_BACKEND` - Backend project ID

### How to Get These Values:

**Get Vercel Token:**
1. Go to https://vercel.com/account/tokens
2. Create token with "Full Access"
3. Copy and paste into GitHub Secrets as `VERCEL_TOKEN`

**Get Project IDs:**
1. In Vercel Dashboard, open your frontend project
2. Settings → General → copy "Project ID"
3. Paste into GitHub Secrets as `VERCEL_PROJECT_ID_FRONTEND`
4. Repeat for backend

**Get Org ID:**
1. In Vercel Dashboard, click on your profile icon
2. Settings → Team settings (or your team name)
3. Copy Team ID and paste as `VERCEL_ORG_ID`

---

## Quick Command Checklist

```powershell
# 1. Navigate to project
cd "c:\Users\DELL\Documents\Eye Doctors website"

# 2. Check current status
git status

# 3. Check commits
git log --oneline -5

# 4. Check remotes
git remote -v

# 5. If using personal token:
git config --global credential.helper wincred
git push origin main

# 6. If using SSH:
git remote set-url origin git@github.com:Jahswill002/The-Eye-Doctors.git
git push origin main

# 7. If using GitHub CLI:
gh auth login
git push origin main
```

---

## What's Ready on Vercel

✅ **Project Structure**: Monorepo setup with separate frontend & backend  
✅ **Frontend**: React app with Vite, builds to `dist/`  
✅ **Backend**: Express API with serverless handlers in `/api`  
✅ **Deployment**: Vercel configuration ready, just need environment variables  
✅ **CI/CD**: GitHub Actions workflow configured for automatic deployments  
✅ **API Integration**: Frontend forms connected to backend endpoints

---

## Deployment Flow

```
GitHub Push
    ↓
GitHub Actions (CI/CD Pipeline)
    ↓
   /                \
  /                  \
Vercel Frontend      Vercel Backend
   ↓                  ↓
Build & Deploy    Build & Deploy
   ↓                  ↓
Live at            Live at
theeyedoctors.     theeyedoctors-
vercel.app         api.vercel.app
```

---

## Troubleshooting

### "fatal: 'origin' does not appear to be a git repository"
```powershell
cd "c:\Users\DELL\Documents\Eye Doctors website"
git init
git remote add origin https://github.com/Jahswill002/The-Eye-Doctors.git
```

### "Permission denied (publickey)" (SSH)
- Verify SSH key is added to GitHub
- Check SSH connection: `ssh -T git@github.com`
- Ensure you're in correct directory with configured remote

### "Authentication failed" (HTTPS)
- Use Personal Access Token (not password)
- Token must have `repo` scope
- On Windows, clear cached credentials: `git config --system --unset credential.helper`

### Vercel Build Fails
- Check build logs in Vercel Dashboard
- Verify environment variables are set
- Ensure dependencies are installed locally first

---

## Next Steps After Push

1. ✅ Push code to GitHub
2. Create frontend project on Vercel
3. Create backend project on Vercel
4. Set environment variables on both projects
5. Add Vercel secrets to GitHub for CI/CD
6. Make test commit and verify automatic deployment

---

**Need help?** Check these resources:
- GitHub Docs: https://docs.github.com/en
- Vercel Docs: https://vercel.com/docs
- Git Basics: https://git-scm.com/docs
