# Pitha Post

A fictional Bangladeshi winter pitha-making kit subscription business built with React + Vite + Tailwind CSS.
University assignment — e-business model demonstration.

## Stack
- **React 18** + **Vite**
- **Tailwind CSS v3**
- **React Router v6**
- **WhatsApp** for order confirmation (no payment gateway)

## Get started

```bash
npm install
npm run dev
```

## Deploy (Vercel)

1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Framework preset: **Vite** — Vercel detects this automatically
4. Click **Deploy**

## Configuration

### WhatsApp number
Edit `src/config/business.js`:
```js
whatsappNumber: '8801XXXXXXXXX', // ← replace with real number
```

### Product catalogue
Edit `src/data/products.js` — add or modify product objects. The UI adapts automatically.

### Images
Place images in `public/images/`:
- `public/images/winter-trio.jpg`
- `public/images/bhapa-starter.jpg`
- `public/images/gift-a-box.jpg`

Then set `image: '/images/winter-trio.jpg'` in `products.js`. Gradient fallbacks are shown until images are added.

## Pages
| Route | Page |
|---|---|
| `/` | Home |
| `/boxes` | Product catalogue |
| `/how-it-works` | Customer journey + business model |
| `/our-story` | Brand story + FAQ |

## Deadline
3 December 2026
