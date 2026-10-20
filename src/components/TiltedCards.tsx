'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { floatingCard } from '../lib/motion';

type Card = { src: string; alt?: string };
type Props = { cards: Card[]; className?: string };

/** Grappe de cartes photo inclinées (±3–5°) qui dérivent et se fondent en boucle. */
const layout = [
  { tilt: -4, x: '18%', y: '14%', w: '56%', z: 5 },
  { tilt: 5, x: '58%', y: '0%', w: '36%', z: 3 },
  { tilt: -3, x: '0%', y: '52%', w: '34%', z: 2 },
  { tilt: 4, x: '62%', y: '56%', w: '34%', z: 4 },
  { tilt: -5, x: '2%', y: '2%', w: '26%', z: 1 },
];

export default function TiltedCards({ cards, className = '' }: Props) {
  const reduce = useReducedMotion();
  const [front, setFront] = useState(0);
  return (
    <div className={`relative aspect-square w-full ${className}`}>
      {cards.slice(0, layout.length).map((c, i) => {
        const l = layout[i];
        const isFront = i === front;
        return (
          <motion.button
            key={c.src}
            type="button"
            aria-label={c.alt || `Photo ${i + 1}`}
            onClick={() => setFront(i)}
            variants={floatingCard(i, l.tilt)}
            initial="hidden"
            animate={reduce ? 'show' : ['show', 'drift']}
            whileHover={{ scale: 1.06, rotate: 0, opacity: 1, zIndex: 20 }}
            whileTap={{ scale: 0.97 }}
            style={{ left: l.x, top: l.y, width: l.w, zIndex: isFront ? 10 : l.z }}
            className={`absolute aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white bg-white shadow-[0_25px_50px_-20px_rgba(0,0,0,.45)] ${isFront ? '' : 'saturate-[.85]'}`}
          >
            <img src={c.src} alt={c.alt || ''} className="h-full w-full object-cover" />
          </motion.button>
        );
      })}
    </div>
  );
}
