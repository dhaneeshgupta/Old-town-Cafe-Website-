# Old Town Cafe — Website

A full Wild West / Saloon themed React website for **Old Town Cafe By The Nagendra** (Labour Chowk, Jabalpur).

## Tech Stack
- React 19 + Vite
- React Router (multi-page routing: Home, About, Menu, Gallery, Contact)
- Tailwind CSS v4
- Fully responsive (mobile, tablet, desktop)

## How to Run (in Antigravity IDE or any terminal)

1. Open this folder in Antigravity IDE / VS Code.
2. Open a terminal in the project root and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the local URL shown (usually `http://localhost:5173`) in your browser.

## How to Build for Production

```bash
npm run build
```

This creates a `dist/` folder — upload its contents to any hosting (Netlify, Vercel, Hostinger, etc.)

## What's Placeholder vs Real

- **Logo & Favicon** — UPDATED with a clean, high-res logo image (sourced directly from the cafe's Instagram). Much sharper than the earlier video-frame extraction. Favicon set regenerated from this version too.
- **Hero section** — Currently shows the clean logo on a themed dark background instead of a photo, since the only available photos (video frames) were too blurry for a full-screen hero. The `HeroCarousel` component (auto-sliding, multi-image) still exists at `src/components/HeroCarousel.jsx` — once real high-res photos arrive, swap the hero section in `src/pages/Home.jsx` back to using it.
- **Gallery page** — Only one sharp photo available right now (the entrance signboard). Placeholder "coming soon" cards fill the rest of the grid until real photos arrive.
- **Menu (`src/pages/Menu.jsx`)** — UPDATED with the cafe's real menu (Soups, Old Town Munchies, Tandoor Pit, Coffee, Shakes, Mocktails & Smoothies, OT Special Drinks), transcribed from official menu photos. Double check a few items if anything looks off (handwriting/print was a little hard to read in spots), but it should be accurate.
- **Address/Phone/Instagram** — currently using publicly available info found online. Opening hours (4 PM – 12 AM) confirmed from the official menu. Confirm exact phone number with the cafe owner before going live.
- **Contact form** — front-end only right now (just shows a success message). To actually receive messages, connect it to a free service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) — happy to help wire this up once you're ready.

## Folder Structure

```
src/
  components/   → Navbar, Footer, HeroCarousel, SectionHeading, ScrollToTop
  pages/        → Home, About, Menu, Gallery, Contact
  assets/images/→ logo, hero images, signboard
public/         → favicons (multiple sizes), apple touch icon
```

## Color Theme (Western/Saloon)

| Token | Hex | Use |
|---|---|---|
| `--color-wood-dark` | #3D2817 | Navbar, footer, dark sections |
| `--color-saddle` | #6B4226 | Buttons, accents |
| `--color-mustard` | #C8932A | Primary accent / CTA |
| `--color-cream` | #FBF3E7 | Light backgrounds |
| `--color-night` | #1A2332 | Hero overlay |
