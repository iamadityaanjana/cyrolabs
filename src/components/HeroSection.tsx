'use client'

import { motion } from 'framer-motion';
import Navigation from './Navigation';

interface HeroSectionProps {
  loading: boolean;
}

export default function HeroSection({ loading }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div
      className={`relative min-h-screen w-full flex flex-col overflow-hidden bg-black ${
        loading ? 'hidden' : 'flex'
      }`}
    >
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.14) 0%, transparent 65%)' }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-[-10%] left-[-8%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,140,66,0.08) 0%, transparent 65%)' }}
        />
        {/* Fine grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
      </div>

      <Navigation />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 pt-28 pb-20 relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-10"
          style={{ borderColor: 'rgba(255,108,2,0.25)', background: 'rgba(255,108,2,0.07)' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#FF6C02', boxShadow: '0 0 6px #FF6C02' }}
          />
          <span
            className="text-[11px] font-semibold tracking-[0.2em] uppercase"
            style={{ color: '#FF6C02' }}
          >
            Venture Studio & Ecosystem Builder
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl leading-[1.1] tracking-[-0.02em]"
          style={{
            fontSize: 'clamp(2.1rem, 5vw, 3.75rem)',
            fontWeight: 700,
            color: '#fff',
          }}
        >
          Building products,{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #FF6C02, #FF9A4D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            communities,
          </span>{' '}
          and startup ecosystems.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.48 }}
          className="mt-5 max-w-xl leading-relaxed"
          style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', color: 'rgba(255,255,255,0.48)', fontWeight: 400 }}
        >
          Cyro Labs helps founders, startups, and ecosystems launch products,
          grow communities, and scale innovation.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.62 }}
          className="mt-9 flex flex-col sm:flex-row gap-3 items-center"
        >
          <button
            onClick={() => scrollTo('what-we-built')}
            className="px-7 py-3 rounded-lg font-semibold text-white text-sm transition-all hover:brightness-110 active:scale-95"
            style={{ background: '#FF6C02' }}
          >
            View Our Work
          </button>
          <button
            onClick={() => scrollTo('cta')}
            className="px-7 py-3 rounded-lg font-medium text-sm transition-all hover:border-white/30 active:scale-95"
            style={{
              color: 'rgba(255,255,255,0.65)',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            Partner With Us →
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16"
        >
          {[
            { value: '1200+', label: 'Applications' },
            { value: '50+', label: 'Builders' },
            { value: '10+', label: 'Programs' },
            { value: '5+', label: 'Partners' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-bold tracking-tight leading-none mb-1.5"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#FF6C02' }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.06em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
