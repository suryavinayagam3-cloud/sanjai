# Sanjai - Full-Stack Developer Portfolio

A modern, responsive, and minimalist personal portfolio website built with clean HTML5, modern CSS, and vanilla JavaScript. Features a dark/light mode toggle, dynamic typing effect, interactive filterable project catalog, detailed project modals, responsive navigation, and contact form validation.

---

## 🌟 Highlights & Features

- **Zero Build Step Required**: Open `index.html` directly in any web browser without running any build commands or installing npm packages.
- **Minimalist & Clean Aesthetic**: Subtle obsidian/slate dark theme with smooth switching to an elegant light theme.
- **Responsive Layout**: Designed mobile-first, looking sharp on phones, tablets, laptops, and ultra-wide displays.
- **Dynamic Projects Grid**: Filter projects by category (*Full-Stack, Backend & Cloud, Frontend & UI*) with interactive modal windows detailing architecture and features.
- **Interactive Typewriter Hero**: Rotating headline highlighting core development specialties.
- **Animated Counter**: Stats strip with smooth increment animations when scrolled into view.
- **Interactive Contact Section**: Working form validation, simulated submission feedback, and one-click email copying to clipboard.
- **100% Offline-Friendly**: Uses embedded SVG icons for zero network dependency issues.

---

## 🚀 Getting Started

### Option 1: Direct Open (Instant)
Simply double-click `index.html` or right-click and choose **Open with > Google Chrome / Microsoft Edge / Firefox**.

### Option 2: Run via Local HTTP Server (Recommended)
Using Python (pre-installed):
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

Or using Node.js:
```bash
npx serve
```

---

## 📁 Project Structure

```
sanjai/
├── index.html            # Main semantic HTML structure & layout
├── css/
│   └── style.css         # Modern CSS variables, typography & responsive styles
├── js/
│   ├── main.js           # Theme toggle, typewriter, modal dialog & interactions
│   └── projects-data.js  # Project catalog list, architecture notes & SVG graphics
├── assets/               # Resume PDF or personal profile pictures
└── README.md             # Customization guide & documentation
```

---

## ✏️ How to Personalize Your Portfolio

### 1. Update Personal Info & Links
Open `index.html` and search for:
- **Name**: Change `Sanjai` to your preferred display name.
- **Email**: Update `sanjai.developer@example.com` to your real email address in both the `mailto:` links and `data-email` attributes.
- **Socials**: Update links to your GitHub (`https://github.com/your-username`) and LinkedIn (`https://linkedin.com/in/your-username`).

### 2. Add or Edit Projects
Open `js/projects-data.js`:
- Edit titles, descriptions, live demo URLs (`liveUrl`), and repository links (`repoUrl`).
- Add new project objects to the `projectsData` array.

### 3. Add Your Resume
Place your resume PDF into the `assets/` folder (e.g., `assets/resume.pdf`) and link it to the "Hire Me" or "Download CV" buttons in `index.html`.

---

## 📄 License
MIT License. Free to use and adapt for your personal brand and portfolio!

