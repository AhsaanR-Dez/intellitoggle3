# intellitoggle3

Clone of the IntelliToggle landing page. Built with Nuxt 3 and Vue 3.

**Live site:** https://intellitoggle3.vercel.app

---

## Stack

- Nuxt 3 / Vue 3
- Tailwind CSS
- Google Fonts (Merriweather Sans, Plus Jakarta Sans, Inter, Roboto)

## Running locally

```bash
npm install
npm run dev
```

## Notes

The original design is built for a fixed 1440px desktop layout, so a big part of this project was figuring out how to make it responsive without rebuilding everything from scratch.

On desktop it stays close to the Figma — fixed-width containers centered with `margin: auto`. On mobile, sections like Pricing, Use Cases, and What We Stand For become swipe carousels using CSS scroll-snap (no libraries). Features swaps the zigzag diagram for a simple 3-column icon grid since the diagram doesn't scale down well.

A few things I'd do differently with more time:
- Rebuild the layout with CSS Grid so nothing relies on fixed pixel widths
- Add scroll-triggered animations on section entry
- Convert the PNG icons to SVG for sharper rendering
- The Segoe UI font only renders correctly on Windows — would swap it out for something on Google Fonts

See `/pixelay/notes.md` for the full alignment breakdown.
