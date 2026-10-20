'use client';
import { useState, useEffect } from 'react';
import { motion, MotionConfig, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Search, ShoppingCart, ArrowRight, Play, Flower2, Menu as MenuIcon, X, Plus, Minus, Facebook, Instagram, Twitter, Youtube, ChevronLeft, ChevronRight, MapPin, Phone, Clock } from 'lucide-react';
import { dishes, menu, gallery } from './data';
import { easeSoft as ease, reveal as fadeUp, slideIn as fromSide, inViewGroup, fadeUp as fu, hoverLift } from '../lib/motion';
import TiltedCards from './TiltedCards';

const fmt = (n) => `$${n.toFixed(2)}`;
const nav = [['Menu', '#menu'], ['Offer', '#newsletter'], ['Order Food', '#order']];

function Navbar({ count, onCart }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
      className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
      <nav className="hidden flex-1 gap-8 text-[13px] md:flex">
        {nav.map(([l, h], i) => <a key={l} href={h} className={`pb-1 transition hover:text-brand ${i === 0 ? 'border-b-2 border-brand text-brand' : 'text-ink/80'}`}>{l}</a>)}
      </nav>
      <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <MenuIcon size={22} />}</button>
      <a href="#top" className="flex flex-col items-center leading-none">
        <span className="font-serif text-2xl font-semibold tracking-[0.12em]">SAKURA</span>
        <span className="mt-1 text-[8px] uppercase tracking-[0.35em] text-brand">Delicious & Fast Food</span>
      </a>
      <div className="flex flex-1 items-center justify-end gap-5">
        <label className="hidden items-center gap-2 border-b border-ink/30 pb-1 text-xs md:flex">
          <input placeholder="Search" className="w-28 bg-transparent outline-none placeholder:text-muted" />
          <Search size={14} />
        </label>
        <button onClick={onCart} aria-label="Cart" className="relative text-ink transition hover:text-brand">
          <ShoppingCart size={20} />
          <AnimatePresence>{count > 0 && <motion.span key={count} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
            className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-brand text-[9px] font-semibold text-white">{count}</motion.span>}</AnimatePresence>
        </button>
      </div>
      <AnimatePresence>{open && (
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
          className="absolute left-4 right-4 top-16 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-card md:hidden">
          {nav.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)} className="text-sm">{l}</a>)}
        </motion.nav>)}</AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 md:grid-cols-2 md:pb-24 md:pt-12 lg:px-8">
        <motion.div className="relative z-10" variants={inViewGroup(0.15, 0.15).variants} initial="hidden" animate="show">
          <motion.h1 variants={fu}
            className="font-serif text-[40px] leading-[1.15] sm:text-5xl lg:text-[56px]">
            Enjoy Delicious<br />
            <span className="inline-flex items-center gap-3">
              <motion.img src="/img/dessert.jpg" alt="" initial={{ rotate: -90, scale: 0 }} animate={{ rotate: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease }}
                className="h-10 w-10 rounded-full border-4 border-ink object-cover lg:h-12 lg:w-12" />Fast Food
            </span>
          </motion.h1>
          <motion.p variants={fu}
            className="mt-5 max-w-sm text-[13px] leading-relaxed text-muted">
            A rich and flavourful selection of burgers, pizzas and fresh sushi, cooked to order and served with love.
          </motion.p>
          <motion.a href="#order" variants={fu}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-[0_10px_25px_-8px_#ff6a1a]">
            Order Now <ArrowRight size={16} />
          </motion.a>
        </motion.div>
        <div className="relative h-[300px] sm:h-[380px] md:h-[440px]">
          <div className="pointer-events-auto absolute -top-6 left-[18%] w-[62%] opacity-70 md:-top-10">
            <TiltedCards cards={[{ src: '/img/burger.jpg', alt: 'Burger' }, { src: '/img/pizza.jpg', alt: 'Pizza' }, { src: '/img/ramen.jpg', alt: 'Ramen' }, { src: '/img/sushi.jpg', alt: 'Sushi' }, { src: '/img/wrap.jpg', alt: 'Wrap' }]} />
          </div>
          {/* baguettes */}
          <motion.div initial={{ opacity: 0, x: 200, y: -100 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 1, ease }}
            className="absolute -right-10 top-0 h-full w-[120%] md:-right-24">
            {[0, 14].map((o) => <div key={o} style={{ top: `${30 + o / 3}%` }}
              className="absolute right-0 h-[7px] w-[75%] origin-right -rotate-[28deg] rounded-full bg-gradient-to-r from-[#c86d1e] to-[#ffa646] shadow" />)}
          </motion.div>
          {/* ardoise */}
          <motion.div initial={{ opacity: 0, x: 260, rotate: -30 }} animate={{ opacity: 1, x: 0, rotate: -18 }} transition={{ duration: 1.1, delay: 0.25, ease }}
            className="absolute bottom-6 right-[-12%] h-[55%] w-[95%] overflow-hidden rounded-2xl bg-[#111] shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)] md:right-[-20%]">
            <img src="/img/tempura.jpg" alt="Sushi and chopsticks on a black slate" className="h-full w-full object-cover opacity-95" />
          </motion.div>
          {/* badge rotatif */}
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.9, ease }}
            className="absolute left-0 top-1/2 grid h-24 w-24 -translate-y-1/2 place-items-center md:-left-6">
            <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0">
              <defs><path id="c" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <text fontSize="10.5" letterSpacing="1.6" className="fill-ink font-sans"><textPath href="#c">HOT & FRESH • ORDER NOW • </textPath></text>
            </svg>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white"><Plus size={16} /></span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="overflow-hidden bg-[linear-gradient(#fff8f3,#fff)] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 lg:px-8">
        <motion.div {...fromSide(-120)} className="relative mx-auto aspect-square w-full max-w-md">
          <img src="/img/burger.jpg" alt="Burger" className="absolute left-0 top-[18%] h-[62%] w-[62%] rounded-full object-cover shadow-card" />
          <img src="/img/pizza.jpg" alt="Pizza" className="absolute right-0 top-[30%] h-[55%] w-[55%] rounded-full object-cover shadow-card" />
          <img src="/img/wrap.jpg" alt="Wrap" className="absolute right-[14%] top-0 h-[38%] w-[38%] rounded-full border-4 border-white object-cover shadow-card" />
          {[...Array(7)].map((_, i) => <motion.span key={i} animate={{ y: [0, -8, 0] }} transition={{ duration: 3 + i * 0.3, repeat: Infinity }}
            className="absolute h-2 w-2 rounded-full" style={{ background: i % 2 ? '#3fa34d' : '#e2412c', left: `${10 + i * 12}%`, top: `${8 + (i * 37) % 85}%` }} />)}
        </motion.div>
        <motion.div {...fromSide(120, 0.1)}>
          <p className="font-script text-2xl text-brand">About us</p>
          <h2 className="mt-2 font-serif text-4xl leading-tight lg:text-5xl">We Provide <Flower2 className="inline text-brand" size={30} /><br />Healthy food</h2>
          <p className="mt-5 max-w-md text-[13px] leading-relaxed text-muted">
            Our chefs pick fresh, local ingredients every morning. From Japanese classics to comfort food, every plate is balanced, generous and made to share.
          </p>
          <a href="#menu" className="group mt-8 inline-flex items-center gap-3 text-sm font-medium">
            <span className="relative grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand/40 motion-reduce:hidden" />
              <Play size={16} fill="white" />
            </span>
            <span className="group-hover:text-brand">Explore More</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function DishCard({ d, i, onAdd }) {
  return (
    <motion.article variants={fu} {...hoverLift}
      className="group rounded-3xl bg-white p-6 shadow-card transition-shadow hover:shadow-[0_25px_50px_-15px_rgba(255,106,26,.35)]">
      <div className="mx-auto -mt-2 h-40 w-40 overflow-hidden rounded-full shadow-card">
        <motion.img src={d.img} alt={d.name} whileHover={{ rotate: 12, scale: 1.08 }} transition={{ type: 'spring', stiffness: 200 }}
          className="h-full w-full object-cover" />
      </div>
      <h3 className="mt-6 font-sans text-base font-semibold">{d.name}</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted">{d.desc}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="font-semibold text-brand">{fmt(d.price)}</span>
        <motion.button whileTap={{ scale: 0.85 }} onClick={() => onAdd(d)} aria-label={`Add ${d.name}`}
          className="grid h-9 w-9 place-items-center rounded-full bg-cream text-ink transition group-hover:bg-brand group-hover:text-white">
          <ShoppingCart size={15} />
        </motion.button>
      </div>
    </motion.article>
  );
}

function Popular({ onAdd }) {
  return (
    <section id="popular" className="py-16 md:py-20">
      <motion.h2 {...fadeUp()} className="text-center font-serif text-4xl">Popular <Flower2 className="inline text-brand" size={26} /> Dishes</motion.h2>
      <motion.div {...inViewGroup(0.15)} className="mx-auto mt-14 grid max-w-5xl gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {dishes.map((d, i) => <DishCard key={d.id} d={d} i={i} onAdd={onAdd} />)}
      </motion.div>
    </section>
  );
}

function MenuOrder({ onAdd }) {
  const cats = ['All', ...new Set(menu.map((m) => m.cat))];
  const [cat, setCat] = useState('All');
  const list = menu.filter((m) => cat === 'All' || m.cat === cat);
  return (
    <section id="menu" className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <motion.div {...fadeUp()} className="text-center">
          <p className="font-script text-2xl text-brand">Our Menu</p>
          <h2 className="font-serif text-4xl">Order Your Favourite</h2>
        </motion.div>
        <div id="order" className="mt-8 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className="relative rounded-full px-5 py-2 text-sm">
              {cat === c && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-brand" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
              <span className={`relative ${cat === c ? 'text-white' : 'text-ink'}`}>{c}</span>
            </button>
          ))}
        </div>
        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((m) => (
              <motion.div layout key={m.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card">
                <img src={m.img} alt={m.name} className="h-16 w-16 shrink-0 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold">{m.name}</h3>
                  <p className="text-sm font-semibold text-brand">{fmt(m.price)}</p>
                </div>
                <motion.button whileTap={{ scale: 0.85 }} onClick={() => onAdd(m)} aria-label={`Add ${m.name}`}
                  className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white"><Plus size={15} /></motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  const [i, setI] = useState(0);
  const n = gallery.length;
  const reduce = useReducedMotion();
  useEffect(() => { if (reduce) return; const t = setInterval(() => setI((v) => (v + 1) % n), 4000); return () => clearInterval(t); }, [n, reduce]);
  return (
    <section id="gallery" className="relative overflow-hidden bg-night py-16 text-white md:py-24">
      <img src={gallery[i]} alt="" aria-hidden className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl transition-all duration-700" />
      <div className="relative">
        <motion.div {...fadeUp()} className="text-center">
          <p className="font-script text-2xl text-brand">Gallery</p>
          <h2 className="font-serif text-4xl">A Taste of Sakura</h2>
        </motion.div>
        <div className="relative mx-auto mt-12 h-[300px] max-w-5xl sm:h-[380px]">
          {gallery.map((src, k) => {
            let off = k - i; if (off > n / 2) off -= n; if (off < -n / 2) off += n;
            const abs = Math.abs(off);
            return (
              <motion.button key={src} onClick={() => setI(k)} aria-label={`Photo ${k + 1}`}
                animate={{ x: `${off * 55}%`, scale: 1 - abs * 0.15, rotateY: off * -18, rotate: off * 4, opacity: abs > 2 ? 0 : 1 - abs * 0.25, zIndex: 10 - abs }}
                transition={{ duration: 0.6, ease }} style={{ perspective: 1000 }}
                className="absolute left-1/2 top-0 -ml-[110px] h-full w-[220px] overflow-hidden rounded-3xl border border-white/30 bg-white/10 p-2 shadow-2xl backdrop-blur-md sm:-ml-[140px] sm:w-[280px]">
                <img src={src} alt="" className="h-full w-full rounded-2xl object-cover" />
              </motion.button>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button onClick={() => setI((i - 1 + n) % n)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur hover:bg-brand"><ChevronLeft size={18} /></button>
          <button onClick={() => setI((i + 1) % n)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur hover:bg-brand"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [ok, setOk] = useState(false);
  return (
    <section id="newsletter" className="px-5 py-16 md:py-24">
      <motion.div {...fadeUp()} className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[32px] bg-night px-6 pb-10 pt-6 shadow-[0_30px_60px_-25px_rgba(0,0,0,.6)] md:flex-row md:rounded-full md:py-10 md:pl-0 md:pr-14">
        <motion.img src="/img/sushi.jpg" alt="Salmon sushi" {...fromSide(-80, 0.2)}
          className="-mt-14 h-44 w-44 rounded-full border-4 border-night object-cover shadow-2xl md:-my-14 md:ml-6 md:h-56 md:w-56" />
        <div className="w-full flex-1 text-center md:text-left">
          <p className="font-script text-2xl text-brand">Newsletter</p>
          <h2 className="font-serif text-3xl leading-tight text-white md:text-4xl">Subscribe for<br />Offer Updates</h2>
          <form onSubmit={(e) => { e.preventDefault(); setOk(true); }} className="mt-6 flex w-full max-w-md overflow-hidden rounded-full bg-white/90 p-1 md:mx-0">
            <input type="email" required placeholder="Enter your email" className="min-w-0 flex-1 bg-transparent px-4 text-sm text-ink outline-none" />
            <button className="inline-flex items-center gap-1 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white">{ok ? 'Thanks!' : 'Subscribe'} <ArrowRight size={14} /></button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  const cols = [['Main Menu', ['Home', 'Offers', 'Menus', 'Order']], ['Information', ['Contact', 'Order & Returns', 'Videos', 'Reservation']]];
  return (
    <footer className="border-t border-ink/5 bg-white">
      <motion.div {...fadeUp()} className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-[0.12em]">SAKURA</p>
          <p className="text-[8px] uppercase tracking-[0.35em] text-brand">Delicious & Fast Food</p>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted">Fresh flavours, fast service and a warm table waiting for you.</p>
        </div>
        {cols.map(([t, ls]) => (
          <div key={t}><h4 className="text-sm font-semibold">{t}</h4>
            <ul className="mt-4 space-y-3 text-xs text-muted">{ls.map((l) => <li key={l}><a href="#top" className="hover:text-brand">{l}</a></li>)}</ul></div>
        ))}
        <div><h4 className="text-sm font-semibold">Address</h4>
          <ul className="mt-4 space-y-3 text-xs text-muted">
            <li className="flex gap-2"><MapPin size={14} className="text-brand" /> 12 Sakura Street, Lomé</li>
            <li className="flex gap-2"><Phone size={14} className="text-brand" /> +228 90 00 00 00</li>
            <li className="flex gap-2"><Clock size={14} className="text-brand" /> 11:00 – 23:00</li>
          </ul></div>
      </motion.div>
      <div className="border-t border-ink/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-5 sm:flex-row sm:justify-between lg:px-8">
          <div className="flex gap-2">{[Facebook, Instagram, Twitter, Youtube].map((I, k) => (
            <a key={k} href="#top" aria-label="Social" className={`grid h-8 w-8 place-items-center rounded-full transition hover:bg-brand hover:text-white ${k === 0 ? 'bg-brand text-white' : 'bg-cream'}`}><I size={14} /></a>))}</div>
          <p className="text-[11px] text-muted">© 2026 SAKURA. All rights reserved.</p>
          <div className="flex gap-2 text-[10px] font-semibold text-muted">{['VISA', 'PayPal', 'MC'].map((p) => <span key={p} className="rounded border px-2 py-1">{p}</span>)}</div>
        </div>
      </div>
    </footer>
  );
}

function Cart({ open, items, onClose, setQty }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <AnimatePresence>{open && (<>
      <motion.div className="fixed inset-0 z-40 bg-black/40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
      <motion.aside initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.4, ease }}
        className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between"><h3 className="font-serif text-2xl">Your Order</h3><button onClick={onClose} aria-label="Close"><X /></button></div>
        <div className="mt-6 flex-1 space-y-4 overflow-auto">
          {items.length === 0 && <p className="text-sm text-muted">Your cart is empty.</p>}
          {items.map((it) => (
            <div key={it.id} className="flex items-center gap-3">
              <img src={it.img} alt="" className="h-14 w-14 rounded-full object-cover" />
              <div className="flex-1"><p className="text-sm font-semibold">{it.name}</p><p className="text-xs text-brand">{fmt(it.price)}</p></div>
              <div className="flex items-center gap-2">
                <button onClick={() => setQty(it.id, it.qty - 1)} className="grid h-7 w-7 place-items-center rounded-full bg-cream" aria-label="Less"><Minus size={12} /></button>
                <span className="w-4 text-center text-sm">{it.qty}</span>
                <button onClick={() => setQty(it.id, it.qty + 1)} className="grid h-7 w-7 place-items-center rounded-full bg-cream" aria-label="More"><Plus size={12} /></button>
              </div>
            </div>))}
        </div>
        <div className="border-t pt-4"><div className="flex justify-between font-semibold"><span>Total</span><span className="text-brand">{fmt(total)}</span></div>
          <button disabled={!items.length} className="mt-4 w-full rounded-full bg-brand py-3 text-sm font-medium text-white disabled:opacity-40">Checkout</button></div>
      </motion.aside></>)}
    </AnimatePresence>
  );
}

export default function Site() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const add = (d) => setItems((xs) => xs.find((x) => x.id === d.id) ? xs.map((x) => x.id === d.id ? { ...x, qty: x.qty + 1 } : x) : [...xs, { ...d, qty: 1 }]);
  const setQty = (id, q) => setItems((xs) => q <= 0 ? xs.filter((x) => x.id !== id) : xs.map((x) => x.id === id ? { ...x, qty: q } : x));
  const count = items.reduce((s, x) => s + x.qty, 0);
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_80%_45%,#ffe0cf_0%,#fff8f3_40%,#fffaf6_70%)]">
        <div className="absolute inset-x-0 top-0 z-30"><Navbar count={count} onCart={() => setOpen(true)} /></div>
        <div className="pt-20"><Hero /></div>
      </div>
      <About />
      <Popular onAdd={add} />
      <MenuOrder onAdd={add} />
      <Gallery />
      <Newsletter />
      <Footer />
      <Cart open={open} items={items} onClose={() => setOpen(false)} setQty={setQty} />
    </MotionConfig>
  );
}
