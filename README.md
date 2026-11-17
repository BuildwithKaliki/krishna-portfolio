# Krishna Kaliki — Portfolio

Personal portfolio website. React 18 + Vite 6 + Tailwind 3, dark terminal theme.

## Restore on another machine

```bash
unzip krishna-portfolio.zip
cd krishna-portfolio
npm install     # restores dependencies from package.json
npm run dev     # local preview -> http://localhost:5173
npm run build   # production build -> dist/
```

Requires Node 18+ (built/tested on Node 24).

## Before publishing

1. Replace placeholder LinkedIn/GitHub links in `src/components/Hero.jsx`
2. Re-read `src/components/Projects.jsx` for NDA-adjacent detail
3. Push to a personal GitHub repo and enable GitHub Pages, or drop the `dist/` folder on Netlify/Vercel

## Contents

- `Personal.md` — master reference: career facts, LinkedIn copy, interview prep Q&A bank
- `src/components/` — all site sections (Hero, Metrics, About, Projects, Architecture, Skills, Experience, Interview, Footer)
