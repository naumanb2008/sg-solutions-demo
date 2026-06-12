# SG Solutions — One-Page Website

A modern, responsive one-page website for **SG Solutions**, an engineering and
repair company. Built with plain HTML, CSS, and vanilla JavaScript — no build
step required.

## Sections

- **Hero** — headline, call-to-action, and key stats
- **Services** — six core engineering & repair offerings
- **About** — company background, certifications, and trust points
- **Contact** — contact form (demo) and business details

## Features

- Fully responsive layout (desktop, tablet, mobile)
- Sticky header with mobile hamburger navigation
- Smooth scrolling and accessible markup
- Zero dependencies — deploys as static files

## Getting Started

Open `index.html` directly in a browser, or serve locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

This is a static site and works on any static host:

- **GitHub Pages** — enable Pages on the `main` branch (root)
- **Netlify / Vercel** — drag-and-drop or connect the repo; no build command needed
- **Any web server** — upload `index.html`, `styles.css`, and `script.js`

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page markup and content |
| `styles.css` | Styling and responsive layout |
| `script.js` | Navigation toggle and form handling |

---

> The contact form is a front-end demo and does not submit data anywhere.
> Connect it to a form service (Formspree, Netlify Forms, etc.) or your own
> backend to capture submissions.
