# Deployment Guide

Complete guide for deploying the Cabinet & Drawer Calculator to various hosting platforms. Choose the option that best fits your needs.

## Table of Contents

- [GitHub Pages (Recommended)](#github-pages-recommended)
- [Netlify](#netlify)
- [Vercel](#vercel)
- [Custom Domain Setup](#custom-domain-setup)
- [Donation Setup](#donation-setup)
- [SEO Optimization](#seo-optimization)

---

## GitHub Pages (Recommended)

**Best for**: Simple, free hosting directly from your GitHub repository.

### Prerequisites
- GitHub account
- Repository with your code

### Step-by-Step Instructions

#### 1. Prepare Your Repository

```bash
# Clone or navigate to your repository
git clone https://github.com/YOUR_USERNAME/Cabinet-Calc.git
cd Cabinet-Calc

# Ensure index.html is in the root directory
ls index.html  # Should exist
```

#### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**

#### 3. Wait for Deployment

- GitHub will automatically build and deploy your site
- This typically takes 1-2 minutes
- You'll see a message: "Your site is published at https://YOUR_USERNAME.github.io/Cabinet-Calc/"

#### 4. Verify Deployment

1. Click the provided URL
2. Test all calculator functionality
3. Check responsive design on mobile

### Updating Your Site

```bash
# Make changes to index.html or other files
git add .
git commit -m "Update calculator"
git push origin main

# GitHub Pages will automatically redeploy (1-2 minutes)
```

### Troubleshooting GitHub Pages

**Site not loading?**
- Wait 5 minutes after first deployment
- Check Settings > Pages for build status
- Ensure index.html is in the root directory

**Changes not appearing?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Wait 2-3 minutes for GitHub to rebuild

**404 Error?**
- Verify branch name in Settings > Pages
- Check that index.html exists in root
- Ensure repository is public (or you have GitHub Pro for private repos)

---

## Netlify

**Best for**: Automatic deployments, custom domains, serverless functions (future expansion).

### Method 1: Git Integration (Recommended)

#### 1. Sign Up for Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub account (easiest)
3. Authorize Netlify to access your repositories

#### 2. Create New Site

1. Click **Add new site** > **Import an existing project**
2. Choose **GitHub**
3. Select your repository: `Cabinet-Calc`
4. Configure settings:
   - **Branch to deploy**: `main`
   - **Build command**: (leave empty)
   - **Publish directory**: (leave empty or use `/`)
5. Click **Deploy site**

#### 3. Site is Live!

- Netlify generates a random URL: `random-name-123456.netlify.app`
- Every push to `main` branch auto-deploys
- Deployment takes 30-60 seconds

#### 4. Customize Your URL (Optional)

1. Go to **Site settings**
2. Click **Change site name**
3. Enter: `cabinet-calculator` (or your preference)
4. New URL: `cabinet-calculator.netlify.app`

### Method 2: Drag & Drop Deploy

#### Quick Deploy Without Git

1. Go to [netlify.com](https://netlify.com)
2. Sign in
3. Drag the `Cabinet-Calc` folder onto Netlify dashboard
4. Site deploys instantly
5. Get shareable URL

**Note**: Drag & drop doesn't auto-update. You must manually re-drag for updates.

### Netlify Features

- **Instant rollbacks**: Revert to previous deployment in one click
- **Branch previews**: Test changes before merging
- **Custom domains**: Free SSL included
- **Form handling**: Easy to add contact forms
- **Analytics**: Built-in traffic analytics (paid)

### Troubleshooting Netlify

**Build failed?**
- Check deploy log in Netlify dashboard
- Ensure index.html is in root
- Try drag & drop method

**Site not updating?**
- Check Deploys tab for build status
- Verify correct branch is selected
- Manual trigger: Deploys > Trigger deploy > Deploy site

---

## Vercel

**Best for**: Edge network performance, serverless functions, Next.js projects (future expansion).

### Deployment Steps

#### 1. Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Authorize Vercel

#### 2. Import Project

1. Click **Add New...** > **Project**
2. Import your `Cabinet-Calc` repository
3. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
4. Click **Deploy**

#### 3. Your Site is Live!

- Vercel provides URL: `cabinet-calc.vercel.app`
- Auto-deploys on every push to `main`
- Extremely fast global CDN

#### 4. Custom Domain Setup

1. Go to **Settings** > **Domains**
2. Add your domain
3. Follow DNS configuration instructions
4. Free SSL certificate auto-generated

### Vercel Features

- **Edge Network**: Blazing fast global CDN
- **Preview Deployments**: Every PR gets a unique URL
- **Analytics**: Built-in performance analytics
- **Environment Variables**: Easy config management
- **Serverless Functions**: Add backend features easily

### Troubleshooting Vercel

**Build errors?**
- Check build logs in deployments tab
- Ensure no build step is required (static HTML)
- Set Framework to "Other"

**Domain not working?**
- Verify DNS settings (can take 24-48 hours)
- Check SSL certificate status
- Use Vercel's DNS for simplest setup

---

## Custom Domain Setup

### Why Use a Custom Domain?

- **Professional**: `cabinetcalc.com` vs `username.github.io/cabinet-calc`
- **Branding**: Easier to remember and share
- **SEO**: Better search engine optimization
- **Trust**: More credible for users

### Purchasing a Domain

**Recommended Registrars**:
- [Namecheap](https://namecheap.com) - $8-12/year
- [Google Domains](https://domains.google) - $12/year
- [Cloudflare](https://cloudflare.com) - At cost pricing (~$8-10/year)
- [Porkbun](https://porkbun.com) - $6-10/year

**Domain Name Ideas**:
- `cabinetcalc.com`
- `drawercalculator.com`
- `cabinet-dimensions.com`
- `undermountcalc.com`
- `precisecabinets.com`

### Connecting to GitHub Pages

#### 1. Configure GitHub

1. Go to repository Settings > Pages
2. Under **Custom domain**, enter your domain: `cabinetcalc.com`
3. Check **Enforce HTTPS** (wait a few minutes after DNS setup)

#### 2. Configure DNS (at your registrar)

Add these DNS records:

```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**For subdomain** (e.g., `calc.yourdomain.com`):

```
Type: CNAME
Name: calc
Value: YOUR_USERNAME.github.io
```

#### 3. Wait for Propagation

- DNS changes take 5 minutes to 48 hours
- Usually works within 1 hour
- Check status: [dnschecker.org](https://dnschecker.org)

### Connecting to Netlify

1. Go to **Site settings** > **Domain management**
2. Click **Add custom domain**
3. Enter your domain: `cabinetcalc.com`
4. Netlify provides DNS instructions
5. Option A: Update registrar DNS to point to Netlify
6. Option B: Use Netlify DNS (transfer nameservers)

**Netlify DNS (Easiest)**:
- Point your domain's nameservers to Netlify
- Netlify manages all DNS records
- Free SSL auto-configured

### Connecting to Vercel

1. Go to **Settings** > **Domains**
2. Enter your domain
3. Vercel provides DNS configuration
4. Add records at your registrar:

```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. SSL certificate auto-generated (5-10 minutes)

---

## Donation Setup

Monetize your helpful tool with donations. Users appreciate supporting free tools they use.

### Buy Me a Coffee

**Best for**: Simple, one-time donations.

#### 1. Create Account

1. Go to [buymeacoffee.com](https://buymeacoffee.com)
2. Sign up (free)
3. Choose username: `cabinetcalc` (or your preference)

#### 2. Customize Your Page

1. Add profile photo
2. Write description: "Supporting the Cabinet Calculator tool"
3. Set coffee price (default $5)
4. Enable one-time and membership options

#### 3. Update index.html

Replace placeholder in footer:

```html
<!-- Find this line in index.html -->
<a href="https://buymeacoffee.com/YOUR_USERNAME" ...>

<!-- Replace with your actual link -->
<a href="https://buymeacoffee.com/cabinetcalc" ...>
```

Replace GitHub link:

```html
<!-- Find this line -->
<a href="https://github.com/YOUR_GITHUB" ...>@your_name</a>

<!-- Replace with -->
<a href="https://github.com/yourname" ...>@yourname</a>
```

Commit and push changes.

### Alternative: Ko-fi

Similar to Buy Me a Coffee:

1. Create account at [ko-fi.com](https://ko-fi.com)
2. Customize page
3. Update link in index.html:

```html
<a href="https://ko-fi.com/yourname" ...>
```

### Alternative: GitHub Sponsors

**Best for**: Developers with GitHub presence.

1. Apply for [GitHub Sponsors](https://github.com/sponsors)
2. Set up sponsorship tiers
3. Add sponsor button to repository
4. Update footer link

### Alternative: PayPal Donate

**Best for**: Direct PayPal donations.

1. Create PayPal.me link
2. Update footer:

```html
<a href="https://paypal.me/yourname" class="donation-btn" ...>
    Donate via PayPal
</a>
```

---

## SEO Optimization

Make your calculator discoverable in search engines.

### 1. Update Meta Tags

See [SEO_GUIDE.md](SEO_GUIDE.md) for complete meta tags and schema markup.

### 2. Submit to Search Engines

**Google Search Console**:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your property (domain or URL prefix)
3. Verify ownership (HTML tag method)
4. Submit sitemap (see below)

**Bing Webmaster Tools**:
1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

### 3. Create sitemap.xml

Create `sitemap.xml` in root:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 4. Create robots.txt

Create `robots.txt` in root:

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### 5. Social Sharing

Add these meta tags to `<head>` section:

```html
<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Cabinet & Drawer Calculator">
<meta property="og:description" content="Professional cabinet and drawer dimension calculator for undermount slides">
<meta property="og:image" content="https://yourdomain.com/preview-image.png">
<meta property="og:url" content="https://yourdomain.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Cabinet & Drawer Calculator">
<meta name="twitter:description" content="Professional cabinet and drawer dimension calculator">
<meta name="twitter:image" content="https://yourdomain.com/preview-image.png">
```

Create a preview image (1200×630px) showing the calculator interface.

---

## Performance Optimization

### Enable Compression

**GitHub Pages**: Automatic gzip compression

**Netlify**: Automatic compression and asset optimization

**Vercel**: Automatic compression and CDN

### Add Service Worker (Optional)

Make calculator work offline:

Create `sw.js` in root:

```javascript
const CACHE_NAME = 'cabinet-calc-v1';
const urlsToCache = [
  '/',
  '/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

Register in index.html before `</body>`:

```html
<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
</script>
```

---

## Monitoring & Analytics

### Google Analytics (Free)

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Create property
3. Get tracking ID (G-XXXXXXXXXX)
4. Add to `<head>` in index.html:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible Analytics (Privacy-Friendly)

1. Create account at [plausible.io](https://plausible.io)
2. Add site
3. Add script to `<head>`:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## Backup & Version Control

### Automated Backups

Your code is already backed up on GitHub!

### Version Tagging

Tag releases for easy rollback:

```bash
git tag -a v1.0.0 -m "Initial release"
git push origin v1.0.0

git tag -a v1.1.0 -m "Added new features"
git push origin v1.1.0
```

### Export Configuration

Document your settings in a config file for easy restoration.

---

## Cost Summary

| Option | Cost | Best For |
|--------|------|----------|
| GitHub Pages | **Free** | Simple hosting, open source |
| Netlify Free | **Free** | Auto-deploy, forms, functions |
| Vercel Free | **Free** | Performance, edge network |
| Custom Domain | **$8-15/year** | Professional branding |
| SSL Certificate | **Free** | All platforms include free SSL |
| Buy Me a Coffee | **Free** (5% fee) | Accepting donations |
| Google Analytics | **Free** | Usage tracking |

**Total minimum cost: $0** (using GitHub Pages)
**Total with custom domain: $8-15/year**

---

## Next Steps

1. ✅ Choose a hosting platform
2. ✅ Deploy your site
3. ✅ Set up custom domain (optional)
4. ✅ Configure donations
5. ✅ Add analytics
6. ✅ Submit to search engines
7. ✅ Share with the community!

## Support

Need help? Check the main [README.md](README.md) or open an issue on GitHub.

---

**Happy deploying!** 🚀
