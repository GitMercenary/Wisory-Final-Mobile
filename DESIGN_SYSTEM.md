# Wisory Global Design System

## Overview
This document defines the global design system for Wisory Global's website, ensuring consistent visual language and "sameness" across all components and sections.

---

## Border Radius System

### Primary Radius Values

All components MUST use these standardized border-radius values:

```css
--radius-main: 32px          /* Primary cards, containers, hero elements */
--radius-button: 12px        /* All buttons and interactive elements */
--radius-card: 32px          /* Service cards, capability cards */
--radius-overlay: 32px       /* Image overlays, modal containers */
--radius-cta: 32px           /* CTA containers, call-to-action sections */
--radius-input: 12px         /* Form inputs, text fields */
--radius-small: 8px          /* Small elements, tags, badges */
```

### Tailwind Classes

Use these Tailwind classes in your components:

- `rounded-main` - For primary containers (32px)
- `rounded-button` - For all buttons (12px)
- `rounded-card` - For cards (32px)
- `rounded-overlay` - For image overlays (32px)
- `rounded-cta` - For CTA containers (32px)
- `rounded-input` - For form inputs (12px)
- `rounded-small` - For small elements (8px)

---

## Component-Specific Guidelines

### 1. Header Buttons
**Radius**: `rounded-button` (12px)
```tsx
<button className="rounded-button px-8 py-4 ...">
  Contact Us
</button>
```

### 2. Service Cards
**Radius**: `rounded-card` (32px)
**Min Height**: `min-h-card` (280px)
**Padding**: `p-8` (2rem)

```tsx
<div className="rounded-card min-h-card p-8 flex flex-col">
  {/* Card content with flexbox ensures consistent spacing */}
</div>
```

### 3. Image Overlays
**Radius**: `rounded-overlay` (32px)
```tsx
<div className="rounded-overlay overflow-hidden">
  <Image ... />
</div>
```

### 4. Call-to-Action Containers
**Radius**: `rounded-cta` (32px)
**Special Styling**: Background gradients, border accents
```tsx
<div className="rounded-cta p-8 bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
  {/* CTA content */}
</div>
```

---

## Symmetry Rules

### Card System
To maintain consistent visual "sameness" across cards with different content lengths:

1. **Fixed Minimum Height**: All cards must have `min-h-card` (280px)
2. **Flexbox Layout**: Use `flex flex-col` to distribute content evenly
3. **Fixed-Height Sections**: Icon containers and titles should have fixed heights
4. **Flexible Content**: Description areas use `flex-grow` to fill remaining space

```tsx
<motion.div className="rounded-card min-h-card flex flex-col p-8">
  {/* Icon - Fixed height container */}
  <div className="mb-5 flex items-center justify-start h-12">
    <Icon className="w-12 h-12 text-primary" />
  </div>

  {/* Title - Fixed minimum height */}
  <div className="mb-4 min-h-[64px] flex items-start">
    <h3 className="text-2xl font-heading font-bold">Title</h3>
  </div>

  {/* Description - Flexible height */}
  <p className="text-grey text-sm leading-relaxed flex-grow">
    Description content...
  </p>
</motion.div>
```

### Aspect Ratios
- **Card Aspect Ratio**: 3:2 (`aspect-card` or `aspect-ratio-[1.5]`)
- Use when you need consistent card proportions

---

## Color System

```css
--color-primary: #EF3A33
--color-primary-dark: #D42F28
--color-primary-soft: #E87570
--color-black: #1A1A1A
--color-charcoal: #2D2D2D
--color-white: #F7FAFC
--color-grey: #666666
--color-gold: #E5C576
--color-gold-light: #F0D999
```

---

## Spacing System

```css
--spacing-xs: 0.5rem   (8px)
--spacing-sm: 1rem     (16px)
--spacing-md: 2rem     (32px)
--spacing-lg: 4rem     (64px)
--spacing-xl: 8rem     (128px)
```

**Standard Card Padding**: `p-8` (2rem)
**Standard Card Gap**: `gap-6` (1.5rem)

---

## Transition System

```css
--transition-fast: 0.2s ease-out
--transition-medium: 0.4s ease-out
--transition-slow: 0.8s ease-out
```

**Tailwind Classes**:
- `duration-fast` - 200ms
- `duration-medium` - 400ms
- `duration-slow` - 800ms

---

## Typography System

### Font Families
- **Headings**: `font-heading` (Poppins)
- **Body**: `font-body` (Inter)

### Font Sizes
- `text-h1`: 60px
- `text-h2`: 42px
- `text-h3`: 28px
- `text-h4`: 22px

---

## Implementation Checklist

When creating or updating components, ensure:

- [ ] All buttons use `rounded-button` (12px)
- [ ] All cards use `rounded-card` (32px)
- [ ] Cards have `min-h-card` for consistent height
- [ ] Card content uses `flex flex-col` for vertical distribution
- [ ] Icon containers have fixed heights
- [ ] Title containers have minimum heights
- [ ] Descriptions use `flex-grow` to fill space
- [ ] All image overlays use `rounded-overlay` (32px)
- [ ] All CTA containers use `rounded-cta` (32px)
- [ ] Transitions use design system duration classes
- [ ] Colors use design system variables

---

## Example: Perfect Card Component

```tsx
<motion.div
  className="group relative bg-[#F5F1E8] rounded-card border border-grey/10 hover:shadow-xl transition-all duration-medium overflow-hidden min-h-card flex flex-col"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  {/* Hover Light Effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-medium" />

  {/* Content - Flexbox ensures consistent spacing */}
  <div className="relative p-8 flex flex-col h-full">
    {/* Icon Container - Fixed height */}
    <div className="mb-5 flex items-center justify-start h-12">
      <Icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
    </div>

    {/* Title - Fixed height container */}
    <div className="mb-4 min-h-[64px] flex items-start">
      <h3 className="text-2xl font-heading font-bold text-black leading-tight">
        Card Title
      </h3>
    </div>

    {/* Description - Flexible height with consistent styling */}
    <p className="text-grey text-sm leading-relaxed flex-grow">
      Card description text that can be any length...
    </p>
  </div>
</motion.div>
```

---

## Migration Guide

To update existing components to the new design system:

1. **Find all `rounded-*` classes**: Replace with design system values
   - `rounded-lg` → `rounded-button` (for buttons)
   - `rounded-xl` → `rounded-card` (for cards)
   - `rounded-2xl` → `rounded-overlay` (for overlays)

2. **Add card constraints**: Add `min-h-card flex flex-col` to card containers

3. **Structure card content**:
   - Wrap icons in fixed-height containers
   - Wrap titles in min-height containers
   - Add `flex-grow` to description areas

4. **Update transitions**: Replace custom durations with `duration-fast`, `duration-medium`, `duration-slow`

---

## Testing Symmetry

To verify your components maintain symmetry:

1. **View at different screen sizes**: Cards should maintain proportions
2. **Test with varying content lengths**: Short and long descriptions should look balanced
3. **Check alignment**: All cards in a grid should have matching heights
4. **Verify border radius**: All corners should be perfectly rounded with no distortion
5. **Hover states**: Effects should be smooth and consistent

---

## Support

For questions about the design system or to propose changes, please reach out to the design team.

Last Updated: 2026-01-13
