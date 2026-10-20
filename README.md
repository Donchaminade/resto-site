# SAKURA — landing page de restaurant animée

Reproduction de la landing page « SAKURA » (reel @code.xr *Restaurant Animated Landing Page*), avec le style d'animation du reel @code.xr *Animated Website*.

- Next.js 14 (App Router, export statique `out/`), Tailwind en local, Framer Motion, polices locales (@fontsource : Playfair Display, Poppins, Dancing Script), icônes lucide-react.
- Sections : Hero, About, Popular Dishes, Menu & commande (filtres + panier), Galerie « glassy carousel », Newsletter, Footer.
- Animations : `src/lib/motion.ts` (fadeUp, stagger, reveal, slideIn, floatingCard, hoverLift) et `src/components/TiltedCards.tsx` (cartes inclinées flottantes). Prototype isolé : `/demo-animations`.
- `prefers-reduced-motion` respecté (MotionConfig `reducedMotion="user"` + CSS).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # export statique dans out/
```

## Crédits photos (Unsplash, licence Unsplash)
Photos téléchargées depuis images.unsplash.com dans `public/img/` (IDs Unsplash) :
pizza 1513104890138-7c749659a591 · burger 1568901346375-23c9450c58cd · sushi 1579871494447-9811cf80d66c ·
tempura/ardoise 1617196034796-73dfa7b1fd56 · plateau sushi 1553621042-f6e147245754 · ramen 1569718212165-3a8278d5f624 ·
salade 1512621776951-a57141f2eefd · wrap 1626700051175-6818013e1d4f · donuts 1551024601-bec78aea704b ·
plats 1504674900247-0877df9cc836 · pizza 2 1565299624946-b28f40a0ae38 · salle 1517248135467-4c7edcad34c4.
Voir https://unsplash.com/photos/<id> pour chaque photographe.
