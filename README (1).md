# Friends of KOFA, Africa

A single-page Next.js website for **Friends of KOFA, Africa** — a U.S.-based 501(c)(3) public charity raising tax-deductible funds in support of KOFA Africa's community health, maternal care, and clean water work across the African continent.

---

## What's on this site

- **Hero** — "For me, you, and us." headline (echoing KOFA Africa's tagline) with a layered photographic background, status badge, and primary donate CTA
- **About KOFA Africa** — Description of the supporting organization, its work, and the maternal-mortality statistic anchor
- **Who We Are (Friends of KOFA explainer)** — The 501(c)(3) framing, the legal "discretion and control" language the IRS expects, and a trust strip with status / state / mission
- **Donate CTA** — Tax-deductibility confirmation and the primary GiveButter handoff
- **Footer** — Legal disclosures, links, copyright

---

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** with a custom KOFA brand palette
- **Source Serif 4** (display) + **Inter Tight** (body) via `next/font/google`

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Things you'll want to swap

### 1. The GiveButter URL

Open `app/page.tsx` and update this constant at the top of the file:

```ts
const DONATE_URL = "https://givebutter.com/friends-of-kofa";
```

It's referenced everywhere the donate button appears (hero, donate section, nav, footer), so changing it once updates all of them.

### 2. The hero image

The hero pulls a placeholder photo from Unsplash. Replace the URL in the hero section's `backgroundImage` style with one of KOFA's own photos (you have access to several from kofaafrica.org). For best results, use a 2400px-wide image — and consider hosting it locally in `/public/hero.jpg` and referencing it as `/hero.jpg`.

### 3. The 501(c)(3) status

Right now the page shows "501(c)(3) **pending**" and "EIN forthcoming." Once the IRS determination letter arrives:

- In the **Trust strip**: change `<span className="text-white/50 text-sm font-normal">pending</span>` to remove the pending tag
- In the **Donate section disclosure**: remove "*(status pending)*" and add the EIN
- In the **Footer Legal block**: replace the "in process" language with the EIN and determination date

### 4. The Africa silhouette icon

The nav and footer use a simplified inline SVG of Africa. If KOFA shares their actual logo file, drop it into `/public/logo.svg` and replace the inline SVGs with `<Image src="/logo.svg" ... />`.

---

## Deployment

This is a standard Next.js app and deploys cleanly to Vercel:

```bash
npx vercel
```

Or any Next.js-compatible host (Netlify, Cloudflare Pages, etc.).

---

## Design notes

The visual language deliberately mirrors KOFA Africa's website — generous whitespace, heavy black headlines with thick underlines, photographic dominance, the green accent, and the warm off-white background. Friends of KOFA reads as a sister site, not a clone: it shifts the headline from KOFA's outward-facing call to action ("For me, you, and us") into a U.S. donor-conversion narrative, and adds the gold accent to signal the "Friends of" / philanthropic dimension that doesn't exist on the KOFA Africa site itself.

The "discretion and control" paragraph in section 02 is the IRS-required language that protects the deductibility of donations. Don't remove it.
