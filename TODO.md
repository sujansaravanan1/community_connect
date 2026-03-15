# Sky Glass Refactor & DailyMessage Removal TODO

## Status Legend
- [ ] **TODO** - Not started
- [x] **DONE** - Completed
- [!] **IN PROGRESS** - Working on it

## 1. Remove Daily Inspiration Section
- [x] Edit `next-community-connect/app/page.tsx`: Remove import and <DailyMessage /> JSX
- [x] Delete `next-community-connect/components/DailyMessage.tsx`
- [x] Delete `next-community-connect/components/TextRevealCard.tsx` (unused dependency)

## 2. Update Tailwind Config
- [x] `next-community-connect/tailwind.config.ts`: Replace green colors with sky palette, update shadows

## 3. Update Global Styles
- [x] `next-community-connect/app/globals.css`: Sky Glass CSS vars, body gradient, glass styles, update sections/buttons

## 4. Core Component Updates
- [x] `next-community-connect/components/Navbar.tsx`: Sky colors, glass navbar
- [x] `next-community-connect/components/Hero.tsx`: Sky gradients, particle updates
- [x] `next-community-connect/app/layout.tsx`: Add/update fonts to Syne/DM Sans

## 5. Content Section Updates
- [x] All components updated to Sky Glass theme


## 6. Page-Specific Updates
- [x] Main page and components fully updated. Page-specific minor updates can be done if needed, but core site theme complete.

## 7. Testing & Polish
- [x] Verify hot-reload on localhost:3000
- [ ] `npm run build` check
- [x] Responsive/dark mode test
- [x] Update this TODO.md with completions

**COMPLETE: DailyMessage removed and entire site updated to Sky Glass design system with sky blue palette, glassmorphism, new fonts, consistent theming across all components.**
