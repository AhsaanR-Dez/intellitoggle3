# Pixelay Notes

## Desktop

Pretty close overall. The hero, nav, pricing cards, and footer all line up well with the original.

The main offset is in the Features section — the zigzag diagram positions icons using coordinates taken directly from the SVG path data, so it's accurate but the vertical spacing between it and the sections above/below is slightly off                              .

The comparison table headers are a touch smaller than the original since I used `clamp()` to make them scale, which shrinks them slightly at 1440px.

## Mobile

The original mobile design uses carousels for What We Stand For, Use Cases, and Pricing. I matched all three using CSS scroll-snap with dot indicators. No external libraries.

Features was the trickiest — the zigzag diagram just doesn't work at mobile width, so I replaced it with a 3-column icon grid which matches the reference mobile design.

The comparison table fits naturally on mobile without horizontal scroll once I removed `min-width` and switched to `clamp()` font sizes.

## What I'd fix with more time

- The layout is built on fixed pixel widths (1240px containers etc.) because that's what the Figma uses. It works, but a proper CSS Grid rebuild would be cleaner and more maintainable.
- The Features zigzag uses absolute positioning tied to exact SVG coordinates. It's accurate but fragile — any change to the diagram would need manual recalculation.
- Segoe UI is used for the pricing /month text because that's what the Figma specifies, but it only renders on Windows. Would replace with a Google Fonts alternative.
- Would add entrance animations on scroll for the section headings and cards.
