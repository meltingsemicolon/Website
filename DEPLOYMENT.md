# Portfolio Deployment Guide - Vercel

## ✅ Your Project is Ready for Vercel!

### Pre-Deployment Checklist
- ✅ Vite + React configuration
- ✅ EmailJS integration with environment variables
- ✅ Build script configured
- ✅ All dependencies listed
- ✅ No compilation errors

---

## 🚀 Deployment Steps

### Step 1: Push to GitHub (if not already done)
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)
1. Go to [https://vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings:
   - **Framework Preset**: Vite
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### Option B: Using Vercel CLI
```bash
npm install -g vercel
vercel login
vercel
```

### Step 3: Add Environment Variables in Vercel
⚠️ **IMPORTANT**: After deployment, you must add your EmailJS credentials!

1. In Vercel Dashboard, go to your project
2. Click **Settings** → **Environment Variables**
3. Add these variables:

```
VITE_EMAILJS_SERVICE_ID = service_3bpj89n
VITE_EMAILJS_TEMPLATE_ID = template_oodmc38
VITE_EMAILJS_PUBLIC_KEY = fG3nhL81-tWvykmUL
```

4. Click **Save**
5. **Redeploy** your project for changes to take effect

---

## 🔧 Potential Issues & Solutions

### Issue 1: Environment Variables Not Working
**Solution**: Make sure all env variables start with `VITE_` prefix in Vite projects

### Issue 2: Build Fails
**Solution**: Run `npm run build` locally first to check for errors

### Issue 3: Images Not Loading
**Solution**: Make sure all image imports are correct and images are in the `src/assets` folder

### Issue 4: Contact Form Not Sending Emails
**Solution**: 
- Verify environment variables are set in Vercel
- Check EmailJS dashboard for any restrictions
- Redeploy after adding env variables

### Issue 5: 404 on Refresh
**Solution**: Vercel handles this automatically for Vite/React apps, but if needed, create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 🧪 Test Before Deploying

Run these commands locally:

```bash
# Test build
npm run build

# Preview production build
npm run preview
```

If both work without errors, you're ready to deploy! ✅

---

## 📝 Post-Deployment

1. Test the contact form on the live site
2. Check all navigation links work
3. Test on mobile devices
4. Verify images load correctly
5. Test social media links

---

## 🎉 Your Portfolio Will Be Live At:
`https://your-project-name.vercel.app`

You can also add a custom domain in Vercel settings!

---

## Need Help?
- Vercel Docs: https://vercel.com/docs
- EmailJS Docs: https://www.emailjs.com/docs/
