---
name: Kore Logic Intelligence System
colors:
  surface: '#0d1228'
  surface-dim: '#0d1228'
  surface-bright: '#333850'
  surface-container-lowest: '#080d22'
  surface-container-low: '#151a31'
  surface-container: '#191e35'
  surface-container-high: '#242940'
  surface-container-highest: '#2f334b'
  on-surface: '#dde1ff'
  on-surface-variant: '#c4c5d6'
  inverse-surface: '#dde1ff'
  inverse-on-surface: '#2a2f47'
  outline: '#8e90a0'
  outline-variant: '#444654'
  surface-tint: '#b8c3ff'
  primary: '#b8c3ff'
  on-primary: '#002388'
  primary-container: '#3b5bdb'
  on-primary-container: '#e2e5ff'
  inverse-primary: '#3052d2'
  secondary: '#ffb1c1'
  on-secondary: '#66002a'
  secondary-container: '#e00265'
  on-secondary-container: '#fff6f6'
  tertiary: '#bec5e9'
  on-tertiary: '#282f4c'
  tertiary-container: '#5f6585'
  on-tertiary-container: '#e1e4ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0736ba'
  secondary-fixed: '#ffd9df'
  secondary-fixed-dim: '#ffb1c1'
  on-secondary-fixed: '#3f0017'
  on-secondary-fixed-variant: '#90003e'
  tertiary-fixed: '#dde1ff'
  tertiary-fixed-dim: '#bec5e9'
  on-tertiary-fixed: '#131a36'
  on-tertiary-fixed-variant: '#3f4564'
  background: '#0d1228'
  on-background: '#dde1ff'
  surface-variant: '#2f334b'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 16px
  stack-sm: 4px
  stack-md: 12px
  stack-lg: 24px
---

## Brand & Style
The design system embodies a high-fidelity, futuristic aesthetic tailored for enterprise-grade intelligence and data visualization. The personality is precise, authoritative, and sophisticated, evoking the feeling of a mission-control interface.

The style leverages **Glassmorphism** and **Modern Corporate** influences, utilizing deep obsidian tones and vibrant neon accents to create a sense of infinite depth. By prioritizing high-contrast typography and luminescent interactive elements, the UI ensures critical data remains legible while maintaining a premium, "black-ops" technology feel.

## Colors
The palette is centered on a "Deep Space" foundation. The primary background is a rich, dark navy, providing a low-strain environment for long-term monitoring. 

- **Primary Indigo (#3B5BDB):** Used for primary actions, active states, and brand-identifying accents.
- **Electric Pink (#FF2D7A):** Reserved for high-priority alerts, critical data points, and destructive actions that require immediate attention.
- **Surface Strategy:** Surfaces use a slightly lighter navy to create a tiered hierarchy of information. Borders and outlines use a subtle slate to define boundaries without breaking the immersive dark atmosphere.

## Typography
Typography is a blend of precision and readability. 
- **Headlines:** Use **Hanken Grotesk** for a sharp, contemporary look that feels engineered.
- **Body:** Use **Geist** for its exceptional clarity in data-dense environments and technical contexts.
- **Data & Labels:** Use **JetBrains Mono** for monospaced numerical data, code snippets, and system status labels to reinforce the "intelligence system" narrative.

## Layout & Spacing
The layout follows a strict 8px grid system to ensure mathematical alignment.
- **Desktop:** A 12-column fluid grid with 24px margins. Content is organized in modular "dashboard" blocks.
- **Tablet:** 8-column grid with 16px gutters. Sidebars collapse into overlay drawers.
- **Mobile:** 4-column grid with 16px margins. Layout stacks vertically, prioritizing data visualizations.
Spacing is generous between sections to prevent "visual noise" but tight within components to maintain a sense of high-density intelligence.

## Elevation & Depth
In this dark UI, elevation is communicated through **Tonal Layering** and **Luminescent Glows** rather than heavy shadows.
- **Level 0 (Background):** #0b1026.
- **Level 1 (Cards/Panels):** #131A36 with a 1px subtle outline (#2D3748).
- **Level 2 (Modals/Popovers):** #1C2541 with a soft blue outer glow (Indigo at 10% opacity) to suggest the element is floating above the data plane.
- **Interactions:** Hover states on interactive elements should trigger a subtle increase in brightness and a soft inner-glow effect.

## Shapes
The design system utilizes a consistent 16px (ROUND_EIGHT) corner radius for all primary containers and cards. This softens the technical nature of the UI, making it feel modern and accessible despite the dark, aggressive color palette. Buttons and input fields should follow this 16px rule, while smaller elements like badges or chips may use a fully rounded "pill" shape for distinct contrast.

## Components
- **Buttons:** Primary buttons use a solid Indigo Blue fill with white text. Secondary buttons use an Indigo outline with a faint background tint on hover.
- **Cards:** Utilize the Surface Background (#131A36). Header sections within cards should be separated by a subtle 1px divider.
- **Input Fields:** Darker than the surface background to create an "inset" feel. Borders glow Indigo Blue upon focus.
- **Chips/Badges:** Small, high-contrast markers. Use Electric Pink for "Critical" or "Live" statuses.
- **Data Visualization:** Charts should use semi-transparent gradients (Indigo to Transparent) to fill areas, maintaining the glassmorphism theme.
- **Lists:** Clean rows with 1px bottom borders. Hovering over a row should subtly change the background color to signal interactivity.