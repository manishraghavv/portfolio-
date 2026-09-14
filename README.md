# Manish Raghav — Portfolio

A single-page, glassmorphism portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS** and **Framer Motion**.

## Highlights

- Dark navy base with animated, blurred gradient blobs (purple / blue / cyan) and a grain overlay
- Circular profile photo in a glassmorphic frame: rotating conic-gradient ring, breathing colour
  halo, frosted glass ring, hover scale + brighter glow
- Type pairing: Space Grotesk for display headings, Inter for body copy
- Gradient text (violet → fuchsia → cyan) with a soft coloured bloom behind it
- Frosted-glass surfaces everywhere: `backdrop-blur`, low-opacity borders, soft shadows
- Floating glass navbar that blurs on scroll, with scroll-spy highlighting and a mobile drawer
- Typewriter role animation, scroll-reveal fade-ups, hover lift + glow on cards and pills
- Optional cursor glow (fine-pointer devices only, disabled for reduced-motion users)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3004
```

Other scripts:

```bash
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint (next/core-web-vitals)
npm run typecheck
```

The app is pinned to **port 3004** — both scripts pass `-p 3004` explicitly, and `PORT=3004`
is set in `.env.local`. Change both places if you move it.

## Project structure

```
app/
  layout.tsx              # fonts, metadata, background layers, navbar
  page.tsx                # composes every section
  globals.css             # design tokens, glass primitives, utilities
components/
  Navbar.tsx  Hero.tsx  About.tsx  Skills.tsx
  Experience.tsx  Projects.tsx  Contact.tsx  Footer.tsx
  ProfilePhoto.tsx  TypingText.tsx
  background/
    GradientBlobs.tsx     # fixed animated gradient blobs + grain
    CursorGlow.tsx        # mouse-following glow (CSS variables, rAF-throttled)
  ui/
    GlassCard.tsx  Section.tsx  SectionHeading.tsx
    Reveal.tsx            # scroll-reveal wrapper
    SocialLinks.tsx
lib/
  data.ts                 # all editable content (profile, skills, experience, projects)
  cn.ts                   # tiny className joiner
```

## Editing content

Everything textual lives in `lib/data.ts` — profile details, social links, the cycled
hero roles, skill groups, experience timeline entries and projects. Update that file and
the sections re-render; no component edits required.

## Profile photo

The portrait lives at `public/mr.jpeg` and is rendered by `components/ProfilePhoto.tsx` in the
hero's right-hand column (two-column layout on desktop, stacked and centred on mobile).

It uses `next/image` with `priority`, an explicit 250×250 size and `object-cover`. Because the
source is a tall portrait (1918×2366), the crop relies on `object-top` plus a slight
`scale-[1.18]` so the face stays centred in the circle. Tune those two classes in that file to
reframe. `sharp` is installed so production image optimization resizes the 743 KB original down
to ~12 KB at 1x.

## Typography & design tokens

All tokens live at the top of `app/globals.css` and in `tailwind.config.ts`:

- **Display face** — Space Grotesk, loaded in `app/layout.tsx` and exposed as `--font-display`,
  wired to Tailwind's `font-display` family. The original brief suggested Clash Display /
  Cabinet Grotesk, which are Fontshare fonts and therefore not available through
  `next/font/google`; Space Grotesk is the closest Google-hosted geometric grotesk. To swap in
  the real thing, drop the `.woff2` files into `app/fonts/` and use `next/font/local` — the
  comment in `layout.tsx` shows the exact snippet.
- **Body face** — Inter, exposed as `--font-inter` and used by Tailwind's `font-sans`.
- **Accents** — `--accent-violet` (primary), plus cyan, fuchsia and pink for blobs, borders and
  gradients. The violet / fuchsia / cyan trio is what drives `.text-gradient` and the button fill.
- **Composite classes** — `.glass`, `.glass-panel` (gradient border + tinted float shadow),
  `.glass-pill`, `.btn-primary`, `.btn-ghost`, `.text-gradient`, `.text-gradient-glow`.

> `--font-inter` and `--font-display` are declared by `next/font`, on a generated class applied
> to `<html>`. Don't redeclare them in `:root` — same specificity, later source order, and the
> loaded webfont silently gets dropped in favour of a system fallback.

## Notes

- The contact form has no backend. It validates locally and hands the message to the
  visitor's mail client via a prefilled `mailto:` link (see `components/Contact.tsx`).
  Swap that for an API route or an email service when you wire up delivery.
- `prefers-reduced-motion` is honoured globally in `globals.css` and by the `Reveal`
  and `CursorGlow` components.
