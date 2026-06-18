---
name: Kore Logic Intelligence System
colors:
  surface: '#fcf8fb'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e5e1e4'
  on-surface: '#1c1b1d'
  on-surface-variant: '#46464d'
  inverse-surface: '#313032'
  inverse-on-surface: '#f3f0f2'
  outline: '#77767e'
  outline-variant: '#c7c5ce'
  surface-tint: '#585d77'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#151a31'
  on-primary-container: '#7e829e'
  inverse-primary: '#c1c5e3'
  secondary: '#2d4fcf'
  on-secondary: '#ffffff'
  secondary-container: '#4b69ea'
  on-secondary-container: '#fffbff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2b1704'
  on-tertiary-container: '#9e7d61'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#c1c5e3'
  on-primary-fixed: '#151a31'
  on-primary-fixed-variant: '#41455e'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b8c3ff'
  on-secondary-fixed: '#001355'
  on-secondary-fixed-variant: '#0736ba'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#e6bfa0'
  on-tertiary-fixed: '#2b1704'
  on-tertiary-fixed-variant: '#5c4129'
  background: '#fcf8fb'
  on-background: '#1c1b1d'
  surface-variant: '#e5e1e4'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  metric-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.03em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered for a premium AI career platform that balances high-performance intelligence with an approachable, motivating user experience. The brand personality is **Professional, Visionary, and Precise**. It aims to evoke a sense of "elevated clarity"—stripping away the noise of the job market to reveal data-driven career paths.

The visual style is **Modern Minimalist with Glassmorphic Accents**. It draws inspiration from the structured reliability of enterprise tools like Notion, while incorporating the fluid, high-fidelity aesthetic of modern fintech. Key characteristics include:
- **Quiet Luxury:** A focus on generous whitespace and sophisticated dark navy tones.
- **Intelligent Motion:** Subtle transitions that mimic cognitive processes.
- **Tactile Depth:** Using soft shadows and translucent layers to create a clear information hierarchy without visual clutter.

## Colors

The palette is anchored by **Deep Navy (#0B1026)**, providing a grounding, authoritative foundation that signifies intelligence and stability. **Indigo Blue (#3B5BDB)** serves as the primary action color, bridging the gap between professional enterprise and modern SaaS.

**Electric Pink (#FF2D7A)** is reserved for high-impact accents, career milestones, and AI-driven insights to inject energy and motivation. In **Dark Mode**, the background deepens to the primary navy, while cards transition to a slightly lighter midnight blue (#131A36) to maintain depth. Functional colors (Success/Warning) are calibrated for high legibility against both light and dark surfaces.

## Typography

This design system utilizes a three-font strategy to differentiate between intent and information type:
- **Headings:** *Plus Jakarta Sans* (selected as the premium alternative to Poppins) provides a modern, geometric, yet friendly character for all titles.
- **Body:** *Inter* is used for all long-form text and interface elements, ensuring maximum readability and a neutral, professional tone.
- **Data & Metrics:** *Space Grotesk* is employed exclusively for numerical data, career scores, and technical stats. Its monospaced-leaning geometry emphasizes the "Logic" and technical precision of the AI.

Scale titles down significantly for mobile devices to maintain a tight, functional vertical rhythm.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop and a **4-column grid** for mobile. We utilize a strict 8px base unit for all spacing increments to ensure mathematical harmony.

- **Desktop:** 1280px max-width container, centered.
- **Margins:** 40px on desktop to emphasize the premium, spacious feel; 16px on mobile for maximum content utility.
- **Section Spacing:** Use large vertical gaps (80px - 120px) between major landing page sections to allow the design to breathe.
- **Component Spacing:** Use 16px or 24px internal padding for cards and containers to match the 16px corner radius.

## Elevation & Depth

Hierarchy is established through a combination of **Glassmorphism** and **Ambient Shadows**:

1.  **Level 0 (Base):** Background color (#F8FAFC).
2.  **Level 1 (Cards):** Solid white surface with a soft, diffused shadow (0px 4px 20px rgba(11, 16, 38, 0.05)).
3.  **Level 2 (Overlays/Modals):** Semi-transparent glass (White 80% opacity) with a 12px backdrop-blur and a subtle 1px white border.
4.  **Level 3 (Floating Actions):** Higher contrast shadow with a slight indigo tint to pull elements forward.

Avoid harsh black shadows. In dark mode, depth is conveyed primarily through tonal shifts (lighter navy for higher surfaces) rather than shadows.

## Shapes

The design system utilizes a **16px (1rem) base radius** for all primary containers, cards, and large buttons. This specific roundedness provides a "friendly-professional" balance—it is soft enough to feel modern and accessible (like Duolingo) but structured enough to remain serious.

- **Small elements (Chips, Tags):** Use pill-shaped (full) rounding.
- **Medium elements (Input fields, Buttons):** 12px rounding.
- **Large elements (Cards, Modals):** 16px rounding.

## Components

### Buttons
- **Primary:** Solid Indigo Blue (#3B5BDB) with white text. 12px radius.
- **Secondary:** Transparent with a 1px border (#E2E8F0) and Indigo text.
- **Special AI Action:** Subtle gradient from Indigo to Electric Pink with a slight outer glow on hover.

### Cards
- **Standard:** White background, 16px radius, Level 1 shadow.
- **AI Insight Card:** Glassmorphic background with a 2px left-accent border in Electric Pink.

### Inputs
- **Text Fields:** 1px border (#E2E8F0), 12px radius. On focus, the border changes to Indigo Blue with a soft 4px indigo outer glow.
- **Chips:** Light indigo background with bold indigo text for categorization; full pill-shape.

### Interactive Data
- **Charts:** Use a palette of Indigo, Pink, and Success Green. Lines should be 3px thick with soft rounded caps.
- **Skeleton Loaders:** Use a subtle pulse animation with a gradient moving from #F1F5F9 to #E2E8F0.

### Navigation
- **Sidebar:** Fixed width (280px), minimal icons (2px stroke weight), active states indicated by a vertical Indigo bar on the left and a subtle background tint.