# Cabinet & Drawer Calculator

A professional, real-time dimension calculator for custom cabinetry with undermount drawer slides. Built for woodworkers, cabinet makers, and DIY enthusiasts who need precise measurements for drawer installations.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://YOUR_USERNAME.github.io/Cabinet-Calc/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## ✨ Features

### Real-Time Calculations
- **Instant Updates**: All dimensions recalculate automatically as you type
- **Live Indicator**: Visual feedback showing active calculation status
- **Flash Animations**: Changed values highlight briefly for easy tracking

### Comprehensive Measurements

**Cabinet Box Cutlist**
- Top, bottom, and side panel dimensions
- Back panel measurements
- Optional nailer strips for slide mounting
- Internal opening dimensions

**Drawer Components (Per Drawer)**
- Drawer front, back, and side panels
- Drawer bottom with proper material thickness accounting
- Overlay front dimensions with configurable overlap

**Drawer Dimensions**
- Precise drawer box width accounting for slide width and clearances
- Drawer box height with proper vertical clearance
- Drawer box depth based on slide length and setback
- Opening dimensions for each drawer

**Installation Specifications**
- Slide mounting positions for each drawer
- Effective extension distance
- Side and vertical clearances
- Drawer position heights measured from cabinet bottom

### Smart Features

**Preset Configurations**
- **Will's 640mm Build**: Pre-configured for 758×626×600mm cabinet with 3 drawers
- **Standard 600mm Cabinet**: Common 600×800×500mm configuration with 4 drawers
- **Custom**: Full manual control of all parameters

**Intelligent Warnings**
- Alerts when drawer depth exceeds slide length
- Warns about narrow drawers (< 200mm width)
- Flags shallow drawer heights (< 80mm)
- Checks slide length compatibility with cabinet depth

**Assembly Guidance**
- Step-by-step assembly instructions
- Critical clearance summaries
- Installation best practices
- Slide mounting procedures

### Professional Design
- **Minimal Aesthetic**: Clean, focused interface
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Two-Column Grid**: Organized input sidebar and results area
- **Tabular Numbers**: Consistent digit alignment for easy reading
- **Professional Typography**: System font stack for native feel

## 🎯 Use Cases

### For Cabinet Makers
- Calculate precise dimensions for custom drawer builds
- Ensure proper clearances for undermount slide installation
- Generate cutlists for efficient material usage
- Verify measurements before cutting expensive materials

### For DIY Woodworkers
- Plan drawer configurations for home projects
- Understand the relationship between cabinet and drawer dimensions
- Learn proper clearances and installation requirements
- Experiment with different drawer configurations

### For Kitchen Designers
- Quickly prototype drawer layouts
- Calculate dimensions for various cabinet sizes
- Verify slide compatibility with cabinet depth
- Generate specifications for cabinet builders

### For Furniture Builders
- Design custom drawer systems
- Optimize drawer spacing and sizing
- Calculate overlay front dimensions
- Plan material requirements

## 🚀 Quick Start

### Option 1: Use Online (Recommended)
1. Visit the [live demo](https://YOUR_USERNAME.github.io/Cabinet-Calc/)
2. Enter your cabinet dimensions
3. View real-time calculations
4. Use preset configurations or customize all parameters

### Option 2: Download and Run Locally
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/Cabinet-Calc.git

# Open the file
cd Cabinet-Calc
open index.html  # macOS
# or
start index.html  # Windows
# or
xdg-open index.html  # Linux
```

### Option 3: Deploy Your Own Copy
See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed hosting instructions on:
- GitHub Pages (free, easy)
- Netlify (free, automatic deployments)
- Vercel (free, serverless)

Quick deployment: See [QUICK_START.md](QUICK_START.md) for a 5-minute deployment path.

## 📋 Input Parameters

### Cabinet Box Dimensions
- Width, height, depth (in millimeters)
- All external measurements

### Material Thickness
- Cabinet box thickness (sides, top, bottom)
- Drawer side thickness (front, back, sides)
- Drawer bottom thickness

### Drawer Configuration
- Number of drawers (1-10)
- Spacing between drawers
- Top gap (cabinet top to first drawer)
- Bottom gap (last drawer to cabinet bottom)

### Undermount Slide Specifications
- Slide length (dropdown: 250-600mm in 50mm increments)
- Slide width (total for both sides)
- Front setback distance (drawer front to slide front)
- Side clearance per slide

### Drawer Front Options
- Front overlap amount (how much overlay extends beyond opening)

### Nailer/Mounting Strips
- Width of nailer strips
- Enable/disable nailer strips

## 📊 Output Calculations

### Cabinet Box Cutlist
- **Top/Bottom Panels**: Cabinet width × depth (qty 2)
- **Side Panels**: (Height - 2× box thickness) × depth (qty 2)
- **Back Panel**: (Width - 2× thickness) × (Height - 2× thickness)
- **Nailer Strips**: (Width - 2× thickness) × nailer width (qty 4, if enabled)
- **Internal Opening**: Usable interior dimensions

### Drawer Components (Per Drawer)
- **Drawer Front**: Drawer box width × drawer box height
- **Drawer Back**: Drawer box width × (drawer box height - bottom thickness)
- **Drawer Sides**: Drawer box depth × drawer box height (qty 2)
- **Drawer Bottom**: (Drawer box width - 2× drawer thickness) × (Drawer box depth - drawer thickness)
- **Overlay Front**: (Opening width + 2× overlap) × (Opening height + 2× overlap)

### Drawer Dimensions
- **Drawer Box Width** = Internal width - slide width - (2× clearance)
- **Drawer Box Height** = Opening height per drawer - 2mm clearance
- **Drawer Box Depth** = Slide length - front setback
- **Opening Width** = Internal width
- **Opening Height** = (Internal height - top gap - bottom gap - total spacing) ÷ number of drawers

### Installation Specifications
- Slide mounting positions
- Effective drawer extension distance
- All clearances (side and vertical)
- Drawer position heights from cabinet interior bottom

## 🛠 Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No frameworks or dependencies
- **Single File Application**: Easy to deploy and share

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

All modern browsers with CSS Grid and Custom Properties support.

## 🎨 Design Philosophy

### Minimal & Professional
- Neutral color palette (grays, blacks, white)
- Subtle borders and shadows
- Clean typography with system fonts
- Purposeful animations (flash on change, pulsing live indicator)

### User-Focused
- Two-column layout separating inputs and results
- Clear section headers and descriptions
- Helper text explaining each input
- Visual feedback for all interactions

### Precision-Oriented
- Tabular number formatting for alignment
- 0.1mm precision on all measurements
- Formulas shown for transparency
- Context provided for each dimension

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

### Feature Ideas
- [ ] Export cutlist to PDF
- [ ] Print-friendly layout
- [ ] Save/load custom presets
- [ ] Metric/Imperial unit toggle
- [ ] 3D visualization of drawer layout
- [ ] Material cost calculator

### Bug Reports
If you find a bug, please open an issue with:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Support

If you find this tool helpful, consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting features
- ☕ [Buying me a coffee](https://buymeacoffee.com/YOUR_USERNAME)

## 📞 Contact

- GitHub: [@YOUR_GITHUB](https://github.com/YOUR_GITHUB)
- Issues: [GitHub Issues](https://github.com/YOUR_USERNAME/Cabinet-Calc/issues)

## 🙏 Acknowledgments

- Built for the woodworking community
- Inspired by the need for precise undermount drawer calculations
- Thanks to all contributors and users providing feedback

## 📚 Additional Resources

- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Detailed hosting instructions
- [Quick Start](QUICK_START.md) - 5-minute deployment path
- [SEO Guide](SEO_GUIDE.md) - Optimize for search engines

---

**Made with care for the woodworking community** 🪵
