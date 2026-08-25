# Phase 1 — Design System (Complete Plan)

**Parent plan:** [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)  
**Design source:** [DESIGN.md](../DESIGN.md)  
**Scope:** Visual foundation only — tokens, typography, base UI chrome, Header/Footer restyle. No new CMS collections, no new marketing sections, no Resend/analytics.

**Depends on:** Running Next + Payload app (already present). Phase 0 (seed cleanup / full rebrand copy) can follow; Phase 1 only needs token + chrome alignment.

---

## Goal

Make the public frontend read as the Zeftrosoft / Supabaze-inspired system: white canvas, near-black ink, single emerald CTA (`#3ecf8e`), square-ish 6px buttons, tight display type — so later homepage/services work lands on a finished chrome.

---

## Locked decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Design authority | [DESIGN.md](../DESIGN.md) | Project design doc |
| Font | Keep **Geist Sans + Geist Mono** (already in layout) | DESIGN.md lists Geist as valid Circular substitute; no new license/deps |
| Marketing theme | **Light canvas default**; keep dark theme variables remapped for ThemeSelector | Brand is white-canvas; don’t remove toggle yet |
| Primary CTA | Emerald fill + **ink** (`#171717`) text — not white on green | DESIGN.md hard rule |
| Button radius | `6px` (`rounded.sm`) — never pill | DESIGN.md |
| Container | Cap marketing content ~**1280px** | DESIGN.md ~1280px |
| Motion | Install `motion` later in Phase 3 homepage; Phase 1 only add `prefers-reduced-motion` base + CSS readiness | Avoid unused dep until homepage |
| Accent colors | Do **not** wire purple/yellow/pink into system UI tokens | Chart/integration only |

---

## Current state → target

| Area | Today | Phase 1 target |
|------|--------|----------------|
| [`globals.css`](../src/app/(frontend)/globals.css) | Generic shadcn oklch; black primary | DESIGN.md hex tokens; emerald primary |
| [`button.tsx`](../src/components/ui/button.tsx) | Black `default`, `rounded-md` | Green primary, ink on green, `rounded-[6px]` |
| Input / Textarea / Card | Generic radius/colors | Hairline borders, `6px` inputs, `12px` cards |
| Container | Breakpoint-tied max widths | Marketing max ~1280px + 64–96px section rhythm utilities |
| Header / Footer | Template chrome + ThemeSelector | White nav, ink links, one green CTA slot styling |
| Logo | Template Payload-ish | Wordmark / mark using ink + optional emerald accent |

---

## Work breakdown

### 1.1 Token layer (`globals.css`)

Add DESIGN.md tokens as CSS custom properties on `:root` (and remapped `[data-theme='dark']` for night surfaces only).

**Colors to add (exact hex):**

- `--zf-primary: #3ecf8e`
- `--zf-primary-deep: #24b47e`
- `--zf-primary-soft: #4ade80`
- `--zf-ink: #171717`
- `--zf-ink-secondary: #212121`
- `--zf-ink-mute: #707070`
- `--zf-ink-mute-2: #9a9a9a`
- `--zf-ink-faint: #b2b2b2`
- `--zf-canvas: #ffffff`
- `--zf-canvas-soft: #fafafa`
- `--zf-canvas-night: #1c1c1c`
- `--zf-canvas-night-soft: #202020`
- `--zf-hairline: #dfdfdf`
- `--zf-hairline-strong: #c7c7c7`
- `--zf-hairline-cool: #ededed`

**Map into existing shadcn vars (light):**

- `--background` ← canvas
- `--foreground` ← ink
- `--primary` ← emerald `#3ecf8e`
- `--primary-foreground` ← ink `#171717` (not white)
- `--secondary` / `--muted` ← canvas-soft
- `--muted-foreground` ← ink-mute
- `--border` / `--input` ← hairline
- `--ring` ← primary or ink (visible focus)
- `--radius` ← `6px` (buttons); expose larger radii via theme

**Tailwind `@theme`:**

- Expose `--color-zf-*` or remap `--color-primary` so `bg-primary` / `text-primary-foreground` work sitewide
- Spacing helpers: `--spacing-section: 4rem` (64px) / optional `6rem` (96px)
- Radius: `sm=6px`, `md=8px`, `lg=12px`, `xl=16px`

**Typography utilities (CSS classes or `@utility`):**

| Class | Spec |
|-------|------|
| `.type-display-xxl` | 64px / 500 / 1.1 / -1.92px (mobile: 36px) |
| `.type-display-xl` | 48px / 500 / 1.1 / -1.44px |
| `.type-display-lg` | 36px / 500 / 1.15 / -0.72px |
| `.type-display-md` | 28px / 500 / 1.2 / -0.42px |
| `.type-heading-lg` | 22px / 500 / 1.2 |
| `.type-heading-md` | 18px / 500 / 1.4 |
| `.type-body-lg` | 18px / 400 / 1.55 |
| `.type-body-md` | 16px / 400 / 1.5 |
| `.type-button-md` | 14px / 500 / 1.0 |
| `.type-caption` | 13px / 400 / 1.45 |
| `.type-micro` | 12px / 400 / 1.45 |
| `.type-code` | 14px mono / 400 / 1.5 |

**Base:**

- `body`: canvas bg, ink text, Geist sans
- Focus-visible ring using primary/ink (WCAG-friendly)
- `@media (prefers-reduced-motion: reduce)` — shorten/disable transitions

### 1.2 Container & layout utilities

Update `.container` in [`globals.css`](../src/app/(frontend)/globals.css):

- Max width **1280px** at large breakpoints (not unbounded 2xl stretch)
- Horizontal padding: 16px → 24px at md+
- Add `.section` utility: `py-16 md:py-20 lg:py-24` (64–96px band)

### 1.3 Core UI components

Restyle only; no API breaks where possible.

| File | Changes |
|------|---------|
| [`src/components/ui/button.tsx`](../src/components/ui/button.tsx) | `default` = emerald + ink text + `rounded-[6px]`; pressed/hover → primary-deep; `outline` = hairline-strong border on canvas; add/keep `link` as underline ink; sizes: default ~36–40px height, padding 8×16 |
| [`src/components/ui/input.tsx`](../src/components/ui/input.tsx) | 6px radius, hairline border, 8×12 padding |
| [`src/components/ui/textarea.tsx`](../src/components/ui/textarea.tsx) | Same as input |
| [`src/components/ui/card.tsx`](../src/components/ui/card.tsx) | 12px radius, 1px hairline, flat (shadow level 0 default) |
| [`src/components/ui/label.tsx`](../src/components/ui/label.tsx) | Ink / body-md |
| [`src/components/ui/checkbox.tsx`](../src/components/ui/checkbox.tsx) | Primary emerald checked state |
| [`src/components/ui/select.tsx`](../src/components/ui/select.tsx) | Match input chrome |
| [`src/components/ui/pagination.tsx`](../src/components/ui/pagination.tsx) | Use updated button variants |

Optional small primitives (only if needed by Header/Footer):

- `Pill` / tag classes for green + soft pills (can be Tailwind `@apply` utilities first)

### 1.4 Header chrome

Files: [`src/Header/Component.tsx`](../src/Header/Component.tsx), [`src/Header/Component.client.tsx`](../src/Header/) (Nav).

- White / canvas background, bottom hairline optional
- Nav links: ink, body-strong / body-md
- Style primary CTA appearance for link that goes to contact (CMS still provides URL; visual = `button-primary-green`)
- Mobile: keep hamburger pattern; ensure 36px+ hit targets
- ThemeSelector: keep but visually quiet (mute)

### 1.5 Footer chrome

File: [`src/Footer/Component.tsx`](../src/Footer/Component.tsx)

- Canvas bg, ink-mute link text, caption size
- Padding ~64px vertical
- Multi-column layout CSS ready (even if CMS still single `navItems` list — visual columns can wait for Phase 7 CMS; Phase 1 = typography/color/spacing)

### 1.6 Logo / wordmark

Files under [`src/components/Logo`](../src/components/Logo/) (or equivalent).

- Replace Payload template mark with Zeftrosoft text wordmark or simple SVG
- Ink wordmark; optional emerald accent on one letter / dot (per DESIGN.md)
- Works on light canvas; on-dark variant if used in night cards later

### 1.7 Existing block/hero visual pass (light)

Do **not** redesign homepage content. Only ensure shared chrome doesn’t clash:

- Quick pass on [`src/blocks/CallToAction`](../src/blocks/CallToAction/), heroes, CMSLink button appearances so CTA uses new `default` green
- Check [`src/components/Link`](../src/components/) / CMSLink appearance map (`default` / `outline`)

### 1.8 Docs touch-up

- Add a short “Phase 1 tokens” note at top of [DESIGN.md](../DESIGN.md) or a `prd/PHASE_1_NOTES.md` listing CSS var names → DESIGN tokens (implementation map)
- Update [`.env.example`](../.env.example) only if nothing design-related needed (skip)

---

## Files expected to change

```
src/app/(frontend)/globals.css
src/app/(frontend)/layout.tsx          # only if font/metadata twitter creator
src/components/ui/button.tsx
src/components/ui/input.tsx
src/components/ui/textarea.tsx
src/components/ui/card.tsx
src/components/ui/label.tsx
src/components/ui/checkbox.tsx
src/components/ui/select.tsx
src/components/ui/pagination.tsx
src/Header/Component.tsx (+ client/nav)
src/Footer/Component.tsx
src/components/Logo/* (or create)
src/components/Link/* (appearance classes)
prd/PHASE_1_DESIGN_SYSTEM.md           # this file
```

---

## Explicitly out of scope (Phase 1)

- New Payload collections / blocks (Phase 2)
- Homepage section redesign / Motion animations (Phase 3)
- Route changes (`/insights`, services, etc.)
- Resend, PostHog, Clarity
- Full seed content wipe (Phase 0 leftover — can do after or in parallel)
- Multi-column Footer CMS schema
- GSAP
- Replacing Geist with Inter/Circular files

---

## Acceptance criteria

- [ ] Light theme: white canvas, ink text, emerald as `bg-primary`
- [ ] Primary button: green background, **dark** label, **6px** radius
- [ ] Outline button: hairline border, ink text, same radius
- [ ] Inputs/cards match hairline + radius tokens
- [ ] Display utility classes exist and scale down on mobile
- [ ] Container max-width ≈ 1280px on desktop
- [ ] Header/Footer use new colors/type; one green CTA style visible in nav if link present
- [ ] Logo is Zeftrosoft (not Payload template branding)
- [ ] `prefers-reduced-motion` respected for CSS transitions
- [ ] Existing pages still render; `pnpm lint` / build not broken
- [ ] Emerald appears sparingly (not every surface tinted green)

---

## Verification checklist

1. Run `pnpm dev` — open `/` and `/contact`
2. Inspect primary button in browser: computed bg `#3ecf8e`, color `#171717`, border-radius `6px`
3. Toggle theme once — dark still readable (night canvas / on-dark); light remains default brand
4. Resize to &lt;768px — display utilities / nav usable
5. Keyboard Tab — focus ring visible on buttons/inputs

---

## Effort & order of execution

1. Tokens + `@theme` in `globals.css`  
2. Button + input + card  
3. Remaining UI primitives  
4. Logo  
5. Header / Footer  
6. CMSLink / CTA appearance alignment  
7. Visual QA on `/` and `/contact`  
8. Lint/build smoke  

**Estimate:** 1 focused pass (small UI surface; no CMS schema work).

---

## After Phase 1

Next: **Phase 2 — Payload models** (collections + marketing blocks), then Phase 3 homepage built on this chrome.
