# Quick Start - 5 Minute Deployment

Get your Cabinet Calculator online in 5 minutes or less. Choose your platform and follow the steps.

## ⚡ Fastest Option: GitHub Pages

**Time: 3 minutes** | **Cost: Free** | **Difficulty: Easy**

### Step 1: Push to GitHub (1 minute)

```bash
# If you haven't already, initialize git and push
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Cabinet-Calc.git
git push -u origin main
```

### Step 2: Enable GitHub Pages (1 minute)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

### Step 3: You're Live! (1 minute)

✅ Your site is now at: `https://YOUR_USERNAME.github.io/Cabinet-Calc/`

Wait 1-2 minutes for the initial build, then visit your URL!

---

## 🎯 Alternative: Netlify Drag & Drop

**Time: 2 minutes** | **Cost: Free** | **Difficulty: Easiest**

### Step 1: Prepare Folder (30 seconds)

Make sure your project folder contains:
- `index.html`
- Any other files

### Step 2: Deploy (1 minute)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (use GitHub for fastest signup)
3. Drag your `Cabinet-Calc` folder onto the Netlify dashboard
4. Wait 30 seconds

### Step 3: You're Live! (30 seconds)

✅ Netlify gives you a URL like: `random-name-123456.netlify.app`

**Customize URL:**
1. Click **Site settings**
2. **Change site name** → enter `cabinet-calculator`
3. New URL: `cabinet-calculator.netlify.app`

---

## 🚀 Alternative: Vercel

**Time: 3 minutes** | **Cost: Free** | **Difficulty: Easy**

### Step 1: Push to GitHub

(If not already done - see GitHub Pages Step 1)

### Step 2: Import to Vercel (2 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **Add New...** → **Project**
4. Select your `Cabinet-Calc` repository
5. Framework: **Other**
6. Click **Deploy**

### Step 3: You're Live! (1 minute)

✅ Your site is at: `cabinet-calc.vercel.app`

---

## 📱 Test Your Deployment

Once deployed, test these features:

- [ ] Calculator loads properly
- [ ] All inputs work and update results
- [ ] Preset configurations load correctly
- [ ] Warnings display when appropriate
- [ ] Responsive design on mobile (resize browser)
- [ ] Donation link points to correct URL (update if needed)

---

## ✏️ Customize Your Site

### Update Donation Links (2 minutes)

1. Create account at [buymeacoffee.com](https://buymeacoffee.com)
2. Get your username
3. Open `index.html`
4. Find and replace:
   ```html
   <!-- Line ~531 -->
   <a href="https://buymeacoffee.com/YOUR_USERNAME"

   <!-- Replace with -->
   <a href="https://buymeacoffee.com/your-actual-username"
   ```

5. Find and replace:
   ```html
   <!-- Line ~536 -->
   <a href="https://github.com/YOUR_GITHUB">@your_name</a>

   <!-- Replace with -->
   <a href="https://github.com/yourusername">@yourusername</a>
   ```

6. Save and push:
   ```bash
   git add index.html
   git commit -m "Update donation links"
   git push
   ```

Your site will auto-redeploy in 1-2 minutes!

---

## 🎨 Optional Enhancements

### Add Custom Domain (15 minutes)

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md#custom-domain-setup) for detailed instructions.

**Quick version:**
1. Buy domain ($8-12/year)
2. Add domain in hosting platform settings
3. Update DNS records at registrar
4. Wait for DNS propagation (1-24 hours)

### Add Analytics (5 minutes)

**Google Analytics:**
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID: `G-XXXXXXXXXX`
3. Add to `<head>` section in `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```
4. Commit and push

### Improve SEO (10 minutes)

See [SEO_GUIDE.md](SEO_GUIDE.md) for complete optimization guide.

**Quick wins:**
1. Add social media preview image
2. Submit to Google Search Console
3. Create `sitemap.xml` and `robots.txt`

---

## 🔄 Updating Your Site

### After Deployment, Making Changes is Easy:

```bash
# Make your changes to index.html or other files
# Test locally by opening index.html in browser

# Commit and push
git add .
git commit -m "Description of changes"
git push

# Your site auto-updates in 1-2 minutes!
```

---

## 📊 Automation Scripts

For even faster deployment, use the provided scripts:

### Mac/Linux:
```bash
chmod +x setup.sh
./setup.sh
```

### Windows:
```bash
setup.bat
```

These scripts will:
1. Check for required files
2. Initialize git (if needed)
3. Commit all files
4. Prompt for GitHub repository URL
5. Push to GitHub
6. Display next steps

---

## ❓ Troubleshooting

### Site Not Loading?

**GitHub Pages:**
- Wait 5 minutes after first deployment
- Check Settings → Pages for build status
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Netlify:**
- Check Deploys tab for status
- Look for error messages
- Try drag & drop again

**Vercel:**
- Check Deployments for build logs
- Verify Framework is set to "Other"
- No build command needed

### Changes Not Appearing?

1. Clear browser cache
2. Hard refresh (Ctrl+Shift+R)
3. Wait 2-3 minutes for rebuild
4. Check git push was successful: `git log`

### Donation Button Not Working?

1. Verify Buy Me a Coffee account is created
2. Check username in URL matches your account
3. Test link directly in new tab
4. Ensure you saved and pushed changes

---

## 📞 Need Help?

- **Full guide**: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- **GitHub Issues**: Open an issue for help
- **Platform docs**:
  - [GitHub Pages Docs](https://docs.github.com/pages)
  - [Netlify Docs](https://docs.netlify.com)
  - [Vercel Docs](https://vercel.com/docs)

---

## ✅ Success Checklist

- [ ] Site is live and accessible
- [ ] Calculator functions work correctly
- [ ] Mobile responsive design works
- [ ] Donation links updated to your accounts
- [ ] GitHub profile link updated
- [ ] Tested all presets
- [ ] Shared link with friends/community!

---

## 🎉 You're Done!

Your Cabinet Calculator is now live and helping woodworkers around the world!

**Next steps:**
- Share on woodworking forums
- Post on social media
- Add to your portfolio
- Consider adding analytics
- Submit to search engines

**Promotion ideas:**
- r/woodworking on Reddit
- Woodworking Facebook groups
- Instagram woodworking community
- Hacker News Show HN
- Product Hunt
- Your woodworking blog

---

**From idea to production in 5 minutes!** 🚀

Need more features? See the main [README.md](README.md) for contribution guidelines.
