# Voltify EV Charger Specialists

React (Vite) front end + Node (Express) server that emails quote requests.

## Run locally
```bash
npm install
cp .env.example .env      # then fill in SMTP_PASS (Gmail App Password)
npm run dev:all           # site on http://localhost:5173, API on :3001
```

## Production
```bash
npm run build
npm start                 # serves dist/ and POST /api/quote on PORT (default 3001)
```
Host on any Node host (Render, Railway, a VPS). Set the variables from `.env.example` in the host's settings.

## Content
All text lives in `src/data.js`. Replace the portfolio placeholders in `src/components/Portfolio.jsx` with real photos and descriptions.

## Push to GitHub
```bash
git init && git add . && git commit -m "Voltify site"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
