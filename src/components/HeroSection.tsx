'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';

interface HeroSectionProps {
  loading: boolean;
}

const stats = [
  { target: 1200, suffix: '+', label: 'Applications' },
  { target: 50,   suffix: '+', label: 'Builders' },
  { target: 10,   suffix: '+', label: 'Programs' },
  { target: 5,    suffix: '+', label: 'Partners' },
];

function CountUp({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1200;
    const totalSteps = Math.round(duration / 16);
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [trigger, target]);

  return <>{count}{suffix}</>;
}

export default function HeroSection({ loading }: HeroSectionProps) {
  const [statsVisible, setStatsVisible] = useState(false);

  // Trigger count-up after the hero animates in (~0.45s delay + a bit more)
  useEffect(() => {
    if (loading) return;
    const t = setTimeout(() => setStatsVisible(true), 200);
    return () => clearTimeout(t);
  }, [loading]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  return (
    <div className={`relative min-h-screen w-full flex flex-col bg-black ${loading ? 'hidden' : 'flex'}`}>
      <Navigation />

      <main className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-28 pb-20 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: headline + CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#FF6C02]" />
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-white/35">
                Venture Studio & Ecosystem Builder
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold text-white tracking-[-0.03em] leading-[1.06]"
              style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
            >
              Building products,
              <br />
              communities, and
              <br />
              startup ecosystems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="mt-6 max-w-sm text-white/45 leading-relaxed text-sm"
            >
              We help founders, startups, and ecosystems launch products,
              grow communities, and scale innovation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.52 }}
              className="mt-8 flex items-center gap-5"
            >
              <button
                onClick={() => scrollTo('what-we-built')}
                className="px-5 py-2.5 bg-[#FF6C02] hover:bg-[#e06002] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              >
                View Our Work
              </button>
              <button
                onClick={() => scrollTo('cta')}
                className="text-sm text-white/40 hover:text-white transition-colors font-medium cursor-pointer"
              >
                Partner With Us →
              </button>
            </motion.div>
          </div>

          {/* Right: animated stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="grid grid-cols-2 gap-px"
            style={{ border: '1px solid rgba(255,255,255,0.07)', borderRadius: '1rem', overflow: 'hidden' }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col justify-between p-8 md:p-10"
                style={{
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : '#050505',
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                }}
              >
                <span
                  className="font-bold text-white tracking-tight leading-none tabular-nums"
                  style={{ fontSize: 'clamp(2.75rem, 5vw, 4rem)' }}
                >
                  <CountUp target={s.target} suffix={s.suffix} trigger={statsVisible} />
                </span>
                <span className="text-sm text-white/35 mt-3">{s.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </main>
    </div>
  );
}
