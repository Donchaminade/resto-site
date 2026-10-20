'use client';
import { motion, MotionConfig } from 'framer-motion';
import { useState } from 'react';
import { fadeUp, inViewGroup, reveal, hoverLift } from '../lib/motion';
import TiltedCards from './TiltedCards';

const imgs = ['/img/sushi.jpg', '/img/burger.jpg', '/img/pizza.jpg', '/img/ramen.jpg', '/img/salad.jpg'];

export default function Demo() {
  const [k, setK] = useState(0);
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#f5f7ff] px-5 py-10 lg:px-16">
        <a href="/" className="text-sm text-brand">← SAKURA</a>
        <section className="mt-6 grid items-center gap-10 md:grid-cols-2">
          <motion.div key={k} variants={inViewGroup(0.15).variants} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="font-script text-2xl text-brand">Prototype</motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl">Animations <span className="text-brand">SAKURA</span></motion.h1>
            <motion.p variants={fadeUp} className="mt-4 max-w-md text-sm text-muted">fadeUp : opacity 0→1, y 40→0, 0,6 s easeOut, décalage 0,15 s. Les cartes à droite dérivent et se fondent en boucle (2,6–4,4 s) ; survol = redressement, clic = passe au premier plan.</motion.p>
            <motion.button variants={fadeUp} {...hoverLift} onClick={() => setK(k + 1)} className="mt-6 rounded-full bg-brand px-6 py-3 text-sm text-white">Rejouer l'entrée</motion.button>
          </motion.div>
          <TiltedCards cards={imgs.map((src) => ({ src }))} className="mx-auto max-w-md" />
        </section>
        <h2 className="mt-24 font-serif text-3xl">Apparition au scroll (stagger)</h2>
        <motion.div {...inViewGroup(0.12)} className="mt-8 grid gap-6 sm:grid-cols-3">
          {imgs.slice(0, 3).map((src) => (
            <motion.div key={src} variants={fadeUp} {...hoverLift} className="rounded-3xl bg-white p-4 shadow-card">
              <img src={src} alt="" className="aspect-video w-full rounded-2xl object-cover" />
              <p className="mt-3 text-sm font-semibold">Survol : lift + scale</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.p {...reveal(0.1)} className="mt-16 pb-24 text-center text-sm text-muted">reveal() — whileInView, once</motion.p>
      </main>
    </MotionConfig>
  );
}
