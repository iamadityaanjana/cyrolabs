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
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)',
          }}
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)',
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <Navigation />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 pt-24 pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-8"
          style={{ borderColor: 'rgba(255,107,53,0.3)', background: 'rgba(255,107,53,0.08)' }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#FF6B35', animationDuration: '2s' }}
          />
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#FF6B35' }}>
            Venture Studio & Ecosystem Builder
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white font-bold leading-[1.05] tracking-tight max-w-5xl"
          style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
        >
          Building products,{' '}
          <span
            className="relative inline-block"
            style={{
              background: 'linear-gradient(135deg, #FF6B35, #FF8C42)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            communities,
          </span>{' '}
          and startup ecosystems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 text-white/60 max-w-2xl leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          Cyro Labs helps founders, startups, and ecosystems launch products, grow communities,
          and scale innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={() => scrollTo('what-we-built')}
            className="px-8 py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 active:scale-95 text-base"
            style={{ background: 'linear-gradient(135deg, #FF6B35, #FF8C42)' }}
          >
            View Our Work
          </button>
          <button
            onClick={() => scrollTo('cta')}
            className="px-8 py-3.5 rounded-xl font-semibold text-white/80 hover:text-white transition-all text-base border"
            style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)' }}
          >
            Partner With Us →
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-3xl"
        >
          {[
            { value: '1200+', label: 'Applications' },
            { value: '50+', label: 'Builders' },
            { value: '10+', label: 'Programs' },
            { value: '5+', label: 'Partners' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ color: '#FF6B35' }}
              >
                {stat.value}
              </div>
              <div className="text-white/50 text-sm mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
