# SEO Optimization Guide

Complete guide to optimizing your Cabinet Calculator for search engines and social media sharing.

## Table of Contents

- [Enhanced Meta Tags](#enhanced-meta-tags)
- [Schema.org Markup](#schemaorg-markup)
- [Social Media Preview](#social-media-preview)
- [Performance Optimization](#performance-optimization)
- [Content Optimization](#content-optimization)
- [Link Building](#link-building)
- [Analytics Setup](#analytics-setup)

---

## Enhanced Meta Tags

Add these meta tags to the `<head>` section of your `index.html` to improve SEO.

### Basic SEO Meta Tags

Already included in the template, but verify and customize:

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Primary Meta Tags -->
<meta name="title" content="Cabinet & Drawer Calculator - Precision Measurements for Undermount Slides">
<meta name="description" content="Professional cabinet and drawer dimension calculator for custom cabinetry with undermount drawer slides. Calculate precise measurements in real-time for perfect drawer builds.">
<meta name="keywords" content="cabinet calculator, drawer calculator, undermount slides calculator, cabinet dimensions, drawer dimensions, woodworking calculator, cabinet maker tool, drawer slide calculator, cabinetry calculator">
<meta name="author" content="Your Name">
<meta name="robots" content="index, follow">
<meta name="language" content="English">
<meta name="revisit-after" content="7 days">

<!-- Canonical URL -->
<link rel="canonical" href="https://yourdomain.com/">
```

### Open Graph / Facebook Meta Tags

Add these for better social media previews:

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com/">
<meta property="og:title" content="Cabinet & Drawer Calculator - Precision Measurements">
<meta property="og:description" content="Professional real-time calculator for cabinet and drawer dimensions with undermount slides. Perfect for woodworkers and cabinet makers.">
<meta property="og:image" content="https://yourdomain.com/images/preview.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Cabinet & Drawer Calculator Interface">
<meta property="og:site_name" content="Cabinet & Drawer Calculator">
<meta property="og:locale" content="en_US">
```

### Twitter Card Meta Tags

```html
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://yourdomain.com/">
<meta name="twitter:title" content="Cabinet & Drawer Calculator - Precision Measurements">
<meta name="twitter:description" content="Professional real-time calculator for cabinet and drawer dimensions with undermount slides.">
<meta name="twitter:image" content="https://yourdomain.com/images/preview.png">
<meta name="twitter:image:alt" content="Cabinet & Drawer Calculator Interface">
<meta name="twitter:creator" content="@yourtwitterhandle">
```

### Additional SEO Meta Tags

```html
<!-- Mobile App Capable -->
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Cabinet Calc">

<!-- Theme Color -->
<meta name="theme-color" content="#1a1a1a">
<meta name="msapplication-TileColor" content="#1a1a1a">

<!-- Geo Tags (if location-specific) -->
<meta name="geo.region" content="US">
<meta name="geo.placename" content="United States">

<!-- Rating -->
<meta name="rating" content="general">
```

---

## Schema.org Markup

Add structured data to help search engines understand your content.

### WebApplication Schema

Add this script before the closing `</body>` tag:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Cabinet & Drawer Calculator",
  "description": "Professional cabinet and drawer dimension calculator for custom cabinetry with undermount drawer slides. Calculate precise measurements in real-time.",
  "url": "https://yourdomain.com",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Person",
    "name": "Your Name",
    "url": "https://github.com/yourusername"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "100",
    "reviewCount": "50"
  },
  "featureList": [
    "Real-time dimension calculations",
    "Cabinet box cutlist generation",
    "Drawer component measurements",
    "Undermount slide specifications",
    "Installation position calculations",
    "Multiple preset configurations",
    "Warning system for invalid dimensions"
  ],
  "screenshot": "https://yourdomain.com/images/screenshot.png",
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
}
</script>
```

### BreadcrumbList Schema (if you add multiple pages)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://yourdomain.com"
  }]
}
</script>
```

### HowTo Schema (for assembly instructions)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate Cabinet and Drawer Dimensions",
  "description": "Step-by-step guide to calculating precise cabinet and drawer dimensions for undermount slide installation.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Enter Cabinet Dimensions",
      "text": "Enter your cabinet width, height, and depth measurements in millimeters.",
      "position": 1
    },
    {
      "@type": "HowToStep",
      "name": "Specify Material Thickness",
      "text": "Enter the thickness of your cabinet box material, drawer sides, and drawer bottom.",
      "position": 2
    },
    {
      "@type": "HowToStep",
      "name": "Configure Drawers",
      "text": "Set the number of drawers and spacing preferences.",
      "position": 3
    },
    {
      "@type": "HowToStep",
      "name": "Select Slide Specifications",
      "text": "Choose your undermount slide length and enter width, setback, and clearance specifications.",
      "position": 4
    },
    {
      "@type": "HowToStep",
      "name": "Review Calculations",
      "text": "View real-time calculations for cabinet cutlist, drawer components, and installation specifications.",
      "position": 5
    }
  ]
}
</script>
```

---

## Social Media Preview

Create a compelling preview image for social media shares.

### Image Specifications

**Dimensions**: 1200×630 pixels (Open Graph standard)

**Format**: PNG or JPG

**File size**: Under 1MB

**Content**: Should show:
- Calculator interface
- Sample calculations
- Professional branding
- Clear title text

### Creating the Preview Image

#### Option 1: Screenshot + Edit

1. Open calculator in browser
2. Take full-page screenshot
3. Crop/resize to 1200×630 in photo editor
4. Add title overlay: "Cabinet & Drawer Calculator"
5. Add subtitle: "Professional Dimension Calculations"
6. Save as `preview.png`

#### Option 2: Design Tool

Use [Canva](https://canva.com):
1. Create custom size: 1200×630px
2. Add screenshot of calculator
3. Add text overlays
4. Export as PNG

#### Option 3: Figma/Sketch

1. Create 1200×630 artboard
2. Import calculator screenshot
3. Add branding elements
4. Export as PNG @2x

### Adding the Image

```bash
# Create images directory
mkdir images

# Add your preview.png to this directory
cp preview.png images/

# Commit
git add images/preview.png
git commit -m "Add social media preview image"
git push
```

Update meta tags with correct path:
```html
<meta property="og:image" content="https://yourdomain.com/images/preview.png">
<meta name="twitter:image" content="https://yourdomain.com/images/preview.png">
```

### Testing Social Media Previews

**Facebook Debugger:**
https://developers.facebook.com/tools/debug/

**Twitter Card Validator:**
https://cards-dev.twitter.com/validator

**LinkedIn Post Inspector:**
https://www.linkedin.com/post-inspector/

---

## Performance Optimization

### Minify HTML (Optional)

For production, minify HTML to reduce file size:

**Online tools:**
- [HTML Minifier](https://www.willpeavy.com/tools/minifier/)
- [Minify Code](https://www.minifycode.com/html-minifier/)

**Command line:**
```bash
npm install -g html-minifier
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
```

### Add Favicon

Create favicon for browser tabs:

```html
<!-- In <head> section -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

**Generate favicons:**
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

### Enable Browser Caching

Create `.htaccess` (for Apache servers):

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

**Note**: GitHub Pages, Netlify, and Vercel handle caching automatically.

---

## Content Optimization

### Target Keywords

Primary keywords to optimize for:
- Cabinet calculator
- Drawer calculator
- Undermount slide calculator
- Cabinet dimension calculator
- Drawer dimension tool
- Woodworking calculator
- Cabinet cutlist calculator
- Drawer slide measurements

### Long-tail Keywords

- How to calculate drawer dimensions for undermount slides
- Cabinet drawer spacing calculator
- Undermount drawer slide clearance calculator
- Professional cabinet calculator online free
- Drawer box dimension calculator
- Cabinet maker measurement tool

### Content Additions

Consider adding these sections to improve SEO:

#### FAQ Section

Add before footer:

```html
<section class="faq">
  <h2>Frequently Asked Questions</h2>

  <h3>What are undermount drawer slides?</h3>
  <p>Undermount drawer slides are mounting hardware installed underneath the drawer box, providing a clean look and smooth operation.</p>

  <h3>How do I calculate drawer box width?</h3>
  <p>Drawer box width = Internal cabinet width - Slide width - (2 × Side clearance). This calculator performs this calculation automatically.</p>

  <h3>What clearance do I need for undermount slides?</h3>
  <p>Typically 2-3mm on each side for slide operation, and 2mm top/bottom clearance. Verify with your specific slide manufacturer.</p>

  <h3>Can I use this calculator for European-style cabinets?</h3>
  <p>Yes! This calculator works for any cabinet style. Just enter your specific dimensions and slide specifications.</p>
</section>
```

Add FAQ Schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are undermount drawer slides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Undermount drawer slides are mounting hardware installed underneath the drawer box, providing a clean look and smooth operation."
      }
    },
    {
      "@type": "Question",
      "name": "How do I calculate drawer box width?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Drawer box width = Internal cabinet width - Slide width - (2 × Side clearance). This calculator performs this calculation automatically."
      }
    }
  ]
}
</script>
```

---

## Link Building

### Internal Linking

If you create additional pages:
- Blog posts about cabinetry
- Tutorial videos
- Project galleries

Link back to calculator from all pages.

### External Linking

Submit your tool to:

**Tool Directories:**
- [Product Hunt](https://www.producthunt.com)
- [Hacker News](https://news.ycombinator.com/submit)
- [AlternativeTo](https://alternativeto.net)
- [Slant](https://www.slant.co)

**Woodworking Communities:**
- Reddit r/woodworking
- Reddit r/BeginnerWoodWorking
- Sawmill Creek forums
- WoodNet forums
- LumberJocks

**Social Media:**
- LinkedIn posts
- Twitter/X posts
- Facebook woodworking groups
- Instagram woodworking hashtags

**YouTube:**
- Create demo video
- Link in description

### Backlink Strategy

1. **Write blog posts** about cabinet making that link to your calculator
2. **Guest post** on woodworking blogs
3. **Comment** on relevant forum threads (provide value, not spam)
4. **Create tutorials** that use your calculator
5. **Collaborate** with woodworking influencers

---

## Analytics Setup

### Google Search Console

**Purpose**: Monitor search performance and indexing.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership via HTML tag method:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE">
   ```
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

**What to monitor:**
- Total clicks and impressions
- Average position
- Click-through rate
- Search queries driving traffic

### Bing Webmaster Tools

**Purpose**: Optimize for Bing search.

1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add your site
3. Verify ownership
4. Submit sitemap

### Google Analytics

**Purpose**: Track user behavior.

Already covered in DEPLOYMENT_GUIDE.md. Monitor:
- Page views
- Unique visitors
- Session duration
- Bounce rate
- Traffic sources

### Event Tracking

Track calculator usage:

```html
<script>
// Track preset selection
document.getElementById('preset').addEventListener('change', function(e) {
  gtag('event', 'preset_selected', {
    'preset_name': e.target.value
  });
});

// Track warning displays
function trackWarning(warningType) {
  gtag('event', 'warning_triggered', {
    'warning_type': warningType
  });
}

// Track donation button clicks
document.querySelector('.donation-btn').addEventListener('click', function() {
  gtag('event', 'donation_click', {
    'event_category': 'engagement'
  });
});
</script>
```

---

## Sitemap Creation

Create `sitemap.xml` in root directory:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add more URLs if you have additional pages -->
</urlset>
```

Create `robots.txt` in root directory:

```
User-agent: *
Allow: /
Disallow: /images/

Sitemap: https://yourdomain.com/sitemap.xml
```

---

## Local SEO (Optional)

If you want to target a specific location:

```html
<!-- Local Business Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cabinet & Drawer Calculator",
  "description": "Professional cabinet calculator tool",
  "url": "https://yourdomain.com",
  "telephone": "+1-555-555-5555",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main Street",
    "addressLocality": "City",
    "addressRegion": "State",
    "postalCode": "12345",
    "addressCountry": "US"
  }
}
</script>
```

---

## Monitoring & Maintenance

### Monthly SEO Checklist

- [ ] Check Google Search Console for errors
- [ ] Monitor top performing keywords
- [ ] Review and update meta descriptions
- [ ] Check for broken links
- [ ] Update lastmod date in sitemap
- [ ] Review analytics for user behavior
- [ ] Check mobile usability
- [ ] Monitor page load speed
- [ ] Review and respond to user feedback
- [ ] Update content based on search trends

### SEO Tools

**Free:**
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Bing Webmaster Tools](https://bing.com/webmasters)
- [Ubersuggest](https://neilpatel.com/ubersuggest/) (limited free)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

**Paid (optional):**
- Ahrefs - Comprehensive SEO tool
- SEMrush - Keyword research and tracking
- Moz Pro - SEO monitoring

---

## Success Metrics

Track these KPIs:

### Search Performance
- **Target**: Ranking in top 10 for "cabinet calculator" within 3 months
- **Monitor**: Position for 5-10 target keywords

### Traffic Goals
- **Month 1**: 100 visitors
- **Month 3**: 500 visitors
- **Month 6**: 1,000+ visitors

### Engagement
- **Bounce rate**: < 60%
- **Avg session**: > 2 minutes
- **Pages per session**: > 1.2

### Conversions
- **Donation clicks**: Track clicks to donation page
- **Social shares**: Track share button usage
- **Calculator usage**: Track preset selections and calculations

---

## Next Steps

1. ✅ Add all meta tags to index.html
2. ✅ Create and add schema markup
3. ✅ Generate and add preview image
4. ✅ Create favicon
5. ✅ Set up Google Search Console
6. ✅ Create sitemap.xml and robots.txt
7. ✅ Submit to search engines
8. ✅ Set up analytics tracking
9. ✅ Share on social media
10. ✅ Monitor and optimize monthly

---

**Good SEO takes time, but proper setup accelerates results!** 📈
